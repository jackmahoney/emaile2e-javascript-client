# MailslurpClient.UserControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserUsingGET**](UserControllerApi.md#getUserUsingGET) | **GET** /user | Fetch a user


<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> UserDto getUserUsingGET(jwtToken)

Fetch a user

Used by the dashboard to fetch user information.

### Example
```javascript
var MailslurpClient = require('mailslurp-client');

var apiInstance = new MailslurpClient.UserControllerApi();

var jwtToken = "jwtToken_example"; // String | jwtToken

apiInstance.getUserUsingGET(jwtToken).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwtToken** | **String**| jwtToken | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

