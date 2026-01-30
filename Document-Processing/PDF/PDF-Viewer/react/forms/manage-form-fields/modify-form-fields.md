---
layout: post
title: Edit form fields in the React PDF Viewer | Syncfusion
description: Learn how to edit PDF form fields using the UI and programmatically with APIs in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify PDF Form Field Properties in React

You can modify form fields using the **UI** or **API**.

## Modify PDF Form Field Properties using the UI
- Right click a field → **Properties** to update settings.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

## Modify PDF Form Field Properties programmatically
Use [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) to change behavior/data (including position and size):

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

## Modify PDF Form Field Properties by Field type

### Textbox
- UI: Update value, font, size, colors, border thickness, alignment, max length, multiline.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for value, typography, alignment, colors, borders.

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

### Password

- UI: Tooltip, required, max length, font, appearance.
![Password edited from UI](../../../javascript-es6/images/ui-password-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, validation flags, typography, colors, alignment, borders.

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

### CheckBox
- UI: Toggle checked state.
![CheckBox edited from UI](../../../javascript-es6/images/ui-checkbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for isChecked, tooltip, colors, borders.
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

### RadioButton
•	UI: Set selected item in a group (same Name).
![RadioButton edited from UI](../../../javascript-es6/images/ui-radiobutton-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) to set selected value and border appearance.

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

### ListBox
•	UI: Add/remove items, set selection, adjust fonts/colors.
![ListBox edited from UI](../../../javascript-es6/images/ui-listbox-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for items, selection, borders.

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

### DropDown
•	UI: Add/remove items, default value, appearance.
![DropDown edited from UI](../../../javascript-es6/images/ui-dropdown-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for items, value, borders.
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

### Signature Field
•	UI: Tooltip, thickness, indicator text, required/visibility.
![Signature field edited from UI](../../../javascript-es6/images/ui-signature-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
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

### Initial Field
•	UI: Tooltip, indicator text, thickness, required/visibility.
![Initial field edited from UI](../../../javascript-es6/images/ui-initial-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
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

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Style form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)