# Emaile2eClient.InboxcontrollerApi

All URIs are relative to *https://api.emaile2e.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](InboxcontrollerApi.md#createUsingPOST) | **POST** /inboxes | Create an inbox
[**deleteUsingDELETE**](InboxcontrollerApi.md#deleteUsingDELETE) | **DELETE** /inboxes/{uuid} | Delete an inbox
[**indexUsingGET**](InboxcontrollerApi.md#indexUsingGET) | **GET** /inboxes | List your inboxes
[**sendEmailUsingPOST**](InboxcontrollerApi.md#sendEmailUsingPOST) | **POST** /inboxes/{uuid} | Send an email
[**viewUsingGET**](InboxcontrollerApi.md#viewUsingGET) | **GET** /inboxes/{uuid} | Fetch emails for a given inbox


<a name="createUsingPOST"></a>
# **createUsingPOST**
> ResponseInboxDto createUsingPOST(apiKey)

Create an inbox

Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.

### Example
```javascript
var Emaile2eClient = require('emaile2e-client');

var apiInstance = new Emaile2eClient.InboxcontrollerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

apiInstance.createUsingPOST(apiKey).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="deleteUsingDELETE"></a>
# **deleteUsingDELETE**
> Response deleteUsingDELETE(apiKey, uuid)

Delete an inbox

Delete an inbox and all the emails associated with it.

### Example
```javascript
var Emaile2eClient = require('emaile2e-client');

var apiInstance = new Emaile2eClient.InboxcontrollerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

var uuid = "uuid_example"; // String | The inbox's id.

apiInstance.deleteUsingDELETE(apiKey, uuid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="indexUsingGET"></a>
# **indexUsingGET**
> ResponseListInboxDto indexUsingGET(apiKey)

List your inboxes

Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via &#x60;/inboxes/{uuid}&#x60;.

### Example
```javascript
var Emaile2eClient = require('emaile2e-client');

var apiInstance = new Emaile2eClient.InboxcontrollerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

apiInstance.indexUsingGET(apiKey).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="sendEmailUsingPOST"></a>
# **sendEmailUsingPOST**
> Response sendEmailUsingPOST(apiKey, uuid, sendEmailDto)

Send an email

Send an email from the given inbox&#39;s email address. Useful if you need to test a user contacting you, for instance.

### Example
```javascript
var Emaile2eClient = require('emaile2e-client');

var apiInstance = new Emaile2eClient.InboxcontrollerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

var uuid = "uuid_example"; // String | The inbox's id.

var sendEmailDto = new Emaile2eClient.SendEmailDto(); // SendEmailDto | The email to send.

apiInstance.sendEmailUsingPOST(apiKey, uuid, sendEmailDto).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="viewUsingGET"></a>
# **viewUsingGET**
> ResponseListEmailDto viewUsingGET(apiKey, uuid, opts)

Fetch emails for a given inbox

Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The &#x60;since&#x60; parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the &#x60;waitFor&#x60; parameter to hold a request open until the desired number of emails is present. If this number is not met after 60 seconds, an error will be returned.

### Example
```javascript
var Emaile2eClient = require('emaile2e-client');

var apiInstance = new Emaile2eClient.InboxcontrollerApi();

var apiKey = "test"; // String | Your API Key. Sign up and find it in your dashboard.

var uuid = "uuid_example"; // String | The inbox's id.

var opts = { 
  'minCount': 56, // Number | Wait a maximum of 60 seconds for atleast this many emails in an inbox before returning a result.
  'maxWait': 789, // Number | Maximum seconds API should spend retrying your inbox until the minCount is satisfied
  'since': new Date("2013-10-20T19:20:30+01:00") // Date | Filter for emails received on or after this ISO8601 LocalDateTime.
};
apiInstance.viewUsingGET(apiKey, uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| Your API Key. Sign up and find it in your dashboard. | [default to test]
 **uuid** | **String**| The inbox&#39;s id. | 
 **minCount** | **Number**| Wait a maximum of 60 seconds for atleast this many emails in an inbox before returning a result. | [optional] 
 **maxWait** | **Number**| Maximum seconds API should spend retrying your inbox until the minCount is satisfied | [optional] 
 **since** | **Date**| Filter for emails received on or after this ISO8601 LocalDateTime. | [optional] 

### Return type

[**ResponseListEmailDto**](ResponseListEmailDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

