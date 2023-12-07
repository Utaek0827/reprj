FROM node:alpine
WORKDIR /reprj
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 3000

CMD ["npm", "start"]