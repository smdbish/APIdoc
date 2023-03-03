## Description
#### Usage
SoftMouse.NET provides this document to our customers or partner companies for integrating with their applications or systems.

#### Potential Reader
Technical engineers or software developers that work for SoftMouse.NET customers or partners.


## API Standard

#### Date & Time
Except special fields that we declared or defined for special customers, all date and time fields will use UTC time, and follow ISO8601 standard. Detail restriction as below:
* Date field use the format: yyyy-MM-dd, e.g. 2020-06-01 express June 01, 2020
* Time field use the format: HH:mm:ssZ, e.g. 23:00:10Z express UTC time 10 seconds past 23
* DateTime field use the format: yyyy-MM-dd’T’HH:mm:ss’Z’. e.g. 2020-06-01T23:00:10Z express UTC time 23:00:10 on June 01, 2020

#### API Call
* Use curl to call our API. In this document all examples use this. You can refer detail API example.
* Use restful API tools, like postman and any others. (You can find similar add-on tools for Chrome and Firefox.)
* Use programs (Java, Python or any others) to call our API. You can find many examples from google, and follow that.

#### Common Request Header
|  Header Name   | Must-Have  | Description  |
|  ----  | ----  | ----  |
|  Content-Type  |    yes     |application/json; charset=utf-8  |




#### Common Response Header
|  Header Name   |  Description  |
|  ----  | ----  | 
|  Content-Type  |    application/json; charset=utf-8















#### Response Message Format
|  Field Name   | Field Data Type  | Description  |
|  ----  | ----  | ----  |
|  messageCode  |    String     |return code, refer ‘message code table’  |
|  messageDesc  |    String     |return message.|
|  respObj      | String or a JSON String|return value.







