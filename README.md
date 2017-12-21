# emaile2e-client

[Email-e2e](https://emaile2e.com) is and end-to-end email testing service. It has a web-app for managing your account and a REST API for sending and receiving emails from randomized email addresses.

## Why?
Email-e2e was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then Email-e2e will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?

## Getting started
Every API request requires a valid API Key appended as a query parameter. **To obtain an API Key** [visit your account dashboard](http://www.emaile2e.com/dashboard).  

The general flow is as follows:

- Create a new inbox during a test. The email address will be returned in the response. 
- Send an email to that address or trigger an action in your test that does so.
- Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.

## SDK
- There is an official [Javascript SDK](https://www.npmjs.com/package/emaile2e-client) available on npm.
- You can also use the [swagger JSON definition](https://api.emaile2e.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.

## Legal
The Emaile2e API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.

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

var apiKey = "test"; // {String} Your API Key. Sign up and find it in your dashboard.

api.createRandomInboxUsingPOST(apiKey).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.emaile2e.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Emaile2eClient.InboxcontrollerApi* | [**createRandomInboxUsingPOST**](docs/InboxcontrollerApi.md#createRandomInboxUsingPOST) | **POST** /inboxes | Create an inbox
*Emaile2eClient.InboxcontrollerApi* | [**deleteInboxUsingDELETE**](docs/InboxcontrollerApi.md#deleteInboxUsingDELETE) | **DELETE** /inboxes/{uuid} | Delete an inbox
*Emaile2eClient.InboxcontrollerApi* | [**getEmailsForInboxUsingGET**](docs/InboxcontrollerApi.md#getEmailsForInboxUsingGET) | **GET** /inboxes/{uuid} | Fetch emails for a given inbox
*Emaile2eClient.InboxcontrollerApi* | [**getListOfInboxesUsingGET**](docs/InboxcontrollerApi.md#getListOfInboxesUsingGET) | **GET** /inboxes | List your inboxes
*Emaile2eClient.InboxcontrollerApi* | [**sendEmailFromUserUsingPOST**](docs/InboxcontrollerApi.md#sendEmailFromUserUsingPOST) | **POST** /inboxes/{uuid} | Send an email
*Emaile2eClient.UsercontrollerApi* | [**getUserUsingGET**](docs/UsercontrollerApi.md#getUserUsingGET) | **GET** /user | Fetch a user


## Documentation for Models

 - [Emaile2eClient.EmailDto](docs/EmailDto.md)
 - [Emaile2eClient.InboxDto](docs/InboxDto.md)
 - [Emaile2eClient.Response](docs/Response.md)
 - [Emaile2eClient.ResponseInboxDto](docs/ResponseInboxDto.md)
 - [Emaile2eClient.ResponseListEmailDto](docs/ResponseListEmailDto.md)
 - [Emaile2eClient.ResponseListInboxDto](docs/ResponseListInboxDto.md)
 - [Emaile2eClient.SendEmailDto](docs/SendEmailDto.md)
 - [Emaile2eClient.UserDto](docs/UserDto.md)


## Documentation for Authorization

 All endpoints do not require authorization.

