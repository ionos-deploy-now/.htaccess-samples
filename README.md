# .htaccess-samples
A .htaccess samples project

[![Deploy Now](https://github.com/ionos-deploy-now/.htaccess-samples/actions/workflows/deploy-now.yaml/badge.svg)](https://github.com/ionos-deploy-now/.htaccess-samples/actions/workflows/deploy-now.yaml)

## Setup local dev

Run: ```sass --watch styles.scss:dist/styles.min.css```
Run: ```docker build -t my-apache2 .```
Run: ```docker run -dit --name my-running-app -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ my-apache2```
Go to: http://localhost:8080/
