package repository

import (
	"context"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/domain"
)

type commentRepository struct {
	db *pgxpool.Pool
}

func NewCommentRepository(db *pgxpool.Pool) domain.CommentRepository {
	return &commentRepository{
		db: db,
	}
}

func (c *commentRepository) Create(ctx context.Context, comment *domain.Comment) (int64, error) {
	stmt := `
	INSERT INTO "comment"(
		"user_id",
		"article_id",
		"category_id",
		"text",
		"created_at",
		"updated_at"
	) VALUES ($1, $2, $3, $4, $5, $6) RETURNING "article_id"
	`

	var id int64 = 0

	err := c.db.QueryRow(ctx, stmt, comment.UserID, comment.ArticleID, comment.CategoryID, comment.Text, comment.CreatedAt, comment.UpdatedAt).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil
}
func (c *commentRepository) Update(ctx context.Context, comment *domain.Comment) error {
	stmt := `
	UPDATE "comment"
	SET "text" = $1
	WHERE "comment_id" = $2
	`

	_, err := c.db.Exec(ctx, stmt, comment.Text, comment.CommentID)
	if err != nil {
		return err
	}

	return nil
}
func (c *commentRepository) GetByArticleID(ctx context.Context, articleID int64) (*[]domain.CommentDTO, error) {
	stmt := `SELECT c.*, u.first_name, u.last_name FROM "comment" c JOIN "user" u ON c.user_id = u.user_id ORDER BY "created_at" DESC`

	rows, err := c.db.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	comments := []domain.CommentDTO{}
	comment := domain.CommentDTO{}

	for rows.Next() {
		err = rows.Scan(&comment.CommentID, &comment.UserID, &comment.ArticleID, &comment.CategoryID, &comment.Text, &comment.CreatedAt, &comment.UpdatedAt, &comment.FirstName, &comment.LastName)
		if err != nil {
			return nil, err
		}
		comments = append(comments, comment)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return &comments, nil
}
func (c *commentRepository) Delete(ctx context.Context, id int64) error {
	stmt := `DELETE FROM "comment" WHERE "comment_id" = $1`

	_, err := c.db.Exec(ctx, stmt, id)
	if err != nil {
		return err
	}

	return nil
}
