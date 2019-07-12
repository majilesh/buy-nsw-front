FROM node:11.10.0

RUN echo "deb http://ftp.us.debian.org/debian stretch main non-free" >> /etc/apt/sources.list

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y --no-install-recommends \
    build-essential git

COPY . /ember
WORKDIR /ember
RUN npm install

EXPOSE 2400
