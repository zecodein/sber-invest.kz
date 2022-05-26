build:
	docker-compose build
	docker image prune

run:
	docker-compose build
	docker image prune
	docker-compose up -d

stop:
	docker-compose stop

delete:
	docker-compose 
	docker volume rm sber-investkz_cache sber-investkz_pg-data 