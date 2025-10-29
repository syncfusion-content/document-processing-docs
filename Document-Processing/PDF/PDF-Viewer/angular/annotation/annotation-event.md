---
layout: post
title: Annotations Events | Syncfusion
description: Learn here all about annotation events in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Annotations events in Angular

The PDF Viewer control provides support for several annotation events. The annotation events supported by the PDF Viewer control are:

| Annotation events               | Description                                                        |
|---------------------------------|--------------------------------------------------------------------|
| [annotationAdd](#annotationadd)                      | Event triggers when an annotation is added.                        |
| [annotationDoubleClick](#annotationdoubleclick)      | Event triggers when an annotation is double-clicked.              |
| [annotationMouseLeave](#annotationmouseleave)        | Event triggers when the mouse cursor leaves an annotation.        |
| [annotationMouseover](#annotationmouseover)          | Event triggers when the mouse cursor moves over an annotation.    |
| [annotationMove](#annotationmove)                    | Event triggers when an annotation is moved.                       |
| [annotationMoving](#annotationmoving)                | Event triggers while an annotation is being moved.                |
| [annotationPropertiesChange](#annotationpropertieschange) | Event triggers when an annotation’s properties are changed.       |
| [annotationRemove](#annotationremove)                | Event triggers when an annotation is removed.                     |
| [annotationResize](#annotationresize)                | Event triggers when an annotation is resized.                     |
| [annotationSelect](#annotationselect)                | Event triggers when an annotation is selected.                    |
| [annotationUnselect](#annotationunselect)            | Event triggers when an annotation is unselected.                  |
| [beforeAddFreeText](#beforeaddfreetext)              | Event triggers before adding free text.                           |
| [addSignature](#addsignature)                        | Event triggers when a signature is added.                         |
| [removeSignature](#removesignature)                  | Event triggers when a signature is removed.                       |
| [resizeSignature](#resizesignature)                  | Event triggers when a signature is resized.                       |
| [signaturePropertiesChange](#signaturepropertieschange) | Event triggers when signature properties change.                  |
| [signatureSelect](#signatureselect)                  | Event triggers when a signature is selected.                      |
| [signatureUnselect](#signatureunselect)              | Event triggers when a signature is unselected.                    |

### annotationAdd 

The [annotationAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationadd) event is triggered when an annotation is added to the PDF Viewer.

#### Event Arguments

For event data, see [AnnotationAddEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationaddeventargs/). It provides properties such as `annotationId`, `pageNumber`, `annotationType`, and `bounds`.

The following example illustrates how to handle the `annotationAdd` event.

```html
  <div class="content-wrapper">
    <ejs-pdfviewer
      #pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (annotationAdd)="annotationAdd($event)"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService,
  ],
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [PdfViewerModule],
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  annotationAdd(args: any): void {
    console.log('Annotation added with ID: ' + args.annotationId);
    console.log('Annotation type: ' + args.annotationType);
  }

  ngOnInit(): void {
    // ngOnInit function
  }
}

{% endhighlight %}
{% endtabs %}

### annotationDoubleClick

The [annotationDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationdoubleclick) event is triggered when an annotation is double-clicked.

#### Event Arguments

For event data, see [AnnotationDoubleClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationDoubleClickEventArgs/).

The following example illustrates how to handle the `annotationDoubleClick` event.

```html
  <div class="content-wrapper">
    <ejs-pdfviewer
      #pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (annotationDoubleClick)="annotationDoubleClick($event)"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
  </div>
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService,
  ],
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [PdfViewerModule],
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  annotationDoubleClick(args: any): void {
    console.log('Annotation double-clicked on page: ' + args.pageIndex);
  }

  ngOnInit(): void {
    // ngOnInit function
  }
}
{% endhighlight %}
{% endtabs %}



The [annotationDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationDoubleClickArgs/) event is triggered when an annotation is double-clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

{% endhighlight %}
{% endtabs %}

### annotationMouseLeave

The [annotationMouseLeave](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationmouseleave) event is triggered when the mouse cursor leaves an annotation.

#### Event Arguments

For event data, see [AnnotationMouseLeaveEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationMouseLeaveEventArgs/).

The following example illustrates how to handle the `annotationMouseLeave` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="documentPath"
    [resourceUrl]="resourceUrl"
    (annotationMouseLeave)="annotationMouseLeave($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,

  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService,
  ],
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [PdfViewerModule],
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  annotationMouseLeave(args: any): void {
    console.log(
      'Annotation mouse leave event is triggered for annotation on page: ' +
        args.pageIndex
    );
  }
  ngOnInit(): void {
    // ngOnInit function
  }
}
{% endhighlight %}
{% endtabs %}

### annotationMouseover

The [annotationMouseover](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationmouseover) event is triggered when the mouse cursor moves 
over an annotation.

#### Event Arguments

For event data, see [AnnotationMouseOverEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationMouseOverEventArgs/).

The following example illustrates how to handle the `annotationMouseover` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationMouseover)="onAnnotationMouseOver($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationMouseOver(args: any): void {
    console.log('Annotation mouse over triggered for annotation ID:', args.annotationId);
  }
}

{% endhighlight %}
{% endtabs %}

### annotationMove

The [annotationMove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationmove) event is triggered when an annotation is moved.

#### Event Arguments

For event data, see [AnnotationMoveEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationMoveEventArgs/).

The following example illustrates how to handle the `annotationMove` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationMove)="onAnnotationMove($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationMove(args: any): void {
    console.log('Annotation moved. ID:', args.annotationId, 'Page:', args.pageIndex);
  }
}

{% endhighlight %}
{% endtabs %}

### annotationMoving

The [annotationMoving](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationmoving) event is triggered while an annotation is being moved.

#### Event Arguments

For event data, see [AnnotationMovingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationMovingEventArgs/).

The following example illustrates how to handle the `annotationMoving` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationMoving)="onAnnotationMoving($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationMoving(args: any): void {
    console.log('Annotation is being moved. Current Position:', args.currentPosition);
  }
}

{% endhighlight %}
{% endtabs %}

### annotationPropertiesChange

The [annotationPropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationpropertieschange) event is triggered when an annotation’s properties are changed.

#### Event Arguments

For event data, see [AnnotationPropertiesChangeEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationPropertiesChangeEventArgs/). It provides properties such as `annotationId`, `pageNumber`, and `action`.

The following example illustrates how to handle the `annotationPropertiesChange` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationPropertiesChange)="onAnnotationPropertiesChange($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationPropertiesChange(args: any): void {
    console.log('Annotation properties changed for ID:', args.annotationId);
    console.log('isThicknessChanged:', args.isThicknessChanged);
    // You can also log other properties like isColorChanged, isOpacityChanged, etc.
  }
}

{% endhighlight %}
{% endtabs %}

### annotationRemove

The [annotationRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationremove) event is triggered when an annotation is removed.

#### Event Arguments

For event data, see [AnnotationRemoveEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationRemoveEventArgs/). It provides properties such as `annotationId` and `pageNumber`.

The following example illustrates how to handle the `annotationRemove` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationRemove)="onAnnotationRemove($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationRemove(args: any): void {
    console.log('Annotation removed with ID:', args.annotationId);
  }
}

{% endhighlight %}
{% endtabs %}

### annotationResize

The [annotationResize](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationresize) event is triggered when an annotation is resized.

#### Event Arguments

For event data, see [AnnotationResizeEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationResizeEventArgs/).

The following example illustrates how to handle the `annotationResize` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationResize)="onAnnotationResize($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationResize(args: any): void {
    console.log('Annotation resized. ID:', args.annotationId);
  }
}

{% endhighlight %}
{% endtabs %}

### annotationSelect

The [annotationSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationselect) event is triggered when an annotation is selected.

#### Event Arguments

For event data, see [AnnotationSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectEventArgs/).

The following example illustrates how to handle the `annotationSelect` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationSelect)="onAnnotationSelect($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationSelect(args: any): void {
    console.log('Annotation selected with ID:', args.annotationId);
  }
}

{% endhighlight %}
{% endtabs %}

### annotationUnselect

The [annotationUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationunselect) event is triggered when an annotation is unselected.

#### Event Arguments

For event data, see [AnnotationUnSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationUnSelectEventArgs/).

The following example illustrates how to handle the `annotationUnselect` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (annotationUnSelect)="onAnnotationUnselect($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAnnotationUnselect(args: any): void {
    console.log('Annotation unselected with ID:', args.annotationId);
  }
}
{% endhighlight %}
{% endtabs %}

### beforeAddFreeText

The [beforeAddFreeText](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#beforeaddfreetext) event is triggered before adding free text to the PDF Viewer.

#### Event Arguments

For event data, see [BeforeAddFreeTextEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/beforeAddFreeTextEventArgs/).

The following example illustrates how to handle the `beforeAddFreeText` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (beforeAddFreeText)="onBeforeAddFreeText($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onBeforeAddFreeText(args: any): void {
    console.log('Before adding free text on page:', args.pageIndex);

    // Optional: Cancel the addition of the free text annotation
    // args.cancel = true;
  }
}
{% endhighlight %}
{% endtabs %}

## Signature-related events

### addSignature

The [addSignature](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#addsignature) event is triggered when a signature is added to the PDF Viewer.

#### Event Arguments

For event data, see [AddSignatureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/addSignatureEventArgs/). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `addSignature` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (addSignature)="onAddSignature($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onAddSignature(args: any): void {
    console.log('Signature added to page:', args.pageIndex);
  }
}
{% endhighlight %}
{% endtabs %}

### removeSignature

The [removeSignature](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#removesignature) event is triggered when a signature is removed from the PDF Viewer.

#### Event Arguments

For event data, see [RemoveSignatureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/removeSignatureEventArgs/). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `removeSignature` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (removeSignature)="onRemoveSignature($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onRemoveSignature(args: any): void {
    console.log('Signature removed from page:', args.pageIndex);
  }
}
{% endhighlight %}
{% endtabs %}

### resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#resizesignature) event is triggered when a signature is resized in the PDF Viewer.

#### Event Arguments

For event data, see [ResizeSignatureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/resizeSignatureEventArgs/).

The following example illustrates how to handle the `resizeSignature` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (resizeSignature)="onResizeSignature($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onResizeSignature(args: any): void {
    console.log('Signature resized on page:', args.pageIndex);
  }
}
{% endhighlight %}
{% endtabs %}

### signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#signaturepropertieschange) event is triggered when signature properties are changed in the PDF Viewer.

#### Event Arguments

For event data, see [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs/).

The following example illustrates how to handle the `signaturePropertiesChange` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (signaturePropertiesChange)="onSignaturePropertiesChange($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSignaturePropertiesChange(args: any): void {
    console.log('Signature properties changed on page:', args.pageIndex);
  }
}
{% endhighlight %}
{% endtabs %}

### signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#signatureselect) event is triggered when a signature is selected in the PDF Viewer.

#### Event Arguments

For event data, see [SignatureSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/).

The following example illustrates how to handle the `signatureSelect` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (signatureSelect)="onSignatureSelect($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSignatureSelect(args: any): void {
    console.log('Signature selected on page:', args.pageIndex);
  }
}

{% endhighlight %}
{% endtabs %}

### signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#signatureunselect) event is triggered when a signature is unselected in the PDF Viewer.

#### Event Arguments

For event data, see [SignatureUnSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnSelectEventArgs/).

The following example illustrates how to handle the `signatureUnselect` event.

```html
<div class="content-wrapper">
  <ejs-pdfviewer
    #pdfViewer
    id="pdfViewer"
    [documentPath]="document"
    [resourceUrl]="resource"
    (signatureUnselect)="onSignatureUnselect($event)"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ],
  standalone: true,
  imports: [PdfViewerModule]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfViewer')
  public pdfViewerControl!: PdfViewerComponent;

  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSignatureUnselect(args: any): void {
    console.log('Signature unselected on page:', args.pageIndex);
  }
}
{% endhighlight %}
{% endtabs %}

