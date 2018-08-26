FROM alpine:3.7 AS SystemOS
RUN apk update \
	&& apk add --update nodejs nodejs-npm \
    && npm install pm2 -g \
    && npm install webpack -g 
EXPOSE 3000

FROM SystemOS AS build
COPY './package.json' '/app-build/package.json'
COPY './src/' '/app-build/src/'
COPY './node.app.js' '/app-build/node.app.js'
COPY './webpack.config.js' '/app-build/webpack.config.js'
WORKDIR /app-build
RUN npm i
RUN npm run build

FROM SystemOS
WORKDIR /app
COPY --from=build './app-build/package.json' /app/package.json
# COPY --from=build './app-build/webpack.config.js' /app/webpack.config.js
COPY --from=build './app-build/node.app.js' /app/node.app.js
COPY --from=build './app-build/public' /app/public
RUN npm install --production
CMD ["pm2-runtime", "/app/node.app.js"]