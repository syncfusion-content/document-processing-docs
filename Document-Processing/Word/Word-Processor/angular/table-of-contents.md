---
layout: post
title: Table of Contents in Angular DOCX Editor | Syncfusion
description: The Table of Contents feature in Angular DOCX Editor enables users to generate and update a structured index for quick document navigation.
platform: document-processing
control: Table of contents 
documentation: ug
domainurl: ##DomainURL##
---

# Table of Contents in Angular DOCX Editor

The table of contents in a document is the same as the list of chapters at the beginning of a book. It lists each heading in the document and the page number where that heading starts, with various options to customize the appearance.

## Inserting table of contents

Angular DOCX Editor exposes an API to insert table of contents at cursor position programmatically. You can specify the settings for table of contents explicitly. Otherwise, the default settings will be applied.

[`TableOfContentsSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/tableOfContentsSettings) contain the following properties:
* **startLevel**: Specifies the start level for constructing table of contents.
* **endLevel**: Specifies the end level for constructing table of contents.
* **includeHyperlink**: Specifies whether the link for headings is included.
* **includePageNumber**: Specified whether the page number of the headings is included.
* **rightAlign**: Specifies whether the page number is right aligned.
* **tabLeader**: Specifies the tab leader styles such as none, dot, hyphen, and underscore.
* **includeOutlineLevels**: Specifies whether the outline levels are included.

The following code illustrates how to insert a table of contents in the document editor.

```typescript
let tocSettings: TableOfContentsSettings =
{
    startLevel: 1, endLevel: 3, includeHyperlink: true, includePageNumber: true, rightAlign: true
};
this.documentEditor.editor.insertTableOfContents(tocSettings);
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/link-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/link-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/link-cs8" %}

## Update or edit table of contents

You can update or edit the table of contents using the built-in context menu shown by right-clicking it. Refer to the following screenshot.

![Table of Contents](images/table-of-contents.png)

* **Update Field**: Updates the headings in the table of contents with the same settings by searching the entire document.
* **Edit Field**: Opens the built-in table of contents dialog and allows you to modify its settings.

You can also do it programmatically by using the exposed API. Refer to the following sample code.

```typescript
  let tocSettings: TableOfContentsSettings =
  {
      startLevel: 1, endLevel: 3, includeHyperlink: true, includePageNumber: true, rightAlign: true
  };
  this.documentEditor.editor.insertTableOfContents(tocSettings);

```

N> Same method is used for inserting, updating, and editing table of contents. This will work based on the current element at cursor position and the optional settings parameter. If table of contents is present at cursor position, the update operation will be done based on the optional settings parameter. Otherwise, the insert operation will be done.

## Online demo

Explore how to insert and update table of contents in Word documents using the Angular DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/table-of-contents).

## See also

* [Table of contents dialog](./dialog#table-of-contents-dialog)
