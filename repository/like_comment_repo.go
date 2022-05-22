package repository

import (
	"context"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/domain"
)

type likeCommentRepository struct {
	db *pgxpool.Pool
}

func NewLikeCommentRepository(db *pgxpool.Pool) domain.LikeArticleRepository {
	return &likeArticleRepository{
		db: db,
	}
}

func (l *likeCommentRepository) Like(ctx context.Context) error {
	return nil
}

func (l *likeCommentRepository) Dislike(ctx context.Context) error {
	return nil
}
