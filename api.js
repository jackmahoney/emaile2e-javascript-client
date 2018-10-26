"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var Promise = require("bluebird");
var defaultBasePath = 'https://api.mailslurp.com';
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty];
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
var AccountDto = (function () {
    function AccountDto() {
    }
    AccountDto.getAttributeTypeMap = function () {
        return AccountDto.attributeTypeMap;
    };
    AccountDto.discriminator = undefined;
    AccountDto.attributeTypeMap = [
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "AccountDto.AccountTypeEnum"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "string"
        },
        {
            "name": "priceCents",
            "baseName": "priceCents",
            "type": "number"
        },
        {
            "name": "priceString",
            "baseName": "priceString",
            "type": "string"
        },
        {
            "name": "stripeProduct",
            "baseName": "stripeProduct",
            "type": "string"
        }
    ];
    return AccountDto;
}());
exports.AccountDto = AccountDto;
(function (AccountDto) {
    var AccountTypeEnum;
    (function (AccountTypeEnum) {
        AccountTypeEnum[AccountTypeEnum["FREE"] = 'FREE'] = "FREE";
        AccountTypeEnum[AccountTypeEnum["PAID"] = 'PAID'] = "PAID";
    })(AccountTypeEnum = AccountDto.AccountTypeEnum || (AccountDto.AccountTypeEnum = {}));
})(AccountDto = exports.AccountDto || (exports.AccountDto = {}));
exports.AccountDto = AccountDto;
var AccountsDto = (function () {
    function AccountsDto() {
    }
    AccountsDto.getAttributeTypeMap = function () {
        return AccountsDto.attributeTypeMap;
    };
    AccountsDto.discriminator = undefined;
    AccountsDto.attributeTypeMap = [
        {
            "name": "free",
            "baseName": "free",
            "type": "AccountDto"
        },
        {
            "name": "paid",
            "baseName": "paid",
            "type": "AccountDto"
        }
    ];
    return AccountsDto;
}());
exports.AccountsDto = AccountsDto;
var EmailDto = (function () {
    function EmailDto() {
    }
    EmailDto.getAttributeTypeMap = function () {
        return EmailDto.attributeTypeMap;
    };
    EmailDto.discriminator = undefined;
    EmailDto.attributeTypeMap = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "Date"
        },
        {
            "name": "returnPath",
            "baseName": "returnPath",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>"
        }
    ];
    return EmailDto;
}());
exports.EmailDto = EmailDto;
var InboxDto = (function () {
    function InboxDto() {
    }
    InboxDto.getAttributeTypeMap = function () {
        return InboxDto.attributeTypeMap;
    };
    InboxDto.discriminator = undefined;
    InboxDto.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }
    ];
    return InboxDto;
}());
exports.InboxDto = InboxDto;
var Response = (function () {
    function Response() {
    }
    Response.getAttributeTypeMap = function () {
        return Response.attributeTypeMap;
    };
    Response.discriminator = undefined;
    Response.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "any"
        }
    ];
    return Response;
}());
exports.Response = Response;
var ResponseInboxDto = (function () {
    function ResponseInboxDto() {
    }
    ResponseInboxDto.getAttributeTypeMap = function () {
        return ResponseInboxDto.attributeTypeMap;
    };
    ResponseInboxDto.discriminator = undefined;
    ResponseInboxDto.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "InboxDto"
        }
    ];
    return ResponseInboxDto;
}());
exports.ResponseInboxDto = ResponseInboxDto;
var ResponseListEmailDto = (function () {
    function ResponseListEmailDto() {
    }
    ResponseListEmailDto.getAttributeTypeMap = function () {
        return ResponseListEmailDto.attributeTypeMap;
    };
    ResponseListEmailDto.discriminator = undefined;
    ResponseListEmailDto.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<EmailDto>"
        }
    ];
    return ResponseListEmailDto;
}());
exports.ResponseListEmailDto = ResponseListEmailDto;
var ResponseListInboxDto = (function () {
    function ResponseListInboxDto() {
    }
    ResponseListInboxDto.getAttributeTypeMap = function () {
        return ResponseListInboxDto.attributeTypeMap;
    };
    ResponseListInboxDto.discriminator = undefined;
    ResponseListInboxDto.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<InboxDto>"
        }
    ];
    return ResponseListInboxDto;
}());
exports.ResponseListInboxDto = ResponseListInboxDto;
var SendEmailDto = (function () {
    function SendEmailDto() {
    }
    SendEmailDto.getAttributeTypeMap = function () {
        return SendEmailDto.attributeTypeMap;
    };
    SendEmailDto.discriminator = undefined;
    SendEmailDto.attributeTypeMap = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        }
    ];
    return SendEmailDto;
}());
exports.SendEmailDto = SendEmailDto;
var UserDto = (function () {
    function UserDto() {
    }
    UserDto.getAttributeTypeMap = function () {
        return UserDto.attributeTypeMap;
    };
    UserDto.discriminator = undefined;
    UserDto.attributeTypeMap = [
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "UserDto.AccountTypeEnum"
        },
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string"
        },
        {
            "name": "newUser",
            "baseName": "newUser",
            "type": "boolean"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        }
    ];
    return UserDto;
}());
exports.UserDto = UserDto;
(function (UserDto) {
    var AccountTypeEnum;
    (function (AccountTypeEnum) {
        AccountTypeEnum[AccountTypeEnum["FREE"] = 'FREE'] = "FREE";
        AccountTypeEnum[AccountTypeEnum["PAID"] = 'PAID'] = "PAID";
    })(AccountTypeEnum = UserDto.AccountTypeEnum || (UserDto.AccountTypeEnum = {}));
})(UserDto = exports.UserDto || (exports.UserDto = {}));
exports.UserDto = UserDto;
var enumsMap = {
    "AccountDto.AccountTypeEnum": AccountDto.AccountTypeEnum,
    "UserDto.AccountTypeEnum": UserDto.AccountTypeEnum,
};
var typeMap = {
    "AccountDto": AccountDto,
    "AccountsDto": AccountsDto,
    "EmailDto": EmailDto,
    "InboxDto": InboxDto,
    "Response": Response,
    "ResponseInboxDto": ResponseInboxDto,
    "ResponseListEmailDto": ResponseListEmailDto,
    "ResponseListInboxDto": ResponseListInboxDto,
    "SendEmailDto": SendEmailDto,
    "UserDto": UserDto,
};
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
var AccountControllerApiApiKeys;
(function (AccountControllerApiApiKeys) {
})(AccountControllerApiApiKeys = exports.AccountControllerApiApiKeys || (exports.AccountControllerApiApiKeys = {}));
var AccountControllerApi = (function () {
    function AccountControllerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(AccountControllerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountControllerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    AccountControllerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    AccountControllerApi.prototype.setApiKey = function (key, value) {
        this.authentications[AccountControllerApiApiKeys[key]].apiKey = value;
    };
    AccountControllerApi.prototype.createSubscriptionUsingPOST = function (jwtToken, stripeToken) {
        var localVarPath = this.basePath + '/subscription';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (jwtToken === null || jwtToken === undefined) {
            throw new Error('Required parameter jwtToken was null or undefined when calling createSubscriptionUsingPOST.');
        }
        if (stripeToken === null || stripeToken === undefined) {
            throw new Error('Required parameter stripeToken was null or undefined when calling createSubscriptionUsingPOST.');
        }
        if (jwtToken !== undefined) {
            localVarQueryParameters['jwtToken'] = ObjectSerializer.serialize(jwtToken, "string");
        }
        if (stripeToken !== undefined) {
            localVarQueryParameters['stripeToken'] = ObjectSerializer.serialize(stripeToken, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UserDto");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    AccountControllerApi.prototype.getAccountsUsingGET = function () {
        var localVarPath = this.basePath + '/accounts';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountsDto");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return AccountControllerApi;
}());
exports.AccountControllerApi = AccountControllerApi;
var InboxControllerApiApiKeys;
(function (InboxControllerApiApiKeys) {
})(InboxControllerApiApiKeys = exports.InboxControllerApiApiKeys || (exports.InboxControllerApiApiKeys = {}));
var InboxControllerApi = (function () {
    function InboxControllerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(InboxControllerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InboxControllerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    InboxControllerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    InboxControllerApi.prototype.setApiKey = function (key, value) {
        this.authentications[InboxControllerApiApiKeys[key]].apiKey = value;
    };
    InboxControllerApi.prototype.createRandomInboxUsingPOST = function (apiKey) {
        var localVarPath = this.basePath + '/inboxes';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling createRandomInboxUsingPOST.');
        }
        if (apiKey !== undefined) {
            localVarQueryParameters['apiKey'] = ObjectSerializer.serialize(apiKey, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ResponseInboxDto");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    InboxControllerApi.prototype.deleteInboxUsingDELETE = function (apiKey, uuid) {
        var localVarPath = this.basePath + '/inboxes/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling deleteInboxUsingDELETE.');
        }
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling deleteInboxUsingDELETE.');
        }
        if (apiKey !== undefined) {
            localVarQueryParameters['apiKey'] = ObjectSerializer.serialize(apiKey, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Response");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    InboxControllerApi.prototype.getEmailsForInboxUsingGET = function (apiKey, uuid, minCount, maxWait, since) {
        var localVarPath = this.basePath + '/inboxes/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling getEmailsForInboxUsingGET.');
        }
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getEmailsForInboxUsingGET.');
        }
        if (apiKey !== undefined) {
            localVarQueryParameters['apiKey'] = ObjectSerializer.serialize(apiKey, "string");
        }
        if (minCount !== undefined) {
            localVarQueryParameters['minCount'] = ObjectSerializer.serialize(minCount, "number");
        }
        if (maxWait !== undefined) {
            localVarQueryParameters['maxWait'] = ObjectSerializer.serialize(maxWait, "number");
        }
        if (since !== undefined) {
            localVarQueryParameters['since'] = ObjectSerializer.serialize(since, "Date");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ResponseListEmailDto");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    InboxControllerApi.prototype.getListOfInboxesUsingGET = function (apiKey) {
        var localVarPath = this.basePath + '/inboxes';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling getListOfInboxesUsingGET.');
        }
        if (apiKey !== undefined) {
            localVarQueryParameters['apiKey'] = ObjectSerializer.serialize(apiKey, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ResponseListInboxDto");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    InboxControllerApi.prototype.sendEmailFromUserUsingPOST = function (apiKey, uuid, sendEmailDto) {
        var localVarPath = this.basePath + '/inboxes/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling sendEmailFromUserUsingPOST.');
        }
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling sendEmailFromUserUsingPOST.');
        }
        if (sendEmailDto === null || sendEmailDto === undefined) {
            throw new Error('Required parameter sendEmailDto was null or undefined when calling sendEmailFromUserUsingPOST.');
        }
        if (apiKey !== undefined) {
            localVarQueryParameters['apiKey'] = ObjectSerializer.serialize(apiKey, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendEmailDto, "SendEmailDto")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Response");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return InboxControllerApi;
}());
exports.InboxControllerApi = InboxControllerApi;
var UserControllerApiApiKeys;
(function (UserControllerApiApiKeys) {
})(UserControllerApiApiKeys = exports.UserControllerApiApiKeys || (exports.UserControllerApiApiKeys = {}));
var UserControllerApi = (function () {
    function UserControllerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(UserControllerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserControllerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    UserControllerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    UserControllerApi.prototype.setApiKey = function (key, value) {
        this.authentications[UserControllerApiApiKeys[key]].apiKey = value;
    };
    UserControllerApi.prototype.getUserUsingGET = function (jwtToken) {
        var localVarPath = this.basePath + '/user';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (jwtToken === null || jwtToken === undefined) {
            throw new Error('Required parameter jwtToken was null or undefined when calling getUserUsingGET.');
        }
        if (jwtToken !== undefined) {
            localVarQueryParameters['jwtToken'] = ObjectSerializer.serialize(jwtToken, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UserDto");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return UserControllerApi;
}());
exports.UserControllerApi = UserControllerApi;
//# sourceMappingURL=api.js.map