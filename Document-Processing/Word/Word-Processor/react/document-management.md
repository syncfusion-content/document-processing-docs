---
layout: post
title: Document management in React DOCX Editor component | Syncfusion
description: Learn here all about Document management in Syncfusion React DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Document management 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Document management in React Document Editor component

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides support for restricting editing. When the protected document includes range permissions, only the unique user or user group is authorized to edit a separate text area.

## Set current user

You can use the `currentUser` property to authorize the current document user by name, email, or user group name.

The following code shows how to set currentUser:

```ts
documentEditor.currentUser = 'engineer@mycompany.com';
```

## Highlighting the text area

You can highlight the editable region of the current user using the `userColor` property.

The following code shows how to set userColor.

```ts
documentEditor.userColor = '#fff000';
```

You can toggle the highlighting of the editable region using the `highlightEditableRanges` property.

The following code shows how to toggle the highlight editable region value.

```ts
container.documentEditor.documentEditorSettings.highlightEditableRanges = true;
```

## Restrict Editing Pane

The Restrict Editing Pane provides the following options to manage the document:
* To apply formatting restrictions to the current document, select the allow formatting check box.
* To apply editing restrictions to the current document, select the read only check box.
* To add users to the current document, select the more users option and add users from the popup dialog.
* To include range permissions to the current document, select parts of the document and choose users who are allowed to freely edit them from the listed check boxes.
* To apply the chosen editing restrictions, click the **YES, START ENFORCING PROTECTION** button. A dialog box displays asking for a password to protect.
* To stop protection, select the **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

The following code shows the Restrict Editing Pane. To unprotect the document, use the password '123'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/base-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/base-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs1" %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer to and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use it for the serviceUrl property.

## See Also

* [How to protect the document in form filling mode](./form-fields#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments only mode](./comments#protect-the-document-in-comments-only-mode)
* [How to protect the document in track changes only mode](./track-changes#protect-the-document-in-track-changes-only-mode)