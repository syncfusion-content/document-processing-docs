# Document Loading Issue with 404 Error

If document loading fails and you see a 404 error in the browser console, the application is likely pointing to an old or retired Document Editor web service URL. Starting with v31.x.x the Document Editor Web Service was split into a separate hosted service and older public service endpoints were discontinued. Applications that continue to use the previous `serviceUrl` will be unable to load documents or perform [`operations which require server side interaction`](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es5/web-services-overview#which-operations-require-server-side-interaction).

This issue occurs if you:

1. Configuring the Document Editor `serviceUrl` to a old endpoint, for example:

	`https://ej2services.syncfusion.com/production/web-services/api/documenteditor/`

2. Attempting to open a document and observing a 404 (Not Found) in the browser console.
3. Noticing failed network calls to Document Editor Web API endpoints such as `/Import`, `/SystemClipboard`, or `/SpellCheck`.

## Root cause

The issue occurs because the application is using an old Document Editor service URL which no longer valid

## Solution

Update the application to use the new hosted Document Editor Web Service URL introduced in v31.x.x. For example:

```javascript
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
```

> Note: The hosted Web API link is provided for demonstration and evaluation only. For production use, host your own web service with the required server configuration. See the GitHub Web Service example or use the Docker image for deployment guidance.

---
