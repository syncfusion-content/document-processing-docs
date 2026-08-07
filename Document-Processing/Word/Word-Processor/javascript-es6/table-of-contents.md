---
layout: post
title: Table of contents in JavaScript (ES6) Document Editor control | Syncfusion
description: Learn here all about Table of contents in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Table of contents 
documentation: ug
domainurl: ##DomainURL##
---

# Table of contents in JavaScript (ES6) Document Editor control

The table of contents in a document is the same as the list of chapters at the beginning of a book. It lists each heading in the document and the page number where that heading starts, with various options to customize the appearance.

## Inserting table of contents

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) exposes an API to insert a table of contents at the cursor position programmatically. You can specify the settings for table of contents explicitly. Otherwise, the default settings will be applied.

[`TableOfContentsSettings`](https://ej2.syncfusion.com/documentation/api/document-editor/tableOfContentsSettings/) contain the following properties:
* **startLevel**: Specifies the start level for constructing table of contents.
* **endLevel**: Specifies the end level for constructing table of contents.
* **includeHyperlink**: Specifies whether the link for headings is included.
* **includePageNumber**: Specified whether the page number of the headings is included.
* **rightAlign**: Specifies whether the page number is right aligned.
* **tabLeader**: Specifies the tab leader styles such as none, dot, hyphen, and underscore.
* **includeOutlineLevels**: Specifies whether the outline levels are included.

The following code illustrates how to insert a table of contents in the Document Editor.

```ts
let tocSettings: TableOfContentsSettings =
{
    startLevel: 1, endLevel: 3, includeHyperlink: true, includePageNumber: true, rightAlign: true
};
//Insert table of contents in Document Editor.
editor.editorModule.insertTableOfContents(tocSettings);
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/table-of-contents-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/table-of-contents-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/table-of-contents-cs1" %}

## Update or edit table of contents

You can update or edit the table of contents using the built-in context menu shown up by right-clicking it. Refer to the following screenshot.

![Table of Contents](images/table-of-contents.png)

* **Update Field**: Updates the headings in table of contents with same settings by searching the entire document.
* **Edit Field**: Opens the built-in table of contents dialog and allows you to modify its settings.

You can also do it programmatically by using the exposed API. Refer to the following sample code.

```ts
let documentEditor: DocumentEditor = new DocumentEditor({ enableEditor: true, isReadOnly: false, enableSelection: true });
documentEditor.appendTo('#DocumentEditor');
/*Open any existing document*/
documentEditor.open('');
//Table of contents settings.
let tocSettings: TableOfContentsSettings =
{
    startLevel: 1, endLevel: 3, includeHyperlink: true, includePageNumber: true, rightAlign: true
};
//Insert table of contents in Document Editor.
documentEditor.editorModule.insertTableOfContents(tocSettings);
```

N> The same method is used for inserting, updating, and editing table of contents. This will work based on the current element at the cursor position and the optional settings parameter. If the table of contents is present at the cursor position, the update operation will be done based on the optional settings parameter. Otherwise, the insert operation will be done.

## Online demo

Explore how to insert and update table of contents in Word documents using the JavaScript Document Editor in this live [JavaScript Table of Contents demo](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/table-of-contents.html).

## See also

* [Table of contents dialog](./dialog#table-of-contents-dialog)
