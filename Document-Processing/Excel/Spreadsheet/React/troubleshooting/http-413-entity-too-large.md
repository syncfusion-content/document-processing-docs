---
layout: post
title: HTTP 413 error in React Spreadsheet component | Syncfusion
description: Resolve the HTTP 413 'Entity too large' error when exporting large Excel files from React Spreadsheet by increasing server request limits.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Troubleshoot HTTP 413 "Entity too large" error

Sometimes, when exporting the Spreadsheet with a large dataset, an `Entity too large` issue may occur. This is related to an HTTP request attempting to receive a large amount of data. To resolve this, configure your server to handle larger data transfers.

## Solutions

To resolve this, configure your local Web API back-end to accept larger request bodies. Add the following settings to increase the allowed request size:

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

Additionally, we recommend setting the `isFullPost` property to `false` in the `beforeSave` event when exporting large Excel files. When `isFullPost` is `false`, to mitigate Spreadsheet can lead to performance issues such as timeouts or delays, particularly due to the size and complexity during export. See the `isFullPost` [documentation]((https://help.syncfusion.com/document-processing/excel/spreadsheet/react/performance-best-practices#handling-large-file-saves-with-isfullpost-option) ) for details.

## See Also

* [Performance Best Practices](../performance-best-practices)
* [Open Excel Files](../open-excel-files.md)
* [Save Excel Files](../save-excel-files.md)
* [Web Services](../web-services/webservice-overview.md)
