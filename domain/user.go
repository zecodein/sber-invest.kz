package domain

import (
	"context"
	"time"
)

type User struct {
	ID              int64     `json:"id,omitempty"`
	Username        string    `json:"username,omitempty"`
	Email           string    `json:"email,omitempty"`
	Access          string    `json:"access,omitempty"`
	Password        string    `json:"password,omitempty"`
	ConfirmPassword string    `json:"confirm_password,omitempty"`
	CreatedAt       time.Time `json:"created_at,omitempty"`
	UpdatedAt       time.Time `json:"updated_at,omitempty"`
}

type UserUsecase interface {
	Create(ctx context.Context, user *User) (int64, error)
	Update(ctx context.Context, user *User) (int64, error)
	GetByID(ctx context.Context, id int64) (*User, error)
	GetByEmail(ctx context.Context, user *User) (int64, error)
	Delete(ctx context.Context, id int64) error
}

type UserRepository interface {
	Create(ctx context.Context, user *User) (int64, error)
	Update(ctx context.Context, user *User) (int64, error)
	GetByID(ctx context.Context, id int64) (*User, error)
	GetByEmail(ctx context.Context, email string) (*User, error)
	Delete(ctx context.Context, id int64) error
}
