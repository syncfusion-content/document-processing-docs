---
layout: post
title: Customize the Primary Toolbar in React PDF Viewer | Syncfusion
description: Learn how to show or hide, reorder, and add items to the primary toolbar in the Syncfusion EJ2 React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize Primary Toolbar in React PDF Viewer

## Overview

This guide explains how to show or hide the primary toolbar, remove default items, and add custom toolbar items. 

**Outcome**: Working React example customizing the primary toolbar.

## Prerequisites

- EJ2 React PDF Viewer installed and added in project. See [getting started guide](../getting-started)

## Steps

**Step 1:** Show or hide the primary toolbar at initialization

- Set [`enableToolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletoolbar) to `false` to hide the built-in toolbar.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
        <PdfViewerComponent
            id="pdfViewer"
            enableToolbar={false}
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            style={{ height: '500px' }}>
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 2:** Toggle the toolbar at runtime

- Use the viewer's [`showToolbar()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar#showtoolbar) method to show or hide dynamically.

```ts
// with a ref named pdfviewer
pdfviewer.toolbar.showToolbar(false);
```

**Step 3:** Remove or reorder default items

- Provide the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems) array with the exact set and order of items you want to show. Any item omitted is hidden.

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    toolbarSettings={{
    toolbarItems: ['OpenOption', 'DownloadOption', 'PrintOption', 'MagnificationTool']
    }}
/>
{% endraw %}
{% endhighlight %}

**Step 4:** Add a custom toolbar item

- Add a custom item by including an object in [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems) and handling its action via [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#toolbarclick). The following example shows adding a simple custom button at initialization.

{% highlight ts %}
{% raw %}
const customItems: (CustomToolbarItem | ToolbarItem)[] = [
    'OpenOption',
    {
        id: 'custom_btn',
        text: 'Fit to Width',
        align: 'Center'
    } as CustomToolbarItem,
    'DownloadOption'
];
<PdfViewerComponent toolbarSettings={{ toolbarItems: customItems }} />
{% endraw %}
{% endhighlight %}

**Complete example:**

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { useRef, RefObject, useState } from 'react';
import { PdfViewerComponent, Toolbar, Inject, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSearch, TextSelection, FormFields, FormDesigner, PageOrganizer, CustomToolbarItem, ToolbarItem } from '@syncfusion/ej2-react-pdfviewer';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';

export function App() {
    const pdfviewerRef: RefObject<PdfViewerComponent> = useRef<any>(null);
    const buttonRef: RefObject<HTMLButtonElement> = useRef<any>(null);
    const [showTool, setShowTool] = useState<boolean>(false);
    const handler = () => {
        const temp: boolean = showTool;
        pdfviewerRef.current?.toolbar.showToolbar(temp);
        setShowTool(!temp);
    }
    const handleToolbarClick = (event: ClickEventArgs) => {
        if (event.item.id === 'custom_btn') {
            handleFitToWidth();
        }
    }
    const handleFitToWidth = () => pdfviewerRef.current?.magnification.fitToWidth();
    const toolbarItems: (CustomToolbarItem | ToolbarItem)[] = [
        'OpenOption',
        {
            id: 'custom_btn',
            text: 'Fit to Width',
            align: 'Center'
        } as CustomToolbarItem,
        'DownloadOption'
    ];
    return (
        <div>
            <button id="set" ref={buttonRef} onClick={() => handler()}>Hide toolbar</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={pdfviewerRef}
                enableNavigationToolbar={false}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                toolbarSettings={{ toolbarItems: toolbarItems }}
                toolbarClick={handleToolbarClick}
                style={{ height: '500px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Expected result

- The primary toolbar shows only the items you list in [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems).
- Clicking `Hide toolbar` calls [`showToolbar(false)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar#showtoolbar) and hides or shows the toolbar at runtime.

## Troubleshooting

- Toolbar still shows all default items.
    - **Solution**: [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems) must be supplied exactly; verify names and that [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) service is injected.

## Related topics

- [Annotation toolbar customization](./annotation-toolbar)
- [Form designer toolbar customization](./form-designer-toolbar)