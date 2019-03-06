FROM node:11-alpine

ENV APP_DIR=/vol/app \
	STATIC_DIR=/vol/static

RUN mkdir -p ${STATIC_DIR}/public \
	mkdir -p ${STATIC_DIR}/src

COPY ./package.json ${STATIC_DIR}/
COPY ./public ${STATIC_DIR}/public/

RUN cd ${STATIC_DIR} \
	&& npm install \
	&& npm cache clean --force
