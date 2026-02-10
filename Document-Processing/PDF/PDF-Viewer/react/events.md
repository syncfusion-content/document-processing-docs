---
layout: post
title: Events in React PDF Viewer | Syncfusion
description: Comprehensive list of events in the Syncfusion React PDF Viewer with descriptions, event arguments, and usage examples to integrate custom logic.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Events in React PDF Viewer

The PDF Viewer component triggers events for creation, page navigation, document life cycle, context menu interactions, comments, bookmarks, download and export, hyperlinks, annotation import/export, custom keyboard commands, printing, signatures, text search, and text selection. Use these events to integrate custom logic into application workflows.

The following table lists commonly used events supported by the PDF Viewer component:

| Event | Description |
| ----- | ----------- |
| [`bookmarkClick`](#bookmarkclick) | Triggers when a bookmark item is clicked in the bookmark panel. |
| [`buttonFieldClick`](#buttonfieldclick) | Triggers when a button form field is clicked. |
| [`commentAdd`](#commentadd) | Triggers when a comment is added to the comment panel. |
| [`commentDelete`](#commentdelete) | Triggers when a comment is deleted from the comment panel. |
| [`commentEdit`](#commentedit) | Triggers when a comment is edited in the comment panel. |
| [`commentSelect`](#commentselect) | Triggers when a comment is selected in the comment panel. |
| [`commentStatusChanged`](#commentstatuschanged) | Triggers when a comment’s status changes in the comment panel. |
| [`created`](#created) | Triggers during the creation of the PDF Viewer component. |
| [`customContextMenuBeforeOpen`](#customcontextmenubeforeopen) | Fires before the custom context menu opens. |
| [`customContextMenuSelect`](#customcontextmenuselect) | Fires when a custom context menu item is selected. |
| [`documentLoad`](#documentload) | Triggers while loading a document into the PDF Viewer. |
| [`documentLoadFailed`](#documentloadfailed) | Triggers when document loading fails. |
| [`documentUnload`](#documentunload) | Triggers when the document is closed. |
| [`downloadEnd`](#downloadend) | Triggers after a document is downloaded. |
| [`downloadStart`](#downloadstart) | Triggers when the download action is initiated. |
| [`exportFailed`](#exportfailed) | Triggers when exporting annotations fails. |
| [`exportStart`](#exportstart) | Triggers when exporting annotations starts. |
| [`exportSuccess`](#exportsuccess) | Triggers when annotations are exported successfully. |
| [`extractTextCompleted`](#extracttextcompleted) | Triggers when text extraction is completed. |
| [`hyperlinkClick`](#hyperlinkclick) | Triggers when a hyperlink is clicked. |
| [`hyperlinkMouseOver`](#hyperlinkmouseover) | Triggers when hovering over a hyperlink. |
| [`importFailed`](#importfailed) | Triggers when importing annotations fails. |
| [`importStart`](#importstart) | Triggers when importing annotations starts. |
| [`importSuccess`](#importsuccess) | Triggers when annotations are imported successfully. |
| [`keyboardCustomCommands`](#keyboardcustomcommands) | Triggers when customized keyboard command keys are pressed. |
| [`moveSignature`](#movesignature) | Triggers when a signature is moved across the page. |
| [`pageChange`](#pagechange) | Triggers when the current page number changes. |
| [`pageClick`](#pageclick) | Triggers when a mouse click occurs on a page. |
| [`pageMouseover`](#pagemouseover) | Triggers when moving the mouse over a page. |
| [`pageOrganizerSaveAs`](#pageorganizersaveas) | Triggers when a `save as` action is performed in the page organizer. |
| [`pageRenderComplete`](#pagerendercomplete) | Triggers after a page finishes rendering. |
| [`pageRenderInitiate`](#pagerenderinitiate) | Triggers when page rendering begins. |
| [`printEnd`](#printend) | Triggers when a print action is completed. |
| [`printStart`](#printstart) | Triggers when a print action is initiated. |
| [`removeSignature`](#removesignature) | Triggers when a signature is removed. |
| [`resizeSignature`](#resizesignature) | Triggers when a signature is resized. |
| [`resourcesLoaded`](#resourcesloaded) | Triggers after PDFium resources are loaded. |
| [`signaturePropertiesChange`](#signaturepropertieschange) | Triggers when signature properties are changed. |
| [`signatureSelect`](#signatureselect) | Triggers when a signature is selected. |
| [`signatureUnselect`](#signatureunselect) | Triggers when a signature is unselected. |
| [`textSearchComplete`](#textsearchcomplete) | Triggers when a text search is completed. |
| [`textSearchHighlight`](#textsearchhighlight) | Triggers when the searched text is highlighted. |
| [`textSearchStart`](#textsearchstart) | Triggers when a text search is initiated. |
| [`textSelectionEnd`](#textselectionend) | Triggers when text selection is complete. |
| [`textSelectionStart`](#textselectionstart) | Triggers when text selection is initiated. |
| [`thumbnailClick`](#thumbnailclick) | Triggers when a thumbnail is clicked. |
| [`toolbarClick`](#toolbarclick) | Triggers when a toolbar item is clicked. |
| [`validateFormFields`](#validateformfields) | Triggers when form field validation fails. |
| [`zoomChange`](#zoomchange) | Triggers when the magnification value changes. |

Note: For annotation and signature events, see the dedicated Annotations Events topic.

## bookmarkClick

The [bookmarkClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#bookmarkclickevent) event triggers when a bookmark item is clicked in the bookmark panel.

- Event arguments: [BookmarkClickEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkClickEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      bookmarkClick={(args) => {
        console.log(`Bookmark clicked: ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## toolbarClick

The [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#toolbarclickevent) event triggers when a toolbar item is clicked. Use it to handle actions based on the clicked item's id or name.

- Event arguments: `ClickEventArgs`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      toolbarClick={(args) => {
        console.log(`Toolbar item clicked: ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## validateFormFields

The [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#validateformfieldsevent) event triggers when form field validation fails, typically before a download or submit action proceeds. Use this event to inspect which required fields are empty and show custom messages or block application logic if needed.

- Event arguments: [ValidateFormFieldsArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/validateFormFieldsArgs)
  - name: Event name
  - documentName: Current document name
  - formField: The last interacted field’s data (if applicable)
  - nonFillableFields: Array detailing required/invalid fields

When it triggers
- Add a form field and mark it Required (UI: right‑click field > Properties > Required).
- Leave the field empty and click Download. The event fires and provides the list of fields that failed validation.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      enableFormFieldsValidation={true}
      validateFormFields={(args) => {
        console.log('form field event name:', args.name);
        console.log('form field document name:', args.documentName);
        console.log('form field data:', args.formField);
        console.log('non fillable form field details:', args.nonFillableFields);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

Tip
- To require a field programmatically, set isRequired: true when creating or editing the field via Form Designer APIs.

## zoomChange

The [zoomChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#zoomchangeevent) event triggers when the magnification value changes.

- Event arguments: [ZoomChangeEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/zoomChangeEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      zoomChange={(args) => {
        console.log(`Zoom changed to: ${args.zoomValue}%`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## buttonFieldClick

The [buttonFieldClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#buttonfieldclickevent) event triggers when a button form field is clicked.

- Event arguments: [ButtonFieldClickEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/buttonFieldClickEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      buttonFieldClick={(args) => {
        console.log(`Button field clicked. Name: ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## commentAdd

The [commentAdd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#commentaddevent) event triggers when a comment is added in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/commentEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      commentAdd={(args) => {
        console.log(`Comment added. Id: ${args.id}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## commentDelete

The [commentDelete](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#commentdeleteevent) event triggers when a comment is deleted in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/commentEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      commentDelete={(args) => {
        console.log(`Comment deleted. Id: ${args.id}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## commentEdit

The [commentEdit](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#commenteditevent) event triggers when a comment is edited in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/commentEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      commentEdit={(args) => {
        console.log(`Comment edited. Id: ${args.id}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## commentSelect

The [commentSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#commentselectevent) event triggers when a comment is selected in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/commentEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      commentSelect={(args) => {
        console.log(`Comment selected. Id: ${args.id}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## commentStatusChanged

The [commentStatusChanged](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#commentstatuschangedevent) event triggers when a comment status is changed in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/commentEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      commentStatusChanged={(args) => {
        console.log(`Comment status changed. Id: ${args.id}, Status: ${args.status}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## created

The [created](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#createdevent) event is triggered during the creation of the PDF Viewer component.

- Event arguments: `void`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      created={() => {
        console.log('PDF Viewer created');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## customContextMenuBeforeOpen

The [customContextMenuBeforeOpen](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#customcontextmenubeforeopenevent) event fires just before the context menu is shown. Use it to show or hide items based on the current state (for example, only show search items when text is selected).

- Event arguments: [CustomContextMenuBeforeOpenEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/customContextMenuBeforeOpenEventArgs)
  - name: Event name
  - ids: Array of menu item ids that will be shown; remove ids to hide items for this open

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  const menuItems = React.useMemo(() => ([
    {
      text: 'SEARCH_ON_WEB',
      id: 'web_search',
      iconCss: 'e-icons e-search',
      items: [
        { text: 'SEARCH_IN_GOOGLE_IMAGE', id: 'web_search_images' },
        { text: 'SEARCH_IN_WIKIPEDIA', id: 'web_search_wikipedia' },
        { text: 'SEARCH_IN_YOUTUBE', id: 'web_search_youtube' },
        { text: 'SEARCH_GOOGLE', id: 'web_search_google' },
      ],
    },
    { id: 'web_search_separator', separator: true },
  ]), []);

  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      customContextMenuBeforeOpen={(args) => {
        console.log(`Before open context menu at page ${args.name}`);
      }}
      documentLoad={() => {
        viewer.current.addCustomMenu(menuItems, false, false);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## customContextMenuSelect

The [customContextMenuSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#customcontextmenuselectevent) event fires when a custom menu item is clicked. Use it to branch logic by the clicked item's id.

- Event arguments: [CustomContextMenuSelectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/customContextMenuSelectEventArgs).

- name: Event name
- id: The id of the clicked menu item

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  const menuItems = React.useMemo(() => ([
    {
      text: 'SEARCH_ON_WEB',
      id: 'web_search',
      iconCss: 'e-icons e-search',
      items: [
        { text: 'SEARCH_IN_GOOGLE_IMAGE', id: 'web_search_images' },
        { text: 'SEARCH_IN_WIKIPEDIA', id: 'web_search_wikipedia' },
        { text: 'SEARCH_IN_YOUTUBE', id: 'web_search_youtube' },
        { text: 'SEARCH_GOOGLE', id: 'web_search_google' },
      ],
    },
    { id: 'web_search_separator', separator: true },
  ]), []);

  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      customContextMenuSelect={(args) => {
        console.log(`Context menu item selected: ${args.name}`);
      }}
      documentLoad={() => {
        viewer.current.addCustomMenu(menuItems, false, false);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## documentLoad

The [documentLoad](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#documentloadevent) event occurs after a document is successfully loaded and parsed.

- Event arguments: [LoadEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/loadEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      documentLoad={(args) => {
        console.log(`Document loaded: page count = ${args.pageData}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## documentLoadFailed

The [documentLoadFailed](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#documentloadfailedevent) event triggers when loading a document fails.

- Event arguments: [LoadFailedEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/loadFailedEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/invalid.pdf"
      documentLoadFailed={(args) => {
        console.log(`Load failed. Error: ${args.documentName}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## documentUnload

The [documentUnload](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#documentunloadevent) event triggers when closing the current document.

- Event arguments: [UnloadEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/unloadEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      documentUnload={() => {
        console.log('Document unloaded');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## downloadEnd

The [downloadEnd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#downloadendevent) event triggers after a document download completes.

- Event arguments: [DownloadEndEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/downloadEndEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      downloadEnd={(args) => {
        console.log(`Download finished. File name: ${args.fileName}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## downloadStart

The [downloadStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#downloadstartevent) event triggers when the download operation is initiated.

- Event arguments: [DownloadStartEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/downloadStartEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      downloadStart={() => {
        console.log('Download started');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## exportFailed

The [exportFailed](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportfailedevent) event triggers when exporting annotations fails.

- Event arguments: [ExportFailureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/exportFailureEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      exportFailed={(args) => {
        console.log(`Export failed: ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## exportStart

The [exportStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportstartevent) event triggers when exporting annotations starts.

- Event arguments: [ExportStartEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/exportStartEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      exportStart={() => {
        console.log('Export started');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## exportSuccess

The [exportSuccess](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportsuccessevent) event triggers when annotations are exported successfully.

- Event arguments: [ExportSuccessEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/exportSuccessEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      exportSuccess={() => {
        console.log('Export success');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## extractTextCompleted

The [extractTextCompleted](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#extracttextcompletedevent) event triggers when text extraction completes.

- Event arguments: [ExtractTextCompletedEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/extractTextCompletedEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      extractTextCompleted={(args) => {
        console.log(`Extracted text length: ${(args.documentTextCollection || '').length}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## hyperlinkClick

The [hyperlinkClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#hyperlinkclickevent) event triggers when a hyperlink is clicked.

- Event arguments: [HyperlinkClickEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/hyperlinkClickEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      hyperlinkClick={(args) => {
        console.log(`Hyperlink clicked: ${args.hyperlink}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## hyperlinkMouseOver

The [hyperlinkMouseOver](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#hyperlinkmouseoverevent) event triggers when hovering over a hyperlink.

- Event arguments: HyperlinkMouseOverArgs.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      hyperlinkMouseOver={(args) => {
        console.log(`Hyperlink hover at page: ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## importFailed

The [importFailed](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#importfailedevent) event triggers when importing annotations fails.

- Event arguments: [ImportFailureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/importFailureEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      importFailed={(args) => {
        console.log(`Import failed: ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## importStart

The [importStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#importstartevent) event triggers when importing annotations starts.

- Event arguments: [ImportStartEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/importStartEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      importStart={() => {
        console.log('Import started');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## importSuccess

The [importSuccess](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#importsuccessevent) event triggers when annotations are imported successfully.

- Event arguments: [ImportSuccessEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/importSuccessEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      importSuccess={() => {
        console.log('Import success');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## keyboardCustomCommands

The [keyboardCustomCommands](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#keyboardcustomcommandsevent) event triggers when customized keyboard command keys are pressed.

- Event arguments: [KeyboardCustomCommandsEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/keyboardCustomCommandsEventArgs).

  - name: Event name
  - keyboardCommand: The command metadata raised by Command Manager
  
When it triggers
- After registering gestures in commandManager.keyboardCommand. For example, pressing Shift + Alt + G or Shift + Alt + H triggers the event. Use this to handle custom keyboard shortcuts.

Refer to [Keyboard interaction](./accessibility#keyboard-interaction) for details about adding and handling custom shortcut keys.
Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);

  const onCreated = React.useCallback(() => {
    if (viewer.current) {
      viewer.current.commandManager = {
        keyboardCommand: [
          { name: 'customCopy', gesture: { pdfKeys: PdfKeys.G, modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt } },
          { name: 'customPaste', gesture: { pdfKeys: PdfKeys.H, modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt } },
          { name: 'customCut', gesture: { pdfKeys: PdfKeys.Z, modifierKeys: ModifierKeys.Control } },
          { name: 'customSelectAll', gesture: { pdfKeys: PdfKeys.E, modifierKeys: ModifierKeys.Control } },
        ],
      };
    }
  }, []);

  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      created={onCreated}
      keyboardCustomCommands={(args) => {
        console.log('Custom command triggered:', args);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## moveSignature

The [moveSignature](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#movesignatureevent) event triggers when a signature is moved across the page.

- Event arguments: `MoveSignatureEventArgs`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      moveSignature={(args) => {
        console.log(`Signature moved on page ${args.id}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## pageChange

The [pageChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#pagechangeevent) event triggers when the current page number changes (for example, via scrolling or navigation controls).

- Event arguments: [PageChangeEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageChangeEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageChange={(args) => {
        console.log(`Page changed from ${args.previousPageNumber} to ${args.currentPageNumber}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## pageClick

The [pageClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#pageclickevent) event triggers when a mouse click occurs on a page.

- Event arguments: [PageClickEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageClickEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageClick={(args) => {
        console.log(`Page ${args.pageNumber} clicked at (${args.x}, ${args.y})`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## pageMouseover

The [pageMouseover](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#pagemouseoverevent) event triggers when the mouse moves over a page.

- Event arguments: `PageMouseoverEventArgs`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageMouseover={(args) => {
        console.log(`Mouse over page ${args.name}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## pageOrganizerSaveAs

The [pageOrganizerSaveAs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#pageorganizersaveasevent) event triggers when a Save As action is performed in the page organizer.

- Event arguments: `PageOrganizerSaveAsEventArgs`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageOrganizerSaveAs={(args) => {
        console.log(`Page organizer save triggered. File name: ${args.downloadDocument}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## pageRenderComplete

The [pageRenderComplete](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#pagerendercompleteevent) event triggers after a page finishes rendering.

- Event arguments: [PageRenderCompleteEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageRenderCompleteEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageRenderComplete={(args) => {
        console.log(`Page ${args.data} rendering completed.`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## pageRenderInitiate

The [pageRenderInitiate](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#pagerenderinitiateevent) event triggers when page rendering begins.

- Event arguments: [PageRenderInitiateEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageRenderInitiateEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageRenderInitiate={(args) => {
        console.log(`Page ${args.jsonData} rendering initiated.`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## printEnd

The [printEnd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printendevent) event triggers when a print action completes.

- Event arguments: [PrintEndEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/printEndEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      printEnd={() => {
        console.log('Print action completed.');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## printStart

The [printStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printstartevent) event triggers when a print action is initiated.

- Event arguments: [PrintStartEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/printStartEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      printStart={() => {
        console.log('Print action initiated.');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## removeSignature

The [removeSignature](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#removesignatureevent) event triggers when a signature is removed.

- Event arguments: [RemoveSignatureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/removeSignatureEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      removeSignature={(args) => {
        console.log(`Signature removed from page ${args.bounds}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resizesignatureevent) event triggers when a signature is resized.

- Event arguments: [ResizeSignatureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/resizeSignatureEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      resizeSignature={(args) => {
        console.log(`Signature resized on page ${args.currentPosition}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## resourcesLoaded

The [resourcesLoaded](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourcesloadedevent) event triggers after the viewer's required resources are loaded.

- Event arguments: `void`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      resourcesLoaded={() => {
        console.log('PDFium resources loaded.');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#signaturepropertieschangeevent) event triggers when signature properties change.

- Event arguments: [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      signaturePropertiesChange={(args) => {
        console.log(`Signature properties changed on page ${args.type}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#signatureselectevent) event triggers when a signature is selected.

- Event arguments: [SignatureSelectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/signatureSelectEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      signatureSelect={(args) => {
        console.log(`Signature selected on page ${args.signature}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#signatureunselectevent) event triggers when a signature is unselected.

- Event arguments: [SignatureUnselectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/signatureUnselectEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      signatureUnselect={(args) => {
        console.log(`Signature unselected ${args.signature}`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchcompleteevent) event triggers when a text search completes.

- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSearchCompleteEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      textSearchComplete={() => {
        console.log('Text search completed.');
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchhighlightevent) event triggers when searched text is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSearchHighlightEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      textSearchHighlight={(args) => {
        console.log(`Search result ${args.bounds} highlighted.`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchstartevent) event triggers when a text search is initiated.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSearchStartEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      textSearchStart={(args) => {
        console.log(`Text search started for: "${args.searchText}"`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textselectionendevent) event triggers when text selection is complete.

- Event arguments: [TextSelectionEndEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSelectionEndEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      textSelectionEnd={(args) => {
        console.log(`Text selection ended on page ${args.pageIndex}.`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textselectionstartevent) event triggers when text selection is initiated.

- Event arguments: `TextSelectionStartEventArgs`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      textSelectionStart={(args) => {
        console.log(`Text selection started on page ${args.pageIndex}.`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## thumbnailClick

The [thumbnailClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#thumbnailclickevent) event triggers when a thumbnail is clicked.

- Event arguments: [ThumbnailClickEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/thumbnailClickEventArgs).

Example:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="pdfViewer"
      ref={viewer}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      thumbnailClick={(args) => {
        console.log(`Thumbnail clicked for page index ${args.pageNumber}.`);
      }}
      style={{ height: '600px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

> Tip: For annotation and signature-specific events and arguments, see the dedicated Annotations Events topic.

See also:

- [Annotation events](./annotation/annotation-event)
- [Form field events](./form-designer/form-field-events)
- [Organize PDF events](./organize-pdf/organize-pdf-events)
