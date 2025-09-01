---
layout: post
title: Smart Fill in Blazor Smart PDF Viewer | Syncfusion
description: Discover how Smart Fill enhances form filling in Blazor SfSmartPdfViewer by auto-detecting and populating PDF fields.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Smart Fill in Blazor Smart PDF Viewer
This feature streamlines the process of completing PDF forms. The AI analyzes the document and user-provided input to automatically populate relevant fields, reducing manual effort and minimizing errors. Users can review and adjust the filled fields to ensure the final output meets their requirements.

![Smart Fill](images/smartfill_pdfviewer.gif)

## Component Usage

{% tabs %}
{% highlight razor tabtitle="~/Home.razor" %}

@* Enables AI-powered automatic form filling to reduce manual input and improve accuracy *@

<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
     <SmartFillSettings/>
</SfSmartPdfViewer>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/SmartFill)

## Smart Fill Settings in Syncfusion Blazor Smart PDF Viewer
- The [SmartFillSettings](https://help.syncfusion.com//cr/blazor/Syncfusion.Blazor.SmartPdfViewer.SmartFillSettings.html) class configures settings for the Smart Fill feature in the Smart PDF Viewer. This feature leverages AI to automate the population of PDF form fields based on clipboard or specified data.

- [SmartFillSettings](https://help.syncfusion.com//cr/blazor/Syncfusion.Blazor.SmartPdfViewer.SmartFillSettings.html) provides all options and execution hooks for integrating AI-powered, context-aware document filling into a PDF viewer workflow.

## SmartFillSettings Parameter

### Enable
- The [Enable](https://help.syncfusion.com//cr/blazor/Syncfusion.Blazor.SmartPdfViewer.SmartFillSettings.html#Syncfusion_Blazor_SmartPdfViewer_SmartFillSettings_Enable) determines whether the Smart Fill button is shown in the toolbar and whether the feature is accessible. The default value is `true`.
- The button remains inactive unless the loaded PDF document contains form fields.
- Helps maintain a clean and intuitive UI by hiding the feature when it's not applicable.
- Can be dynamically toggled based on user roles, document content, or application logic.

{% tabs %}
{% highlight razor tabtitle="~/Home.razor" %}

@* Controls visibility and accessibility of the Smart Fill feature based on document content or app logic *@

<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <SmartFillSettings Enable="false" />
</SfSmartPdfViewer>

{% endhighlight %}
{% endtabs %}

## Integration
To integrate Smart Fill into your PDF viewer workflow, include the [SmartFillSettings](https://help.syncfusion.com//cr/blazor/Syncfusion.Blazor.SmartPdfViewer.SmartFillSettings.html) component within the [SfSmartPdfViewer](https://help.syncfusion.com//cr/blazor/Syncfusion.Blazor.SmartPdfViewer.SfSmartPdfViewer.html) tag. Ensure that your PDF documents contain form fields to utilize the AI-powered filling capabilities.

## See also

* [Explore Blazor Smart PDF Viewer Smart Fill Demo](https://document.syncfusion.com/demos/pdf-viewer/blazor-server/smart-pdf-viewer/smartfill?theme=fluent2)
* [Document Summaries in Blazor Smart PDF Viewer](./document-summarizer)
* [Smart Redaction in Blazor Smart PDF Viewer](./smart-redaction)