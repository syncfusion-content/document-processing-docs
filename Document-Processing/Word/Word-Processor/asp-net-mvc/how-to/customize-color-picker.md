---
layout: post
title: How to Customize Color Picker in ASP.NET MVC DOCX Editor | Syncfusion
description: Customize the color picker appearance in Syncfusion® ASP.NET MVC DOCX Editor using color picker settings to match your application's design.
platform: document-processing
control: Customize Color Picker
documentation: ug
---


# How to Customize Color Picker in ASP.NET MVC DOCX Editor

Document Editor provides an option to customize the color picker using `colorPickerSettings` in Document Editor settings. The color picker offers customization options for the default appearance by allowing selection between Picker or Palette mode for font and border colors.

Similarly, you can use the `documentEditorSettings` property with the DocumentEditor control as well.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/customize-color-picker/razor %}
{% endhighlight %}
{% highlight c# tabtitle="customize-color-picker.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/customize-color-picker/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

The following table illustrates the available properties for the color picker.

| Property | Behavior |
|---|---|
| columns | Renders the ColorPicker palette with the specified number of columns. Defaults to 10 |
| disabled | Enables or disables the ColorPicker component. If disabled, the ColorPicker popup does not open. Defaults to false |
| mode | Renders the ColorPicker in the specified mode. Defaults to 'Picker' |
| modeSwitcher | Shows or hides the mode switcher button of the ColorPicker component. Defaults to true |
| showButtons | Shows or hides the control buttons (apply / cancel) of the ColorPicker component. Defaults to true |


>**Note**: According to the Word document specifications, it is not possible to modify the **`Predefined Highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded upon by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.

## Online Demo

Explore how to customize the color picker in the ASP.NET MVC Document Editor for formatting Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/colorpickercustomization#/tailwind3).