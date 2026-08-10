---
layout: post
title: Deploy DOCX Editor For Mobile in ASP.NET MVC | Syncfusion
description: Learn here all about deploying the Document Editor component for mobile in the Syncfusion ASP.NET MVC Document Editor component and more.
platform: document-processing
control: Deploy Document Editor Component For Mobile
documentation: ug
---


# Deploy Document Editor component for Mobile in ASP.NET MVC

## Document editor component for Mobile

The Document Editor component is currently not responsive for mobile, and the editing functionalities are not supported in mobile browsers. However, it works properly as a document viewer in mobile browsers.

Hence, it is recommended to set the Document Editor component to read-only in mobile browsers by using the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) property in DocumentEditorContainer or the [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) property in DocumentEditor, based on your requirement. Also, invoke the [`fitPage`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_FitPage_System_String_) method with the [`FitPageWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DocumentEditor.PageFitType.html) parameter in the document change event to display one full page by adjusting the zoom factor.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/mobile-view/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Mobile-view.cs" %}
{% endhighlight %}
{% endtabs %}



N> For more information, refer to the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) property in DocumentEditorContainer and the [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) property in DocumentEditor to change the component to read-only mode.
