package repository

import (
	"context"
	"time"

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
	stmt := `
	INSERT INTO "user"(
		"first_name",
		"last_name",
		"email",
		"password",
		"created_at",
		"updated_at"
	) VALUES ($1, $2, $3, $4, $5, $6) RETURNING "user_id"`

	var id int64 = 0

	err := u.db.QueryRow(ctx, stmt, user.FirstName, user.LastName, user.Email, user.Password, user.CreatedAt, user.UpdatedAt).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (u *userRepository) UpdatePassword(ctx context.Context, password string, id int64) error {
	stmt := `UPDATE "user" SET "password" = $1, "updated_at" = $2 WHERE "user_id" = $3`

	_, err := u.db.Exec(ctx, stmt, password, time.Now(), id)
	if err != nil {
		return err
	}

	return nil
}

func (u *userRepository) GetByID(ctx context.Context, id int64) (*domain.User, error) {
	stmt := `SELECT * FROM "user" WHERE "user_id"=$1`
	user := domain.User{}
	err := u.db.QueryRow(ctx, stmt, id).Scan(&user.ID, &user.FirstName, &user.LastName, &user.Email, &user.Access, &user.Password, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (u *userRepository) GetByEmail(ctx context.Context, email string) (*domain.User, error) {
	stmt := `SELECT * FROM "user" WHERE "email"=$1`
	user := domain.User{}
	err := u.db.QueryRow(ctx, stmt, email).Scan(&user.ID, &user.FirstName, &user.LastName, &user.Email, &user.Access, &user.Password, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (u *userRepository) Delete(ctx context.Context, id int64) error {
	stmt := `DELETE FROM "user" WHERE "id"=$1`

	_, err := u.db.Exec(ctx, stmt, id)
	if err != nil {
		return err
	}

	return nil
}

func (u *userRepository) GetAccess(ctx context.Context, userID int64) (string, error) {
	var access string
	stmt := `SELECT "access" FROM "user" WHERE "user_id"=$1`
	row := u.db.QueryRow(ctx, stmt, userID)

	err := row.Scan(&access)
	if err != nil {
		return "", err
	}

	return access, nil
}
