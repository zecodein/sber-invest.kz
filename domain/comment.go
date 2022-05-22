package domain

import (
	"context"
	"time"
)

type Comment struct {
	CommentID  int64     `json:"comment_id,omitempty"`
	UserID     int64     `json:"user_id,omitempty"`
	ArticleID  int64     `json:"article_id,omitempty"`
	CategoryID int64     `json:"category_id,omitempty"`
	Text       string    `json:"text,omitempty"`
	CreatedAt  time.Time `json:"created_at,omitempty"`
	UpdatedAt  time.Time `json:"updated_at,omitempty"`
}

type CommentDTO struct {
	CommentID  int64     `json:"comment_id,omitempty"`
	UserID     int64     `json:"user_id,omitempty"`
	ArticleID  int64     `json:"article_id,omitempty"`
	CategoryID int64     `json:"category_id,omitempty"`
	Text       string    `json:"text,omitempty"`
	CreatedAt  time.Time `json:"created_at,omitempty"`
	UpdatedAt  time.Time `json:"updated_at,omitempty"`
	FirstName  string    `json:"first_name,omitempty"`
	LastName   string    `json:"last_name,omitempty"`
}

type CommentUsecase interface {
	Create(ctx context.Context, comment *Comment) (int64, error)
	Update(ctx context.Context, comment *Comment) error
	GetByArticleID(ctx context.Context, articleID int64) (*[]CommentDTO, error)
	Delete(ctx context.Context, id int64) error
}

type CommentRepository interface {
	Create(ctx context.Context, comment *Comment) (int64, error)
	Update(ctx context.Context, comment *Comment) error
	GetByArticleID(ctx context.Context, articleID int64) (*[]CommentDTO, error)
	Delete(ctx context.Context, id int64) error
}
