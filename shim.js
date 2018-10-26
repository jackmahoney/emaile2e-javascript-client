var fs = require('fs');


// shim package.json
var packagePath = './package.json';
var packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
packageJson['name'] = "mailslurp-client";
packageJson['version'] = "2.0." + Date.now();
packageJson['description'] = "Generated JS/Typescript client for the MailSlurp email testing API. See https://www.mailslurp.com/docs for more information.";
packageJson['repository'] = {
  type: 'git',
  url: 'https://github.com/jackmahoney/emaile2e-javascript-client.git'
};
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
