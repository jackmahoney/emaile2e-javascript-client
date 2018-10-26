# MailSlurpApiDocumentation.UserControllerApi

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
var MailSlurpApiDocumentation = require('mail_slurp_api_documentation');

var apiInstance = new MailSlurpApiDocumentation.UserControllerApi();

var jwtToken = "jwtToken_example"; // String | Cognito ID obtained during login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(jwtToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwtToken** | **String**| Cognito ID obtained during login | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

