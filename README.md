# .htaccess-samples
A .htaccess samples project

[![Deploy Now](https://github.com/ionos-deploy-now/.htaccess-samples/actions/workflows/deploy-now.yaml/badge.svg)](https://github.com/ionos-deploy-now/.htaccess-samples/actions/workflows/deploy-now.yaml)

## Setup local dev

*Prerequisites*

- [Docker installed](https://docs.docker.com/engine/install/)

*Run from project root*

- ```docker build -t my-apache2 .```
- ```docker run -dit --name my-running-app -p 8080:80 -v $PWD/dist:/usr/local/apache2/htdocs/ my-apache2```
- ```npm ci```
- ```npm run build```
- Go to: http://localhost:8080/
- Re-run ```npm run build``` for any changes
