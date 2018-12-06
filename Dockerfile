FROM node

ADD . /app/

WORKDIR /app

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]

# docker pull mysql
# docker run --name mysql -e MYSQL_ROOT_PASSWORD=1 -p 3306:3306 -d mysql
# docker exec -it mysql bash
# mysql -uroot -p
# ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1';

# docker build -t nuxt-demo .
# docker run -d -p 3000:3000 --link mysql:mysql -e DB_HOST=mysql nuxt-demo