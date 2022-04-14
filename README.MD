# UMBRELLA

<p align="center">   
    <img src="./umbrella.png" alt="umbrella" width="200"/>
</p>

<p align="center">   
    <font size="5">Proxy reverso para microfrontends</font>
</p>

Utilizando:
* Docker
* NGinx: 1.17.5-alpine
* NodeJs: node:16.14.2
* HttpServer: m4rcu5/lighttpd

## Development
---
> Necessario ter o [Docker](https://docs.docker.com/engine/install/) e [Compose](https://docs.docker.com/compose/install/) instalados

> Caso seja necessario ficar utilizando sudo após a instalação é possivel resolver com alguns [simples passos](https://docs.docker.com/engine/install/linux-postinstall/).

---
Após ter as ferramentas necessarias devidamente instaladas.

Utilize o comando abaixo no terminal, dentro do projeto.
```sh
$ docker-compose up -d
``` 
### Tips
---
Os serviços que passam pelo proxy estarão disponiveis em:
* `http://localhost/`
* `http://localhost/next-app`


> Caso queira ver individualmente cada serviço é possivel acessar ele atraves de suas portas individuais, no caso. 
 
* __static-app__: `http://localhost:3001`
* __next-app__: `http://localhost:3000/next-app`