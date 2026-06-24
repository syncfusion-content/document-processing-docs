---
layout: post
title: Enable and disable the delete button based on annotation | Syncfusion
description: Learn to enable and disable delete button based on annotation events in Syncfusion Angular PDF Viewer component and more.
platform: document-processing
control: How to enable and disable the delete button based on annotation selection and unselection events
documentation: ug
domainurl: ##DomainURL##
---

# How to enable and disable the delete button based on annotation selection and unselection events

This article demonstrates how to enable and disable a toolbar delete button in response to annotation selection and unselection events using `annotationSelect` and `annotationUnSelect`.

Ensure the viewer's annotation module is available before invoking `this.pdfviewerControl.annotation.deleteAnnotation()`.
Example:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<ejs-pdfviewer #pdfviewer id='pdfViewer'
    [documentPath]='document'
    [enableToolbar]=false
    [enableNavigationToolbar]=false
    (annotationSelect)="annotationSelect($event)"
    (annotationUnSelect)="annotationUnSelect($event)"
    style="height:640px; display: block">
</ejs-pdfviewer>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<ejs-pdfviewer #pdfviewer id='pdfViewer'
    [serviceUrl]='service'
    [documentPath]='document'
    [enableToolbar]=false
    [enableNavigationToolbar]=false
    (annotationSelect)="annotationSelect($event)"
    (annotationUnSelect)="annotationUnSelect($event)"
    style="height:640px; display: block">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

```html
<ejs-toolbar id='topToolbar' #customToolbar>
    <e-item
        prefixIcon="e-delete-1"
        tooltipText="Delete annotation"
        id ="DeleteButton"
        disabled="true"
        (click)="deleteSelectedAnnotation()">
    </e-items>
</ejs-toolbar>
```

```typescript

public annotationSelect(e: any): void {
    this.customToolbar.items[1].disabled = false;
}

public annotationUnSelect(e: any): void {
    this.customToolbar.items[1].disabled = true;
}

public deleteSelectedAnnotation(): void {
    this.pdfviewerControl.annotation.deleteAnnotation();
    this.customToolbar.items[1].disabled = true;
}

```

Find the sample [how to enable and disable the delete button while selecting and unselecting annotations](https://stackblitz.com/edit/angular-g94gvs-hsrjna?file=app.component.ts).