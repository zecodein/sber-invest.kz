package repository

import (
	"context"
	"log"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/domain"
)

type userRepository struct {
	db *pgxpool.Pool
}

func NewUserRepository(db *pgxpool.Pool) domain.UserRepository {
	return &userRepository{
		db: db,
	}
}

func (u *userRepository) Create(ctx context.Context, user *domain.User) (int64, error) {
	statement := `INSERT INTO "user"(
		"first_name",
		"last_name",
		"email",
		"password",
		"created_at",
		"updated_at"
	) VALUES ($1, $2, $3, $4, $5, $6) RETURNING "user_id"`
	var id int64 = 0
	err := u.db.QueryRow(ctx, statement, user.FirstName, user.LastName, user.Email, user.Password, user.CreatedAt, user.UpdatedAt).Scan(&id)
	if err != nil {
		log.Println(err)
		return 0, err
	}
	return id, nil
}

func (u *userRepository) Update(ctx context.Context, user *domain.User) (int64, error) {
	return 0, nil
}

func (u *userRepository) GetByID(ctx context.Context, id int64) (*domain.User, error) {
	return nil, nil
}

func (u *userRepository) GetByEmail(ctx context.Context, email string) (*domain.User, error) {
	return nil, nil
}

func (u *userRepository) Delete(ctx context.Context, id int64) error {
	return nil
}
