FROM docker.io/node:current-alpine
EXPOSE 3000 4000 5432

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm install

COPY . /home/app

CMD ["npm", "run", "start" ]
