---
layout: post
title: How to Use Custom Fonts in ASP.NET MVC DOCX Editor | Syncfusion
description: Register and use custom fonts in Syncfusion® ASP.NET MVC DOCX Editor so documents render with fonts not installed on the user's machine.
platform: document-processing
control: Use custom fonts
documentation: ug
---

# How to Use Custom Fonts in ASP.NET MVC DOCX Editor

The [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) supports custom fonts so that you can use fonts that are not installed on the user's machine. This is helpful when the document contains a specific font, such as a company-branded font, a regional language font, or any other font that is not available by default in the browser.

To use a custom font in the Document Editor, register the font using the `setCustomFonts` API and add the font family name to the `fontFamilies` collection in the `documentEditorSettings` property. The fonts added to the `fontFamilies` collection are displayed in the font family drop-down list and can be applied within the document.

The following example code illustrates how to register a custom font and add it to the font family drop-down list.

{% tabs %}
{% highlight html tabtitle="CSHTML" %}

```cshtml
@Html.EJS().DocumentEditorContainer("container").EnableToolbar(true).Height("590px").DocumentEditorSettings("settings").Render()
<script>
    // Add the custom font family to list it in the font drop-down list.
    var settings = { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Times New Roman', 'Microsoft YaHei'] };
    var container = document.getElementById('container').ej2_instances[0];
    // Register the custom font with its font file source.
    container.documentEditor.setCustomFonts([
      {
        fontFamily: 'Microsoft YaHei',
        src: "url('https://db.onlinewebfonts.com/t/e63653407669814f5b0eb9bbdc175f77.ttf') format('truetype')"
      }
    ]);
</script>
```

{% endhighlight %}
{% endtabs %}

