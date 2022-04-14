run:
	docker-compose build
	docker-compose up -d
	go run ./cmd/

stop:
	docker-compose stop