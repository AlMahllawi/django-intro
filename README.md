# Django Introduction
A simple introduction to [Django](https://www.djangoproject.com/), a [project](https://docs.djangoproject.com/en/5.2/internals/organization/) that has a single [application](https://docs.djangoproject.com/en/5.2/ref/applications/) to render multiple [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) pages.

## Python Virtual Environment
- Create the [venv](https://docs.python.org/3/library/venv.html).
```bash
python -m venv .
```

- Activate the venv.
```bash
source bin/activate
```

## Install Django
Using [pip](https://pip.pypa.io/en/stable/):
```bash
pip install django
```

## Collect [static files](https://docs.djangoproject.com/en/5.1/ref/contrib/staticfiles/)
```bash
python manage.py collectstatic
```

## Run the [development server](https://docs.djangoproject.com/en/5.2/ref/django-admin/#runserver)
```bash
python manage.py runserver
```

## Preview
![Preview](https://github.com/AlMahllawi/django-intro/blob/7b9a270f05a4cec92b413e09b4d43f0b0246215f/preview.gif)

