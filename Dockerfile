# Chọn base image từ Docker Hub
FROM nginx:latest
# Copy các file của ứng dụng vào thư mục html của Nginx
COPY . /usr/share/nginx/html
# Khai báo cổng mà ứng dụng sẽ lắng nghe
EXPOSE 80
# Khởi động Nginx khi container được chạy
CMD ["nginx", "-g", "daemon off;"]