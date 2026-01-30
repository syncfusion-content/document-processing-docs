---
layout: post
title: Style form fields in the React PDF Viewer | Syncfusion
description: Learn how to configure typography, colors, borders, alignment, and other style settings for form fields using the UI and Programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Style form fields in React PDF Viewer

The PDF Viewer component allows users to style and customize the appearance of PDF form fields using the Form Designer UI and programmatically. User can also set the default settings applied when fields are added from the Form Designer toolbar.

Supported field types:

- [Textbox](#textbox)
- [Password](#password)
- [CheckBox](#checkbox)
- [RadioButton](#radiobutton)
- [ListBox](#listbox)
- [DropDown](#dropdown)
- [Signature field](#signature-field)
- [Initial field](#initial-field)

## Textbox

### Style Textbox

Use the Properties panel to adjust the value, font family/size/style, text color, border and background colors, border thickness, text alignment, and maximum length.

![Textbox style from UI](../../../javascript-es6/images/ui-textbox-style.png)

### Style Textbox programmatically

Use `updateFormField` to modify a textbox’s appearance and behavior on a button click. The example below finds the field by name (or falls back to the first field) and updates value, typography, colors, alignment, and border thickness.

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

### Default Textbox settings

The PDF Viewer exposes a default settings APIs for form fields. Use the [TextFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#textfieldsettings) to preconfigure TextBox properties applied when adding fields from the Form Designer toolbar.

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

## Password

### Style Password

Use the Properties panel to configure the tooltip, font family and size, masked text color, border and background colors, text alignment, maximum length, and border thickness.

![Password style from UI](../../../javascript-es6/images/ui-password-style.png)

### Style Password programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const pw = fields.find((f) => f.name === 'Password');
    if (pw) {
      viewerRef.current.formDesignerModule.updateFormField(pw, {
        tooltip: 'Enter password',
        fontFamily: 'Courier',
        fontSize: 10,
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white',
        alignment: 'Left',
        maxLength: 20,
        thickness: 1
      });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default Password settings

The PDF Viewer exposes default settings APIs for form fields. Use the [PasswordFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#passwordfieldsettings) to preconfigure Password properties applied when adding fields from the Form Designer toolbar.

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
      viewerRef.current.passwordFieldSettings = {
        name: 'Password',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Password',
        thickness: 4,
        value: 'Password',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white',
        alignment: 'Left',
        maxLength: 0
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

## CheckBox

### Style CheckBox

Use the Properties panel to toggle the checked state and customize border and background colors, and border thickness.

![CheckBox style from UI](../../../javascript-es6/images/ui-checkbox-style.png)

### Style CheckBox programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const cb = fields.find((f) => f.name === 'Subscribe');
    if (cb) {
      viewerRef.current.formDesignerModule.updateFormField(cb, {
        isChecked: true,
        backgroundColor: 'white',
        borderColor: 'black',
        thickness: 2,
        tooltip: 'Subscribe'
      });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default CheckBox settings

The PDF Viewer exposes default settings APIs for form fields. Use the [CheckBoxFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#checkboxfieldsettings) to preconfigure CheckBox properties applied when adding fields from the Form Designer toolbar.

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
      viewerRef.current.checkBoxFieldSettings = {
        name: 'CheckBox',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'CheckBox',
        thickness: 4,
        isChecked: true,
        backgroundColor: 'white',
        borderColor: 'black'
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

## RadioButton

### Style RadioButton

Use the Properties panel to set the selected state, border and background colors, and border thickness. Radio buttons with the same name are grouped automatically.

![RadioButton style from UI](../../../javascript-es6/images/ui-radiobutton-style.png)

### Style RadioButton programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const radios = fields.filter((f) => f.name === 'Gender');
    if (radios.length > 1) {
      viewerRef.current.formDesignerModule.updateFormField(radios[0], { isSelected: false });
      viewerRef.current.formDesignerModule.updateFormField(radios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default RadioButton settings

The PDF Viewer exposes default settings APIs for form fields. Use the [RadioButtonFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#radiobuttonfieldsettings) to preconfigure RadioButton properties applied when adding fields from the Form Designer toolbar.

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
      viewerRef.current.radioButtonFieldSettings = {
        name: 'RadioButton',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'RadioButton',
        thickness: 4,
        isSelected: true,
        backgroundColor: 'white',
        borderColor: 'black',
        value: 'RadioButton'
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

## ListBox

### Style ListBox

Use the Properties panel to add or remove items, set the selected value, and adjust typography and colors.

![ListBox style from UI](../../../javascript-es6/images/ui-listbox-style.png)

### Style ListBox programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const lb = fields.find((f) => f.name === 'States');
    if (lb) {
      viewerRef.current.formDesignerModule.updateFormField(lb, {
        options: [
          { itemName: 'Item 1', itemValue: 'item1' },
          { itemName: 'Item 2', itemValue: 'item2' },
          { itemName: 'Item 3', itemValue: 'item3' }
        ],
        value: 'item2',
        fontFamily: 'Courier',
        fontSize: 10,
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white'
      });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default ListBox settings

The PDF Viewer exposes default settings APIs for form fields. Use the [listBoxFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#listboxfieldsettings) to preconfigure ListBox properties applied when adding fields from the Form Designer toolbar.

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
      const customOptions = [
        { itemName: 'item1', itemValue: 'item1' },
        { itemName: 'item2', itemValue: 'item2' },
        { itemName: 'item3', itemValue: 'item3' }
      ];
      viewerRef.current.listBoxFieldSettings = {
        name: 'ListBox',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'ListBox',
        thickness: 4,
        value: 'ListBox',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'White',
        alignment: 'Left',
        options: customOptions
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

## DropDown

### Style DropDown

Use the Properties panel to add or remove items, set the default value, and adjust typography and colors.

![DropDown style from UI](../../../javascript-es6/images/ui-dropdown-style.png)

### Style DropDown programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const dd = fields.find((f) => f.name === 'Country');
    if (dd) {
      viewerRef.current.formDesignerModule.updateFormField(dd, {
        options: [
          { itemName: 'USA', itemValue: 'US' },
          { itemName: 'Canada', itemValue: 'CA' },
          { itemName: 'Mexico', itemValue: 'MX' }
        ],
        value: 'US',
        fontFamily: 'Courier',
        fontSize: 10,
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white'
      });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default DropDown settings

The PDF Viewer exposes default settings APIs for form fields. DropDown uses [DropDownFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#DropDownfieldsettings) to preconfigure properties applied when adding fields from the Form Designer toolbar.

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
      const ddOptions = [
        { itemName: 'item1', itemValue: 'item1' },
        { itemName: 'item2', itemValue: 'item2' },
        { itemName: 'item3', itemValue: 'item3' }
      ];
      viewerRef.current.dropDownFieldSettings = {
        name: 'DropDown',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'DropDown',
        thickness: 4,
        value: 'DropDown',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'White',
        alignment: 'Left',
        options: ddOptions
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

## Signature field

### Style Signature field

Use the Properties panel to configure the tooltip, indicator text, dialog display modes, border thickness, required setting, and colors.

![Signature style from UI](../../../javascript-es6/images/ui-signature-style.png)

### Style Signature field programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const sig = fields.find((f) => f.name === 'Sign');
    if (sig) {
      viewerRef.current.formDesignerModule.updateFormField(sig, {
        tooltip: 'Please sign here',
        thickness: 3,
        isRequired: true,
        isPrint: true,
        backgroundColor: 'white',
        borderColor: 'black'
      });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default Signature field settings

The PDF Viewer exposes default settings APIs for form fields. Use the [SignatureFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#signaturefieldsettings) to preconfigure Signature properties applied when adding fields from the Form Designer toolbar.

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
      viewerRef.current.signatureFieldSettings = {
        name: 'Signature',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Signature',
        thickness: 4,
        signatureIndicatorSettings: {
          opacity: 1,
          backgroundColor: '#237ba2',
          height: 50,
          fontSize: 15,
          text: 'Signature Field',
          color: 'white'
        }
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

## Initial field

### Style Initial field

Use the Properties panel to configure the tooltip, indicator text, dialog display modes, border thickness, and colors.

![Initial style from UI](../../../javascript-es6/images/ui-initial-style.png)

### Style Initial field programmatically

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.retrieveFormFields?.() || [];
    const init = fields.find((f) => f.name === 'Initial');
    if (init) {
      viewerRef.current.formDesignerModule.updateFormField(init, {
        tooltip: 'Add your initials',
        thickness: 2,
        isRequired: true,
        isPrint: true,
        backgroundColor: 'white',
        borderColor: 'black'
      });
    }
  };

  return (
    <div className='control-section'>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        documentLoad={onDocumentLoad}
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

### Default Initial field settings

The PDF Viewer exposes default settings APIs for form fields. Use the [InitialFieldSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#initialfieldsettings) to preconfigure Initial properties applied when adding fields from the Form Designer toolbar.

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
      viewerRef.current.initialFieldSettings = {
        name: 'Initial',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Initial',
        thickness: 4,
        initialIndicatorSettings: {
          opacity: 1,
          backgroundColor: '#237ba2',
          height: 50,
          fontSize: 15,
          text: 'Initial Field',
          color: 'white'
        }
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
- [Create form fields](./create-formfields)
- [Edit form fields](./edit-formfields)
- [Remove form fields](./remove-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)