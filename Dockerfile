FROM node:latest as build

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install 
RUN npm run build


FROM nginx:latest

COPY --from=build /app/dist/pokedex /usr/share/nginx/html

EXPOSE 80