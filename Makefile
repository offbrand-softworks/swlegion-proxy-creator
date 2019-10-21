URL = ${SERVER_URL}
IP = ${SERVER_IP}
USER = ${SERVER_USER}

buildRunDev: buildDev runDev

buildDev:
	- docker build -t swlegion-card-builder:dev .

runDev:
	- docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm swlegion-card-builder:dev

buildProd:
	- sed 's/<url>/${URL}/g' nginx/nginx-template.conf > nginx/nginx.conf
	- docker build -f Dockerfile-prod -t ${IMAGE_NAME}:latest .

deployProd:
	- echo "${DOCKERHUB_PASS}" | docker login -u "${DOCKERHUB_USERNAME}" --password-stdin
	- docker push ${IMAGE_NAME}:latest
	- ssh ${USER}@${IP} "bash -s" < ./refresh_app.sh

buildDeployProd: buildProd deployProd

.PHONY: buildDev runDev buildProd runProd buildDeployProd