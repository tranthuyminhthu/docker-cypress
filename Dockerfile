FROM cypress/included:12.16.0

USER root
RUN apt-get update && apt-get install -y git

WORKDIR /home/jenkins