buildRunDev: buildDev runDev

buildDev:
	- docker build -t swlegion-proxy-creator:dev .

runDev:
	- docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm swlegion-proxy-creator:dev

buildRunProd: buildProd runProd

buildProd:
	- docker build -f Dockerfile-prod -t offbrand/swlegion-card-builder:prod .

runProd:
	- docker run -it -p 80:80 --rm offbrand/swlegion-card-builder:prod

.PHONY: buildDev runDev buildProd runProd