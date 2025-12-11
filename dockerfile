FROM nginx:alpine

# index.html ve script.js dosyalarını nginx'in web klasörüne kopyala
COPY index.html /usr/share/nginx/html/index.html
COPY script.js /usr/share/nginx/html/script.js

# Nginx 80 portunda çalışır
EXPOSE 80
