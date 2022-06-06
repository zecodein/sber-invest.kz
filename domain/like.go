package domain

import "context"

type LikeArticle struct {
	LikeArticleID int64 `json:"like_article_id,omitempty"`
	UserID        int64 `json:"user_id,omitempty"`
	ArticleID     int64 `json:"article_id,omitempty"`
	Vote          int   `json:"vote,omitempty"`
}

type LikeComment struct {
	LikeCommentID int64 `json:"like_comment_id,omitempty"`
	UserID        int64 `json:"user_id,omitempty"`
	CommentID     int64 `json:"comment_id,omitempty"`
	Vote          int   `json:"vote,omitempty"`
}

type LikeArticleUsecase interface {
	Like(ctx context.Context, like *LikeArticle) error
	Dislike(ctx context.Context, like *LikeArticle) error
}

type LikeCommentUsecase interface {
	Like(ctx context.Context, like *LikeComment) error
	Dislike(ctx context.Context, like *LikeComment) error
}

type LikeArticleRepository interface {
	Like(ctx context.Context, like *LikeArticle) error
	Dislike(ctx context.Context, like *LikeArticle) error
}

type LikeCommentRepository interface {
	Like(ctx context.Context, like *LikeComment) error
	Dislike(ctx context.Context, like *LikeComment) error
}
