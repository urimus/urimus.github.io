FROM php:8.2-cli

# curl в PHP уже есть в большинстве образов, но на всякий случай:
RUN apt-get update && apt-get install -y curl

WORKDIR /app
COPY . .

EXPOSE 10000

CMD php -S 0.0.0.0:$PORT