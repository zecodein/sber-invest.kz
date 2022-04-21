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
	access, err := getAccess(ctx, a.db, article.UserID)
	if err != nil {
		return 0, err
	}

	if access == "basic_user" {
		return 0, fmt.Errorf("тебе сюда нельзя")
	}

	stmt := `INSERT INTO "article"(
		"user_id",
		"category_id",
		"title",
		"text",
		"created_at",
		"updated_at"
	) VALUES ($1, $2, $3, $4, $5, $6) RETURNING "article_id"`

	var id int64 = 0
	err = a.db.QueryRow(ctx, stmt, article.UserID, article.CategoryID, article.Title, article.Text, article.CreatedAt, article.UpdatedAt).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (a *articleRepository) Update(ctx context.Context, article *domain.Article) error {
	return nil
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
