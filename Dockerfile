FROM node:13.1-alpineWORKDIR /usr/src/app 
COPY package*.json ./ 
RUN apt-get install -y ffmpeg
RUN yarn cache clean && yarn --update-checksums 
COPY . ./ 
EXPOSE 3000 
RUN yarn build && yarn start