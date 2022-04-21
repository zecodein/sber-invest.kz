CREATE TABLE IF NOT EXISTS "user"(
    "user_id" BIGSERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "access" TEXT NOT NULL DEFAULT 'basic_user',
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "category"(
    "category_id" BIGSERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "article"(
    "article_id" BIGSERIAL PRIMARY KEY,
    "user_id" BIGSERIAL NOT NULL REFERENCES "user" ("user_id") ON DELETE CASCADE,
    "category_id" BIGSERIAL NOT NULL REFERENCES "category" ("category_id") ON DELETE CASCADE,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);