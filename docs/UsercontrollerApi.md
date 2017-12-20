# Emaile2eClient.UsercontrollerApi

All URIs are relative to *https://api.emaile2e.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserUsingGET**](UsercontrollerApi.md#getUserUsingGET) | **GET** /user | Fetch a user


<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> UserDto getUserUsingGET(jwtToken)

Fetch a user

Used by the dashboard to fetch user information.

### Example
```javascript
var Emaile2eClient = require('emaile2e-client');

var apiInstance = new Emaile2eClient.UsercontrollerApi();

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

