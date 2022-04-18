package usecase

import (
	"context"
	"strings"
	"time"

	"github.com/zecodein/sber-invest.kz/domain"
)

type articleUsecase struct {
	articleRepo domain.ArticleRepository
}

func NewArticleUsecase(u domain.ArticleRepository) domain.ArticleUsecase {
	return &articleUsecase{
		articleRepo: u,
	}
}

func (a *articleUsecase) Create(ctx context.Context, article *domain.Article) (int64, error) {
	if strings.TrimSpace(article.Text) == "" || strings.TrimSpace(article.Title) == "" {
		return 0, domain.ErrNotValid
	}

	if !(article.CategoryID >= 1 && article.CategoryID <= 6) {
		return 0, domain.ErrNotValid
	}

	article.CreatedAt = time.Now()
	article.UpdatedAt = time.Now()

	id, err := a.articleRepo.Create(ctx, article)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (a *articleUsecase) Update(ctx context.Context, article *domain.Article) error {
	return nil
}

func (a *articleUsecase) GetByID(ctx context.Context, id int64) (*domain.Article, error) {
	return nil, nil
}

func (a *articleUsecase) GetAllCategory(ctx context.Context) ([]domain.Category, error) {
	categories, err := a.articleRepo.GetAllCategory(ctx)
	if err != nil {
		return nil, err
	}
	return categories, nil
}

func (a *articleUsecase) Delete(ctx context.Context, id int64) error {
	return nil
}
