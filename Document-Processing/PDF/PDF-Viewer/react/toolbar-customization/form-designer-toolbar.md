---
layout: post
title: Form Designer Toolbar in React PDF Viewer Component | Syncfusion
description: Learn here all about form designer toolbar customization in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Designer Toolbar Customization in React

The form designer toolbar can be customized by showing or hiding default items and by controlling the order in which the items appear.

## Show or hide the form designer toolbar

Show or hide the form designer toolbar programmatically during initialization or at runtime.

Use the [EnableFormDesigner](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pdfViewerModel/#enableformdesigner) property or the [showFormDesignerToolbar](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar/#showformdesignertoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the toolbar using the `EnableFormDesigner` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import React, { useRef } from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

const App = () => {
    let pdfviewer;

    return (
        <PdfViewerComponent
            ref={(scope) => { pdfviewer = scope; }}
            id="PdfViewer"
            enableFormDesigner={false}
            documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            style={{ height: '500px', width: '100%' }}
        >
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    );
};

export default App;

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />


    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## How to customize the form designer toolbar

Choose which tools appear and control their order in the form designer toolbar.

Use [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings/) with the [`FormDesignerToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings/#formdesignertoolbaritems) property to choose which form design tools are available. The property accepts a list of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formDesignerToolbarItem/) values. The items you include are both displayed and rendered in the order listed; any items you omit are hidden. This provides a streamlined, user-friendly form design experience across devices.

The following example demonstrates how to customize the form designer toolbar by configuring specific tools using `FormDesignerToolbarItem`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import React, { useRef } from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

const App = () => {
    let pdfviewer;

    return (
        <PdfViewerComponent
            ref={(scope) => { pdfviewer = scope; }}
            id="PdfViewer"
            documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            toolbarSettings={{
                formDesignerToolbarItems: [
                    'TextboxTool',
                    'PasswordTool',
                    'CheckBoxTool',
                    'RadioButtonTool',
                    'DropdownTool',
                    'ListboxTool',
                    'DrawSignatureTool',
                    'DeleteTool'
                ]
            }}
            style={{ height: '500px', width: '100%' }}
        >
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    );
};

export default App;

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />


    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}
