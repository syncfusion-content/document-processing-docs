---
layout: post
title: Customize Color Picker in ASP.NET Core DOCX Editor | Syncfusion
description: Learn here all about how to customize the color picker in Syncfusion ASP.NET Core Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---


# How to Customize the Color Picker in ASP.NET Core Document Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides options to customize the color picker using `colorPickerSettings` in `DocumentEditorSettings`. The color picker offers customization options for the default appearance, by allowing selection between Picker or Palette mode, for font and border colors.

Similarly, you can use the `documentEditorSettings` property for the Document Editor as well.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-color-picker/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="customize-color-picker.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/customize-color-picker/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


The following table illustrates all the possible properties for the color picker.

| Property | Behavior |
|---|---|
| columns | It is used to render the Color Picker palette with the specified number of columns. Defaults to 10 columns. |
| disabled | It is used to enable or disable the Color Picker component. If it is disabled, the Color Picker popup will not open. Defaults to false. |
| mode | It is used to render the Color Picker with the specified mode (`Picker` or `Palette`). Defaults to `Picker`. |
| modeSwitcher | It is used to show or hide the mode switcher button of the Color Picker component. Defaults to true. |
| showButtons | It is used to show or hide the control buttons (apply or cancel) of the Color Picker component. Defaults to true. |


N> According to the Word document specifications, it is not possible to modify the predefined highlight colors. This means that the range of highlight colors provided by default cannot be customized or expanded. Users must work with the existing color palette, as no functionality currently exists to modify these predefined highlighting options.

## Online Demo

Explore how to customize the color picker in the ASP.NET Core Document Editor for formatting Word documents in this live [ASP.NET Core Color Picker Customization demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/colorpickercustomization#/tailwind3).
