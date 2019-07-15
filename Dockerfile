FROM danlynn/ember-cli:latest

RUN echo "deb http://ftp.us.debian.org/debian stretch main non-free" >> /etc/apt/sources.list

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y --no-install-recommends \
    build-essential git

COPY . /ember
WORKDIR /ember
RUN npm install cldr-core@29.0.0 cldr-numbers-full@29.0.0
RUN npm install || (rm -rf node_modules/*/.git/ && npm install)

EXPOSE 2400
