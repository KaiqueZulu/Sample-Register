FROM node:lts
WORKDIR home/node/
COPY . .
RUN npm i
CMD [ "npm", "run", "start:prod" ]
EXPOSE 80
