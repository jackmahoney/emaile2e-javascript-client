update:
	java -jar ./swagger-codegen-cli.jar generate --config ./client-config.json --lang=typescript-fetch -i https://api.mailslurp.com/v2/api-docs
	node shim.js
	npm install
