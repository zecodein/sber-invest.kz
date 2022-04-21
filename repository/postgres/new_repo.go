package postgres

import (
	"context"
	"fmt"
	"time"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/zecodein/sber-invest.kz/configs"
)

func NewPostgresRepository(config *configs.Config) (*pgxpool.Pool, error) {
	// * postgres://postgres:PostgresInvest2022@localhost:5432/sber-invest-db
	DSN := fmt.Sprintf("postgres://%s:%s@%s%s/%s", config.UserDB, config.PasswordDB, config.HostDB, config.PortDB, config.NameDB)

	cfg, err := pgxpool.ParseConfig(DSN)
	if err != nil {
		return nil, fmt.Errorf("postgres: %w", err)
	}

	cfg.MaxConns = 5 // TODO 25
	cfg.MaxConnLifetime = 5 * time.Minute

	db, err := pgxpool.ConnectConfig(context.Background(), cfg)
	if err != nil {
		return nil, fmt.Errorf("postgres: %w", err)
	}

	err = categories(db)
	if err != nil {
		return nil, err
	}

	return db, nil
}

func categories(db *pgxpool.Pool) error {
	stmt := `INSERT INTO "user"("first_name", "last_name", "email", "access", "password", "created_at", "updated_at") VALUES($1, $2, $3, $4, $5, $6, $7)`
	_, err := db.Exec(context.Background(), stmt, "super", "user", "superuser@gmail.com", "superuser", "$2a$14$RjMYtQCRBOiq2ee/SOGkKuHINnUbB88XM7/pRMYnGKe2dzUICT.PO", time.Now(), time.Now())
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "user"("first_name", "last_name", "email", "access", "password", "created_at", "updated_at") VALUES($1, $2, $3, $4, $5, $6, $7)`
	_, err = db.Exec(context.Background(), stmt, "Александр", "Репников", "ARepnikov@sber-invest.kz", "superuser", "$2a$14$HVWNjswrGaocfPBz19UztuFRIfB6484r37h9Y/v1srfMTqWdpPvyG", time.Now(), time.Now())
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "user"("first_name", "last_name", "email", "access", "password", "created_at", "updated_at") VALUES($1, $2, $3, $4, $5, $6, $7)`
	_, err = db.Exec(context.Background(), stmt, "Александр", "Репников", "ARepnikov777gmail.com", "superuser", "$2a$14$0CG9TWVqzKEA4ZzjuccvwOqG91O9nFE7WxBG7y20/.QNFesonWc3e", time.Now(), time.Now())
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "category"("name", "description") VALUES($1, $2)`
	_, err = db.Exec(context.Background(), stmt, "Assetallocation", "подходы, стратегии, финансовые инструменты, портфели, инструменты инвестиционного анализа.")
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "category"("name", "description") VALUES($1, $2)`
	_, err = db.Exec(context.Background(), stmt, "Налоги", "налогообложение активов в портфеле инвестора и его налоговая отчетность в Казахстане.")
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "category"("name", "description") VALUES($1, $2)`
	_, err = db.Exec(context.Background(), stmt, "Пошаговые Инструкции", "все инструкции проекта (оплата налогов, заполнение 240 формы, регистрация брокерского договора и подачи отчётности в НацБанк).")
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "category"("name", "description") VALUES($1, $2)`
	_, err = db.Exec(context.Background(), stmt, "Психология Инвестиций", "о людях, их особенностях и ограничениях. О дисциплине.")
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "category"("name", "description") VALUES($1, $2)`
	_, err = db.Exec(context.Background(), stmt, "Важные Новости", "«выжимки» важных новостей.")
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	stmt = `INSERT INTO "category"("name", "description") VALUES($1, $2)`
	_, err = db.Exec(context.Background(), stmt, "TuneUp", "информация о курсах, конференциях и других полезных мероприятиях и ресурсах, с помощью которых можно «прокачать» свою финансовую грамотность.")
	if err != nil && err.Error()[7:16] != "duplicate" {
		return err
	}

	return nil
}
