NAME=baseapp

all: run

build:
	docker-compose build

run: build
	docker-compose run --service-ports $(NAME) npm start

jscheck: build
	docker-compose run $(NAME) npm run test

jslint: build
	docker-compose run $(NAME) npm run lint
