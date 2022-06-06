package repository

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/domain"
)

type likeCommentRepository struct {
	db *pgxpool.Pool
}

func NewLikeCommentRepository(db *pgxpool.Pool) domain.LikeCommentRepository {
	return &likeCommentRepository{
		db: db,
	}
}

func (l *likeCommentRepository) Like(ctx context.Context, like *domain.LikeComment) error {
	stmt := ``

	vote, err := l.getVote(ctx, like)
	if err != nil {
		fmt.Println("create like")
		stmt = `
		INSERT INTO "like_comment"(
			"vote",
			"user_id",
			"comment_id"
		) VALUES ($1, $2, $3)`
	}

	if vote == 1 {
		fmt.Println("delete like")
		stmt = `DELETE FROM "like_comment" WHERE "user_id" = $1 AND "comment_id" = $2`
		_, err = l.db.Exec(ctx, stmt, like.UserID, like.CommentID)
		if err != nil {
			return err
		}
		return nil
	} else if vote == -1 {
		fmt.Println("update like")
		stmt = `
		UPDATE "like_comment"
		SET "vote" = $1
		WHERE "user_id" = $2 AND "comment_id" = $3`
	}

	_, err = l.db.Exec(ctx, stmt, 1, like.UserID, like.CommentID)
	if err != nil {
		return err
	}

	return nil
}

func (l *likeCommentRepository) Dislike(ctx context.Context, like *domain.LikeComment) error {
	stmt := ``

	vote, err := l.getVote(ctx, like)
	if err != nil {
		fmt.Println("create like")
		stmt = `
		INSERT INTO "like_comment"(
			"vote",
			"user_id",
			"comment_id"
		) VALUES ($1, $2, $3)`
	}

	if vote == -1 {
		fmt.Println("delete like")
		stmt = `DELETE FROM "like_comment" WHERE "user_id" = $1 AND "comment_id" = $2`
		_, err = l.db.Exec(ctx, stmt, like.UserID, like.CommentID)
		if err != nil {
			return err
		}
		return nil
	} else if vote == 1 {
		fmt.Println("update like")
		stmt = `
		UPDATE "like_comment"
		SET "vote" = $1
		WHERE "user_id" = $2 AND "comment_id" = $3`
	}

	_, err = l.db.Exec(ctx, stmt, -1, like.UserID, like.CommentID)
	if err != nil {
		return err
	}

	return nil
}

func (l *likeCommentRepository) getVote(ctx context.Context, like *domain.LikeComment) (int, error) {
	stmt := `SELECT "vote" FROM "like_comment" WHERE "user_id"=$1 AND "comment_id"=$2`
	var vote int = 0
	row := l.db.QueryRow(ctx, stmt, like.UserID, like.CommentID)
	err := row.Scan(&vote)
	if err != nil {
		return 0, err
	}

	return vote, nil
}
