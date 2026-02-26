---
layout: post
title: Redaction annotation in React PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and apply redaction annotations in Syncfusion React PDF Viewer with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Redaction annotation in React PDF Viewer

Redaction annotations permanently remove sensitive content from a PDF. You can draw redaction marks over text or graphics, redact entire pages, customize overlay text and styling, and apply redaction to finalize. 

![Toolbar with the Redaction tool highlighted](../../Redaction/redaction-annotations-images/redaction-icon-toolbar.png)

## Add Redaction Annotation

### Add redaction annotations in UI
- Use the **Redaction** tool from the toolbar to draw over content to hide it.  
- Redaction marks can show overlay text (for example, “Confidential”) and can be styled.

![Drawing a redaction annotation on the page](../../Redaction/redaction-annotations-images/adding-redaction-annotation.png)

Redaction annotations are interactive:
- **Movable**  
![Moving a redaction annotation](../../Redaction/redaction-annotations-images/moving-redaction-annotation.png)  
- **Resizable**  
![Resizing a redaction annotation](../../Redaction/redaction-annotations-images/resizing-redaction-annotation.png)

You can also add redaction annotations from the **context menu** by selecting content and choosing **Redact Annotation**.  
![Context menu showing Redact Annotation option](../../Redaction/redaction-annotations-images/redact-text-context-menu.png)

N> Ensure the **Redaction** tool is included in the toolbar. See [RedactionToolbar](../../Redaction/toolbar.md) for configuration.

### Add redaction annotations programmatically (React)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation } from '@syncfusion/ej2-react-pdfviewer';

function getViewer(){ return document.getElementById('container').ej2_instances[0]; }

function addRedactionProgrammatically(){
  const viewer=getViewer();
  viewer.annotation.addAnnotation('Redaction',{
    bound:{x:200,y:480,width:150,height:75},
    pageNumber:1,
    markerFillColor:'#000',
    markerBorderColor:'#fff',
    fillColor:'#000',
    overlayText:'Confidential',
    fontColor:'#fff', fontFamily:'Times New Roman', fontSize:10,
    beforeRedactionsApplied:false
  });
}

function App(){
  return(<>
    <button onClick={addRedactionProgrammatically}>Add Redaction</button>
    <PdfViewerComponent id="container" style={{height:'650px'}} documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
      <Inject services={[Toolbar,Annotation]}/>
    </PdfViewerComponent>
  </>);
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App/>);
{% endraw %}
{% endhighlight %}
{% endtabs %}  

Track additions using the `annotationAdd` event (wired above as a component prop).

## Edit Redaction Annotations

### Edit redaction annotations in UI
Use the viewer to select, move, and resize Redaction annotations. Use the context menu for additional actions.

#### Edit the properties of redaction annotations in UI
Use the property panel or **context menu → Properties** to change overlay text, font, fill color, and more.  
![Redaction Property Panel Icon](../../Redaction/redaction-annotations-images/redaction-property-panel-icon.png)  
![Redaction Property Panel via Context Menu](../../Redaction/redaction-annotations-images/redaction-property-panel-via-context-menu.png)

### Edit redaction annotations programmatically (React)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function editFirstRedaction(){
  const v=getViewer();
  const ann=v.annotationCollection||[];
  for(const a of ann){
    if(a.subject==='Redaction'){
      a.overlayText='EditedAnnotation';
      a.markerFillColor='#222';
      a.fontColor='#ff0';
      v.annotation.editAnnotation(a);
      break;
    }
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}  

This mirrors the TS logic using the React component ref to access the annotation APIs.

## Delete redaction annotations

### Delete in UI
- **Right‑click → Delete**  
![Context menu showing Delete for a redaction](../../Redaction/redaction-annotations-images/redaction-delete-context-menu.png)
- Use the **Delete** button in the toolbar  
![Toolbar delete icon for redaction](../../Redaction/redaction-annotations-images/redaction-delete-icon.png)
- Press **Delete** key

### Delete programmatically (React)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function deleteFirstRedaction(){
  const v=getViewer();
  const first=(v.annotationCollection||[]).find(a=>a.subject==='Redaction');
  if(first) v.annotationModule.deleteAnnotationById(first.annotationId);
}
{% endraw %}
{% endhighlight %}
{% endtabs %}  

This uses `annotationModule.deleteAnnotationById` with a known annotation id.

## Redact pages

### Redact pages in UI
Use the **Redact Pages** dialog to mark entire pages with options like **Current Page**, **Odd Pages Only**, **Even Pages Only**, and **Specific Pages**.  
![Page Redaction Panel](../../Redaction/redaction-annotations-images/page-redaction-panel.png)

### Add page redactions programmatically (React)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function addPageRedactions(){
  getViewer().annotation.addPageRedactions([1,3,5]);
}
{% endraw %}
{% endhighlight %}
{% endtabs %}  

Programmatically adds redaction marks to the given page numbers.

## Apply redaction

### Apply redaction in UI
Click **Apply Redaction** to permanently remove marked content.  
![Redact Button Icon](../../Redaction/redaction-annotations-images/redact-button-icon.png)  
![Apply Redaction Dialog](../../Redaction/redaction-annotations-images/apply-redaction-dialog.png)

N> **Redaction is permanent and cannot be undone.**

### Apply redaction programmatically (React)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function applyRedaction(){ getViewer().annotation.redact(); }
{% endraw %}
{% endhighlight %}
{% endtabs %}  

N> Applying redaction is **irreversible**.

## Default redaction settings during initialization

Configure defaults with the `redactionSettings` **component prop**:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
<PdfViewerComponent redactionSettings={{overlayText:'Confidential',markerFillColor:'#000'}} />
{% endraw %}
{% endhighlight %}
{% endtabs %}  

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also
- [Annotation Overview](../overview)
- [Redaction Overview](../../Redaction/overview)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export and Import Annotation](../../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)
