#
# Develop stage
#
FROM node:16-alpine AS dev

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
COPY  package.json ./
COPY yarn.lock ./
COPY vite.config.ts ./
RUN yarn install && yarn build

COPY /dist ./

EXPOSE 5000

CMD ["yarn", "serve", "--host"]