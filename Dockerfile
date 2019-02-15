FROM nginx:alpine

RUN mkdir -p /config
ADD .config/nginx/nginx.conf.tmpl /config/nginx.conf.tmpl
ADD .config/nginx/server.conf /etc/nginx/conf.d/server.conf

COPY docs/public /usr/share/nginx/html
COPY .config/nginx/entrypoint.sh /usr/local/bin/

ENTRYPOINT ["entrypoint.sh"]
