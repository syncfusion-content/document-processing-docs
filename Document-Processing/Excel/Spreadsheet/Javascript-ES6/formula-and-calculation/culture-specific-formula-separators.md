---
layout: post
title: Culture-Specific Formula Separators in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about culture-specific formula separators in the Syncfusion JavaScript ES6 Spreadsheet component and regional formula support.
control: Formulas 
platform: document-processing
documentation: ug
---

# Culture-Specific Formula Separators in JavaScript ES6 Spreadsheet

In earlier versions, even though culture-based Excel files could be imported into the Spreadsheet component, formulas did not calculate correctly. This happened because culture-based argument separators and support for culture-based formatted numeric values were not available. Starting from version **25.1.35**, you can now import culture-based Excel files into the Spreadsheet component with proper support.

> Before importing culture-based Excel files, make sure the Spreadsheet component is rendered with the matching culture. Also, start the import/export services with the same culture to ensure compatibility.

When loading spreadsheet data with culture-based formula argument separators using cell data binding, local/remote data, or JSON, ensure to set the [listSeparator](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#listseparator) property value as the culture-based list separator from your end. Additionally, note that when importing an Excel file, the [listSeparator](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#listseparator) property will be updated based on the culture of the launched import/export service.

In the example below, the Spreadsheet component is rendered with the **German culture[de]**. The example also shows how to set the culture-based argument separator and use culture-based formatted numeric values as arguments in formulas.

```javascript
import { Spreadsheet, registerLocale } from '@syncfusion/ej2-spreadsheet';
import { de } from '@syncfusion/ej2-locale';

// Register German locale
registerLocale(de);

let spreadsheet = new Spreadsheet({
    sheets: [{
        ranges: [{ dataSource: data }],
        columns: [
            { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 },
            { width: 100 }, { width: 100 }
        ]
    }],
    locale: 'de',
    listSeparator: ';'  // German list separator
});

spreadsheet.appendTo('#spreadsheet');
```
