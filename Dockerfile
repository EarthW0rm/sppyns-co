FROM alpine:3.7 AS SystemOS
RUN apk update \
	&& apk add --update nodejs nodejs-npm

FROM SystemOS AS NgInx
RUN apk add openrc nginx --no-cache \
    && adduser -D -g 'www' www \
    && mkdir /www \
    && chown -R www:www /var/lib/nginx \
    && chown -R www:www /www \
    && mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig \
    && mkdir -p /run/nginx
COPY './nginx.conf' '/etc/nginx/nginx.conf'
RUN nginx -t
EXPOSE 80

FROM SystemOS as build
ARG API_URL
COPY './package.json' '/build/package.json'
COPY './webpack.config.js' '/build/webpack.config.js'
COPY './src/' '/build/src/'
WORKDIR /build
RUN npm i && npm run build
FROM NgInx
COPY --from=build './build/dist' /www
CMD ["nginx", "-g", "daemon off;"]