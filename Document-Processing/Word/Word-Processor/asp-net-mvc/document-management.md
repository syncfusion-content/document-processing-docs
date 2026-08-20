---
layout: post
title: Document Management in ASP.NET MVC DOCX Editor | Syncfusion
description: Document management in ASP.NET MVC DOCX Editor provides editing restrictions and user permissions to secure document content.
platform: document-processing
control: Document Management
documentation: ug
---


# Document Management in ASP.NET MVC DOCX Editor

[ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) provides support to restrict editing. When the protected document includes range permissions, only a unique user or user group is authorized to edit a separate text area.

## Set the current user

You can use the `currentUser` property to authorize the current document user by name, email, or user group name.

The following code shows how to set `currentUser`.

```typescript
container.documentEditor.currentUser = 'engineer@mycompany.com';
```

## Highlighting the text area

You can highlight the editable region of the current user using the `userColor` property.

The following code shows how to set `userColor`.

```typescript
container.documentEditor.userColor = '#fff000';
```

## Restrict Editing Pane

The Restrict Editing pane provides the following options to manage the document:

* To apply formatting restrictions to the current document, select the allow formatting check box.
* To apply editing restrictions to the current document, select the read-only check box.
* To add users to the current document, select the more users option and add a user from the popup dialog.
* To include range permissions in the current document, select parts of the document and choose users who are allowed to freely edit them from the listed check box.
* To apply the chosen editing restrictions, click the **YES, START ENFORCING PROTECTION** button. A dialog box displays asking for a password to protect.
* To stop protection, select the **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

* [How to protect the document in form-filling mode](./form-fields.md#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments-only mode](./comments.md#protect-the-document-in-comments-only-mode)
* [How to protect the document in track-changes-only mode](./track-changes.md#protect-the-document-in-track-changes-only-mode)