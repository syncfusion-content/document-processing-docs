---
layout: post
title: Document loading issue in React DOCX Editor component | Syncfusion
description: Document loading may fail with a 404 error if the React Document Editor cannot reach a valid service URL.
control: document loading issue with 404 error
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Document loading issue with 404 error in React Document Editor component

If document loading fails and you see a 404 error in the browser console, the [React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) is unable to reach a valid Web Service endpoint.

## Reasons

The 404 error may occur due to the following reasons:

- **The Web Service is not running or inactive** – When hosting your own Web Service, the server may be stopped, not deployed correctly, or configured such that required endpoints (e.g., `/Import`, `/SpellCheck`) return 404.
- **The configured `serviceUrl` is invalid** – A missing trailing slash (`/`), wrong port, incorrect API route, or typos cause the editor to call invalid endpoints.
- **The application is using an old or discontinued Document Editor service URL** – When using an old Document Editor service URL that is no longer valid.

## Solutions

- Update the application to use the new hosted Document Editor Web Service URL introduced in v31.x.x. For example:

    ```javascript
    container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
    ```

N> 1. The hosted Web Service link is provided for demonstration and evaluation only.
N> 2. For production deployment, please host your own Web Service with your required server configurations.
N> 3. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own Web Service and use it for the `serviceUrl` property.

- If you are using your own hosted Web Service, ensure that the Web Service is running, active, and the configured service URL is valid.