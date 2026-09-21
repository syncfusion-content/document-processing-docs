---
layout: post
title: Track Document Changes in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to track document modifications and determine whether a PDF document contains unsaved changes in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer).
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, document modified, isdocumentmodified, track pdf changes, save modified pdf, maui pdf viewer
---

# Track Document Changes in .NET MAUI PDF Viewer

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) provides the `IsDocumentModified` property to help determine whether the currently loaded PDF document contains unsaved changes.

This property is useful when you want to save documents only when modifications have been made, enable or disable save commands dynamically, or notify users about unsaved changes before closing or navigating away from a document.

The `IsDocumentModified` property is automatically updated whenever supported document modifications are performed in the PDF Viewer.

## Document modified state

The `IsDocumentModified` property becomes `true` when users perform supported document modifications, such as:

* Adding, editing, or deleting annotations
* Changing form field values
* Applying redactions
* Adding signatures

The property returns `false` when:

* A document is initially loaded.
* All modifications are reverted to the original state through undo operations.

The following example demonstrates how to determine whether the loaded document contains unsaved changes.

{% tabs %}
{% highlight c# %}
bool isModified = PdfViewer.IsDocumentModified;
{% endhighlight %}
{% endtabs %}

## Save only when the document is modified

You can use the `IsDocumentModified` property to avoid unnecessary save operations and save the document only when it contains changes.

{% tabs %}
{% highlight c# %}
if (PdfViewer.IsDocumentModified)
{
    PdfViewer.SaveDocument(SaveStream);
}
{% endhighlight %}
{% endtabs %}

## Observe document modification state changes

You can monitor changes to the `IsDocumentModified` property by subscribing to the `PropertyChanged` event of the `SfPdfViewer`.

This is useful for updating the user interface, enabling or disabling save commands, or displaying indicators when the document modification state changes.

{% tabs %}
{% highlight c# %}
PdfViewer.PropertyChanged += (sender, args) =>
{
    if (args.PropertyName == nameof(PdfViewer.IsDocumentModified))
    {
        bool isModified = PdfViewer.IsDocumentModified;
    }
};
{% endhighlight %}
{% endtabs %}


## See Also

- [Open a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document)
- [Open a Password Protected Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document)
- [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/getting-started)
- [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document)