---
layout: post
title: Template in React Spreadsheet component | Syncfusion
description: Learn here all about Template in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Spreadsheet component

Cell Template is used for adding HTML elements into Spreadsheet. You can add the cell template in spreadsheet by using the `template` property and specify the address using the `address` property inside the `ranges` property. You can customize the Html elements similar to Syncfusion<sup style="font-size:70%">&reg;</sup> components (TextBox, DropDownList, RadioButton, MultiSelect, DatePicker etc) by using the `beforeCellRender` event. In this demo, Cell template is applied to `C2:C9` and instantiated with Html input components like TextBox, RadioButton, TextArea. You need to bind the events to perform any operations through HTML elements or Syncfusion<sup style="font-size:70%">&reg;</sup> components. Here, we have added `change` event in to the MultiSelect control, and we have updated the selected data into the spreadsheet cell through that change event.

The following sample describes the above behavior.

Sample link: [`Cell template`](https://ej2.syncfusion.com/react/demos/#/material/spreadsheet/cell-template)

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/template-cs1" %} 

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/react-ui-components/react-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://ej2.syncfusion.com/react/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)