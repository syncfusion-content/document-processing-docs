---
layout: post
title: Form Fields API in React PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in React PDF Viewer

The PDF Viewer exposes a set of programmatic APIs to create, edit, validate, navigate, and manage form fields. These APIs enable automation of common tasks such as updating values, exporting/importing form data, resetting fields, and toggling designer or validation features. The examples below demonstrate usage patterns; code samples remain unchanged and are runnable when the viewer is initialized.

Each sample demonstrates a single API call or small workflow (for example, updating a field value or exporting form data). Use the provided APIs in application logic or UI handlers to automate form workflows.

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#isformfielddocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#isformdesignertoolbarvisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) | Enables or disables form field validation.|
| [enableFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enableformfields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enableformdesignertoolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const updateFormFieldsValue = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    // Retrieve all form fields (two ways)
    const fields =
      viewer.retrieveFormFields?.() ||
      viewer.formFieldCollection ||
      [];

    // Find the textbox named "First Name" (fallback to the first field)
    const field =
      fields.find(f => f?.name === 'First Name') || fields[0];

    if (field) {
      // Update value and tooltip, then apply via API
      field.value = 'John Doe';
      field.tooltip = 'First';
      viewer.updateFormFieldsValue(field);
    } else {
      console.warn('No form fields available to update.');
    }
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={updateFormFieldsValue}>updateFormFieldsValue</button>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const updateFormFields = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const fields =
      viewer.retrieveFormFields?.() ||
      viewer.formFieldCollection ||
      [];

    const field =
      fields.find(f => f?.name === 'First Name') || fields[0];

    if (field) {
      // Use FormDesigner API to update properties
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
    } else {
      console.warn('No form fields available to update.');
    }
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={updateFormFields}>updateFormFields</button>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const retrieveFormFields = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    // Either call the API or read the collection directly
    const fields =
      viewer.retrieveFormFields?.() ||
      viewer.formFieldCollection ||
      [];

    console.log('Form fields:', fields);

    const byName = fields.filter(f => f?.name === 'First Name');
    const onlyTextboxes = fields.filter(f => f?.type === 'Textbox');
    console.log('By name:', byName);
    console.log('Textboxes:', onlyTextboxes);
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={retrieveFormFields}>retrieveFormFields</button>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const resetAll = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    // Reset all form fields
    viewer.resetFormFields();
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={resetAll}>resetFormFields</button>
        {/* Optional helper button */}
        <button onClick={resetSpecific} style={{ marginLeft: 8 }}>reset specific fields</button>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';
// Importing the enum from core package is typical for formats
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  // Import from a known source (path/stream depends on your integration)
  const importFromSource = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    // Example: specify a key that your backend/hosted env resolves, or use your own logic
    viewer.importFormFields('File', FormFieldDataFormat.Json);
  };

  // Optional: Import from a local file chosen by user
  const onFilePicked = async (e) => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const file = e.target.files?.[0];
    if (!file) return;

    // Pass the File object directly if your integration supports it
    // (The viewer supports file/stream depending on the environment)
    viewer.importFormFields(file, FormFieldDataFormat.Json);
    // Reset the input so picking same file again still triggers change
    e.target.value = '';
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={importFromSource}>importFormFields</button>
        {/* Optional local file import */}
        <input
          type="file"
          accept=".json,.xfdf,.fdf"
          onChange={onFilePicked}
          style={{ marginLeft: 8 }}
        />

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## focusFormField

Moves focus to a form field by name or ID.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent
, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const focusFirstName = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.focusFormField('FirstName'); // use the exact field name/ID
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={focusFirstName}>focusFormField</button>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const exportAsObject = async () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    try {
      const data = await viewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf);
      // Save, send to server, or inspect in console
      console.log('Exported object:', data);
    } catch (e) {
      console.error('Export failed:', e);
    }
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={exportAsObject}>exportFormFieldsAsObject</button>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const exportFormFields = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    // Triggers download based on given file token/name and format
    viewer.exportFormFields('FormData', FormFieldDataFormat.Json);
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={exportFormFields}>exportFormFields</button>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const clearFirstField = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const fields =viewer.retrieveFormFields();
    if (fields.length) {
      viewer.clearFormFields(fields[0]);
    } else {
      console.warn('No form fields to clear.');
    }
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={clearFirstField}>clearformfield</button>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const checkFormFieldDocument = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    console.log(viewer.isFormFieldDocument);
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={checkFormFieldDocument}>checkFormFieldDocument</button>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
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

{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the form designer toolbar when the PDF document is loaded in the PDF Viewer control initially
and get the form designer Toolbar Visible status.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
// eslint-disable-next-line
         let pdfviewer;

function App() {
  function documentLoaded () {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }});
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        documentLoad={documentLoaded}
        isFormDesignerToolbarVisible = {true}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const logFormFieldCollections = () => {
    const viewer = viewerRef.current;
    if (!viewer) {
      console.warn('Viewer instance not ready yet.');
      return;
    }
    // Logs the form field collections
    const collections = viewer.formFieldCollections ?? viewer.formFieldCollection ?? [];
    console.log('Form Field Collections:', collections);
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={logFormFieldCollections} style={{ marginBottom: 12 }}>
          Form Field Collections
        </button>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
        >
          <Inject
            services={[
              Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
              ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function documentLoaded () {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }});
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        documentLoad={documentLoaded}
        enableFormFieldsValidation={true}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        style={{ 'height': '680px' }} 
        // Enable or disable form fields.
        enableFormFields = {false}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          style={{ height: '680px' }}
          // Enable or disable form designer.
          enableFormDesignerToolbar={false}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              FormFields,
              FormDesigner,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)