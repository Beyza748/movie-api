# 1. Aşama: Nginx tabanlı imaj kullan
FROM nginx:alpine

# 2. Aşama: Nginx yapılandırmasını kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. Aşama: Proje dosyalarını kopyala
COPY . /usr/share/nginx/html

# 80 portunu dışarı aç
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
