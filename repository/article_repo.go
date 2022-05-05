package repository

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/domain"
)

type articleRepository struct {
	db *pgxpool.Pool
}

func NewArticleRepository(db *pgxpool.Pool) domain.ArticleUsecase {
	return &articleRepository{
		db: db,
	}
}

func (a *articleRepository) Create(ctx context.Context, article *domain.Article) (int64, error) {
	stmt := `INSERT INTO "article"(
		"user_id",
		"category_id",
		"title",
		"text",
		"created_at",
		"updated_at"
	) VALUES ($1, $2, $3, $4, $5, $6) RETURNING "article_id"`

	var id int64 = 0
	err := a.db.QueryRow(ctx, stmt, article.UserID, article.CategoryID, article.Title, article.Text, article.CreatedAt, article.UpdatedAt).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (a *articleRepository) Update(ctx context.Context, article *domain.Article) error {
	return nil
}

func (a *articleRepository) GetAll(ctx context.Context) (*[]domain.ArticleDTO, error) {
	category := make(map[int]string)
	category[1] = "Assetallocation"
	category[2] = "Налоги"
	category[3] = "Пошаговые Инструкции"
	category[4] = "Психология Инвестиций"
	category[5] = "Важные Новости"
	category[6] = "TuneUp"

	stmt := `SELECT a.*, u.first_name, u.last_name FROM "article" a JOIN "user" u ON a.user_id = u.user_id ORDER BY "created_at" DESC`
	article := domain.ArticleDTO{}
	articles := []domain.ArticleDTO{}

	rows, err := a.db.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&article.ID, &article.UserID, &article.CategoryID, &article.Title, &article.Text, &article.CreatedAt, &article.UpdatedAt, &article.FirstName, &article.LastName)
		if err != nil {
			return nil, err
		}
		article.CategoryName = category[int(article.ID)]
		articles = append(articles, article)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return &articles, nil
}

func (a *articleRepository) GetByCategory(ctx context.Context, categoryName string) (*[]domain.ArticleDTO, error) {
	category := make(map[int]string)
	category[1] = "Assetallocation"
	category[2] = "Налоги"
	category[3] = "Пошаговые Инструкции"
	category[4] = "Психология Инвестиций"
	category[5] = "Важные Новости"
	category[6] = "TuneUp"

	fmt.Println(categoryName, category)

	stmt := `SELECT a.*, u.first_name, u.last_name FROM "article" a JOIN "user" u ON a.user_id = u.user_id ORDER BY "created_at" DESC`
	article := domain.ArticleDTO{}
	articles := []domain.ArticleDTO{}

	rows, err := a.db.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&article.ID, &article.UserID, &article.CategoryID, &article.Title, &article.Text, &article.CreatedAt, &article.UpdatedAt, &article.FirstName, &article.LastName)
		if err != nil {
			return nil, err
		}

		if categoryName == category[int(article.CategoryID)] {
			article.CategoryName = category[int(article.CategoryID)]
			articles = append(articles, article)
		}
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	if articles == nil {
		return nil, fmt.Errorf("empty")
	}
	return &articles, nil
}

func (a *articleRepository) GetByID(ctx context.Context, id int64) (*domain.Article, error) {
	stmt := `SELECT * FROM "article" WHERE "article_id"=$1`
	article := domain.Article{}
	err := a.db.QueryRow(ctx, stmt, id).Scan(&article.ID, &article.UserID, &article.CategoryID, &article.Title, &article.Text, &article.CreatedAt, &article.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return &article, nil
}

func (a *articleRepository) GetAllCategory(ctx context.Context) ([]domain.Category, error) {
	stmt := `SELECT * FROM "category"`

	category := domain.Category{}
	categories := []domain.Category{}

	rows, err := a.db.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		err = rows.Scan(&category.ID, &category.Name, &category.Description)
		if err != nil {
			return nil, err
		}

		categories = append(categories, category)
	}

	return categories, nil
}

func (a *articleRepository) Delete(ctx context.Context, id int64) error {
	return nil
}
