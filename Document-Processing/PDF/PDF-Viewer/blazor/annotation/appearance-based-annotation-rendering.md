---
layout: post
title: Appearance-Based Annotation Rendering | Blazor PDF Viewer | Syncfusion
description: Learn how to render PDF annotations using their embedded appearance streams in the Blazor PDF Viewer by enabling the ShowAnnotationAppearance API.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Appearance-Based Annotation Rendering in Blazor PDF Viewer

Appearance-based annotation rendering enables the Blazor PDF Viewer to draw annotations using the appearance streams that are embedded in the PDF document. Instead of rebuilding the annotation from its individual properties, the viewer reads the appearance stream stored in the annotation dictionary and paints it directly on the page. This guarantees that an annotation looks exactly as its author intended, which is especially important for annotations that contain custom graphics that cannot be reproduced from the annotation properties alone.

Enable this behavior by setting the [`ShowAnnotationAppearance`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowAnnotationAppearance) property to `true`.

## Why appearance-based rendering is required

An annotation dictionary in a PDF file can optionally contain an appearance (`/AP`) entry. This entry holds the pre-rendered graphics of the annotation, such as a rubber stamp with a custom logo, a highlighted region drawn with a specific transparency gradient, or a free text annotation whose text was drawn using an embedded font. When such an annotation is opened in a viewer that ignores the `/AP` entry, the viewer falls back to generating the annotation from its basic properties. As a result, the custom graphics are lost, the styling differs from the original document, and the annotation appears differently across viewers and platforms.

By rendering the embedded appearance stream, the Blazor PDF Viewer preserves the original visual representation of the annotation and keeps the output consistent with the source PDF in every viewer and on every platform.

## Enable appearance-based annotation rendering

Set the [`ShowAnnotationAppearance`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowAnnotationAppearance) property to `true` on the `SfPdfViewer2` component to render annotations with their embedded appearance.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="wwwroot/annotation_apperance.pdf"
              Height="100%"
              Width="100%"
              @* Render the annotation with appearance *@
              ShowAnnotationAppearance="true">
</SfPdfViewer2>

```

<!-- Add the image: ![Annotation rendered with the embedded appearance stream in Blazor PDF Viewer](../images/blazor-pdfviewer-annotation-appearance.png) -->

When the property is enabled, every annotation that is loaded from the document and that contains an appearance stream is rendered with that appearance. The remaining annotations continue to be rendered from their annotation properties, so the document is displayed without any missing content.

## Custom appearance (AP) entry

The `/AP` entry of an annotation dictionary is a subdictionary that stores the appearance streams of the annotation. It typically contains the following keys:

| Key | Description |
|---|---|
| `/N` | The normal appearance, which is the appearance displayed when the annotation is neither hovered nor pressed. This entry is required for the annotation to have an appearance. |
| `/R` | The rollover appearance, which is displayed when the mouse pointer is placed over the annotation. |
| `/D` | The down appearance, which is displayed when the annotation is pressed. |

Each key holds either a single appearance stream or a subdictionary of appearance streams that are mapped to the appearance states of the annotation.

An annotation that carries a custom `/AP` entry contains graphics that are defined only inside the appearance stream. For example, a rubber stamp annotation may embed a company logo, a border, and a signature line that are drawn with custom graphics and that are not described by any of the annotation properties. When [`ShowAnnotationAppearance`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowAnnotationAppearance) is set to `true`, the viewer renders that custom appearance and the annotation is displayed with the logo, border, and signature line exactly as they were authored.

<!-- Add the image: ![Custom appearance (AP) entry rendered in the Blazor PDF Viewer](../images/blazor-pdfviewer-custom-annotation-appearance.png) -->

N> The appearance stream is taken from the document that is loaded in the viewer. The Blazor PDF Viewer reads the `/AP` entry of the existing annotations; it does not generate an appearance stream for the annotations that are created in the viewer.

## Supported appearance states

An annotation can define more than one appearance stream, and the `/AP` entry determines which one represents the annotation in its different states. The normal appearance (`/N`) is the appearance that is displayed by default, the rollover appearance (`/R`) is the appearance that is associated with the hover state of the annotation, and the down appearance (`/D`) is the appearance that is associated with the pressed state of the annotation. When an annotation provides only one appearance stream, it is stored in the `/N` entry and is used for all the states of the annotation.

## Notes

* The [`ShowAnnotationAppearance`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ShowAnnotationAppearance) property is applicable only to the Blazor PDF Viewer component.
* Enabling this property renders the annotations of the loaded document with their embedded appearance. It does not modify the appearance stream or the annotation properties of the document.
* An annotation that does not contain an `/AP` entry does not have an embedded appearance to render, and it continues to be rendered from its annotation properties.
* The appearance stream is read from the PDF file that is loaded in the viewer. To add or modify an appearance stream for an annotation, use the [Syncfusion PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-annotations).

## See also

* [Annotation Overview](overview)
* [Create and Modify Annotations](create-modify-annotation)
* [Customize Annotations](customize-annotation)
* [Flatten Annotations](flatten-annotation)
* [Import and Export Annotations](import-export-annotation)
* [Annotation Events](events)
