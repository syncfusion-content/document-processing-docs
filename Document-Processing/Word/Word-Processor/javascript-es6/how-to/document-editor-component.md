---
layout: post
title: DocumentEditorContainer vs DocumentEditor in Javascript ES6 DOCX Editor
description: Learn the differences between DocumentEditorContainer and DocumentEditor in the Syncfusion Javascript (ES6) DOCX Editor and understand when and how to use the DocumentEditor component for custom document editing scenarios.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

## DocumentEditorContainer vs DocumentEditor in Javascript ES6 DOCX Editor

In this article, we explain the differences between **DocumentEditorContainer** and **DocumentEditor**, and also describe how to use the **DocumentEditor** component in the Javascript (ES6) DOCX Editor.

## Difference between DocumentEditorContainer and DocumentEditor

The **DocumentEditor** component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike **DocumentEditorContainer**, this component allows you to customize the UI options based on your specific requirements.

- **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane that provides a comprehensive document editing experience. It allows users to create, view, and edit Word documents with minimal configuration.
- **DocumentEditor**: A customizable component that provides a flexible foundation for creating, viewing, and editing Word documents. This component allows you to build a user interface based on your specific requirements.

### When to Use DocumentEditorContainer and DocumentEditor

- Choose **DocumentEditorContainer** for standard document editing scenarios (applications similar to Microsoft Word).
- Choose **DocumentEditor** for advanced or unique UI/UX requirements where customization is key.

## Adding Document editor component

You can start adding the Document editor component to the application. Add the DocumentEditor component in the `app.ts` and `index.html` files using the following code.

Place the following code in the `app.ts` file:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize Document editor component
let documenteditor: DocumentEditor = new DocumentEditor({ 
    isReadOnly: false, 
    height: '370px', 
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' 
});

// Enable all built-in modules
documenteditor.enableAllModules();

// Render the Document editor component
documenteditor.appendTo('#DocumentEditor');

{% endhighlight %}
{% endtabs %}

## See Also

* [How to customize toolbar](./customize-tool-bar)