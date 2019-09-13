URL = ${SERVER_URL}
IP = ${SERVER_IP}
USER = ${SERVER_USER}

buildRunDev: buildDev runDev

buildDev:
	- docker build -t swlegion-card-builder:dev .

runDev:
	- docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm swlegion-card-builder:dev

buildDeployProd: buildProd deployProd

buildProd:
	- sed 's/<url>/${URL}/g' nginx/nginx-template.conf > nginx/nginx.conf
	- docker build -f Dockerfile-prod -t offbrand/swlegion-card-builder:latest .

deployProd:
	- docker push offbrand/swlegion-card-builder:latest
	- ssh ${USER}@${IP} "bash -s" < ./refresh_app.sh

.PHONY: buildDev runDev buildProd runProd