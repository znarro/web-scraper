# Web Scraper Project

---

## Clonando el repositorio

Desde el terminal, clonar el proyecto en un directorio e ingresar:

```shell
    $ git clone git@github.com:DeveLawyer/web-scraper.git
    $ cd web-scraper
```

## Backend

[Pipenv](https://pypi.org/project/pipenv/) es una herramienta para la creación de entornos virtuales. Se puede instalar utilizando [pip](https://pypi.org/project/pip/), el package installer de Python:

```shell
    $ pip install pipenv
```

Una vez instalado, ingresar al directorio _backend_, instalar las dependencias y activar el entorno virtual:

```shell
    $ cd backend
    $ pipenv sync -d
    $ pipenv shell
```

El nombre del entorno en el shell indica que ingresó exitosamente. Puede comprobar las dependencias instaladas:

```shell
    (backend) $ pip freeze
```

Correr los archivos de migraciones para crear la base de datos:

```shell
    (backend) $ python manage.py migrate
```

Ejecutar el script que activa el web scraper:

```shell
    (backend) $ python manage.py runscript go_scraper
```

Al culminar, iniciar el servidor:

```shell
    (backend) $ python manage.py runserver
```

- Para salir del entorno virtual, ejecutar `exit`.

## Frontend

Mientras el backend corre en el puerto 8000, abrir otro terminal e ingresar al directorio _frontend_:

```shell
    $ cd frontend
```

Instalar las dependencias e iniciar la app:

```shell
    $ npm install
    $ npm start
```

Acceder a http://localhost:3000/
