# MailSlurpApiDocumentation.InboxControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRandomInboxUsingPOST**](InboxControllerApi.md#createRandomInboxUsingPOST) | **POST** /inboxes | Create an inbox
[**deleteInboxUsingDELETE**](InboxControllerApi.md#deleteInboxUsingDELETE) | **DELETE** /inboxes/{uuid} | Delete an inbox
[**getEmailsForInboxUsingGET**](InboxControllerApi.md#getEmailsForInboxUsingGET) | **GET** /inboxes/{uuid} | Fetch emails for a given inbox
[**getListOfInboxesUsingGET**](InboxControllerApi.md#getListOfInboxesUsingGET) | **GET** /inboxes | List your inboxes
[**sendEmailFromUserUsingPOST**](InboxControllerApi.md#sendEmailFromUserUsingPOST) | **POST** /inboxes/{uuid} | Send an email


<a name="createRandomInboxUsingPOST"></a>
# **createRandomInboxUsingPOST**
> ResponseInboxDto createRandomInboxUsingPOST(apiKey)

Create an inbox

Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.

### Example
```javascript
var MailSlurpApiDocumentation = require('mail_slurp_api_documentation');

var apiInstance = new MailSlurpApiDocumentation.InboxControllerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRandomInboxUsingPOST(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| Your API Key. Sign up and find it in your dashboard. | [default to test]

### Return type

[**ResponseInboxDto**](ResponseInboxDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteInboxUsingDELETE"></a>
# **deleteInboxUsingDELETE**
> Response deleteInboxUsingDELETE(apiKey, uuid)

Delete an inbox

Delete an inbox and all the emails associated with it.

### Example
```javascript
var MailSlurpApiDocumentation = require('mail_slurp_api_documentation');

var apiInstance = new MailSlurpApiDocumentation.InboxControllerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

var uuid = "uuid_example"; // String | The inbox's id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteInboxUsingDELETE(apiKey, uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| Your API Key. Sign up and find it in your dashboard. | [default to test]
 **uuid** | **String**| The inbox&#39;s id. | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getEmailsForInboxUsingGET"></a>
# **getEmailsForInboxUsingGET**
> ResponseListEmailDto getEmailsForInboxUsingGET(apiKey, uuid, opts)

Fetch emails for a given inbox

Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The &#x60;since&#x60; parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the &#x60;waitFor&#x60; parameter to hold a request open until the desired number of emails is present. If this number is not met after 100 seconds, an error will be returned.

### Example
```javascript
var MailSlurpApiDocumentation = require('mail_slurp_api_documentation');

var apiInstance = new MailSlurpApiDocumentation.InboxControllerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

var uuid = "uuid_example"; // String | The inbox's id.

var opts = { 
  'minCount': 56, // Number | Wait a maximum of 100 seconds for atleast this many emails in an inbox before returning a result.
  'maxWait': 789, // Number | Maximum seconds API should spend retrying your inbox until the minCount is satisfied
  'since': new Date("2013-10-20T19:20:30+01:00") // Date | Filter for emails received on or after this ISO8601 LocalDateTime.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailsForInboxUsingGET(apiKey, uuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| Your API Key. Sign up and find it in your dashboard. | [default to test]
 **uuid** | **String**| The inbox&#39;s id. | 
 **minCount** | **Number**| Wait a maximum of 100 seconds for atleast this many emails in an inbox before returning a result. | [optional] 
 **maxWait** | **Number**| Maximum seconds API should spend retrying your inbox until the minCount is satisfied | [optional] 
 **since** | **Date**| Filter for emails received on or after this ISO8601 LocalDateTime. | [optional] 

### Return type

[**ResponseListEmailDto**](ResponseListEmailDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getListOfInboxesUsingGET"></a>
# **getListOfInboxesUsingGET**
> ResponseListInboxDto getListOfInboxesUsingGET(apiKey)

List your inboxes

Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via &#x60;/inboxes/{uuid}&#x60;.

### Example
```javascript
var MailSlurpApiDocumentation = require('mail_slurp_api_documentation');

var apiInstance = new MailSlurpApiDocumentation.InboxControllerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListOfInboxesUsingGET(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| Your API Key. Sign up and find it in your dashboard. | [default to test]

### Return type

[**ResponseListInboxDto**](ResponseListInboxDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="sendEmailFromUserUsingPOST"></a>
# **sendEmailFromUserUsingPOST**
> Response sendEmailFromUserUsingPOST(apiKey, uuid, sendEmailDto)

Send an email

Send an email from the given inbox&#39;s email address. Useful if you need to test a user contacting you, for instance.

### Example
```javascript
var MailSlurpApiDocumentation = require('mail_slurp_api_documentation');

var apiInstance = new MailSlurpApiDocumentation.InboxControllerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

var uuid = "uuid_example"; // String | The inbox's id.

var sendEmailDto = new MailSlurpApiDocumentation.SendEmailDto(); // SendEmailDto | The email to send.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendEmailFromUserUsingPOST(apiKey, uuid, sendEmailDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| Your API Key. Sign up and find it in your dashboard. | [default to test]
 **uuid** | **String**| The inbox&#39;s id. | 
 **sendEmailDto** | [**SendEmailDto**](SendEmailDto.md)| The email to send. | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

