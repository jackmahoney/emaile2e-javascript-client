var fs = require('fs');

// shim the readme
var path = './README.md';
var execSync = require('child_process').execSync;
var apiDocs = execSync('curl -s ' + process.env.API_URL).toString();
var api = JSON.parse(apiDocs);
var desc = api.info.description;
var readme = fs.readFileSync(path, 'utf-8');
var res = readme.replace(/(# emaile2e-client\n\n)(.|\n)*(\n\n## Installation)/g, '$1' + desc + '$3');
fs.writeFileSync(path, res);

// shim package.json
var packagePath = './package.json';
var packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
packageJson['repository'] = {
  type: 'git',
  url: 'https://github.com/jackmahoney/emaile2e-javascript-client.git'
};
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
