FROM docker.io/node:current-alpine
EXPOSE 3000 4000 5432

WORKDIR /home/app

COPY /server/package.json /home/app/
COPY /server/package-lock.json /home/app/

RUN npm install

COPY /server/. /home/app

RUN npm run start
