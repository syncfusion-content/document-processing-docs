---
layout: post
title: Fix HTTP 413 "Entity too large" error in React Spreadsheet component | Syncfusion
description: Resolve the HTTP 413 "Entity too large" error when exporting large datasets in React Spreadsheet by configuring server limits and adjusting client-side settings.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Troubleshoot HTTP 413 "Entity too large" error

Sometimes, when exporting the Spreadsheet with a large dataset, an `Entity too large` issue may occur. This is related to an HTTP request attempting to receive a large amount of data. To resolve this, configure your server to handle larger data transfers.

## Solutions

To resolve this, configure your local Web API backend to accept larger request bodies. Add the following settings to increase the allowed request size.

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

Additionally, we recommend setting the `isFullPost` property to `false` in the `beforeSave` event when exporting large Excel files. When `isFullPost` is `false`, the Spreadsheet sends the file data in multiple smaller requests instead of a single large POST; this reduces the chance of timeouts and lowers server memory usage during export. For more details about [isFullPost](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/performance-best-practices#handling-large-file-saves-with-isfullpost-option) documentation link.

## See Also

- **Performance best practices**: For additional guidance on performance best practices when working with large datasets in the Spreadsheet component, refer to the [Performance Best Practices](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/performance-best-practices) documentation.
- **Client-side sample**: [StackBlitz Example (HTTP 413 Fix)](https://stackblitz.com/edit/ej2-react-spreadsheet-http-413)
- **Server-side sample**: Refer to the [GitHub WebService Example](https://github.com/SyncfusionExamples/EJ2-Spreadsheet-Server) for a complete server-side implementation.

> **Testing verification**: The configuration described above has been tested with large Excel files and successfully resolves the HTTP 413 error without data loss or corruption.
