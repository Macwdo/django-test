## Como rodar a aplicação

- Acesse o diretório "backend" e crie um arquivo chamado ".env". Copie o conteúdo do arquivo ".env-sample" para o novo arquivo ".env".

- Volte ao diretório raiz "django-test/", execute os seguintes comandos

```bash
$ docker build ./backend -t django_test_app
$ docker build ./frontend -t django_test_front
```

- Inicie a aplicacao front end 

```bash
$ docker run -d -p 3000:3000 django_test_front
```

- Inicie o Docker Compose da aplicação
```
docker compose up -d
```
- A aplicação back-end estará disponível na porta <a href="http://localhost:8000/">8000</a>.

- A aplicação front-end estará disponível na porta <a href="http://localhost:3000/">3000</a>.

- Para criar o usuário admin
```
docker exec -it django_test_app sh -c 'python manage.py createsuperuser --username admin'
```

- Insira a senha e o e-mail do usuário (o nome de usuário padrão será 'admin' e o e-mail pode ser nulo).


- Você pode acessar o <a href="http://localhost:8000/admin">painel admnistrativo</a>  na porta 8000.

- Você pode acessar o <a href="http://localhost:5555/">Celery Flower</a> para visualizar as tarefas do Celery.
