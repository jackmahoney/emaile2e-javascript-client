/**
 * MailSlurp API Documentation
 * [MailSlurp](https://www.mailslurp.com) is an end-to-end email testing service. It has a [web-app](https://www.mailslurp.com/dashboard) for managing your account and a [REST API](https://api.mailslurp.com) for sending and receiving emails from randomly generated email addresses.  ## Why? MailSlurp was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then MailSlurp will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?  ## Getting started - [API Docs](https://www.mailslurp.com/documentation) - [Code Examples](https://www.mailslurp.com/documentation/examples) - [Swagger Definition](https://api.mailslurp.com/v2/api-docs)  Every API request requires a valid API Key appended as a query parameter. [To obtain an API Key visit your account dashboard](https://www.mailslurp.com/dashboard).    The general flow is as follows:  - Create a new inbox during a test. The email address will be returned in the response.  - Send an email to that address or trigger an action in your test that does so. - Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/mailslurp-client) available on npm. - You can also use the [swagger JSON definition](https://api.mailslurp.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Mailslurp API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.  ## Bugs, features, support To report bugs or request features please see the [contact page](https://www.mailslurp.com/contact). For help see [support](https://www.mailslurp.com/support).
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/// <reference path="../custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface AccountDto
 */
export interface AccountDto {
    /**
     *
     * @type {string}
     * @memberof AccountDto
     */
    accountType?: AccountDto.AccountTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AccountDto
     */
    limit?: string;
    /**
     *
     * @type {number}
     * @memberof AccountDto
     */
    priceCents?: number;
    /**
     *
     * @type {string}
     * @memberof AccountDto
     */
    priceString?: string;
    /**
     *
     * @type {string}
     * @memberof AccountDto
     */
    stripeProduct?: string;
}
/**
 * @export
 * @namespace AccountDto
 */
export declare namespace AccountDto {
    /**
     * @export
     * @enum {string}
     */
    enum AccountTypeEnum {
        FREE,
        PAID
    }
}
/**
 *
 * @export
 * @interface AccountsDto
 */
export interface AccountsDto {
    /**
     *
     * @type {AccountDto}
     * @memberof AccountsDto
     */
    free?: AccountDto;
    /**
     *
     * @type {AccountDto}
     * @memberof AccountsDto
     */
    paid?: AccountDto;
}
/**
 *
 * @export
 * @interface EmailDto
 */
export interface EmailDto {
    /**
     *
     * @type {string}
     * @memberof EmailDto
     */
    body?: string;
    /**
     *
     * @type {string}
     * @memberof EmailDto
     */
    from?: string;
    /**
     *
     * @type {string}
     * @memberof EmailDto
     */
    id?: string;
    /**
     *
     * @type {Date}
     * @memberof EmailDto
     */
    received?: Date;
    /**
     *
     * @type {string}
     * @memberof EmailDto
     */
    returnPath?: string;
    /**
     *
     * @type {string}
     * @memberof EmailDto
     */
    subject?: string;
    /**
     *
     * @type {Array&lt;string&gt;}
     * @memberof EmailDto
     */
    to?: Array<string>;
}
/**
 *
 * @export
 * @interface InboxDto
 */
export interface InboxDto {
    /**
     *
     * @type {string}
     * @memberof InboxDto
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof InboxDto
     */
    id?: string;
}
/**
 *
 * @export
 * @interface Response
 */
export interface Response {
    /**
     *
     * @type {string}
     * @memberof Response
     */
    message?: string;
    /**
     *
     * @type {any}
     * @memberof Response
     */
    payload?: any;
}
/**
 *
 * @export
 * @interface ResponseInboxDto
 */
export interface ResponseInboxDto {
    /**
     *
     * @type {string}
     * @memberof ResponseInboxDto
     */
    message?: string;
    /**
     *
     * @type {InboxDto}
     * @memberof ResponseInboxDto
     */
    payload?: InboxDto;
}
/**
 *
 * @export
 * @interface ResponseListEmailDto
 */
export interface ResponseListEmailDto {
    /**
     *
     * @type {string}
     * @memberof ResponseListEmailDto
     */
    message?: string;
    /**
     *
     * @type {Array&lt;EmailDto&gt;}
     * @memberof ResponseListEmailDto
     */
    payload?: Array<EmailDto>;
}
/**
 *
 * @export
 * @interface ResponseListInboxDto
 */
export interface ResponseListInboxDto {
    /**
     *
     * @type {string}
     * @memberof ResponseListInboxDto
     */
    message?: string;
    /**
     *
     * @type {Array&lt;InboxDto&gt;}
     * @memberof ResponseListInboxDto
     */
    payload?: Array<InboxDto>;
}
/**
 *
 * @export
 * @interface SendEmailDto
 */
export interface SendEmailDto {
    /**
     *
     * @type {string}
     * @memberof SendEmailDto
     */
    body?: string;
    /**
     *
     * @type {string}
     * @memberof SendEmailDto
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof SendEmailDto
     */
    to?: string;
}
/**
 *
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     *
     * @type {string}
     * @memberof UserDto
     */
    accountType?: UserDto.AccountTypeEnum;
    /**
     *
     * @type {string}
     * @memberof UserDto
     */
    apiKey?: string;
    /**
     *
     * @type {boolean}
     * @memberof UserDto
     */
    newUser?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserDto
     */
    uuid?: string;
}
/**
 * @export
 * @namespace UserDto
 */
export declare namespace UserDto {
    /**
     * @export
     * @enum {string}
     */
    enum AccountTypeEnum {
        FREE,
        PAID
    }
}
/**
 * AccountControllerApi - fetch parameter creator
 * @export
 */
export declare const AccountControllerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * For use in dashboard
     * @summary Upgrade a user to paid
     * @param {string} jwtToken Cognito ID obtained during login
     * @param {string} stripeToken Stripe user payment confirmation token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscriptionUsingPOST(jwtToken: string, stripeToken: string, options?: any): FetchArgs;
    /**
     * For use in dashboard
     * @summary List available account types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountsUsingGET(options?: any): FetchArgs;
};
/**
 * AccountControllerApi - functional programming interface
 * @export
 */
export declare const AccountControllerApiFp: (configuration?: Configuration) => {
    /**
     * For use in dashboard
     * @summary Upgrade a user to paid
     * @param {string} jwtToken Cognito ID obtained during login
     * @param {string} stripeToken Stripe user payment confirmation token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscriptionUsingPOST(jwtToken: string, stripeToken: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UserDto>;
    /**
     * For use in dashboard
     * @summary List available account types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountsUsingGET(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AccountsDto>;
};
/**
 * AccountControllerApi - factory interface
 * @export
 */
export declare const AccountControllerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * For use in dashboard
     * @summary Upgrade a user to paid
     * @param {string} jwtToken Cognito ID obtained during login
     * @param {string} stripeToken Stripe user payment confirmation token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscriptionUsingPOST(jwtToken: string, stripeToken: string, options?: any): Promise<UserDto>;
    /**
     * For use in dashboard
     * @summary List available account types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccountsUsingGET(options?: any): Promise<AccountsDto>;
};
/**
 * AccountControllerApi - object-oriented interface
 * @export
 * @class AccountControllerApi
 * @extends {BaseAPI}
 */
export declare class AccountControllerApi extends BaseAPI {
    /**
     * For use in dashboard
     * @summary Upgrade a user to paid
     * @param {} jwtToken Cognito ID obtained during login
     * @param {} stripeToken Stripe user payment confirmation token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountControllerApi
     */
    createSubscriptionUsingPOST(jwtToken: string, stripeToken: string, options?: any): Promise<UserDto>;
    /**
     * For use in dashboard
     * @summary List available account types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountControllerApi
     */
    getAccountsUsingGET(options?: any): Promise<AccountsDto>;
}
/**
 * InboxControllerApi - fetch parameter creator
 * @export
 */
export declare const InboxControllerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @summary Create an inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRandomInboxUsingPOST(apiKey: string, options?: any): FetchArgs;
    /**
     * Delete an inbox and all the emails associated with it.
     * @summary Delete an inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteInboxUsingDELETE(apiKey: string, uuid: string, options?: any): FetchArgs;
    /**
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The `since` parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the `waitFor` parameter to hold a request open until the desired number of emails is present. If this number is not met after 100 seconds, an error will be returned.
     * @summary Fetch emails for a given inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {number} [minCount] Wait a maximum of 100 seconds for atleast this many emails in an inbox before returning a result.
     * @param {number} [maxWait] Maximum seconds API should spend retrying your inbox until the minCount is satisfied
     * @param {Date} [since] Filter for emails received on or after this ISO8601 LocalDateTime.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEmailsForInboxUsingGET(apiKey: string, uuid: string, minCount?: number, maxWait?: number, since?: Date, options?: any): FetchArgs;
    /**
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via `/inboxes/{uuid}`.
     * @summary List your inboxes
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListOfInboxesUsingGET(apiKey: string, options?: any): FetchArgs;
    /**
     * Send an email from the given inbox's email address. Useful if you need to test a user contacting you, for instance.
     * @summary Send an email
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {SendEmailDto} sendEmailDto The email to send.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendEmailFromUserUsingPOST(apiKey: string, uuid: string, sendEmailDto: SendEmailDto, options?: any): FetchArgs;
};
/**
 * InboxControllerApi - functional programming interface
 * @export
 */
export declare const InboxControllerApiFp: (configuration?: Configuration) => {
    /**
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @summary Create an inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRandomInboxUsingPOST(apiKey: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseInboxDto>;
    /**
     * Delete an inbox and all the emails associated with it.
     * @summary Delete an inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteInboxUsingDELETE(apiKey: string, uuid: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The `since` parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the `waitFor` parameter to hold a request open until the desired number of emails is present. If this number is not met after 100 seconds, an error will be returned.
     * @summary Fetch emails for a given inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {number} [minCount] Wait a maximum of 100 seconds for atleast this many emails in an inbox before returning a result.
     * @param {number} [maxWait] Maximum seconds API should spend retrying your inbox until the minCount is satisfied
     * @param {Date} [since] Filter for emails received on or after this ISO8601 LocalDateTime.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEmailsForInboxUsingGET(apiKey: string, uuid: string, minCount?: number, maxWait?: number, since?: Date, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseListEmailDto>;
    /**
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via `/inboxes/{uuid}`.
     * @summary List your inboxes
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListOfInboxesUsingGET(apiKey: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ResponseListInboxDto>;
    /**
     * Send an email from the given inbox's email address. Useful if you need to test a user contacting you, for instance.
     * @summary Send an email
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {SendEmailDto} sendEmailDto The email to send.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendEmailFromUserUsingPOST(apiKey: string, uuid: string, sendEmailDto: SendEmailDto, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
};
/**
 * InboxControllerApi - factory interface
 * @export
 */
export declare const InboxControllerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @summary Create an inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRandomInboxUsingPOST(apiKey: string, options?: any): Promise<ResponseInboxDto>;
    /**
     * Delete an inbox and all the emails associated with it.
     * @summary Delete an inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteInboxUsingDELETE(apiKey: string, uuid: string, options?: any): Promise<Response>;
    /**
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The `since` parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the `waitFor` parameter to hold a request open until the desired number of emails is present. If this number is not met after 100 seconds, an error will be returned.
     * @summary Fetch emails for a given inbox
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {number} [minCount] Wait a maximum of 100 seconds for atleast this many emails in an inbox before returning a result.
     * @param {number} [maxWait] Maximum seconds API should spend retrying your inbox until the minCount is satisfied
     * @param {Date} [since] Filter for emails received on or after this ISO8601 LocalDateTime.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEmailsForInboxUsingGET(apiKey: string, uuid: string, minCount?: number, maxWait?: number, since?: Date, options?: any): Promise<ResponseListEmailDto>;
    /**
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via `/inboxes/{uuid}`.
     * @summary List your inboxes
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getListOfInboxesUsingGET(apiKey: string, options?: any): Promise<ResponseListInboxDto>;
    /**
     * Send an email from the given inbox's email address. Useful if you need to test a user contacting you, for instance.
     * @summary Send an email
     * @param {string} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {string} uuid The inbox&#39;s id.
     * @param {SendEmailDto} sendEmailDto The email to send.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendEmailFromUserUsingPOST(apiKey: string, uuid: string, sendEmailDto: SendEmailDto, options?: any): Promise<Response>;
};
/**
 * InboxControllerApi - object-oriented interface
 * @export
 * @class InboxControllerApi
 * @extends {BaseAPI}
 */
export declare class InboxControllerApi extends BaseAPI {
    /**
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @summary Create an inbox
     * @param {} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxControllerApi
     */
    createRandomInboxUsingPOST(apiKey: string, options?: any): Promise<ResponseInboxDto>;
    /**
     * Delete an inbox and all the emails associated with it.
     * @summary Delete an inbox
     * @param {} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {} uuid The inbox&#39;s id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxControllerApi
     */
    deleteInboxUsingDELETE(apiKey: string, uuid: string, options?: any): Promise<Response>;
    /**
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The `since` parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the `waitFor` parameter to hold a request open until the desired number of emails is present. If this number is not met after 100 seconds, an error will be returned.
     * @summary Fetch emails for a given inbox
     * @param {} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {} uuid The inbox&#39;s id.
     * @param {} [minCount] Wait a maximum of 100 seconds for atleast this many emails in an inbox before returning a result.
     * @param {} [maxWait] Maximum seconds API should spend retrying your inbox until the minCount is satisfied
     * @param {} [since] Filter for emails received on or after this ISO8601 LocalDateTime.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxControllerApi
     */
    getEmailsForInboxUsingGET(apiKey: string, uuid: string, minCount?: number, maxWait?: number, since?: Date, options?: any): Promise<ResponseListEmailDto>;
    /**
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via `/inboxes/{uuid}`.
     * @summary List your inboxes
     * @param {} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxControllerApi
     */
    getListOfInboxesUsingGET(apiKey: string, options?: any): Promise<ResponseListInboxDto>;
    /**
     * Send an email from the given inbox's email address. Useful if you need to test a user contacting you, for instance.
     * @summary Send an email
     * @param {} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {} uuid The inbox&#39;s id.
     * @param {} sendEmailDto The email to send.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxControllerApi
     */
    sendEmailFromUserUsingPOST(apiKey: string, uuid: string, sendEmailDto: SendEmailDto, options?: any): Promise<Response>;
}
/**
 * UserControllerApi - fetch parameter creator
 * @export
 */
export declare const UserControllerApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * Used by the dashboard to fetch user information.
     * @summary Fetch a user
     * @param {string} jwtToken Cognito ID obtained during login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserUsingGET(jwtToken: string, options?: any): FetchArgs;
};
/**
 * UserControllerApi - functional programming interface
 * @export
 */
export declare const UserControllerApiFp: (configuration?: Configuration) => {
    /**
     * Used by the dashboard to fetch user information.
     * @summary Fetch a user
     * @param {string} jwtToken Cognito ID obtained during login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserUsingGET(jwtToken: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<UserDto>;
};
/**
 * UserControllerApi - factory interface
 * @export
 */
export declare const UserControllerApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * Used by the dashboard to fetch user information.
     * @summary Fetch a user
     * @param {string} jwtToken Cognito ID obtained during login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserUsingGET(jwtToken: string, options?: any): Promise<UserDto>;
};
/**
 * UserControllerApi - object-oriented interface
 * @export
 * @class UserControllerApi
 * @extends {BaseAPI}
 */
export declare class UserControllerApi extends BaseAPI {
    /**
     * Used by the dashboard to fetch user information.
     * @summary Fetch a user
     * @param {} jwtToken Cognito ID obtained during login
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    getUserUsingGET(jwtToken: string, options?: any): Promise<UserDto>;
}
