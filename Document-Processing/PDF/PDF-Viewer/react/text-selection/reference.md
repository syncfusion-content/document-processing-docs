---
layout: post
title: Text selection API and events | Syncfusion
description: Reference documentation for text selection properties, methods, and events in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---

# Text selection API and events

This document provides the reference details for text selection APIs and events in the Syncfusion React PDF Viewer. It includes the available configuration property, programmatic methods, and event callbacks that allow applications to react to selection behavior.

## Methods

### selectTextRegion

Programmatically selects text within a specified page and bounds.

```ts
pdfviewer.textSelection.selectTextRegion(pageNumber, bounds);
```

**Parameters:**

- pageNumber: number indicating the target page (1 based indexing)
- bounds: `IRectangle` array defining the selection region

### copyText

Copies the currently selected text to the clipboard.

```ts
pdfviewer.textSelection.copyText();
```

## Events

### textSelectionStart

Triggered when the user begins selecting text.

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    ref={viewerRef}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    style={{ height: '100%' }}
    textSelectionStart={(args: TextSelectionStartEventArgs) => {
        console.log(args);
    }}
>
    <Inject
        services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
            ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

**Arguments include:**

- pageNumber (1 based indexing)
- name

### textSelectionEnd

Triggered when the selection operation completes.

```ts
<PdfViewerComponent textSelectionEnd={onSelectionEnd} />
```

**Arguments include:**

- pageNumber (1 based indexing)
- name
- textContent
- textBounds

These APIs allow applications to monitor user actions, customize interaction behavior, and extend selection workflows.

## See also

- [Toggle text selection](./toggle-text-selection)
- [React PDF Viewer events](../events)