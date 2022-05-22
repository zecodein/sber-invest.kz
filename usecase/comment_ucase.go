package usecase

import (
	"context"

	"github.com/zecodein/sber-invest.kz/domain"
)

type commentUsecase struct {
	commentRepo domain.CommentRepository
}

func NewCommentUsecase(c domain.CommentRepository) domain.CommentUsecase {
	return &commentUsecase{
		commentRepo: c,
	}
}

func (c *commentUsecase) Create(ctx context.Context, comment *domain.Comment) (int64, error) {
	id, err := c.commentRepo.Create(ctx, comment)
	if err != nil {
		return 0, err
	}
	return id, nil
}
func (c *commentUsecase) Update(ctx context.Context, comment *domain.Comment) error {
	err := c.commentRepo.Update(ctx, comment)
	if err != nil {
		return err
	}
	return nil
}
func (c *commentUsecase) GetByArticleID(ctx context.Context, articleID int64) (*[]domain.CommentDTO, error) {
	comments, err := c.commentRepo.GetByArticleID(ctx, articleID)
	if err != nil {
		return nil, err
	}

	return comments, err
}
func (c *commentUsecase) Delete(ctx context.Context, id int64) error {
	err := c.commentRepo.Delete(ctx, id)
	if err != nil {
		return err
	}

	return nil
}
