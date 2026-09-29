---
layout: post
title: Document Loading Issue in JavaScript DOCX Editor | Syncfusion
description: Troubleshoot the 404 error in Syncfusion JavaScript DOCX Editor by verifying the service URL configuration and ensuring the document service is accessible.
control: document loading issue with 404 error
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Document Loading Issue in JavaScript DOCX Editor

If document loading fails and you see a 404 error in the browser console, the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) is unable to reach a valid Web Service endpoint.

## Reasons

The 404 error may occur due to the following:

- **The Web Service is not running or inactive** – When hosting your own Web API, the server may be stopped or not deployed correctly, causing the required endpoints such as `/Import` or `/SpellCheck` to return 404.
- **The configured `serviceUrl` is invalid** – Issues like a missing trailing slash (`/`), wrong port number, incorrect API route, or typos will cause the editor to call incorrect endpoints.
- **The application is using an old or discontinued DOCX Editor service URL** – When using an old DOCX Editor service URL that is no longer valid.

## Solutions

- Update the application to use the new hosted DOCX Editor Web Service URL introduced in v31.x.x. For example:

    ```javascript
    container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
    ```

N> The hosted Web API link is provided for demonstration and evaluation only. For production deployment, please host your own web service with your required server configurations. You can refer to and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

- If you are using your own hosted Web API, ensure that the Web Service is running and the configured service URL is valid.