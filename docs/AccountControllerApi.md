# MailslurpClient.AccountControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsUsingGET**](AccountControllerApi.md#getAccountsUsingGET) | **GET** /accounts | List available account types


<a name="getAccountsUsingGET"></a>
# **getAccountsUsingGET**
> ResponseListAccountDto getAccountsUsingGET()

List available account types

### Example
```javascript
var MailslurpClient = require('mailslurp-client');

var apiInstance = new MailslurpClient.AccountControllerApi();
apiInstance.getAccountsUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseListAccountDto**](ResponseListAccountDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

