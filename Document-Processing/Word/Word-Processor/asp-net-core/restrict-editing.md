---
layout: post
title: Restrict Editing in DOCX Editor Component | Syncfusion
description: Learn how to restrict editing in the Syncfusion ASP.NET Core Document Editor, including permission ranges, user groups, and form protection.
platform: document-processing
control: RestrictEditing
documentation: ug
---


# Restrict Editing in ASP.NET Core Document Editor Component

[ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) provides support to restrict editing. When a protected document includes range permissions, only the specified user or user group is authorized to edit their assigned text areas.

## Set Current User

Use the `currentUser` property to authorize the current user of the document by name, email, or user group name.

The following example sets the `currentUser`.

```typescript
container.documentEditor.currentUser = 'engineer@mycompany.com';
```

## Protect document with editable region

A user can select a specific section and mark it as an editable region, allowing modification only in that part. The rest of the document remains protected from any changes.

### Insert editable region

Use the `insertEditingRegion` method to mark specific paragraphs as editable. This allows you to control editing by giving access to all users or only selected users.

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

Use the `userColor` property to highlight the editable region of the current user.

The following example sets the `userColor`.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.userColor = '#fff000';
 
{% endhighlight %}
{% endtabs %}
 
### Enable or disable editable region highlighting

Use the `highlightEditableRanges` property to toggle the highlighting of editable regions.

The following example enables or disables editable region highlighting.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.documentEditorSettings.highlightEditableRanges = true;
 
{% endhighlight %}
{% endtabs %}

## Restrict Editing Pane

The Restrict Editing Pane provides the following options to manage the document:

* To apply formatting restrictions to the current document, select the **Allow formatting** check box.
* To apply editing restrictions to the current document, select the **Read only** check box.
* To add users to the current document, select the **More users** option and add users from the popup dialog.
* To include range permission for the current document, select parts of the document and choose the users who are allowed to freely edit them from the listed check boxes.
* To apply the chosen editing restrictions, click the **Yes, Start Enforcing Protection** button. A dialog prompts for a password to protect the document.
* To stop protection, click **Stop Protection**. A dialog prompts for the protection password.

## Online Demo

Explore how to restrict editing and protect Word documents using the ASP.NET Core Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/documentprotection#tailwind3).

## See Also

* [How to protect the document in form filling mode](./form-fields#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments only mode](./comments#protect-the-document-in-comments-only-mode)
* [How to protect the document in track changes only mode](./track-changes#protect-the-document-in-track-changes-only-mode)