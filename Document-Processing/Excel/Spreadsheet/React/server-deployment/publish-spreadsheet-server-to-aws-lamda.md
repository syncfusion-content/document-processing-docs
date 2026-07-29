---
layout: post
title: Deploy Spreadsheet Server to AWS Lambda
description: Learn how to deploy the Syncfusion Spreadsheet Server to AWS Lamda
control: How to deploy eploy the Syncfusion Spreadsheet Server to AWS Lamda
platform: document-processing
documentation: ug
---

# Publish Spreadsheet Server to AWS Lambda Visual Studio

## Prerequisites

* [`AWS account`](https://aws.amazon.com/lambda/) with `IAM credentials`
* The Spreadsheet [`Web API`](https://github.com/SyncfusionExamples/EJ2-Spreadsheet-WebServices/tree/main/WebAPI) project (Check out our detailed [`blog`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) to set up the web service locally).

## Publish to AWS Lambda Service
**Step 1:** Server-Side changes

* Opening the file:
The client converts the Excel file to base64 and sends it to the hosted Open endpoint - then simply loads the response into the Syncfusion React Spreadsheet. The AWS Lambda backend decodes the file, processes it with Workbook.Open, and returns spreadsheet-ready JSON for instant rendering on the frontend. You can refer to this [documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/open-excel-files#open-excel-files-with-aws-lambda) to know about the opening the file with AWS Lambda service.

* Saving the file:
The client converts the spreadsheet to JSON using the [saveAsJson](https://helpej2.syncfusion.com/react/documentation/api/spreadsheet/#saveasjson) method and sends it to AWS Lambda via fetch. It then decodes the base64 Excel response and creates a downloadable Excel file using a Blob. Receive the spreadsheet JSON in your Lambda function, convert it to an Excel file using Workbook.Save, and return it as a base64 string for secure client-side download. You can refer to this [documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/save-excel-files#save-excel-files-with-aws-lambda) to know about the saving the file with AWS Lambda service.


**Step 2:** Deploy ASP.NET Core Spreadsheet Web API Service to AWS Lambda

* Open `WebAPI project → Extensions > Manage Extensions → install AWS Toolkit with Amazon Q`. Restart VS.
* From Extensions menu, select `Getting Started → enable AWS Toolkit with IAM credentials`.
* Install the NuGet package: `Amazon.Lambda.AspNetCoreServer.Hosting`.
* In WebAPI.csproj, add:
```csharp
<AWSProjectType>Lambda</AWSProjectType>
```
* In program.cs, add:
```csharp
builder.Services.AddAWSLambdaHosting(LambdaEventSource.RestApi);
```
* In `Solution Explorer → right-click project → Publish to AWS Lambda`.
* Then enter your AWS credentials, choose your existing Lambda function or create a new function, enter the Handler name that matches your project name, and upload.
* Host your project by creating a REST API in AWS API Gateway.
* Integrate your API with Lambda by editing the integration, selecting your region and function, enabling Lambda Proxy Integration, and saving.
* Deploy your API by selecting the Deploy API option and creating a new stage name. The hosted URL can then be used for open and save fetch requests in your React Spreadsheet sample.