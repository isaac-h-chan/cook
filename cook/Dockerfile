FROM node:alpine3.18
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
WORKDIR /frontend/dist/
CMD [ "npx", "vite", "--host", "0.0.0.0", "--port", "3000" ]

