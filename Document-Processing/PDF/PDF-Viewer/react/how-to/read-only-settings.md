---
layout: post
title: How to Lock Annotations, Forms, and Comments | Syncfusion
description: Lock annotations, form fields, and comments in the React PDF Viewer for viewing, while page navigation, search, zoom, print, and download stay available.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Lock Annotations, Forms, and Comments

Use the `readOnlySettings` property to restrict editing for annotations, form fields, and comments. Set each flag to `true` to lock that area. Document viewing, page navigation, search, zoom, print, and download stay available.

| Property | When set to `true` |
| --- | --- |
| `annotations` | Locks every annotation interaction. Users cannot add, select, move, resize, edit, or delete annotations. Comments are locked as well, because comments belong to annotations. |
| `formFields` | Keeps form fields view only. Users cannot fill or change field values, and they cannot add, move, resize, or delete fields in the form designer. |
| `comments` | Locks comments only when `annotations` is `false`. Existing comments stay visible. Users cannot add, edit, reply to, or delete comments. Annotation drawing and editing stay available. |

If `annotations` is `true`, comments stay locked even when `comments` is `false`.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample in React.

**Step 2:** Set `readOnlySettings` on `PdfViewerComponent`. The sample below locks annotations, form fields, and comments together.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

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
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  return (
    <div>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
        readOnlySettings={{ annotations: true, formFields: true, comments: true }}
        style={{ height: '700px' }}
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
            FormDesigner
          ]}
        />
      </PdfViewerComponent>
    </div>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Lock comments only

Set `comments` to `true` and leave `annotations` as `false` when users may still add and edit annotations, but must only view existing comments.

```js
readOnlySettings={{ annotations: false, formFields: false, comments: true }}
```

## Lock form fields only

Set `formFields` to `true` when users may edit annotations and comments, but must only view form fields. Filling a field and designing fields are both restricted.

```js
readOnlySettings={{ annotations: false, formFields: true, comments: false }}
```

Each flag defaults to `false`, so editing stays enabled until you set that flag to `true`.

## See also

- [Getting started with React PDF Viewer](../getting-started)
- [Lock square or rectangle annotations](./lock-annotation)
