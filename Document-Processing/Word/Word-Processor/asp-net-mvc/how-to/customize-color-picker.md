---
layout: post
title: Customize Color Picker in Syncfusion  ASP.NET MVC Document Editor Component
description: Learn here all about how to customize color picker in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Color Picker
documentation: ug
---


# How to customize the color picker in Document Editor component

Document editor provides an options to customize the color picker using `colorPickerSettings` in Document editor settings. The color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors."

Similarly, you can use `documentEditorSettings` property for DocumentEditor also.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/customize-color-picker/razor %}
{% endhighlight %}
{% highlight c# tabtitle="customize-color-picker.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/customize-color-picker/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

The following table illustrates all the possible properties for the color picker.

| Property | Behavior |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |


>**Note**: According to the Word document specifications, it is not possible to modify the **`Predefined Highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded upon by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.
