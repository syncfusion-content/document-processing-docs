---
layout: post
title: Culture-Specific Formula Separators in Angular Spreadsheet | Syncfusion
description: Learn here all about culture specific formula separators in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Culture-Specific Formula Separators in Angular Spreadsheet

In earlier versions, even though culture-based Excel files could be imported into the Spreadsheet component, formulas did not calculate correctly. This happened because culture-based argument separators and support for culture-based formatted numeric values were not available. Starting from version **25.1.35**, you can now import culture-based Excel files into the Spreadsheet component with proper support.

> Before importing culture-based Excel files, make sure the Spreadsheet component is rendered with the matching culture. Also, start the import/export services with the same culture to ensure compatibility.

When loading spreadsheet data with culture-based formula argument separators using cell data binding, local/remote data, or JSON, ensure to set the [listSeparator](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#listseparator) property value as the culture-based list separator from your end. Additionally, note that when importing an Excel file, the [listSeparator](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#listseparator) property will be updated based on the culture of the launched import/export service.

In the example below, the Spreadsheet component is rendered with the **German culture[de]**. The example also shows how to set the culture-based argument separator and use culture-based formatted numeric values as arguments in formulas.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/formula-cs3/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/formula-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/formula-cs3" %}
