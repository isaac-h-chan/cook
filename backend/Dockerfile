FROM node:alpine3.18
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 4000
CMD [ "sh", "-c", "npx prisma migrate deploy; npm run start" ]