#!/bin/bash

docker rm iftp
docker build -t iftp .
docker run -p 0.0.0.0:3000:3000 -e PSITRANSFER_ADMIN_PASS=secret -v $PWD/data:/data --name iftp iftp