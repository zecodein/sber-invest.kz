package usecase

import (
	"context"

	"github.com/zecodein/sber-invest.kz/domain"
)

type likeCommentUsecase struct {
	likeRepo domain.LikeCommentRepository
}

func NewLikeCommentUsecase(l domain.LikeCommentRepository) domain.LikeCommentUsecase {
	return &likeCommentUsecase{
		likeRepo: l,
	}
}

func (l *likeCommentUsecase) Like(ctx context.Context, like *domain.LikeComment) error {
	err := l.likeRepo.Like(ctx, like)
	if err != nil {
		return err
	}
	return nil
}

func (l *likeCommentUsecase) Dislike(ctx context.Context, like *domain.LikeComment) error {
	err := l.likeRepo.Dislike(ctx, like)
	if err != nil {
		return err
	}
	return nil
}
