FROM node
WORKDIR /app
ADD package*.json .
RUN npm install
COPY . .
CMD npm run dev