---
layout: post
title: Document loading issue in JavaScript(ES5) DOCX editor | Syncfusion
description: Document loading may fail with a 404 error if the Document Editor cannot reach a valid service URL, which may be due to the below reasons.
control: document loading issue with 404 error
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Document loading issue with 404 error in JavaScript(ES5) DOCX editor

If document loading fails and you see a 404 error in the browser console, the Document Editor is unable to reach a valid Web Service endpoint.

## Reasons

The 404 error may occur due to the following reasons:

- **The Web Service is not running or inactive** – When hosting your own ASP.NET Core Web API, the server may be stopped or not deployed correctly, causing required endpoints such as `/Import` or `/SpellCheck` to return 404.
- **The configured `serviceUrl` is invalid** – Issues like a missing trailing slash (`/`), wrong port number, incorrect API route, or typos will cause the editor to call incorrect endpoints.
- **The application is using an old or discontinued Document Editor service URL** – When using an old Document Editor service URL which no longer valid (`https://ej2services.syncfusion.com/production/web-services/api/documenteditor/`).

## Solution

1. Update the application to use the new hosted Document Editor Web Service URL introduced in v31.x.x. For example:

    ```javascript
    container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
    ```

2. If you are using your own hosted Web API, ensure that the Web Service is running, active, and the configured service URL is valid.

> Note: The hosted Web API link is provided for demonstration and evaluation only. For production use, host your own web service with the required server configuration. See the GitHub Web Service example or use the Docker image for deployment guidance.

---