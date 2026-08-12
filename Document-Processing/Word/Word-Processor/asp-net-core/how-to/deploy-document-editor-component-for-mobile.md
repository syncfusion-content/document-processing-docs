---
layout: post
title: Deploy the DOCX Editor component for mobile | Syncfusion
description: Learn here all about deploying the Document Editor component for mobile in the Syncfusion Document Editor component and more.
platform: document-processing
control: Deploy the Document Editor component for mobile
documentation: ug
---

# Deploy the Document Editor component for mobile

## Document Editor component for mobile

At present, the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component is not responsive on mobile, and the editing functionalities are not ensured in mobile browsers. However, it works properly as a document viewer in mobile browsers. Hence, it is recommended to switch the Document Editor component to read-only mode in mobile browsers. Also, invoke the `fitPage` method with the `FitPageWidth` parameter in the document change event to display one full page by adjusting the zoom factor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/mobile-view/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Mobile-view.cs" %}
{% endhighlight %}
{% endtabs %}

N> You can use the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) property in the DocumentEditorContainer and the [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) property in the DocumentEditor, based on your requirement, to change the component to read-only mode.
