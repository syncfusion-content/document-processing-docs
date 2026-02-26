---
layout: post
title: Customize the Form Designer Toolbar in React PDF Viewer | Syncfusion
description: Learn how to show or hide and customize the Form Designer toolbar in the EJ2 React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Form Designer Toolbar in React PDF Viewer

## Overview

This guide shows how to show or hide the form designer toolbar, and how to configure which tools appear and their order. 

**Outcome**: a working React example customizing the form designer toolbar.

## Prerequisites

- EJ2 React PDF Viewer installed and added in project. See [getting started guide](../getting-started)
- If using standalone WASM mode, provide [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#resourceurl) or a [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#serviceurl) for server mode.

## Steps

**Step 1:** Show or hide the Form Designer toolbar at initialization

- Set the [`isFormDesignerToolbarVisible`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#isformdesignertoolbarvisible) property on PDF Viewer instance to `true` or `false` to control initial visibility.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import React from 'react';
import { PdfViewerComponent, Toolbar, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export default function App() {
    return (
        <PdfViewerComponent{% raw %}
            ref={(scope) => { pdfviewer = scope; }}
            id="PdfViewer"
            isFormDesignerToolbarVisible={true}
            documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"{% raw %}
            style={{ height: '500px', width: '100%' }}>
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 2:** Toggle visibility at runtime

- Use the [`isFormDesignerToolbarVisible`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#isformdesignertoolbarvisible) API on the viewer's instance on a custom method to toggle form designer visibility at runtime.

{% highlight ts %}
{% raw %}
pdfviewer.isFormDesignerToolbarVisible = true;
{% endraw %}
{% endhighlight %}

**Step 3:** Customize the form designer tools and their order

- Use [`formDesignerToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#formdesignertoolbaritems) and supply an ordered array of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formdesignertoolbaritem) names.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
<PdfViewerComponent
    toolbarSettings={{
        formDesignerToolbarItems: [
            'TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool',
            'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
        ]
    }}>
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Complete example:**

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { RefObject, useRef, useState } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewer: RefObject<PdfViewerComponent> = useRef(null);
    const [show, setShow] = useState(true);
    const hideFormDesignerToolbar = () => {
        viewer.current.isFormDesignerToolbarVisible = !show;
        setShow(!show);
    }
    return (
        <div>
            <button onClick={hideFormDesignerToolbar}>Hide Form Designer Toolbar</button>
            <PdfViewerComponent
                ref={viewer}
                id="PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                toolbarSettings={{
                    formDesignerToolbarItems: [
                        'TextboxTool', 'RadioButtonTool', 'CheckBoxTool',
                        'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
                    ]
                }}
                isFormDesignerToolbarVisible={true}
                style={{ height: '500px', width: '100%' }}
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Expected result

- The form designer toolbar appears (or is hidden) according to [`isFormDesignerToolbarVisible`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#isformdesignertoolbarvisible).
- Only the listed tools appear.

## Troubleshooting

- Toolbar or form designer tools do not appear.
    - **Cause**: [`FormDesigner`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formdesigner) or [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) service not injected.
    - **Solution**: ensure [`FormDesigner`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formdesigner) and [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) modules are injected to PDF Viewer.

## Related topics

- [Primary toolbar customization](./primary-toolbar)
- [Annotation toolbar customization](./annotation-toolbar)