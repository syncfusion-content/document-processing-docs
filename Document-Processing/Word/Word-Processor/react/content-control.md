---
layout: post
title: Content Control in React DOCX Editor component | Syncfusion
description: Learn here all about Content Control in Syncfusion React DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Content Control 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Content Control in React Document Editor

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides support for inserting, editing content controls.

Content controls can be categorized based on their occurrence in a document as follows:

**Inline Content Control:** Among inline content within a paragraph as a child element.
**Block Content Control:** Among paragraphs and tables as a child of a Body or Header/Footer.

## Types of Content Controls

* Rich Text
* Plain Text
* Check Box
* Date Picker
* Drop-Down List and Combo Box
* Picture

## Insert Content Control

Content controls can be inserted using the [`insertContentControl`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertcontentcontrol) method in the editor module.

{% highlight ts %}
//Insert Rich Text Content Control
this.container.documentEditor.editor.insertContentControl('RichText');
//Insert Rich Text Content Control with default sfdt string
let sfdt = {"sections":[{"blocks":[{"inlines":[{"text": "Hello"}]}]}]};
this.container.documentEditor.editor.insertContentControl('RichText', sfdt);

//Insert Plain Text Content Control
this.container.documentEditor.editor.insertContentControl('Text');
//Insert Plain Text Content Control with default string
this.container.documentEditor.editor.insertContentControl('Text', 'Hello World');

//Insert CheckBox Content Control
this.container.documentEditor.editor.insertContentControl('CheckBox');
//Insert CheckBox Content Control with a checked state specified
this.container.documentEditor.editor.insertContentControl('CheckBox', true);

//Insert ComboBox Content Control
this.container.documentEditor.editor.insertContentControl('ComboBox');
//Insert ComboBox Content Control with items
this.container.documentEditor.editor.insertContentControl('ComboBox', 'One', ['One', 'Two', 'Three']);

//Insert Date Content Control
this.container.documentEditor.editor.insertContentControl('Date');
//Insert Date Content Control
this.container.documentEditor.editor.insertContentControl('Date', '01/01/2024');

//Insert DropDownList Content Control
this.container.documentEditor.editor.insertContentControl('DropDownList');
//Insert DropDownList Content Control with items
this.container.documentEditor.editor.insertContentControl('DropDownList', 'One', ['One', 'Two', 'Three']);

//Insert Picture Content Control
this.container.documentEditor.editor.insertContentControl('Picture');
//Insert Picture Content Control with default image
this.container.documentEditor.editor.insertContentControl('Picture', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADgSURBVEhLY3jx4sV/WuDBafCluXH/D6ydhlWObIMPLmn8/32KPBiD2OjyKAY7+zbDsX945/91azehiBWU9IPVgVwJMxSX4SgG65jXwrGVa+v/6TOXoojBDEZ2LQh/m676/+D+/XBzQJgsg0EY5GqQgSCDsYUz2QaDMCiosIUvCKMYDFKIjK9dvYrCB3kXJIaMkfUjY5JdDEpioCCAYZCFyGbAMFkGI0fcMDUYpAgZY4s8EEYWwxWBJLsYhJHFQIYjmwHDQ9xgkGEwDCp0QAYji8EMRhYjymBq4lGDofjFfwCV5AGEIf9DQQAAAABJRU5ErkJggg==');
{% endhighlight %}

## Import Content Control Properties

Content control properties can be set using the [`ContentControlInfo`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contentControlInfo) and imported using the [`importContentControlData`](https://ej2.syncfusion.com/react/documentation/api/document-editor#importcontentcontroldata) method.

{% highlight ts %}
let data: ContentControlInfo[] = [];
let contentControlData: ContentControlInfo = { title: placeHolderPrefix + 'Name', tag: '', value: 'John', canDelete: false, canEdit: false, type: 'RichText' };
data.push(contentControlData);
this.container.documentEditor.importContentControlData(data);
{% endhighlight %}

## Export Content Control Properties

Content control properties can be exported using the [`exportContentControlData`](https://ej2.syncfusion.com/react/documentation/api/document-editor#exportcontentcontroldata) method.

{% highlight ts %}
let contentControlInfos: ContentControlInfo[] = this.container.documentEditor.exportContentControlData();
{% endhighlight %}

## Reset Content Control

Content control properties can be reset using the [`resetContentControlData`](https://ej2.syncfusion.com/react/documentation/api/document-editor#resetcontentcontroldata) method.

{% highlight ts %}
let data: ContentControlInfo[] = [];
let contentControlData: ContentControlInfo = { title: placeHolderPrefix + 'Name', tag: '', value: 'John', canDelete: false, canEdit: false, type: 'RichText' };
data.push(contentControlData);
this.container.documentEditor.resetContentControlData(data);
{% endhighlight %}

N> Content controls with custom XML mapping of file type WordML are converted as normal Rich Text Content Control to provide lossless round-tripping upon saving.
