FROM node:18-alpine

WORKDIR /server

RUN npm install -g json-server

EXPOSE 8000

CMD ["json-server", "--watch", "data.json", "--port", "8000"]