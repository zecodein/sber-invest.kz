package repository

import (
	"context"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/domain"
)

type likeArticleRepository struct {
	db *pgxpool.Pool
}

func NewLikeArticleRepository(db *pgxpool.Pool) domain.LikeArticleRepository {
	return &likeArticleRepository{
		db: db,
	}
}

func (l *likeArticleRepository) Like(ctx context.Context, like *domain.LikeArticle) error {
	stmt := ``

	vote, err := l.getVote(ctx, like)
	if err != nil {
		stmt = `
		INSERT INTO "like_article"(
			"vote"
			"user_id",
			"article_id",
		) VALUES ($1, $2, $3)`
	}

	if vote == 1 {
		stmt = `DELETE FROM "like_article" WHERE "user_id" = $1, "article_id" = $2`
		_, err = l.db.Exec(ctx, stmt, like.UserID, like.UserID)
		if err != nil {
			return err
		}
		return nil
	} else if vote == -1 {
		stmt = `
		UPDATE "like_article"
		SET "vote" = $1
		WHERE "user_id" = $2, "article_id" = $3`
	}

	_, err = l.db.Exec(ctx, stmt, 1, like.UserID, like.UserID)
	if err != nil {
		return err
	}

	return nil
}

func (l *likeArticleRepository) Dislike(ctx context.Context, like *domain.LikeArticle) error {
	stmt := ``

	vote, err := l.getVote(ctx, like)
	if err != nil {
		stmt = `
		INSERT INTO "like_article"(
			"vote"
			"user_id",
			"article_id",
		) VALUES ($1, $2, $3)`
	}

	if vote == -1 {
		stmt = `DELETE FROM "like_article" WHERE "user_id" = $1, "article_id" = $2`
		_, err = l.db.Exec(ctx, stmt, like.UserID, like.UserID)
		if err != nil {
			return err
		}
		return nil
	} else if vote == 1 {
		stmt = `
		UPDATE "like_article"
		SET "vote" = $1
		WHERE "user_id" = $2, "article_id" = $3`
	}

	_, err = l.db.Exec(ctx, stmt, -1, like.UserID, like.UserID)
	if err != nil {
		return err
	}

	return nil
}

func (l *likeArticleRepository) getVote(ctx context.Context, like *domain.LikeArticle) (int, error) {
	stmt := `SELECT "vote" FROM "like_article" WHERE "user_id" = $1, "article_id" = $2`
	var vote int = 0
	row := l.db.QueryRow(ctx, stmt, like.UserID, like.ArticleID)
	err := row.Scan(&vote)
	if err != nil {
		return 0, err
	}

	return vote, nil
}
