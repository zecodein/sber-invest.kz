package usecase

import (
	"context"
	"strings"
	"time"

	"github.com/zecodein/sber-invest.kz/domain"
)

type userUsecase struct {
	userRepo domain.UserRepository
}

func NewUserUsecase(u domain.UserRepository) domain.UserUsecase {
	return &userUsecase{
		userRepo: u,
	}
}

func (u *userUsecase) Create(ctx context.Context, user *domain.User) (int64, error) {
	if strings.TrimSpace(user.FirstName) == "" || strings.TrimSpace(user.LastName) == "" || strings.TrimSpace(user.Email) == "" || strings.TrimSpace(user.Password) == "" {
		return 0, domain.ErrNotValid
	}
	if user.Password != user.ConfirmPassword {
		return 0, domain.ErrNotValid
	}
	user.CreatedAt = time.Now().UTC()
	user.UpdatedAt = time.Now().UTC()
	return u.userRepo.Create(ctx, user)
}

func (u *userUsecase) Update(ctx context.Context, user *domain.User) (int64, error) {
	return 0, nil
}

func (u *userUsecase) GetByID(ctx context.Context, id int64) (*domain.User, error) {
	return nil, nil
}

func (u *userUsecase) GetByEmail(ctx context.Context, user *domain.User) (int64, error) {
	return 0, nil
}

func (u *userUsecase) Delete(ctx context.Context, id int64) error {
	return nil
}
