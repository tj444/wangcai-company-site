FROM registry.cn-qingdao.aliyuncs.com/jackleeinst/ssrbase

# copy the app, note .dockerignore
COPY . /opt/app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run prod

# expose 8655 on container
EXPOSE 7001
EXPOSE 8000

# start the app
CMD [ "npm", "prod" ]
