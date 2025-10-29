---
layout: post
title: Form Designer Toolbar Customization in Angular PDF Viewer Component | Syncfusion
description: Learn here all about form designer toolbar customization in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Designer Toolbar Customization

The form designer toolbar can be customized by showing or hiding default items and by controlling the order in which the items appear.

## Show or hide the form designer toolbar

Show or hide the form designer toolbar programmatically during initialization or at runtime.

Use the [EnableFormDesigner](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pdfViewerModel/#enableformdesigner) property or the [showFormDesignerToolbar](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar/#showformdesignertoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the toolbar using the `EnableFormDesigner` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: 'index.html',
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService
  ]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  public enableFormDesigner: boolean = false; // show/hide using EnableFormDesigner
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<ejs-pdfviewer id="PdfViewer"
               style="height:500px;width:100%;"
               [documentPath]="documentPath"
               [resourceUrl]="resourceUrl"
               [enableFormDesigner]="enableFormDesigner">
</ejs-pdfviewer>
{% endhighlight %}
{% endtabs %}

## How to customize the form designer toolbar

Choose which tools appear and control their order in the form designer toolbar.

Use [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) with the [`FormDesignerToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/#formdesignertoolbaritems) property to choose which form design tools are available. The property accepts a list of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formDesignerToolbarItem/) values. The items you include are both displayed and rendered in the order listed; any items you omit are hidden. This provides a streamlined, user-friendly form design experience across devices.

The following example demonstrates how to customize the form designer toolbar by configuring specific tools using `FormDesignerToolbarItem`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
  ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: 'index.html',
  providers: [
    ToolbarService, MagnificationService, NavigationService, AnnotationService, LinkAnnotationService,
    ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService
  ]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  public toolbarSettings: any = {
    formDesignerToolbarItems: [
      'TextboxTool',
      'PasswordTool',
      'CheckBoxTool',
      'RadioButtonTool',
      'DropdownTool',
      'ListboxTool',
      'DrawSignatureTool',
      'DeleteTool'
    ]
  };
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<ejs-pdfviewer id="PdfViewer"
               style="height:500px;width:100%;"
               [documentPath]="documentPath"
               [resourceUrl]="resourceUrl"
               [toolbarSettings]="toolbarSettings">
</ejs-pdfviewer>
{% endhighlight %}
{% endtabs %}
