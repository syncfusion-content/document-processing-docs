---
layout: post
title: Restrict editing in JavaScript (ES5) Document Editor Control
description: Learn here all about Restrict editing in Syncfusion JavaScript (ES5) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Restrict editing 
documentation: ug
domainurl: ##DomainURL##
---

# Restrict Editing in JavaScript (ES5) Document Editor Control

Document Editor provides support to restrict editing. When the protected document includes range permission, then unique user or user group only authorized to edit separate text area.

## Set current user

You can use the [`currentUser`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#currentuser) property to authorize the current document user by name, email, or user group name.

The following code shows how to set currentUser

```ts
documentEditor.currentUser = 'engineer@mycompany.com';
```

## Protect document with editable region
User can select a specific section and mark it as an editable region, allowing modification only in that part. The rest of the document remains protected from any changes.

### Insert editable region
Use the [insertEditingRegion](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#inserteditingregion) method to mark specific paragraphs as editable.This allows you to control editing by giving access to all users or only selected users.

The following example shows how to insert an editable region.
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
// Allow editing for all users
container.documentEditor.editor.insertEditingRegion();
 
// pass a username to restrict access
container.documentEditor.editor.insertEditingRegion("User Name");
 
{% endhighlight %}
{% endtabs %}
 
### Highlight color for editable region
 
The [userColor](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/index-default#usercolor) property can be used to highlight the editable region of the current user.
 
The following code example demonstrates how to set the userColor.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.userColor = '#fff000';
 
{% endhighlight %}
{% endtabs %}
 
### Enable or disable editable region highlighting
 
The [highlightEditableRanges](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documenteditorsettingsmodel#highlighteditableranges) property can be used to toggle the highlighting of editable regions.
 
The following code example demonstrates how to enable or disable editable region highlighting.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.documentEditorSettings.highlightEditableRanges = true;
 
{% endhighlight %}
{% endtabs %}

## Restrict Editing Pane

Restrict Editing Pane provides the following options to manage the document:
* To apply formatting restrictions to the current document, select the allow formatting check box.
* To apply editing restrictions to the current document, select the read only check box.
* To add users to the current document, select more users option and add user from the popup dialog.
* To include range permission to the current document, select parts of the document and choose users who are allowed to freely edit them from the listed check box.
* To apply the chosen editing restrictions, click the **YES,START ENFORCING PROTECTION** button. A dialog box displays asking for a   password to protect.
* To stop protection, select **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

The following code shows Restrict Editing Pane. To unprotect the document, use password '123'.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/data-protection-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/data-protection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/data-protection-cs2" %}

## Online Demo

Explore how to restrict editing and protect Word documents using the JavaScript (ES5) Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/document-protection.html).

### See Also

* [How to protect the document in form filling mode](./form-fields#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments only mode](./comments#protect-the-document-in-comments-only-mode)
* [How to protect the document in track changes only mode](./track-changes#protect-the-document-in-track-changes-only-mode)