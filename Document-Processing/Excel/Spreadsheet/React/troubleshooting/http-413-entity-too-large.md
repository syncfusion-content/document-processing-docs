---
layout: post
title: Fix HTTP 413 "Entity too large" error in React Spreadsheet component | Syncfusion
description: Resolve the HTTP 413 "Entity too large" error when exporting large datasets in React Spreadsheet by configuring server limits and adjusting client-side settings.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Troubleshoot HTTP 413 "Entity too large" error

When exporting a Spreadsheet with large datasets, you may encounter the **HTTP 413 "Content too large" or "Entity too large"** error. This error occurs when an HTTP request attempts to send or receive a data payload that exceeds the server's configured size limits.

## Reasons

The HTTP 413 error may occur due to the following reasons:

- **Server request size limit is too small** – The web server or application has a default maximum request body size that is too restrictive for large data exports.
- **Large dataset export** – Exporting Spreadsheets with thousands of rows or complex data structures generates large HTTP payloads that exceed the default limits.
- **Web API configuration not optimized** – The backend service (Program.cs and web.config) is not configured to handle large form submissions and multi-part data uploads.
- **No isFullPost optimization** – The client-side export is not optimized, sending the entire dataset in a single request instead of chunked or incremental submissions.

## Solutions

To resolve this issue, configure your server to handle larger data transfers and optimize the client-side export behavior.

### Step 1: Update web.config (Server-side)

Add or update the `requestLimits` configuration in your WebAPI's `web.config` file to increase the maximum allowed content length:

```xml
<configuration>
  <system.webServer>
    <security>
      <requestFiltering>
        <requestLimits maxAllowedContentLength="2147483647"></requestLimits>
      </requestFiltering>
    </security>
    <directoryBrowse enabled="true" />
  </system.webServer>
</configuration>
```

> **Note:** `maxAllowedContentLength="2147483647"` sets the limit to approximately 2 GB. Adjust this value based on your specific requirements and server resources.

### Step 2: Update Program.cs (Server-side)

Configure the Form Options in your `Program.cs` to handle larger form submissions:

```csharp
builder.Services.Configure<FormOptions>(options =>
{
    options.ValueLengthLimit = int.MaxValue; // or set a custom larger value
    options.KeyLengthLimit = int.MaxValue;
    options.MultipartBodyLengthLimit = long.MaxValue;
});
```

## Additional Recommendations

For optimal performance when exporting larger Excel files, we recommend setting the `isFullPost` property to `false` in the `beforeSave` event. This approach reduces memory overhead during the export process:

```javascript
beforeSave: function(args) {
    args.isFullPost = false;
}
```

By setting `isFullPost` to `false`, the Spreadsheet sends data in multiple chunks rather than as a single request, which helps prevent timeout issues and reduces memory consumption for large exports.

## For more information

- **Performance best practices**: For additional guidance on performance best practices when working with large datasets in the Spreadsheet component, refer to the [Performance Best Practices](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/performance-best-practices) documentation.
- **Client-side sample**: [StackBlitz Example (HTTP 413 Fix)](https://stackblitz.com/edit/ej2-react-spreadsheet-http-413)
- **Server-side sample**: Refer to the [GitHub WebService Example](https://github.com/SyncfusionExamples/EJ2-Spreadsheet-Server) for a complete server-side implementation.

> **Testing verification**: The configuration described above has been tested with large Excel files and successfully resolves the HTTP 413 error without data loss or corruption.
