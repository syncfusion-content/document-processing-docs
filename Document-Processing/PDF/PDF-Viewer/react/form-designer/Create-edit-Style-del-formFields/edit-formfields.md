---
layout: post
title: Edit form fields in the React PDF Viewer | Syncfusion
description: Learn how to edit PDF form fields using the UI and programmatically with APIs in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Edit form fields in React PDF Viewer

The PDF Viewer component allows user to edit PDF form fields using the Form Designer UI and update them programmatically.

The PDF Viewer supports editing these field types:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Edit with the UI

- Select a form field and Right-click to open the Properties panel from the context menu to change its settings.

![Edit FormFields](../../../javascript-es6/images/formFields_properties.png)

- Drag to move; use resize handles to resize.
- Use the toolbar to toggle field mode and add new fields.

## Textbox

### Edit Textbox

1) Right-click the textbox → Properties.
2) Change value, font, size, colors, border thickness, alignment, max length, multiline.

![Textbox edited from UI](../../../javascript-es6/images/ui-textbox-edit.png)

### Edit Textbox programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the textbox, and applies value, typography, colors, alignment, and border thickness updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditTextbox = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const field = fields.find(f => f.name === 'First Name') || fields[0];
    if (field) {
      viewer.formDesignerModule.updateFormField(field, {
        value: 'John',
        fontFamily: 'Courier',
        fontSize: 12,
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        thickness: 2,
        alignment: 'Left',
        maxLength: 50
      });
    }
  };

  return (
    <div className='control-section'>
      <button onClick={onEditTextbox}>Apply Textbox Changes</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Password

### Edit Password

1) Right-click the password field → Properties.
2) Change tooltip, required, max length, font, and appearance.

![Password edited from UI](../../../javascript-es6/images/ui-password-edit.png)

### Edit Password programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the password field, and applies tooltip, validation flags, typography, colors, alignment, max length, and border thickness updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditPassword = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const field = fields.find(f => f.name === 'Password');
    if (field) {
      viewer.formDesignerModule.updateFormField(field, {
        tooltip: 'Enter your password',
        isReadOnly: false,
        isRequired: true,
        isPrint: true,
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
      <button onClick={onEditPassword}>Edit PasswordBox</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## CheckBox

### Edit CheckBox

1) Right-click the checkbox → Properties.
2) Toggle checked state, change border/background colors and thickness.

![CheckBox edited from UI](../../../javascript-es6/images/ui-checkbox-edit.png)

### Edit CheckBox programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the checkbox field, and applies checked state, tooltip, colors, and border thickness updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditCheckbox = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const cb = fields.find(f => f.name === 'Subscribe');
    if (cb) {
      viewer.formDesignerModule.updateFormField(cb, {
        isChecked: true,
        backgroundColor: 'white',
        borderColor: 'black',
        thickness: 2,
        tooltip: 'Subscribe to newsletter'
      });
    }
  };

  return (
    <div className='control-section'>
      <button onClick={onEditCheckbox}>Edit CheckBox</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## RadioButton

### Edit RadioButton

1) Right-click a radio button → Properties.
2) Set selected state, colors, and thickness. Buttons with the same Name form a group; only one can be selected.

![RadioButton edited from UI](../../../javascript-es6/images/ui-radiobutton-edit.png)

### Edit RadioButton programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the radio button group, and applies selection state and border appearance updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditRadio = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const genderRadios = fields.filter(f => f.name === 'Gender');
    if (genderRadios.length > 1) {
      viewer.formDesignerModule.updateFormField(genderRadios[0], { isSelected: false });
      viewer.formDesignerModule.updateFormField(genderRadios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
    }
  };

  return (
    <div className='control-section'>
      <button onClick={onEditRadio}>Edit RadioButton</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## ListBox

### Edit ListBox

1) Right-click the list box → Properties.
2) Add/remove items, set selection, and adjust fonts and colors.

![ListBox edited from UI](../../../javascript-es6/images/ui-listbox-edit.png)

### Edit ListBox programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the list box, and applies options, selection, typography, colors, and border appearance updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditListBox = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const lb = fields.find(f => f.name === 'States');
    if (lb) {
      viewer.formDesignerModule.updateFormField(lb, {
        options: [
          { itemName: 'Alabama', itemValue: 'AL' },
          { itemName: 'Alaska', itemValue: 'AK' },
          { itemName: 'Arizona', itemValue: 'AZ' }
        ],
        value: 'AZ',
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
      <button onClick={onEditListBox}>Edit ListBox</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## DropDown

### Edit DropDown

1) Right-click the dropdown → Properties.
2) Add/remove items, set default value, and adjust appearance.

![DropDown edited from UI](../../../javascript-es6/images/ui-dropdown-edit.png)

### Edit DropDown programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the dropdown, and applies items, value, typography, colors, and border appearance updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditDropDown = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const dd = fields.find(f => f.name === 'Country');
    if (dd) {
      viewer.formDesignerModule.updateFormField(dd, {
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
      <button onClick={onEditDropDown}>Edit DropDown</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Signature field

### Edit Signature field

1) Right-click the signature field → Properties.
2) Change tooltip, thickness, indicator text, required/visibility states.

![Signature field edited from UI](../../../javascript-es6/images/ui-signature-edit.png)

### Edit Signature field programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the signature field, and applies tooltip, required/print flags, colors, and border thickness updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditSignature = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const sig = fields.find(f => f.name === 'Sign');
    if (sig) {
      viewer.formDesignerModule.updateFormField(sig, {
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
      <button onClick={onEditSignature}>Edit Signature</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Initial field

### Edit Initial field

1) Right-click the initial field → Properties.
2) Change tooltip, indicator text, thickness, and required/visibility states.

![Initial field edited from UI](../../../javascript-es6/images/ui-initial-edit.png)

### Edit Initial field programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the initial field, and applies tooltip, required/print flags, colors, and border thickness updates.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onEditInitial = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const fields = viewer.retrieveFormFields();
    const init = fields.find(f => f.name === 'Initial');
    if (init) {
      viewer.formDesignerModule.updateFormField(init, {
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
      <button onClick={onEditInitial}>Edit Initial</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
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
- [Remove form Fields](./remove-formfields)
- [Style form fields](./style-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Form fields API](../formfields-api)