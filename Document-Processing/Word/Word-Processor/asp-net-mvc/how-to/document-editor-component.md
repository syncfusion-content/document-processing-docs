---
layout: post
title: DocumentEditorContainer vs DocumentEditor in ASP.NET MVC DOCX Editor
description: Learn the differences between DocumentEditorContainer and DocumentEditor in the Syncfusion ASP.NET MVC DOCX Editor and understand when and how to use the DocumentEditor component for custom document editing scenarios.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##a
---

## DocumentEditorContainer vs DocumentEditor in ASP.NET MVC DOCX Editor

In this article, we explain the differences between **DocumentEditorContainer** and **DocumentEditor**, and also describe how to use the **DocumentEditor** component in the ASP.NET MVC DOCX Editor.

## Difference between DocumentEditorContainer and DocumentEditor

The **DocumentEditor** component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike **DocumentEditorContainer**, this component allows you to customize the UI options based on your specific requirements.

- **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane that provides a comprehensive document editing experience. It allows users to create, view, and edit Word documents with minimal configuration.
- **DocumentEditor**: A customizable component that provides a flexible foundation for creating, viewing, and editing Word documents. This component allows you to build a user interface based on your specific requirements.

### When to Use DocumentEditorContainer and DocumentEditor

- Choose **DocumentEditorContainer** for standard document editing scenarios (applications similar to Microsoft Word).
- Choose **DocumentEditor** for advanced or unique UI/UX requirements where customization is key.

## Add ASP.NET MVC DocumentEditor control

Now, add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC DocumentEditor control in `~/Views/Home/Index.cshtml` page.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/getting-started/razor %}
{% endhighlight %}
{% endtabs %}

## See also

* [How to customize tool bar](./customize-tool-bar.md).
