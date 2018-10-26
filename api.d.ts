import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');
export declare class AccountDto {
    'accountType': AccountDto.AccountTypeEnum;
    'limit': string;
    'priceCents': number;
    'priceString': string;
    'stripeProduct': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AccountDto {
    enum AccountTypeEnum {
        FREE,
        PAID
    }
}
export declare class AccountsDto {
    'free': AccountDto;
    'paid': AccountDto;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailDto {
    'body': string;
    'from': string;
    'id': string;
    'received': Date;
    'returnPath': string;
    'subject': string;
    'to': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InboxDto {
    'address': string;
    'id': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Response {
    'message': string;
    'payload': any;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ResponseInboxDto {
    'message': string;
    'payload': InboxDto;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ResponseListEmailDto {
    'message': string;
    'payload': Array<EmailDto>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ResponseListInboxDto {
    'message': string;
    'payload': Array<InboxDto>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendEmailDto {
    'body': string;
    'subject': string;
    'to': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserDto {
    'accountType': UserDto.AccountTypeEnum;
    'apiKey': string;
    'newUser': boolean;
    'uuid': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace UserDto {
    enum AccountTypeEnum {
        FREE,
        PAID
    }
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare enum AccountControllerApiApiKeys {
}
export declare class AccountControllerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AccountControllerApiApiKeys, value: string): void;
    createSubscriptionUsingPOST(jwtToken: string, stripeToken: string): Promise<{
        response: http.ClientResponse;
        body: UserDto;
    }>;
    getAccountsUsingGET(): Promise<{
        response: http.ClientResponse;
        body: AccountsDto;
    }>;
}
export declare enum InboxControllerApiApiKeys {
}
export declare class InboxControllerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InboxControllerApiApiKeys, value: string): void;
    createRandomInboxUsingPOST(apiKey: string): Promise<{
        response: http.ClientResponse;
        body: ResponseInboxDto;
    }>;
    deleteInboxUsingDELETE(apiKey: string, uuid: string): Promise<{
        response: http.ClientResponse;
        body: Response;
    }>;
    getEmailsForInboxUsingGET(apiKey: string, uuid: string, minCount?: number, maxWait?: number, since?: Date): Promise<{
        response: http.ClientResponse;
        body: ResponseListEmailDto;
    }>;
    getListOfInboxesUsingGET(apiKey: string): Promise<{
        response: http.ClientResponse;
        body: ResponseListInboxDto;
    }>;
    sendEmailFromUserUsingPOST(apiKey: string, uuid: string, sendEmailDto: SendEmailDto): Promise<{
        response: http.ClientResponse;
        body: Response;
    }>;
}
export declare enum UserControllerApiApiKeys {
}
export declare class UserControllerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: UserControllerApiApiKeys, value: string): void;
    getUserUsingGET(jwtToken: string): Promise<{
        response: http.ClientResponse;
        body: UserDto;
    }>;
}
