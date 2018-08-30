# mailslurp-client

[MailSlurp](https://www.mailslurp.com) is an end-to-end email testing service. It has a [web-app](https://www.mailslurp.com/dashboard) for managing your account and a [REST API](https://api.mailslurp.com) for sending and receiving emails from randomly generated email addresses.

## Why?
MailSlurp was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then MailSlurp will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?

## Getting started
- [API Docs](https://www.mailslurp.com/documentation)
- [Code Examples](https://www.mailslurp.com/documentation/examples)
- [Swagger Definition](https://api.mailslurp.com/v2/api-docs)

Every API request requires a valid API Key appended as a query parameter. [To obtain an API Key visit your account dashboard](https://www.mailslurp.com/dashboard).  

The general flow is as follows:

- Create a new inbox during a test. The email address will be returned in the response. 
- Send an email to that address or trigger an action in your test that does so.
- Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.

## SDK
- There is an official [Javascript SDK](https://www.npmjs.com/package/mailslurp-client) available on npm.
- You can also use the [swagger JSON definition](https://api.mailslurp.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.

## Legal
The Mailslurp API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.

## Bugs, features, support
To report bugs or request features please see the [contact page](https://www.mailslurp.com/contact). For help see [support](https://www.mailslurp.com/support).

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mailslurp-client --save
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

Finally, switch to the directory you want to use your mailslurp-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('mailslurp-client')` in javascript files from the directory you ran the last 
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
var MailslurpClient = require('mailslurp-client');

var api = new MailslurpClient.AccountControllerApi()
api.getAccountsUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.mailslurp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MailslurpClient.AccountControllerApi* | [**getAccountsUsingGET**](docs/AccountControllerApi.md#getAccountsUsingGET) | **GET** /accounts | List available account types
*MailslurpClient.InboxControllerApi* | [**createRandomInboxUsingPOST**](docs/InboxControllerApi.md#createRandomInboxUsingPOST) | **POST** /inboxes | Create an inbox
*MailslurpClient.InboxControllerApi* | [**deleteInboxUsingDELETE**](docs/InboxControllerApi.md#deleteInboxUsingDELETE) | **DELETE** /inboxes/{uuid} | Delete an inbox
*MailslurpClient.InboxControllerApi* | [**getEmailsForInboxUsingGET**](docs/InboxControllerApi.md#getEmailsForInboxUsingGET) | **GET** /inboxes/{uuid} | Fetch emails for a given inbox
*MailslurpClient.InboxControllerApi* | [**getListOfInboxesUsingGET**](docs/InboxControllerApi.md#getListOfInboxesUsingGET) | **GET** /inboxes | List your inboxes
*MailslurpClient.InboxControllerApi* | [**sendEmailFromUserUsingPOST**](docs/InboxControllerApi.md#sendEmailFromUserUsingPOST) | **POST** /inboxes/{uuid} | Send an email
*MailslurpClient.UserControllerApi* | [**getUserUsingGET**](docs/UserControllerApi.md#getUserUsingGET) | **GET** /user | Fetch a user


## Documentation for Models

 - [MailslurpClient.AccountDto](docs/AccountDto.md)
 - [MailslurpClient.EmailDto](docs/EmailDto.md)
 - [MailslurpClient.InboxDto](docs/InboxDto.md)
 - [MailslurpClient.Response](docs/Response.md)
 - [MailslurpClient.ResponseInboxDto](docs/ResponseInboxDto.md)
 - [MailslurpClient.ResponseListAccountDto](docs/ResponseListAccountDto.md)
 - [MailslurpClient.ResponseListEmailDto](docs/ResponseListEmailDto.md)
 - [MailslurpClient.ResponseListInboxDto](docs/ResponseListInboxDto.md)
 - [MailslurpClient.SendEmailDto](docs/SendEmailDto.md)
 - [MailslurpClient.UserDto](docs/UserDto.md)


## Documentation for Authorization

 All endpoints do not require authorization.

