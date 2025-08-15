FROM node:20.19.1
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
# Build server file
RUN yarn config set registry https://registry.npmmirror.com
RUN yarn install
# Bundle app source
EXPOSE 4173
CMD [ "yarn", "preview" ]