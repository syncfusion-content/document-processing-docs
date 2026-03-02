---
layout: post
title: Show, Hide, or Toggle Annotation Visibility | Syncfusion
description: Learn here all about how to Show, Hide, or Toggle Annotation Visibility and Control annotation visibility in the React PDF Viewer
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Show, Hide, or Toggle Annotation Visibility

You can control annotation visibility at two levels in the React PDF Viewer:

- **In the Viewer UI**: Temporarily hide or show annotations to simplify the screen for certain workflows (presentations, reviews) without modifying the source PDF. 
- **At export time**: Keep annotations visible inside your app but **hide them only in the downloaded PDF** by setting the `noView` flag.

N> If you’re new to the component, set up the **Standalone** Viewer first using the [Getting Started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started).

## Hide a Specific Annotation

For concise Viewer‑level hiding, remove an annotation by its **id**. If you’ll want to re‑show it later, export annotations to a cache first, then delete the target. See the full, step‑by‑step sample in [Show or hide annotations in React PDF Viewer](./show-hide-annotation)

**Minimal snippet (delete by id):**

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
// Hide (remove) a specific annotation by id
function hideAnnotationById(annotationId) {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotationModule.deleteAnnotationById(annotationId);
}

// Example: hide the first annotation currently in the document
function exampleHideFirst() {
  const viewer = document.getElementById('container').ej2_instances[0];
  if (viewer.annotationCollection?.length) {
    hideAnnotationById(viewer.annotationCollection[0].annotationId || viewer.annotationCollection[0].id);
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Show a Specific Annotation

Re‑import previously exported annotations and (optionally) filter the JSON to reinsert only the one you need. (Export must be done **before** deletion.)

**Minimal snippet (re‑import from cache):**

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
// Assume you cached this earlier via viewer.exportAnnotationsAsObject()
function showFromCache(exportedObjectString) {
  const viewer = document.getElementById('container').ej2_instances[0];
  if (exportedObjectString) {
    viewer.importAnnotation(JSON.parse(exportedObjectString));
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Hide or Show All Annotations

Use `deleteAnnotations()` to remove **all** annotations, then re-import them from cache to show again.

**Minimal snippet (toggle all using cache):**

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
let __cache = null;
let __areHidden = false;

async function toggleAllAnnotations() {
  const viewer = document.getElementById('container').ej2_instances[0];

  if (!__areHidden) {
    __cache = await viewer.exportAnnotationsAsObject();
    viewer.deleteAnnotations();
    __areHidden = true;
  } else {
    if (__cache) viewer.importAnnotation(JSON.parse(__cache));
    __areHidden = false;
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Conditional Visibility (Annotations by Type)

To hide a **type** (e.g., all text markups) while keeping others, export to cache, clear the UI, then **re-import only the allowed types**. The export payload is JSON; filter by each type’s bucket before importing. (Structure may vary by version—adjust keys accordingly.)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
// Example: hide all Text Markup (Highlight, Underline, Strikethrough, Squiggly)
async function hideTextMarkup() {
  const viewer = document.getElementById('container').ej2_instances[0];

  const exportObject = await viewer.exportAnnotationsAsObject();
  viewer.deleteAnnotations();

  const parsed = JSON.parse(exportObject);
  const filtered = {
    ...parsed,
    textMarkupAnnotations: [] // Key name depends on version; inspect your export object
  };

  viewer.importAnnotation(filtered);
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Role‑based Visibility Control

Implement role filters on top of the export/delete/import strategy:

- **Admins →** see **all annotations**
- **Editors →** see **all markup**
- **Viewers →** see **only comments or approved stamps**

Use per‑annotation metadata (e.g., `subject`, `author`, `customData`) to include/exclude what each role can view.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
// Example: 'Viewer' role → only Approved stamps
async function applyViewerRole() {
  const viewer = document.getElementById('container').ej2_instances[0];
  const exportObject = await viewer.exportAnnotationsAsObject();
  const payload = JSON.parse(exportObject);

  const roleFiltered = {
    ...payload,
    textMarkupAnnotations: [],
    shapeAnnotations: [],
    freeTextAnnotations: [],
    inkAnnotations: [],
    stampAnnotations: (payload.stampAnnotations || []).filter(s =>
      s.subject === 'Approved' || s.customData?.status === 'approved'
    )
  };

  viewer.deleteAnnotations();
  viewer.importAnnotation(roleFiltered);
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Toggle Annotation Visibility (UI Button Example)

For a simple UI toggle (single button), reuse the **toggle all** function above.

## Events Related to Visibility

There aren’t built‑in `annotationShown`/`annotationHidden` events. Use **export/import** lifecycle events to infer visibility changes (e.g., `exportStart`/`exportSuccess` when hiding, and `importStart`/`importSuccess` when showing). For all annotation‑level events (add/remove/select/resize/etc.), see **Annotation Events** (link below).

**Tiny example:**

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function wireVisibilityEvents() {
  const viewer = document.getElementById('container').ej2_instances[0];

  viewer.exportStart = () => console.log('annotationHidden:start');
  viewer.exportSuccess = () => console.log('annotationHidden:success');

  viewer.importStart = () => console.log('annotationShown:start');
  viewer.importSuccess = () => console.log('annotationShown:success');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Control annotation visibility only in the exported PDF

If you want annotations **visible in your app** but **hidden in the saved PDF**, set the **`PdfAnnotationFlag.noView`** flag on each annotation before download using the EJ2 PDF library.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import { PdfAnnotationFlag, PdfDocument } from '@syncfusion/ej2-pdf';

// Download the current PDF with annotations flagged as `noView`
async function downloadWithNoView() {
  const viewer = document.getElementById('container').ej2_instances[0];

  const blob = await viewer.saveAsBlob();
  const reader = new FileReader();
  reader.onload = function () {
    const base64 = String(reader.result).split('base64,')[1];
    const doc = new PdfDocument(base64);

    for (let i = 0; i < doc.pageCount; i++) {
      const page = doc.getPage(i);
      for (let j = 0; j < page.annotations.count; j++) {
        const annot = page.annotations.at(j);
        annot.flags |= PdfAnnotationFlag.noView; // hide in exported PDF
      }
    }

    doc.saveAsBlob().then((modified) => {
      const linkReader = new FileReader();
      linkReader.onload = function () {
        const a = document.createElement('a');
        a.href = linkReader.result;
        a.download = 'without-annotations.pdf';
        a.click();
      };
      linkReader.readAsDataURL(modified.blobData);
    });
  };
  reader.readAsDataURL(blob);
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)

## See also

- [Annotation Overview](../overview)    
- [Show or hide annotations in React PDF Viewer](./show-hide-annotation)
- [Import and export annotations](../annotation/export-import/export-annotation)