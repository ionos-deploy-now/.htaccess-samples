[![Deploy Now](https://github.com/ionos-deploy-now/.htaccess-samples/actions/workflows/deploy-now.yaml/badge.svg)](https://github.com/ionos-deploy-now/.htaccess-samples/actions/workflows/deploy-now.yaml)

# .htaccess-samples

This is a sample project to demonstrate the basic usage of .htaccess files. Use this project to get familiar with the capabilities of [Apache HTTP Server modules](https://httpd.apache.org/docs/current/en/mod/) and their directives.
This project is written in pure HTML, CSS and JS to keep it simple and straightforward. 

## Setup local dev

Follow the instructions below to get this project up and running locally:

*Prerequisites*

- [Docker installed](https://docs.docker.com/engine/install/)
- [Node installed](https://nodejs.org/en/download/) - Use a package manager. - If you like to have one package manager to rule all your project runtimes with a single CLI take a look at [asdf](https://asdf-vm.com/).

*Run from project root*

- ```docker build -t my-apache2 .```
- ```docker run -dit --name my-running-app -p 8080:80 -v $PWD/dist:/usr/local/apache2/htdocs/ my-apache2```
- ```npm ci```
- ```npm run build```
- Go to: http://localhost:8080/
- Re-run ```npm run build``` for any changes

Build with :hearts: by IONOS.