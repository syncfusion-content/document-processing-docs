---
layout: post
title: Add Free Text Annotations in React PDF Viewer | Syncfusion
description: Learn how to enable, add, customize, and manage Free Text (text box) annotations in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Free Text Annotations in React PDF Viewer
Free Text annotations let users place editable text boxes on a PDF page to add comments, labels, or notes without changing the original document content.

---

## Enable Free Text in the Viewer

To enable ink annotations, inject the following modules into the React PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotation)
- [**Toolbar**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#toolbar)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Annotation]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## Add Free Text

### Add Free Text Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Click **Free Text** to enable Free Text mode.
3. Click on the page to place the text box and start typing.

![Free Text tool](../../../javascript-es6/images/freetext_tool.png)

N>* When Pan mode is active, choosing Free Text switches the viewer into the appropriate selection/edit workflow for a smoother experience.

### Enable Free Text Mode

Programmatically switch to Free Text mode.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function enableFreeTextMode() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.setAnnotationMode('FreeText');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

#### Exit Free Text Mode
{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function exitFreeTextMode() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

### Add Free Text Programmatically

Use the [`addAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation) API to create a text box at a given location with desired styles.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function addFreeTextProgrammatically() {
  const viewer = document.getElementById('container').ej2_instances[0];
  viewer.annotation.addAnnotation('FreeText', {
    offset: { x: 100, y: 150 },
    pageNumber: 1,
    width: 220,
    height: 48,
    defaultText: 'Syncfusion',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontColor: '#ffffff',
    textAlignment: 'Center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ff0000',
    fillColor: '#0000ff',
    isLock: false
  });
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## Customize Free Text Appearance

Configure default properties using the [`FreeTextSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#freeTextsettings) property (for example, default **fill color**, **border color**, **font color**, **opacity**, and **auto‑fit**). 

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  freeTextSettings={{
    fillColor: 'green',
    borderColor: 'blue',
    fontColor: 'yellow',
    opacity: 0.3,
    enableAutoFit: true
  }}
  style={{ height: '650px' }}
>
  <Inject services={[Toolbar, Annotation]} />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> To tailor right‑click options, see [**Customize Context Menu**](../../context-menu/custom-context-menu).

---

## Modify, Edit, Delete Free Text

- **Move/Resize**: Drag the box or use the resize handles.
- **Edit Text**: Click inside the box and type.
- **Delete**: Use the toolbar or context menu options. For deletion workflows and API details, see [**Delete Annotation**](../remove-annotations).

### Edit Free Text

#### Edit Free Text (UI)

Use the annotation toolbar to configure font family, size, color, alignment, styles, fill color, stroke color, border thickness, and opacity.

- Edit the **font family** using the Font Family tool.
![Font family](../../images/fontfamily.png)

- Edit the **font size** using the Font Size tool.  
![Font size](../../images/fontsize.png)

- Edit the **font color** using the Font Color tool.  
![Font color](../../images/fontcolor.png)

- Edit the **text alignment** using the Text Alignment tool.  
![Text alignment](../../images/textalign.png)

- Edit the **font styles** (bold, italic, underline) using the Font Style tool.
![Text styles](../../images/fontstyle.png)

- Edit the **fill color** using the Edit Color tool.  
![Fill color](../../images/fillcolor.png)

- Edit the **stroke color** using the color palette in the Edit Stroke Color tool.
![Stroke color](../../images/fontstroke.png)

- Edit the **border thickness** using the Edit Thickness tool.  
![Thickness](../../images/fontthickness.png)

- Edit the **opacity** using the Edit Opacity tool.  
![Opacity](../../images/fontopacity.png)

#### Edit Free Text Programmatically

Update bounds or text and call `editAnnotation()`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
function editFreeTextProgrammatically() {
  const viewer = document.getElementById('container').ej2_instances[0];
  for (const ann of viewer.annotationCollection) {
    if (ann.subject === 'Text Box') {
      const { width, height } = ann.bounds;
      ann.bounds = { x: 120, y: 120, width, height };
      ann.dynamicText = 'Syncfusion (updated)';
      viewer.annotation.editAnnotation(ann);
      break;
    }
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> Free Text annotations do **not** modify the original PDF text; they overlay editable text boxes on top of the page content.

---

### Delete Free Text

Delete Free Text via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

---

## Set Default Properties During Initialization
Apply defaults for new text boxes using the [`freeTextSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#inkannotationsettings) property. You can also enable **Auto‑fit** so the box expands with content.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  freeTextSettings={{
    fillColor: 'green',
    borderColor: 'blue',
    fontColor: 'yellow',
    enableAutoFit: true
  }}
  style={{ height: '650px' }}
>
  <Inject services={[Toolbar, Annotation]} />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## Free Text Annotation Events

Listen to add/modify/select/remove events for Free Text and handle them as needed. For the full list and parameters, see [**Annotation Events**](../annotation-event).

---

## Export and Import

Free Text annotations can be exported or imported just like other annotations. For supported formats and steps, see [**Export and Import annotations**](../export-import-annotations).

---

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
