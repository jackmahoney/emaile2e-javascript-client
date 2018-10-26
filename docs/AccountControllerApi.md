# MailslurpApiClient.AccountControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionUsingPOST**](AccountControllerApi.md#createSubscriptionUsingPOST) | **POST** /subscription | Upgrade a user to paid
[**getAccountsUsingGET**](AccountControllerApi.md#getAccountsUsingGET) | **GET** /accounts | List available account types


<a name="createSubscriptionUsingPOST"></a>
# **createSubscriptionUsingPOST**
> UserDto createSubscriptionUsingPOST(jwtToken, stripeToken)

Upgrade a user to paid

For use in dashboard

### Example
```javascript
import MailslurpApiClient from 'mailslurp-api-client';

let apiInstance = new MailslurpApiClient.AccountControllerApi();

let jwtToken = "jwtToken_example"; // String | Cognito ID obtained during login

let stripeToken = "stripeToken_example"; // String | Stripe user payment confirmation token

apiInstance.createSubscriptionUsingPOST(jwtToken, stripeToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwtToken** | **String**| Cognito ID obtained during login | 
 **stripeToken** | **String**| Stripe user payment confirmation token | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAccountsUsingGET"></a>
# **getAccountsUsingGET**
> AccountsDto getAccountsUsingGET()

List available account types

For use in dashboard

### Example
```javascript
import MailslurpApiClient from 'mailslurp-api-client';

let apiInstance = new MailslurpApiClient.AccountControllerApi();
apiInstance.getAccountsUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountsDto**](AccountsDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

