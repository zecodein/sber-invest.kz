package usecase

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/zecodein/sber-invest.kz/domain"
	"golang.org/x/crypto/bcrypt"
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

	hash, err := hashPassword([]byte(user.Password))
	if err != nil {
		return 0, err
	}

	user.Password = string(hash)
	user.CreatedAt = time.Now()
	user.UpdatedAt = time.Now()

	return u.userRepo.Create(ctx, user)
}

func (u *userUsecase) UpdatePassword(ctx context.Context, old string, new string, id int64) error {
	_, err := u.userRepo.GetByID(ctx, id)
	if err != nil {
		return err
	}

	if comparePassword([]byte(old), []byte(new)) == nil {
		return fmt.Errorf("повторяется сукаааа")
	}

	if strings.TrimSpace(new) == "" {
		return domain.ErrNotValid
	}

	hash, err := hashPassword([]byte(new))
	if err != nil {
		return err
	}

	err = u.userRepo.UpdatePassword(ctx, hash, id)
	if err != nil {
		return err
	}

	return nil
}

func (u *userUsecase) GetByID(ctx context.Context, id int64) (*domain.User, error) {
	user, err := u.userRepo.GetByID(ctx, id)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (u *userUsecase) GetByEmail(ctx context.Context, user *domain.User) (int64, error) {
	usr, err := u.userRepo.GetByEmail(ctx, user.Email)
	if err != nil {
		return 0, err
	}

	// err = bcrypt.CompareHashAndPassword([]byte(usr.Password), []byte(user.Password))
	err = comparePassword([]byte(usr.Password), []byte(user.Password))
	if err != nil {
		return 0, domain.ErrWrongPassword
	}

	return usr.ID, nil
}

func (u *userUsecase) GetAccess(ctx context.Context, userID int64) (string, error) {
	return u.userRepo.GetAccess(ctx, userID)
}

func (u *userUsecase) Delete(ctx context.Context, id int64) error {
	return nil
}

func hashPassword(password []byte) (string, error) {
	hash, err := bcrypt.GenerateFromPassword(password, 14)
	if err != nil {
		return "", err
	}

	return string(hash), nil
}

func comparePassword(hash, password []byte) error {
	err := bcrypt.CompareHashAndPassword(hash, password)
	if err != nil {
		return err
	}
	return nil
}
