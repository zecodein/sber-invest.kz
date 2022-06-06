package usecase

import (
	"context"

	"github.com/zecodein/sber-invest.kz/domain"
)

type likeArticleUsecase struct {
	likeRepo domain.LikeArticleRepository
}

func NewLikeArticleUsecase(l domain.LikeArticleRepository) domain.LikeArticleUsecase {
	return &likeArticleUsecase{
		likeRepo: l,
	}
}

func (l *likeArticleUsecase) Like(ctx context.Context, like *domain.LikeArticle) error {
	err := l.likeRepo.Like(ctx, like)
	if err != nil {
		return err
	}
	return nil
}

func (l *likeArticleUsecase) Dislike(ctx context.Context, like *domain.LikeArticle) error {
	err := l.likeRepo.Dislike(ctx, like)
	if err != nil {
		return err
	}
	return nil
}
