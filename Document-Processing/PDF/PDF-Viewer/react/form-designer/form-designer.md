---
layout: post
title: Form Designer and Toolbar Customization in React | Syncfusion
description: Learn here all about form designer and toolbar in Syncfusion React PDF Viewer of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Designer and Toolbar Customization in React

## Form Designer

Create and customize interactive fields directly on the PDF page.
- **Add fields**: textbox, checkbox, radio button, dropdown, list box, signature, and initials
- **Edit quickly**: move, resize, align, distribute, copy/paste, undo/redo
- **Configure properties**: name, value, font, color, border, alignment, required/read-only/visibility, tab order
- **Control interaction**: toggle read-only, show/hide, and manage printing behavior
- **Manage fields**: select, group/ungroup, reorder, or delete
- **Save and print**: persist designed fields in the PDF and print with appearances
- **Tailor the UI**: show/hide or customize the Form Designer toolbar; handle events for add/edit/select/move/resize
- The form designer toolbar can be customized by showing or hiding default items and by controlling the order in which the items appear.

Use the following Code-snippet to enable Form Designer by injecting `FormDesigner` Module.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '680px' }} 
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

![FormDesigner](../images/FormDesigner.gif)

## Show or hide the form designer toolbar

Show or hide the form designer toolbar programmatically during initialization or at runtime.

Use the [EnableFormDesigner](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pdfViewerModel#enableformdesigner) property or the [showFormDesignerToolbar](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar#showformdesignertoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the toolbar using the `EnableFormDesigner` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableFormDesigner={true}
        style={{ 'height': '680px' }} 
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## How to customize the form designer toolbar

Choose which tools appear and control their order in the form designer toolbar.

Use [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings) with the [`FormDesignerToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings#formdesignertoolbaritems) property to choose which form design tools are available. The property accepts a list of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formDesignerToolbarItem) values. The items you include are both displayed and rendered in the order listed; any items you omit are hidden. This provides a streamlined, user-friendly form design experience across devices.


import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
          // Configure Form Designer toolbar with specific tools
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
        >
          <Inject services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
            ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner
          ]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
