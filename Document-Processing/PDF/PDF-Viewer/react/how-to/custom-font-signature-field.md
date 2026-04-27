---
layout: post
title: Change font family in React PDF Viewer | Syncfusion
description: Learn how to change the font family for form field type signatures and initials in the React PDF Viewer using typeSignatureFonts and typeInitialFonts.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change the font family for type signatures in React

Change the font family in the type signature of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer by adding a custom CSS stylesheet to the document and applying the desired font family to the type signature element. Include the Google Fonts link in the HTML head section to apply the font.

### Signature field property

The PDF Viewer supports changing fonts for Signature and Initial fields using the `typeSignatureFonts` and `typeInitialFonts` properties.

**Step 1:** Follow the steps in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide to create a simple PDF Viewer sample.

**Step 2:** Use the following code to apply custom fonts to the Signature field.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        style={{ 'height': '680px' }}
        signatureFieldSettings.typeSignatureFonts=['Allura', 'Tangerine', 'Sacramento', 'Inspiration']
    >
    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
)
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}


### Initial field property

Use the following code to apply custom fonts to the Initial field.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        style={{ 'height': '680px' }}
        initialFieldSettings.typeInitialFonts=['Allura', 'Tangerine', 'Sacramento', 'Inspiration']
    >
    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
)
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

Implementing this enables use of custom fonts in form-field signature and initial fields.