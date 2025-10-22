---
layout: post
title: Organize Pages Events in PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the PDF viewer, including rotating, rearranging, inserting, deleting, and copying pages on mobile devices.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize Pages Events in PDF Viewer

The PDF Viewer provides events to track and respond to actions within the page organizer, allowing for the customization of page manipulation features.

## pageOrganizerSaveAs

The `pageOrganizerSaveAs` event is triggered when a save action is performed in the page organizer.

-  Occurs when the **Save as** button in the page organizer toolbar is clicked after modifying the document structure.

The event arguments provide the necessary information about the save event:

- `fileName`: The name of the currently loaded PDF document.
- `downloadDocument`: A base64 string of the modified PDF document data.
- `cancel`: A boolean that, when set to `true`, prevents the default save action from proceeding.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.pdfviewer = React.createRef();
  }

  render() {
    return (
      <div>
        <PdfViewerComponent
          id="PdfViewer"
          ref={this.pdfviewer}
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          pageOrganizerSaveAs={(args) => {
            console.log('File Name is' + args.fileName);
            console.log('Document data' + args.downloadDocument);
          }}
          style={{ height: '640px' }}
        >
          <Inject services={[
            Toolbar,
            Magnification,
            Navigation,
            LinkAnnotation,
            ThumbnailView,
            BookmarkView,
            TextSelection,
            Annotation,
            FormDesigner,
            FormFields,
            PageOrganizer
          ]} />
        </PdfViewerComponent>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

## pageOrganizerZoomChanged

The `pageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer is changed.

-  This event is fired when the user interacts with the zoom slider in the page organizer. The `showImageZoomingSlider` property in `pageOrganizerSettings` must be set to `true` for the slider to be visible.


Event arguments:

- `previousZoomValue`: The previous zoom value.
- `currentZoomValue`: The current zoom value.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.pdfviewer = React.createRef();
  }

  render() {
    return (
      <div>
        <PdfViewerComponent
          id="PdfViewer"
          ref={this.pdfviewer}
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          pageOrganizerZoomChanged={(args) => {
            console.log('Previous Zoom Value is' + args.previousZoom);
            console.log('Current Zoom Value is' + args.currentZoom);
          }}
          pageOrganizerSettings={{ showImageZoomingSlider: true }}
          style={{ height: '640px' }}
        >
          <Inject services={[
            Toolbar,
            Magnification,
            Navigation,
            LinkAnnotation,
            ThumbnailView,
            BookmarkView,
            TextSelection,
            Annotation,
            FormDesigner,
            FormFields,
            PageOrganizer
          ]} />
        </PdfViewerComponent>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

## Related event documentation

- Overall Viewer events: [Event](../event.md)
- Annotation events: [Annotation events](../annotations/annotation-event.md)
- Form designer events: [Form field events](../form-designer/form-field-events.md)