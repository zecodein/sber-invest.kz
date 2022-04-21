package domain

import (
	"context"
	"time"
)

type Article struct {
	ID           int64     `json:"id,omitempty"`
	UserID       int64     `json:"user_id,omitempty"`
	CategoryID   int64     `json:"category_id,omitempty"`
	CategoryName string    `json:"category_name,omitempty"`
	Title        string    `json:"title,omitempty"`
	Text         string    `json:"text,omitempty"`
	CreatedAt    time.Time `json:"created_at,omitempty"`
	UpdatedAt    time.Time `json:"updated_at,omitempty"`
}

type Category struct {
	ID          int64  `json:"id,omitempty"`
	Name        string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`
}

type ArticleUsecase interface {
	Create(ctx context.Context, article *Article) (int64, error)
	Update(ctx context.Context, article *Article) error
	GetByID(ctx context.Context, id int64) (*Article, error)
	GetAllCategory(ctx context.Context) ([]Category, error)
	// TODO GetByCategory()
	Delete(ctx context.Context, id int64) error
}

type ArticleRepository interface {
	Create(ctx context.Context, article *Article) (int64, error)
	Update(ctx context.Context, article *Article) error
	GetByID(ctx context.Context, id int64) (*Article, error)
	GetAllCategory(ctx context.Context) ([]Category, error)
	// TODO GetByCategory()
	Delete(ctx context.Context, id int64) error
}
