FROM nexus.inno.tech/venture-studio/inno-quiz/frontend:base AS builder
RUN rm -rf /app/src
ADD ./ /app
WORKDIR /app
RUN npm i --legacy-peer-deps
RUN npm run clean
RUN npm run build

FROM nginx:stable
RUN rm -fr /usr/share/nginx/html/*
COPY --from=builder /app/public/ /usr/share/nginx/html/
COPY --from=builder /app/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
