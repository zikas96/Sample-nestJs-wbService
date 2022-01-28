FROM node:12.16.1 AS API
MAINTAINER Zakaria NAJI
LABEL name=dependencies
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:alpine AS API
MAINTAINER Zakaria NAJI
LABEL name=pastis-front
EXPOSE 3000
COPY --from=dependencies /app/dist /usr/share/nginx/html
