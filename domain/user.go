package domain

import (
	"context"
	"time"
)

type User struct {
	ID              int64     `json:"id,omitempty"`
	FirstName       string    `json:"first_name,omitempty"`
	LastName        string    `json:"last_name,omitempty"`
	Email           string    `json:"email,omitempty"`
	Access          string    `json:"access,omitempty"`
	Password        string    `json:"password,omitempty"`
	ConfirmPassword string    `json:"confirm_password,omitempty"`
	CreatedAt       time.Time `json:"created_at,omitempty"`
	UpdatedAt       time.Time `json:"updated_at,omitempty"`
}

type UserUsecase interface {
	Create(ctx context.Context, user *User) (int64, error)
	UpdatePassword(ctx context.Context, old string, new string, id int64) error
	GetByID(ctx context.Context, id int64) (*User, error)
	GetAll(ctx context.Context) (*[]User, error)
	GetByEmail(ctx context.Context, user *User) (int64, error)
	GetAccess(ctx context.Context, userID int64) (string, error)
	ChangeAccess(ctx context.Context, email string, access string) error
	Delete(ctx context.Context, id int64) error
}

type UserRepository interface {
	Create(ctx context.Context, user *User) (int64, error)
	UpdatePassword(ctx context.Context, password string, id int64) error
	GetByID(ctx context.Context, id int64) (*User, error)
	GetAll(ctx context.Context) (*[]User, error)
	GetByEmail(ctx context.Context, email string) (*User, error)
	GetAccess(ctx context.Context, userID int64) (string, error)
	ChangeAccess(ctx context.Context, email string, access string) error
	Delete(ctx context.Context, id int64) error
}