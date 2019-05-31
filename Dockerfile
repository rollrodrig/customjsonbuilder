FROM node:10 as installer
WORKDIR /src
COPY package*.json ./
RUN npm install

FROM node:10-alpine
RUN mkdir /src
WORKDIR /src
COPY --from=installer /src .
COPY . .
RUN npm install -g nodemon
RUN npm install -g ts-node
RUN npm install -g typescript
EXPOSE 3000
ENTRYPOINT ["nodemon"]
CMD ["--watch", "./**/*.ts", "--ignore", "./**/*.spec.ts", "--exec", "ts-node", "./app.ts"]