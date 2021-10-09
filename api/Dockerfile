# Compile
FROM node:14.18.0-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN yarn install
RUN yarn run build

# Run
FROM node:14.18.0-alpine
WORKDIR /usr
COPY package.json ./
RUN yarn install --only=production
COPY --from=0 /usr/dist .
RUN yarn global add pm2
EXPOSE 8000
CMD ["pm2-runtime", "index.js"]
