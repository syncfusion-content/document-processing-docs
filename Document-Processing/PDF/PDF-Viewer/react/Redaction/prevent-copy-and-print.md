---
layout: post
title: Prevent Copy or Print in React PDF Viewer | Syncfusion
description: Learn how to prevent printing and copying in the React PDF Viewer using viewer settings or server-side permission flags.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Prevent Copy or Print in React PDF Viewer

## Overview
This guide shows how to prevent users from copying text or printing documents in EJ2 React PDF Viewer.

**Outcome:** You will learn server-side and client-side options to restrict copy/print with a complete React example.

## Steps

1. Use a PDF with permissions already set
    - Load a PDF that already disallows copy or print functionality itself. The Viewer enforces these permission automatically.

2. Pre process restrictions in server-side
    - Use Syncfusion PDF Library to set permission flags before sending the file to the client. See the server-side example below.
    - Disabling print and copy in server-side automatically enforces them in the PDF Viewer.

3. Hide/disable UI elements in the viewer
    - Print, download and copy options can be disabled or hidden in the viewer regardless of the PDF's permissions.
    - Print and download options can be hidden in the viewer's primary toolbar. See [primary toolbar customization](../toolbar-customization/primary-toolbar).
    - Copy option in the context menu can be disabled in the PDF Viewer. See [customize context menu](../context-menu/custom-context-menu).

4. Disable print programmatically in the viewer
    - Set [`enablePrint`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprint) to `false` to disable the print UI even if the PDF allows printing.

5. Disable copy via text-selection UI
    - Set [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) to `false` to stop text selection and copying through the viewer UI.

**Example:**

The following is a complete React example that demonstrates disabling printing and text selection in the viewer.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
export default function App() {
    return (
        <div style={{ height: '100vh' }}>
            <PdfViewerComponent
                id="pdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib"
                enablePrint={false}          // disables the print UI
                enableTextSelection={false}  // disables text selection (prevents copy)
                enableDownload={false}
                style={{ height: '100%' }}>
                <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result**:
- The viewer renders the PDF.
- Print button and print-related UI are hidden/disabled.
- Text selection and copy operations from the viewer are disabled.

## Server-side: Enforce restrictions with Syncfusion PDF Library

Process the PDF on the server to set permissions that disallow printing or copying. The viewer will respect these permissions when the PDF is loaded.

{% tabs %}
{% highlight csharp tabtitle="Program.cs" %}
{% raw %}
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

using FileStream inputStream = new FileStream(
    Path.GetFullPath("input.pdf"),
    FileMode.Open,
    FileAccess.Read
);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputStream);
loadedDocument.Security.Permissions = PdfPermissionsFlags.EditContent | PdfPermissionsFlags.EditAnnotations | PdfPermissionsFlags.FillFields | PdfPermissionsFlags.AssembleDocument | PdfPermissionsFlags.AccessibilityCopyContent;
loadedDocument.Save(Path.GetFullPath(@"output.pdf"));
loadedDocument.Close(true);
{% endraw %}
{% endhighlight %}
{% endtabs %}

Set the [`PdfPermissionsFlags`](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfPermissionsFlags.html) appropriately to remove copy/print rights. The example above shows how to set flags.

## Troubleshooting

- If the Print button still appears:
    - Confirm [`enablePrint`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprint) is set to `false` on `PdfViewerComponent`.
    - If the PDF explicitly allows printing, prefer server-side removal of print permission.
- If text can still be copied:
    - Confirm [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) is set to `false` and your app isn't adding secondary copy handlers.

## Related topics

- [Redact Sensitive content in PDF](../Redaction/overview)
- [Redaction APIs](../Redaction/programmatic-support)
- [Redaction toolbar](../Redaction/toolbar)