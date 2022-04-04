CREATE TABLE IF NOT EXISTS "user"(
    "user_id" BIGSERIAL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "access" TEXT DEFAULT "basic_user",
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);
