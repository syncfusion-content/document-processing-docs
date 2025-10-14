---
layout: post
title: Text markup annotation in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Text markup annotation in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Text markup annotation
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Text markup annotation in Javascript Pdfviewer control

The PDF Viewer control provides the options to add, edit, and delete text markup annotations such as highlight, underline, strikethrough and squiggly annotations in the PDF document.

![Alt text](../images/text_markup_annotation.png)

## Highlight a text

There are two ways to highlight a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Highlight** option in the context menu that appears.

![Alt text](../images/highlight_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Highlight** button in the annotation toolbar. It enables the highlight mode.
    * Select the text and the highlight annotation will be added.
    * You can also select the text and apply the highlight annotation using the **Highlight** button.

![Alt text](../images/highlight_button.PNG)

In the pan mode, if the highlight mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for highlighting the text.

Refer to the following code snippet to switch to highlight mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/highlight-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/highlight-mode-cs1/index.html" %}

Refer to the following code snippet to switch back to normal mode from highlight mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/highlight-normal-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/highlight-normal-mode-cs1/index.html" %}

## Highlight a text programmatically

The PDF Viewer library enables you to programmatically highlight text within the PDF Viewer control using the [**addAnnotation()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotation/#addannotation) method.

Here's an example of how you can use the **addAnnotation()** method to apply highlighting programmatically:

```html
<button id="highlight">Add TextMarkup annotation programmatically</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let highlight = document.getElementById('highlight');
if (highlight) {
    highlight.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Highlight", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let highlight = document.getElementById('highlight');
if (highlight) {
    highlight.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Highlight", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}
{% endhighlight %}
{% endtabs %}

## Underline a text

There are two ways to underline a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Underline** option in the context menu that appears.

![Alt text](../images/underline_context.png)

2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Underline** button in the annotation toolbar. It enables the underline mode.
    * Select the text and the underline annotation will be added.
    * You can also select the text and apply the underline annotation using the **Underline** button.

![Alt text](../images/underline_button.png)

In the pan mode, if the underline mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for underlining the text.

Refer to the following code snippet to switch to underline mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/underline-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/underline-mode-cs1/index.html" %}


Refer to the following code snippet to switch back to normal mode from underline mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/underline-normal-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/underline-normal-mode-cs1/index.html" %}

## Underline a text programmatically

The PDF Viewer library enables you to programmatically Underline text within the PDF Viewer control using the [**addAnnotation()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotation/#addannotation) method.

Here's an example of how you can use the **addAnnotation()** method to apply Underline programmatically:

```html
<button id="underline">Add TextMarkup annotation programmatically</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let underline = document.getElementById('underline');
if (underline) {
    underline.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Underline", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let underline = document.getElementById('underline');
if (underline) {
    underline.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Underline", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Strikethrough a text

There are two ways to strikethrough a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Strikethrough** option in the context menu that appears.

![Alt text](../images/strikethrough_context.png)

2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Strikethrough** button in the annotation toolbar. It enables the strikethrough mode.
    * Select the text and the strikethrough annotation will be added.
    * You can also select the text and apply the strikethrough annotation using the **Strikethrough** button.

![Alt text](../images/strikethrough_button.png)

In the pan mode, if the strikethrough mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for striking through the text.

Refer to the following code snippet to switch to strikethrough mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/strikethrough-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/strikethrough-mode-cs1/index.html" %}

Refer to the following code snippet to switch back to normal mode from underline mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/strikethrough-normal-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/strikethrough-normal-mode-cs1/index.html" %}

## Strikethrough a text programmatically

The PDF Viewer library enables you to programmatically Strikethrough text within the PDF Viewer control using the [**addAnnotation()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotation/#addannotation) method.

Here's an example of how you can use the **addAnnotation()** method to apply Strikethrough programmatically:

```html
<button id="strikethrough">Add TextMarkup annotation programmatically</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let strikethrough = document.getElementById('strikethrough');
if (strikethrough) {
    strikethrough.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Strikethrough", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let strikethrough = document.getElementById('strikethrough');
if (strikethrough) {
    strikethrough.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Strikethrough", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}
{% endhighlight %}
{% endtabs %}

## Squiggly a text

There are two ways to add squiggly to a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Squiggly** option in the context menu that appears.

![Alt text](../images/squiggly_context.png)

2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Squiggly** button in the annotation toolbar. It enables the squiggly mode.
    * Select the text and the squiggly annotation will be added.
    * You can also select the text and apply the squiggly annotation using the **Squiggly** button.

![Alt text](../images/squiggly_button.png)

In the pan mode, if the squiggly mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for adding squiggly to the text.

Refer to the following code snippet to switch to squiggly mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/squiggly-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/squiggly-mode-cs1/index.html" %}

Refer to the following code snippet to switch back to normal mode from squiggly mode.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/squiggly-normal-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/squiggly-normal-mode-cs1/index.html" %}

## Squiggly a text programmatically

The PDF Viewer library enables you to programmatically add squiggly to text within the PDF Viewer control using the [**addAnnotation()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotation/#addannotation) method.

Here's an example of how you can use the **addAnnotation()** method to apply squiggly programmatically:

```html
<button id="squiggly">Add TextMarkup annotation programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let squiggly = document.getElementById('squiggly');
if (squiggly) {
    squiggly.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Squiggly", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let squiggly = document.getElementById('squiggly');
if (squiggly) {
    squiggly.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Squiggly", {
                bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
                pageNumber: 1
            });
        }
    });
}
{% endhighlight %}
{% endtabs %}

## Deleting a text markup annotation

The selected annotation can be deleted by the following ways:

1. Using Delete key
    * Select the annotation to be deleted.
    * Click the Delete key in the keyboard. The selected annotation will be deleted.

2. Using the annotation toolbar
    * Select the annotation to be deleted.
    * Click the **Delete Annotation** button in the annotation toolbar. The selected annotation will be deleted.

![Alt text](../images/delete_button.png)

## Editing the properties of the text markup annotation

The color and the opacity of the text markup annotation can be edited using the Edit Color tool and the Edit Opacity tool in the annotation toolbar.

### Editing color

The color of the annotation can be edited using the color palette provided in the Edit Color tool.

![Alt text](../images/edit_color.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![Alt text](../images/edit_opacity.png)

## Setting default properties during control initialization

The properties of the text markup annotation can be set before creating the control using highlightSettings, underlineSettings, strikethroughSettings and squigglySettings.

>After editing the default color and opacity using the Edit Color tool and Edit Opacity tool, they will be changed to the selected values.

Refer to the following code snippet to set the default annotation settings.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"",
    highlightSettings: {author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9, modifiedDate: ''},
    underlineSettings: {author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9, modifiedDate: ''},
    strikethroughSettings: {author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9, modifiedDate: ''},
    squigglySettings: {author: 'Guest User', subject: 'Spelling Error', color: '#ff0000', opacity: 0.9, modifiedDate: ''}
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"",
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
    highlightSettings: {author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9, modifiedDate: ''},
    underlineSettings: {author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9, modifiedDate: ''},
    strikethroughSettings: {author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9, modifiedDate: ''},
    squigglySettings: {author: 'Guest User', subject: 'Spelling Error', color: '#ff0000', opacity: 0.9, modifiedDate: ''}
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Performing undo and redo

The PDF Viewer performs undo and redo for the changes made in the PDF document. In text markup annotation, undo and redo actions are provided for:

* Inclusion of the text markup annotations.
* Deletion of the text markup annotations.
* Change of either color or opacity of the text markup annotations.

Undo and redo actions can be done by the following ways:

1. Using keyboard shortcuts:
    After performing a text markup annotation action, you can undo it by using Ctrl + Z shortcut and redo by using Ctrl + Y shortcut.
2. Using toolbar:
    Undo and redo can be done using the **Undo** tool and **Redo** tool provided in the toolbar.

Refer to the following code snippet for calling undo and redo actions from the client-side.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-text-markup-annotation/undo-redo-cs1/index.html" %}

## Saving the text markup annotation

When you click the download tool in the toolbar, the text markup annotations will be saved in the PDF document. This action will not affect the original document.

## Printing the text markup annotation

When the print tool is selected in the toolbar, the PDF document will be printed along with the text markup annotations added to the pages. This action will not affect the original document.

## Disabling text markup annotation

The PDF Viewer control provides an option to disable the text markup annotation feature. The code snippet for disabling the feature is as follows.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enableTextMarkupAnnotation: false,
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enableTextMarkupAnnotation: false,
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](../toolbar)
* [Feature Modules](../feature-module)
