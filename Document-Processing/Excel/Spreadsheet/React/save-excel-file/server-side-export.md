---
layout: post
title: Server-Side Export in React Spreadsheet | Syncfusion
description: Learn about saving Excel files using server-side processing in the Syncfusion React Spreadsheet component with saveUrl configuration.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Server-side export in React Spreadsheet

Server-side export sends workbook data to a server endpoint for processing when `saveUrl` is configured. The Spreadsheet serializes content into JSON, sends it to the server, and receives a generated Excel file for download.

React Spreadsheet uses `Syncfusion.EJ2.Spreadsheet` library on the server to convert JSON data into formatted Excel files. This library is built on `Syncfusion XlsIO` implemented using .NET Frameworks.

## How server-side export works

When `saveUrl` is configured, the Spreadsheet component uses server-assisted workflow for saving Excel files. The process involves:

1. Serializing Spreadsheet content into structured JSON workbook
2. Sending JSON data to server endpoint for processing
3. Converting JSON to formatted Excel file using Syncfusion libraries
4. Returning generated file to client for download

Factors such as formatting, styles, and advanced features influence processing time. After file generation, it is sent back to client for download.

## Configure server-side export

To use server-side export, specify the service URL using the `saveUrl` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs5" %}

## Hosted Syncfusion Service URLs

For demonstration and evaluation purposes, Syncfusion provides hosted service URLs:

```
openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
```

For production use, set up your own web service for data privacy and security.

## Server Configuration

Example server-side `Save` endpoint using ASP.NET Core WebAPI:

```csharp
// Save action
[HttpPost]
[Route("Save")]
public IActionResult Save([FromForm] SaveSettings saveSettings)
{
    if(saveSettings && saveSettings.JSONData) {
        return Workbook.Save(saveSettings);
    }
    return BadRequest("saveSettings or JSONData was not available.");
}
```

## Install Required Dependencies

For spreadsheet save operations, install the following NuGet packages:

| Platform      | Assembly                                 | NuGet Package |
|---------------|------------------------------------------|---------------|
| ASP.NET Core  | Syncfusion.EJ2.Spreadsheet.AspNet.Core <br> Syncfusion.EJ2.AspNet.Core <br/> Syncfusion.XlsIORenderer.Net.Core | [Syncfusion.EJ2.Spreadsheet.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core) <br>[Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core) <br/> [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) |
| ASP.NET MVC5  | Syncfusion.XlsIO.AspNet.Mvc5<br/>Syncfusion.ExcelToPdfConverter.AspNet.Mvc5<br/>Syncfusion.Pdf.AspNet.Mvc5<br/>Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5<br/>Syncfusion.EJ2.MVC5 | [Syncfusion.XlsIO.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.XlsIO.AspNet.Mvc5)<br/>[Syncfusion.ExcelToPdfConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet.Mvc5)<br/>[Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/)<br/>[Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5)<br/>[Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) |

## UI options to Save Excel files

In user interface, you can save Spreadsheet data as Excel document by clicking `File > Save As` menu item in ribbon.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs5" %}

## Save Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the `save` method of the Spreadsheet component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { salesData } from './data';
import { SpreadsheetComponent, SheetsDirective, RangesDirective, RangeDirective,SheetDirective} from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);
  const onClick = () => {
    spreadsheetRef.current?.save({
      url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
      fileName: 'Worksheet',
      saveType: 'Xlsx',
    });
  };

  return (
    <div>
      <SpreadsheetComponent ref={spreadsheetRef}>
        <SheetsDirective>
          <SheetDirective name="Car Sales Report">
            <RangesDirective>
              <RangeDirective dataSource={salesData} />
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
      <button onClick={onClick}>Save</button>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('spreadsheet'));
root.render(<App />);
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { salesData } from './data';
import { SpreadsheetComponent, SheetsDirective, RangesDirective, RangeDirective,SheetDirective} from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef<SpreadsheetComponent>(null);
  const onClick = () => {
    spreadsheetRef.current?.save({
      url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
      fileName: 'Worksheet',
      saveType: 'Xlsx',
    });
  };

  return (
    <div>
      <SpreadsheetComponent ref={spreadsheetRef}>
        <SheetsDirective>
          <SheetDirective name="Car Sales Report">
            <RangesDirective>
              <RangeDirective dataSource={salesData} />
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
      <button onClick={onClick}>Save</button>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('spreadsheet')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Supported Excel file formats for Save

The following file formats are supported when saving the Spreadsheet component:

* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97–2003 Workbook (.xls)
* Comma-Separated Values (.csv)
* Portable Document Format (.pdf)

## Export options

### Save Excel files as Blob

By default, the Spreadsheet control saves the Excel file and downloads it to the local file system. If you want to save an Excel file as blob data, you need to set `needBlobData` property to **true** and `isFullPost` property to **false** in the [beforeSave](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforesave) event of the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/save-as-blobdata-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/save-as-blobdata-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/save-as-blobdata-cs1" %}

### Save Workbook as JSON

Our Spreadsheet component allows you to export an entire workbook as a JSON object.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/save-as-json-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/save-as-json-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/save-as-json-cs1" %}

## Advanced Save options

### Configure JSON serialization

You can selectively ignore some features while saving the Spreadsheet as a JSON object by configuring serialization options.

```ts
spreadsheet.saveAsJson({ onlyValues: true });
```

| Options | Description |
| ----- | ----- |
| onlyValues |  If **true**, includes only the cell values in the JSON output. |
| ignoreStyle | If **true**, excludes styles from the JSON output. |
| ignoreFormula | If **true**, excludes formulas from the JSON output. |
| ignoreFormat | If **true**, excludes number formats from the JSON output. |
| ignoreConditionalFormat | If **true**, excludes conditional formatting from the JSON output. |
| ignoreValidation | If **true**, excludes data validation rules from the JSON output. |
| ignoreFreezePane | If **true**, excludes freeze panes from the JSON output. |
| ignoreWrap | If **true**, excludes text wrapping settings from the JSON output. |
| ignoreChart | If **true**, excludes charts from the JSON output. |
| ignoreImage | If **true**, excludes images from the JSON output. |
| ignoreNote | If **true**, excludes notes from the JSON output. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/save-as-json/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/save-as-json/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/save-as-json" %}

## Customization

### Pass custom parameters during Save

Passing the custom parameters from client to server by using `beforeSave` event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs6" %}

Server side code snippets:

```csharp
public IActionResult Save(SaveSettings saveSettings, string customParams)
    {
        Console.WriteLine(customParams); // you can get the custom params in controller side
        return Workbook.Save(saveSettings);
    }
```

### Add custom headers to Save requests

You can add your own custom header to the save action in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs7" %}

### Customize PDF export orientation

By default, the PDF document is created in **Portrait** orientation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs8" %}

## See also

* [Web Services](../web-services/webservice-overview)
* [Save to AWS S3](./to-aws-s3-bucket)
* [Save to Azure Blob Storage](./to-azure-blob-storage)
* [Save to Google Cloud Storage](./to-google-cloud-storage)
* [Save to Google Drive](./to-google-drive)