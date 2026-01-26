---
layout: post
title: Resolve “Web service is not listening” error in ASP.NET Core PDF Viewer | Syncfusion
description: Troubleshoot the “Web service is not listening” error in the Syncfusion ASP.NET Core PDF Viewer by validating network requests, cache configuration, and server availability.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Resolve “Web service is not listening” error

![Browser showing the Web service is not listening error](../images/webservice.png)

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer displays the **Web service is not listening** message when the viewer cannot reach its backend service or the service returns an unexpected error. Use the following steps to diagnose the request, review server responses, and apply the appropriate fix.

## Diagnose the service response

**Step 1:** Open the browser developer tools (right-click the page and select **Inspect**) and switch to the **Network** tab to monitor requests from the PDF Viewer.

![Developer tools Network tab displaying failed requests](../images/networktab.png)

**Step 2:** Reproduce the issue and select the failed request to inspect the response status, headers, and error payload. Capture the stack trace or error message to pinpoint the failing layer.

**Step 3:** Confirm that the request URL, HTTP method, and parameters match the controller action signature. Incorrect routes or query values prevent the service from resolving the document resource.

N> Ensure that the hosting environment has internet access (when required), the PDF service endpoint URL is correct, and the application can reach dependent resources such as storage accounts or caches.

## Common exceptions and fixes

### File not found

* Verify that `documentPath` and server-side file references point to existing files and that deployment scripts copy the assets to the published output.

* Update configuration settings or connection strings when file locations move between environments (for example, from local paths to Azure Blob Storage).

### Check the file path

Ensure that the file path you use to access the PDF file is correct and that the file exists in that location. You will need to update the file path if the file does not exist.

### Document cache not found

The `Document cache not found` exception in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer usually occurs when the cache used to store rendered PDF pages is missing or has been deleted. This can happen if the cache directory has been altered or removed, or if the application is running in a different environment than before.

### Check for multiple instances

Sometimes, multiple instances of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer may run simultaneously, which can lead to conflicts with the document cache. To check for this, open your computer’s Task Manager and look for any active Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer processes. If you find more than one, close all instances and then relaunch the viewer.

Additionally, implementing a Redis cache or a distributed caching mechanism can help manage document caching more efficiently and prevent such issues.

### Check your network connection

Make sure your network connection is stable and strong enough to support the web service you're trying to access. In some cases, simply restarting the service can resolve the issue. Try stopping and then starting the service again to see if that helps.

### Document pointer does not exist in the cache

The Document pointer does not exist in the cache exception in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer typically indicates a problem with loading or caching the PDF document. This error can arise due to several reasons.

To resolve this issue, you can follow these steps:

**Step 1: Clear the cache.***
Locate the cache directory, which is specified in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer’s settings or configuration files. Once found, delete the contents of the folder to remove any corrupted or outdated cache data.

**Step 2: Reload the document.**
Use the controller’s Load() method to reload the PDF. Before doing so, ensure that the document isn’t already loaded to avoid conflicts.

**Step 3: Restart the application.**
If clearing the cache doesn’t resolve the issue, try restarting the PDF Viewer application. This refreshes all components and may eliminate the error.

## Internal server error

Server-side failures can stem from document content, authentication, or environment-specific configuration. Review server logs to identify the underlying exception and, if necessary, share the failing document or logs with Syncfusion support for further analysis.
