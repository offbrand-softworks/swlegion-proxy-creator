#!/bin/bash

docker-compose pull

docker-compose up -d --build nginx
