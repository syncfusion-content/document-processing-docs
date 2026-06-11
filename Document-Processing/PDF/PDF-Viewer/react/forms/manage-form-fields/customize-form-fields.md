---
layout: post
title: Style form fields in the React PDF Viewer | Syncfusion
description: Learn how to configure typography, colors, borders, alignment, and other style settings for form fields using the UI and Programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the appearance of PDF Form Fields in React PDF Viewer

**Styling** customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize appearance of form fields using the UI
Use the **Properties** panel to adjust:
- Font family and size, text color, and alignment
- Border color and thickness
- Background color
![Textbox style from UI showing font, color, and border settings](../../../javascript-es6/images/ui-textbox-style.png)

## Customize appearance of form fields programmatically
Use [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) to apply styles:

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const updateTextboxStyle = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const tb = fields.find((f) => f.name === 'First Name') || fields[0];
    if (tb) {
      viewerRef.current.formDesignerModule.updateFormField(tb, {
        value: 'John',
        fontFamily: 'Courier',
        fontSize: 12,
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white',
        alignment: 'Left',
        thickness: 2
      });
    }
  };

  return (
    <div className='control-section'>
      <button onClick={updateTextboxStyle}>Update Textbox Style</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Set Default Styles for New Form Fields
Define defaults so fields added from the toolbar inherit styles.
{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useEffect, useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.textFieldSettings = {
        name: 'Textbox',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Textbox',
        thickness: 4,
        value: 'Textbox',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'White',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false
      };
    }
  }, []);

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)