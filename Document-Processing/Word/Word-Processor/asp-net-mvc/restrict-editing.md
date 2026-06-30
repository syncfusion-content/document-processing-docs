---
layout: post
title: Restrict Editing in ASP.NET MVC Document Editor Component| Syncfusion
description: Learn here all about Restrict Editing in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Restrict Editing
documentation: ug
---


# Restrict Editing in Document Editor Component

Document Editor provides support to restrict editing. When the protected document includes range permission, then unique user or user group is only authorized to edit separate text area.

## Set current user

You can use the `currentUser` property to authorize the current document user by name, email, or user group name.

The following code shows how to set currentUser

```typescript
container.documentEditor.currentUser = 'engineer@mycompany.com';
```

## Protect document with editable region
User can select a specific section and mark it as an editable region, allowing modification only in that part. The rest of the document remains protected from any changes.

### Insert editable region
Use the `insertEditingRegion` API to mark specific paragraphs as editable.This allows you to control editing by giving access to all users or only selected users.

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
 
The `userColor` property can be used to highlight the editable region of the current user.
 
The following code example demonstrates how to set the userColor.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.userColor = '#fff000';
 
{% endhighlight %}
{% endtabs %}
 
### Enable or disable editable region highlighting
 
The `highlightEditableRanges` property can be used to toggle the highlighting of editable regions.
 
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
* To apply the chosen editing restrictions, click the **YES,START ENFORCING PROTECTION** button. A dialog box displays asking for a password to protect.
* To stop protection, select **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

## Online Demo

Explore how to restrict editing and protect Word documents using the ASP.NET MVC Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/documentprotection#/tailwind3).

* [How to protect the document in form filling mode](./form-fields#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments only mode](./comments#protect-the-document-in-comments-only-mode)
* [How to protect the document in track changes only mode](./track-changes#protect-the-document-in-track-changes-only-mode)