# MailslurpApiClient.UserControllerApi

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
import MailslurpApiClient from 'mailslurp-api-client';

let apiInstance = new MailslurpApiClient.UserControllerApi();

let jwtToken = "jwtToken_example"; // String | Cognito ID obtained during login

apiInstance.getUserUsingGET(jwtToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

