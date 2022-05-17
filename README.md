# Sample recorder

Application to manage samples that contain expiry date, project in JavaScript, with separate back and front-end for better understanding of application contexts, if you want the modules can be used independently, just separate them and help few configurations


#
# Back-End

## Run API and Databases with Docker-compose

</br>

```bash
$ docker compose -f "../docker-compose.yaml" up -d --build
```
To access API documentation open [http://localhost:80/api-docs](http://localhost:80/api-docs)
# 



## To run locally

### Installation

</br>

```bash
$ npm install
```

### Running the app

</br>

```bash
# watch mode
$ npm run start

# development
$ npm run start:d

# production mode
$ npm run start:prod
```

#

### Test the CRUD

</br>

```bash
# unit tests
$ npm run test

# test with report Nyan
$ npm run test:r

# test production mode
$ npm run test:prod
```

#
# Front-End
## Getting Started

Once the databases run, start the font-end application. 

*The api url to configure axios in the file './src/services/api.js'*

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 

## Stay in touch

- Author - [Kaique Pires](https://www.facebook.com/kaique.pires.75)
- Twitter - [@Kaique28772825](https://twitter.com/nestframework)
