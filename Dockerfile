FROM node:14.17

RUN mkdir /workspace
WORKDIR /workspace

COPY . .

RUN npm i