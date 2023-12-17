FROM node:alpine
WORKDIR /reprj
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 12121

CMD ["npm", "start"]