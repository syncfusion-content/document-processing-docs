---
layout: post
title: Resolve HTTP 413 "Entity Too Large" error when exporting large JSON in React Spreadsheet
description: Fix the HTTP 413 error when exporting Spreadsheet data as JSON by configuring server request size limits in web.config and Program.cs, and adjusting client-side save settings for large datasets.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Troubleshoot HTTP 413 "Entity Too Large" error

When exporting a Spreadsheet with a large dataset as JSON using the `saveAsJson` method, you may encounter an **HTTP 413 - Entity Too Large** error. This error occurs because the JSON payload exceeds the maximum request size limit configured on the server.

## Understanding JSON Size with Spreadsheet

The `saveAsJson` method preserves all cell properties during conversion, including:
- Cell formatting and styles
- Values and data types
- Formulas and validation rules
- Conditional formatting
- All other cell metadata

This comprehensive preservation ensures data integrity but results in a larger JSON file size compared to the original Excel file, especially for spreadsheets with many rows, columns, and applied features.

> **Note:** The JSON size may vary based on the number of rows and columns used and the features applied in the Excel file.

## Reasons

- **Default server request size limits** – Web servers typically have a maximum allowed content length (e.g., 30MB default in IIS) to prevent resource exhaustion.
- **Large dataset export** – Spreadsheets with thousands of rows, columns, and styling produce larger JSON payloads that exceed default limits.
- **All cell properties preserved** – The JSON includes complete cell metadata (formatting, styles, values, etc.), increasing payload size.

## Solutions

To resolve the HTTP 413 error, configure your server to accept larger request sizes:

### Server-side Configuration

#### For ASP.NET Core (Program.cs)

Add the following configuration in your `Program.cs` to increase the allowed request size:

```csharp
builder.Services.Configure<FormOptions>(options =>
{
    options.ValueLengthLimit = int.MaxValue; // or set a custom larger value
    options.KeyLengthLimit = int.MaxValue;
    options.MultipartBodyLengthLimit = long.MaxValue;
});
```

#### For IIS (web.config)

Update your `web.config` file to increase the maximum allowed content length:

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

The value `2147483647` represents 2GB; adjust as needed for your use case.

### Client-side Optimization

For better performance when exporting larger Excel files, set the `isFullPost` property to `false` in the `beforeSave` event:

```javascript
beforeSave: function(args) {
    args.isFullPost = false;
}
```

This optimization reduces memory usage during the save operation.

## Implementation Example

{% tabs %}
{% highlight javascript tabtitle="Client-side (React)" %}

import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  const beforeSave = (args) => {
    // Optimize for large exports
    args.isFullPost = false;
  };

  const exportAsJson = () => {
    if (spreadsheetRef.current) {
      spreadsheetRef.current.saveAsJson({
        fileName: 'large-spreadsheet.json'
      });
    }
  };

  return (
    <div>
      <button onClick={exportAsJson}>Export as JSON</button>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        beforeSave={beforeSave}
        allowOpen={true}
        allowSave={true}
      >
        <SheetsDirective>
          <SheetDirective name="Sheet1">
            {/* Add your data here */}
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;

{% endhighlight %}
{% highlight csharp tabtitle="Server-side (ASP.NET Core)" %}

// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Add Spreadsheet services
builder.Services.AddControllers();

// Configure request size limits for large file uploads
builder.Services.Configure<FormOptions>(options =>
{
    options.ValueLengthLimit = int.MaxValue;
    options.KeyLengthLimit = int.MaxValue;
    options.MultipartBodyLengthLimit = long.MaxValue;
});

// Configure request size limit at the IIS module level
builder.Services.Configure<IISServerOptions>(options =>
{
    options.MaxRequestBodySize = long.MaxValue;
});

var app = builder.Build();

app.UseRouting();
app.MapControllers();
app.Run();

{% endhighlight %}
{% endtabs %}

## Verification Checklist

- ✓ Confirm whether you are using a local service, online service, or Docker service.
- ✓ Add a breakpoint in the server during the save action to check for exceptions.
- ✓ Verify the Spreadsheet package version in both client and server.
- ✓ Test with the updated configuration before deploying to production.

## Performance Best Practices

For optimal performance when working with large datasets, refer to the [Performance Best Practices](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/performance-best-practices) documentation.

## Additional Resources

- **Client-side Sample:** [StackBlitz Example](https://stackblitz.com/)
- **Server-side Sample:** Refer to the [GitHub Web Service Example](https://github.com/SyncfusionExamples/EJ2-Spreadsheet-WebServices)
- **Docker Deployment:** [Syncfusion Spreadsheet Server Docker Image](https://hub.docker.com/r/syncfusion/spreadsheet-server)

N> The HTTP 413 error typically resolves after implementing the above server-side configurations. If the issue persists, verify that the service is running correctly and the configured size limits have been applied.
