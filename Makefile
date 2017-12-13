API_URL=https://api.emaile2e.com/v2/api-docs

update:
	swagger-codegen generate --lang=javascript \
		-DusePromises=true \
		-DprojectName=emaile2e-client\
		-DprojectLicenseName=ISC\
		-DprojectDescription="The official javascript client for the Emaile2e API. See https://emaile2e.com for more information."\
		-DprojectVersion="0.1.$(shell date +%s)"\
		-i $(API_URL) -o .
	API_URL=$(API_URL) node shim.js

commit:
	git add -A . && git commit -m 'deploy' && git push

deploy: update commit
	npm publish
