---
layout: post
title: Content Controls in React DOCX Editor | Syncfusion
description: The content control feature in React DOCX Editor provides built-in content controls to create structured and interactive document templates.
control: Content Control 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Content Controls in React DOCX Editor

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides support for inserting, editing content controls.

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

Replace an existing content control value with a new value using the [`importContentControlData`](https://ej2.syncfusion.com/react/documentation/api/document-editor#importcontentcontroldata) method. Pass one or more [`ContentControlInfo`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contentControlInfo) objects and specify the content control title and content control type to identify the content control and update them with new values.

The following code snippet illustrates how to import the content control properties.

{% highlight ts %}
let data: ContentControlInfo[] = [];
let contentControlData: ContentControlInfo = { title: placeHolderPrefix + 'Name', tag: '', value: 'John', canDelete: false, canEdit: false, type: 'RichText' };
data.push(contentControlData);
this.container.documentEditor.importContentControlData(data);
{% endhighlight %}

## Export Content Control Properties

Retrieve the content controls properties present in a document using [`exportContentControlData`](https://ej2.syncfusion.com/react/documentation/api/document-editor#exportcontentcontroldata) method. This method returns a collection of [`ContentControlInfo`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contentControlInfo) objects, allowing you to access properties such as the content control title, type, tag, and value.

The following code snippet illustrates how to export the content control properties.

{% highlight ts %}
let contentControlInfos: ContentControlInfo[] = this.container.documentEditor.exportContentControlData();
{% endhighlight %}

## Reset Content Control

Restore a content control to its default placeholder text (for example, "Click here or tap to insert text") using the [`resetContentControlData`](https://ej2.syncfusion.com/react/documentation/api/document-editor#resetcontentcontroldata) method. Pass one or more [`ContentControlInfo`](https://ej2.syncfusion.com/react/documentation/api/document-editor/contentcontrolinfo) objects and specify the content control title to identify the content controls to reset.

The following code snippet illustrates how to reset the content control properties:

{% highlight ts %}
let data: ContentControlInfo[] = [];
let contentControlData: ContentControlInfo = { title: placeHolderPrefix + 'Name', tag: '', value: 'John', canDelete: false, canEdit: false, type: 'RichText' };
data.push(contentControlData);
this.container.documentEditor.resetContentControlData(data);
{% endhighlight %}

N> Content controls with custom XML mapping of file type WordML are converted as normal Rich Text Content Control to provide lossless round-tripping upon saving.
