/**
 * MailSlurp API Documentation
 * [MailSlurp](https://www.mailslurp.com) is an end-to-end email testing service. It has a [web-app](https://www.mailslurp.com/dashboard) for managing your account and a [REST API](https://api.mailslurp.com) for sending and receiving emails from randomly generated email addresses.  ## Why? MailSlurp was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then MailSlurp will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?  ## Getting started - [API Docs](https://www.mailslurp.com/documentation) - [Code Examples](https://www.mailslurp.com/documentation/examples) - [Swagger Definition](https://api.mailslurp.com/v2/api-docs)  Every API request requires a valid API Key appended as a query parameter. [To obtain an API Key visit your account dashboard](https://www.mailslurp.com/dashboard).    The general flow is as follows:  - Create a new inbox during a test. The email address will be returned in the response.  - Send an email to that address or trigger an action in your test that does so. - Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/mailslurp-client) available on npm. - You can also use the [swagger JSON definition](https://api.mailslurp.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Mailslurp API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.  ## Bugs, features, support To report bugs or request features please see the [contact page](https://www.mailslurp.com/contact). For help see [support](https://www.mailslurp.com/support).
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountDto', 'model/EmailDto', 'model/InboxDto', 'model/Response', 'model/ResponseInboxDto', 'model/ResponseListAccountDto', 'model/ResponseListEmailDto', 'model/ResponseListInboxDto', 'model/SendEmailDto', 'model/UserDto', 'api/AccountControllerApi', 'api/InboxControllerApi', 'api/UserControllerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountDto'), require('./model/EmailDto'), require('./model/InboxDto'), require('./model/Response'), require('./model/ResponseInboxDto'), require('./model/ResponseListAccountDto'), require('./model/ResponseListEmailDto'), require('./model/ResponseListInboxDto'), require('./model/SendEmailDto'), require('./model/UserDto'), require('./api/AccountControllerApi'), require('./api/InboxControllerApi'), require('./api/UserControllerApi'));
  }
}(function(ApiClient, AccountDto, EmailDto, InboxDto, Response, ResponseInboxDto, ResponseListAccountDto, ResponseListEmailDto, ResponseListInboxDto, SendEmailDto, UserDto, AccountControllerApi, InboxControllerApi, UserControllerApi) {
  'use strict';

  /**
   * The official javascript client for the MailSlurp API. See https://www.mailslurp.com for more information..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MailslurpClient = require('index'); // See note below*.
   * var xxxSvc = new MailslurpClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MailslurpClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MailslurpClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MailslurpClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.1535642197
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountDto model constructor.
     * @property {module:model/AccountDto}
     */
    AccountDto: AccountDto,
    /**
     * The EmailDto model constructor.
     * @property {module:model/EmailDto}
     */
    EmailDto: EmailDto,
    /**
     * The InboxDto model constructor.
     * @property {module:model/InboxDto}
     */
    InboxDto: InboxDto,
    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response: Response,
    /**
     * The ResponseInboxDto model constructor.
     * @property {module:model/ResponseInboxDto}
     */
    ResponseInboxDto: ResponseInboxDto,
    /**
     * The ResponseListAccountDto model constructor.
     * @property {module:model/ResponseListAccountDto}
     */
    ResponseListAccountDto: ResponseListAccountDto,
    /**
     * The ResponseListEmailDto model constructor.
     * @property {module:model/ResponseListEmailDto}
     */
    ResponseListEmailDto: ResponseListEmailDto,
    /**
     * The ResponseListInboxDto model constructor.
     * @property {module:model/ResponseListInboxDto}
     */
    ResponseListInboxDto: ResponseListInboxDto,
    /**
     * The SendEmailDto model constructor.
     * @property {module:model/SendEmailDto}
     */
    SendEmailDto: SendEmailDto,
    /**
     * The UserDto model constructor.
     * @property {module:model/UserDto}
     */
    UserDto: UserDto,
    /**
     * The AccountControllerApi service constructor.
     * @property {module:api/AccountControllerApi}
     */
    AccountControllerApi: AccountControllerApi,
    /**
     * The InboxControllerApi service constructor.
     * @property {module:api/InboxControllerApi}
     */
    InboxControllerApi: InboxControllerApi,
    /**
     * The UserControllerApi service constructor.
     * @property {module:api/UserControllerApi}
     */
    UserControllerApi: UserControllerApi
  };

  return exports;
}));
