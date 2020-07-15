FROM registry.cn-hangzhou.aliyuncs.com/jackleeinst/ssrbase

# copy the app, note .dockerignore
COPY . /opt/app/
RUN npm install


# expose 8655 on container
EXPOSE 7001
EXPOSE 8000

# start the app
CMD [ "npm", "run", "prod" ]
