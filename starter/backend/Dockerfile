FROM python:3.10-slim

ENV FLASK_APP=backend
ENV FLASK_RUN_HOST=0.0.0.0
ENV PYTHONPATH=/app

WORKDIR /app

RUN pip install --no-cache-dir pipenv

COPY Pipfile Pipfile.lock ./backend/

WORKDIR /app/backend

RUN pipenv install --system --deploy

COPY . .

EXPOSE 5000

CMD ["python", "-m", "flask", "--app", "backend", "run", "--host=0.0.0.0", "--port=5000"]