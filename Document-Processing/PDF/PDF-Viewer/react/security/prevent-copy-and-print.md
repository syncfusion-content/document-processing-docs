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
This guide shows how to prevent users from copying text or printing documents in the Syncfusion React PDF Viewer.

**Outcome:** You will learn server-side and client-side options to restrict copy/print with a complete React example.

## Steps

### 1. Use a PDF with permissions already set

- Load a PDF that already disallows copy or print functionality itself. The Viewer enforces these permission automatically.

#### 2. Pre-process restrictions on the server side

- Use Syncfusion PDF Library to set permission flags before sending the file to the client. See the server-side example below. See this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security#change-the-permission-of-the-pdf-document) for detailed explanations
- Disabling print and copy in server-side automatically enforces them in the PDF Viewer.

### 3. Hide or disable UI elements in the viewer

- Print, download, and copy options can be disabled or hidden in the viewer regardless of the PDF's permissions.
- Use [`toolbarSettings.toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems) to hide specific items in the primary toolbar. See [primary toolbar customization](../toolbar-customization/primary-toolbar#3-show-or-hide-primary-toolbar-items).
- Hide the download option by setting [`enableDownload`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabledownload) to `false`.
- Disable the copy option in the context menu. See [customize context menu](../context-menu/custom-context-menu).

### 4. Disable print via a viewer property

- Set [`enablePrint`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprint) to `false` to disable the print UI even if the PDF allows printing. This is a declarative initialization property; for runtime toggling, use the viewer's print module API.

### 5. Disable copy via text-selection UI

- Set [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) to `false` to stop text selection and copying through the viewer UI.
- Make sure the corresponding services (`Print`, `TextSelection`) are included in `<Inject services={[...]} />`; otherwise the property has no effect.

**Example:**

The following is a complete React example that demonstrates disabling printing and text selection in the viewer. The example also injects `Print` and `TextSelection` services so the `enablePrint` and `enableTextSelection` properties take effect even when they are set to `false`.

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

## Troubleshooting

- If the Print button still appears:
    - Confirm [`enablePrint`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprint) is set to `false` on `PdfViewerComponent`.
    - Confirm the `Print` service is included in `<Inject services={[...]} />`.
    - If the PDF explicitly allows printing, prefer server-side removal of print permission.
- If text can still be copied:
    - Confirm [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) is set to `false` and your app isn't adding secondary copy handlers.

## Related topics

- [Secure PDF Viewing in React Apps](./secure-pdf-viewing)