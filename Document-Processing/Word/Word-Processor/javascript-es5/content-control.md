---
layout: post
title: Content control in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Content control in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Content control 
documentation: ug
domainurl: ##DomainURL##
---

# Content control in JavaScript (ES5) Document editor control

Document Editor provides support for inserting, editing content controls

Content controls can be categorized based on its occurrence in a document as follows,

InlineContentControl: Among inline content inside, as a child of a paragraph.
BlockContentControl: Among paragraphs and tables, as a child of a Body, HeaderFooter.

## Types of Content Controls

* Rich Text
* Plain Text
* Check Box
* Date picker
* Drop-Down List and Combo Box
* Picture

## Insert content control

Content control can be inserted using [`insertContentControl`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor/#insertContentControl) method in editor module.

{% highlight js %}
//Insert Rich Text Content Control
container.documentEditor.editor.insertContentControl('RichText');
//Insert Rich Text Content Control with default sfdt string
var sfdt = {"sections":[{"blocks":[{"inlines":[{"text": "Hello"}]}]}]};
container.documentEditor.editor.insertContentControl('RichText', sfdt);

//Insert Plain Text Content Control
container.documentEditor.editor.insertContentControl('Text');
//Insert Plain Text Content Control with default string
container.documentEditor.editor.insertContentControl('Text', 'Hello World');

//Insert CheckBox Content Control
container.documentEditor.editor.insertContentControl('CheckBox');
//Insert CheckBox Content Control with mention checked state
container.documentEditor.editor.insertContentControl('CheckBox', true);

//Insert ComboBox Content Control
container.documentEditor.editor.insertContentControl('ComboBox');
//Insert ComboBox Content Control with items
container.documentEditor.editor.insertContentControl('ComboBox', 'One', ['One', 'Two', 'Three']);

//Insert Date Content Control
container.documentEditor.editor.insertContentControl('Date');
//Insert Date Content Control
container.documentEditor.editor.insertContentControl('Date', '01/01/2024');

//Insert DropDownList Content Control
container.documentEditor.editor.insertContentControl('DropDownList');
//Insert DropDownList Content Control with items
container.documentEditor.editor.insertContentControl('DropDownList', 'One', ['One', 'Two', 'Three']);

//Insert Picture Content Control
container.documentEditor.editor.insertContentControl('Picture');
//Insert Picture Content Control with default image
container.documentEditor.editor.insertContentControl('Picture', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADgSURBVEhLY3jx4sV/WuDBafCluXH/D6ydhlWObIMPLmn8/32KPBiD2OjyKAY7+zbDsX945/91azehiBWU9IPVgVwJMxSX4SgG65jXwrGVa+v/6TOXoojBDEZ2LQh/m676/+D+/XBzQJgsg0EY5GqQgSCDsYUz2QaDMCiosIUvCKMYDFKIjK9dvYrCB3kXJIaMkfUjY5JdDEpioCCAYZCFyGbAMFkGI0fcMDUYpAgZY4s8EEYWwxWBJLsYhJHFQIYjmwHDQ9xgkGEwDCp0QAYji8EMRhYjymBq4lGDofjFfwCV5AGEIf9DQQAAAABJRU5ErkJggg==');
{% endhighlight %}

## Import content control properties

Content control properties can be set using the [`ContentControlInfo`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#importContentControlData) and import it using [`importContentControlData`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#importContentControlData)

{% highlight js %}
var data = [];
var contentControlData = { title: placeHolderPrefix + 'Name', tag: '', value: 'John', canDelete: false, canEdit: false, type: 'RichText' };
data.push(contentControlData);
container.documentEditor.importContentControlData(data);
{% endhighlight %}

## Export content control properties

Content control properties can be exported using the [`exportContentControlData`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#exportContentControlData)

{% highlight js %}
var contentControlInfos = container.documentEditor.exportContentControlData();
{% endhighlight %}

## Reset content control

Content control properties can be reset using the [`resetContentControlData`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#resetContentControlData)

{% highlight js %}
var data = [];
var contentControlData = { title: placeHolderPrefix + 'Name', tag: '', value: 'John', canDelete: false, canEdit: false, type: 'RichText' };
data.push(contentControlData);
container.documentEditor.resetContentControlData(data);
{% endhighlight %}

>Note: Content control with custom XML mapping of file type WordML is converted as normal Rich Text Content Control to provide lossless round-tripping upon saving.
