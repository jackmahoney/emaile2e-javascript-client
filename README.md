# emaile2e-client

[Emaile2e](http://www.emaile2e.com) provides a simple REST API that lets you create randomized email addresses and fetch the emails sent to them.

## Why?
If your application uses emails at any point, Emaile2e makes testing your app's email integration easier.

Say your app sign-up process sends a verification email. During e2e tests you can create a new random email 
address for a test user, sign-up, and then fetch the verification email and use the verification code in the next steps of your test.

## Getting started
Every API request requires a valid API Key appended as a query parameter. **To obtain an API Key** [visit your account dashboard](http://www.emaile2e.com/dashboard).  

The general flow is as follow: 
1. Create a new inbox during a test. The email address will be returned in the response. 
2. Send an email to that address or trigger an action in your test that does so.
3. Fetch the email for your new inbox and check if their content is what you expected.

## SDK
- There is an official [Javascript SDK](https://www.npmjs.com/package/emaile2e-client) available on npm.
- You can also use the [swagger JSON definition](https://api.emaile2e.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.

## Legal
The Emaile2e API is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2).  

## Bugs, features, support
To report bugs or request features please see the [contact page](http://www.emaile2e.com/contact). For help see [support](http://www.emaile2e.com/support).

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install emaile2e-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your emaile2e-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('emaile2e-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Emaile2eClient = require('emaile2e-client');

var api = new Emaile2eClient.InboxcontrollerApi()

var apiKey = "apiKey_example"; // {String} Your API Key. Sign up and find it in your dashboard.

api.createUsingPOST(apiKey).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.emaile2e.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Emaile2eClient.InboxcontrollerApi* | [**createUsingPOST**](docs/InboxcontrollerApi.md#createUsingPOST) | **POST** /inboxes | Create an inbox
*Emaile2eClient.InboxcontrollerApi* | [**indexUsingGET**](docs/InboxcontrollerApi.md#indexUsingGET) | **GET** /inboxes | List your inboxes
*Emaile2eClient.InboxcontrollerApi* | [**viewUsingGET**](docs/InboxcontrollerApi.md#viewUsingGET) | **GET** /inboxes/{uuid} | Fetch emails for a given inbox


## Documentation for Models

 - [Emaile2eClient.EmailDto](docs/EmailDto.md)
 - [Emaile2eClient.InboxDto](docs/InboxDto.md)
 - [Emaile2eClient.ResponseInboxDto](docs/ResponseInboxDto.md)
 - [Emaile2eClient.ResponseListEmailDto](docs/ResponseListEmailDto.md)
 - [Emaile2eClient.ResponseListInboxDto](docs/ResponseListInboxDto.md)


## Documentation for Authorization

 All endpoints do not require authorization.

