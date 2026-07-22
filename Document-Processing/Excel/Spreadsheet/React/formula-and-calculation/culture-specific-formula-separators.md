---
layout: post
title: Culture-Specific Formula Separators in React Spreadsheet | Syncfusion
description: Learn here all about culture specific formula separators in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Culture-Specific Formula Separators in React Spreadsheet

In earlier versions, even though culture-based Excel files could be imported into the Spreadsheet component, formulas did not calculate correctly. This happened because culture-based argument separators and support for culture-based formatted numeric values were not available. Starting from version **25.1.35**, you can now import culture-based Excel files into the Spreadsheet component with proper support.

> Before importing culture-based Excel files, make sure the Spreadsheet component is rendered with the matching culture. Also, start the import/export services with the same culture to ensure compatibility.

When loading spreadsheet data with culture-based formula argument separators using cell data binding, local/remote data, or JSON, ensure to set the [listSeparator](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#listseparator) property value as the culture-based list separator from your end. Additionally, note that when importing an Excel file, the [listSeparator](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#listseparator) property will be updated based on the culture of the launched import/export service.

In the example below, the Spreadsheet component is rendered with the **German culture[de]**. The example also shows how to set the culture-based argument separator and use culture-based formatted numeric values as arguments in formulas.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="locale.json" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/locale.json %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/formula-cs3" %}