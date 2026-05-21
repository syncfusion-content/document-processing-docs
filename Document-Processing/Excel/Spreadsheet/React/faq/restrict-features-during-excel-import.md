---
layout: post
title: How to Restrict Features During Server-Side Excel Import in Syncfusion Spreadsheet | Syncfusion
description: Learn how to restrict certain features from being processed on the server when importing large Excel files into the Syncfusion Spreadsheet React component.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Restricting Features During Server-Side Excel Import

You can control which features are processed on the server when importing large Excel files into the Syncfusion Spreadsheet React component. By configuring import options, you can optimize both performance and resource usage during the import process.


## Steps to Restrict Features During Server-Side Excel Import

1. Use the server-side API or import options provided by Syncfusion to specify which features should be included or excluded during Excel file import.
2. Configure the import settings to skip processing of features such as formulas, formatting, images, charts, validations, merged cells, and other elements based on your requirements.

```csharp
public IActionResult Open(IFormCollection openRequest) 
{ 
    OpenRequest open = new OpenRequest();
    ...
    open.ParseOptions = new WorkbookParseOptions() {
        IgnoreStyle = true, // Ignore cell styles (fonts, colors, borders, etc.)
        IgnoreFormat = true, // Ignore number and date/time formats
        IgnoreChart = true, // Ignore charts
        IgnoreImage = true, // Ignore images
        IgnoreMergedCell = true, // Ignore merged cells
        IgnoreFormula = true, // Ignore formulas
        IgnoreValidation = true, // Ignore data validations
        IgnoreConditionalFormat = true // Ignore conditional formatting
    };
    ...
    return Content(Workbook.Open(open)); 
}
```

- Adjust these options according to your requirements and the available API in your Syncfusion Spreadsheet version.
- Excluding unnecessary features can significantly improve import speed and reduce server load when working with large files.

For more information, refer to the [parse options](../open-excel-files#optimize-open-performance-with-parsing-options) section of the documentation.