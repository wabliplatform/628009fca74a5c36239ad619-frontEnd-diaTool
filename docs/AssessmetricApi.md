# TempApi.AssessmetricApi

All URIs are relative to *http://83.212.100.226:3005/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createassessmetric**](AssessmetricApi.md#createassessmetric) | **POST** /assessmetric | Creates the data
[**deleteassessmetric**](AssessmetricApi.md#deleteassessmetric) | **DELETE** /assessmetric/{assessmetricId} | Delete the element
[**getAllassessmetric**](AssessmetricApi.md#getAllassessmetric) | **GET** /assessmetric/getAll | Get all the data
[**getassessmetric**](AssessmetricApi.md#getassessmetric) | **GET** /assessmetric/{assessmetricId} | Get the element
[**updateassessmetric**](AssessmetricApi.md#updateassessmetric) | **PUT** /assessmetric/{assessmetricId} | Updates the element



## createassessmetric

> Assessmetric createassessmetric(assessmetric)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AssessmetricApi();
let assessmetric = new TempApi.Assessmetric(); // Assessmetric | data to be created
apiInstance.createassessmetric(assessmetric, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmetric** | [**Assessmetric**](Assessmetric.md)| data to be created | 

### Return type

[**Assessmetric**](Assessmetric.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteassessmetric

> deleteassessmetric(assessmetricId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AssessmetricApi();
let assessmetricId = "assessmetricId_example"; // String | the Id parameter
apiInstance.deleteassessmetric(assessmetricId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmetricId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllassessmetric

> [Assessmetric] getAllassessmetric()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AssessmetricApi();
apiInstance.getAllassessmetric((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Assessmetric]**](Assessmetric.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getassessmetric

> Assessmetric getassessmetric(assessmetricId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AssessmetricApi();
let assessmetricId = "assessmetricId_example"; // String | the Id parameter
apiInstance.getassessmetric(assessmetricId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmetricId** | **String**| the Id parameter | 

### Return type

[**Assessmetric**](Assessmetric.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateassessmetric

> Assessmetric updateassessmetric(assessmetricId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AssessmetricApi();
let assessmetricId = "assessmetricId_example"; // String | the Id parameter
let opts = {
  'assessmetric': new TempApi.Assessmetric() // Assessmetric | data to be updated
};
apiInstance.updateassessmetric(assessmetricId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assessmetricId** | **String**| the Id parameter | 
 **assessmetric** | [**Assessmetric**](Assessmetric.md)| data to be updated | [optional] 

### Return type

[**Assessmetric**](Assessmetric.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

