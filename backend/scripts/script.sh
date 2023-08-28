#!/bin/sh

set -e

while ! nc -z $DATABASE_HOST $DATABASE_PORT; do
  echo "waiting for Database start $DATABASE_HOST:$DATABASE_PORT"
  sleep 2
done

echo "database started successfully $DATABASE_HOST:$DATABASE_PORT"

python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py runserver 0.0.0.0:8000