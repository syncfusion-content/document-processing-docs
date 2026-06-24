---
layout: post
title: Annotations API in Angular PDF Viewer | Syncfusion
description: Learn here all about how to read and configure annotations using APIs in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations API in Angular

The PDF Viewer provides APIs to read the loaded annotations and to configure global defaults for creating/editing annotations.

| API | Description |
|---|---|
| [annotationCollection](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationcollection) | Gets the loaded document annotation collection. |
| [annotationDrawingOptions](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationdrawingoptions) | Options to configure line-type annotation drawing behavior. |
| [annotationSelectorSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationselectorsettings) | Configures the annotation selector (selection UI). |
| [annotationSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationsettings) | Global defaults for all annotations. |
| [areaSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#areasettings) | Defaults for Area annotations. |
| [arrowSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#arrowsettings) | Defaults for Arrow annotations. |
| [circleSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#circlesettings) | Defaults for Circle annotations. |
| [customStamp](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#customstamp) | Defines custom stamp items. |
| [customStampSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#customstampsettings) | Defaults for Custom Stamp annotations. |
| [distanceSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#distancesettings) | Defaults for Distance annotations. |

## annotationCollection
Read the loaded document annotation collection from the viewer instance.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <div>
      <button id="logAnnot" (click)="logAnnotations()">
        Show Annotation Collection
      </button>

      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="documentPath"
        [resourceUrl]="resourceUrl"
        style="height: 650px">
      </ejs-pdfviewer>
    </div>
  `
})
export class AppComponent {

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  private getViewer(): any {
    return (document.getElementById('pdfViewer') as any)
      ?.ej2_instances?.[0];
  }

  logAnnotations(): void {
    const viewer = this.getViewer();
    if (viewer) {
      console.log(viewer.annotationCollection);
    }
  }
}
{% endhighlight %}
{% endtabs %}

---

## annotationDrawingOptions
Configure line-type annotation drawing behavior.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [annotationDrawingOptions]="annotationDrawingOptions"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Annotation drawing constraints (Angular equivalent of React props) */
  public annotationDrawingOptions = {
    enableLineAngleConstraints: true,
    restrictLineAngleTo: 90
  };
}

{% endhighlight %}
{% endtabs %}

---

## annotationSelectorSettings
Configure the annotation selector (selection UI).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  AnnotationResizerLocation,
  CursorType
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [annotationSelectorSettings]="annotationSelectorSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Annotation selector customization */
  public annotationSelectorSettings = {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: [
      AnnotationResizerLocation.Corners,
      AnnotationResizerLocation.Edges
    ],
    resizerCursorType: CursorType.grab
  };
}
{% endhighlight %}
{% endtabs %}

---

## annotationSettings
Global defaults for all annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import { AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [annotationSettings]="annotationSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Default annotation settings */
  public annotationSettings = {
    author: 'XYZ',
    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,
    isLock: false,
    skipPrint: false,
    skipDownload: false,
    allowedInteractions: [
      AllowedInteraction.Resize
    ]
  };
}
{% endhighlight %}
{% endtabs %}

---

## areaSettings
Defaults for Area annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  AnnotationResizerLocation,
  CursorType,
  AllowedInteraction
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [areaSettings]="areaSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Default Area annotation settings */
  public areaSettings = {
    opacity: 1,
    fillColor: '#ffffff00',
    strokeColor: '#ff0000',
    author: 'XYZ',
    thickness: 1,

    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,

    isLock: false,
    isPrint: true,

    annotationSelectorSettings: {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'white',
      resizerFillColor: '#4070ff',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [
        AnnotationResizerLocation.Corners,
        AnnotationResizerLocation.Edges
      ],
      resizerCursorType: CursorType.grab
    },

    allowedInteractions: [
      AllowedInteraction.Resize
    ]
  };
}

{% endhighlight %}
{% endtabs %}

---

## arrowSettings
Defaults for Arrow annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  AnnotationResizerLocation,
  CursorType,
  AllowedInteraction
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [arrowSettings]="arrowSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Default Arrow annotation settings */
  public arrowSettings = {
    opacity: 1,
    fillColor: '#9c2592',
    strokeColor: '#ff0000',
    author: 'XYZ',
    thickness: 1,
    borderDashArray: 1,
    lineHeadStartStyle: 'Closed',
    lineHeadEndStyle: 'Closed',

    annotationSelectorSettings: {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'black',
      resizerFillColor: '#FF4081',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [
        AnnotationResizerLocation.Corners,
        AnnotationResizerLocation.Edges
      ],
      resizerCursorType: CursorType.grab
    },

    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 0,

    isLock: false,
    allowedInteractions: [
      AllowedInteraction.Resize
    ],
    isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## circleSettings
Defaults for Circle annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  AnnotationResizerLocation,
  CursorType,
  AllowedInteraction
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [circleSettings]="circleSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Default Circle annotation settings */
  public circleSettings = {
    opacity: 1,
    fillColor: '#9c2592',
    strokeColor: '#ff0000',
    author: 'XYZ',
    thickness: 1,

    annotationSelectorSettings: {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'black',
      resizerFillColor: '#FF4081',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [
        AnnotationResizerLocation.Corners,
        AnnotationResizerLocation.Edges
      ],
      resizerCursorType: CursorType.grab
    },

    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,

    isLock: false,
    allowedInteractions: [
      AllowedInteraction.Resize
    ],
    isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## customStamp
Define custom stamp items.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [customStamp]="customStamp"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Custom stamp collection */
  public customStamp = [
    {
      customStampName: 'Sample',
      customStampImageSource: 'data:image/png;base64, Syncfusionpdfviewer'
    }
  ];
}
{% endhighlight %}
{% endtabs %}

---

## customStampSettings
Defaults for Custom Stamp annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import { AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [customStampSettings]="customStampSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Custom stamp default settings */
  public customStampSettings = {
    opacity: 1,
    author: 'XYZ',
    width: 100,
    height: 100,
    left: 200,
    top: 200,

    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,

    isLock: false,
    enableCustomStamp: true,

    allowedInteractions: [
      AllowedInteraction.None
    ],

    isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## distanceSettings
Defaults for Distance annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  AnnotationResizerLocation,
  CursorType,
  AllowedInteraction
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [distanceSettings]="distanceSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Default Distance annotation settings */
  public distanceSettings = {
    opacity: 1,
    fillColor: '#ffffff00',
    strokeColor: '#ff0000',
    author: 'Guest',
    thickness: 1,

    borderDashArray: 1,
    lineHeadStartStyle: 'Closed',
    lineHeadEndStyle: 'Closed',

    annotationSelectorSettings: {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'black',
      resizerFillColor: '#FF4081',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [
        AnnotationResizerLocation.Corners,
        AnnotationResizerLocation.Edges
      ],
      resizerCursorType: CursorType.grab
    },

    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,

    isLock: false,
    leaderLength: 40,
    resizeCursorType: CursorType.move,

    allowedInteractions: [
      AllowedInteraction.Resize
    ],
    isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## enableAnnotation
Enable or disable the Add/Edit Annotations tool in the toolbar.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableAnnotation]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableAnnotationToolbar
Show or hide the annotation toolbar when the document loads.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableAnnotationToolbar]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableFreeText
Enable or disable Free Text annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableFreeText]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableHandwrittenSignature
Enable or disable the handwritten signature feature.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableHandwrittenSignature]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableInkAnnotation
Enable or disable Ink annotations (true by default).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableInkAnnotation]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableMeasureAnnotation
Enable or disable calibrate/measurement annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableMeasureAnnotation]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableMultiPageAnnotation
Enable or disable multi-page text markup selection in UI.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableMultiPageAnnotation]="true"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableShapeAnnotation
Enable or disable shape annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableShapeAnnotation]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableShapeLabel
Enable or disable labels for shape annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableShapeLabel]="true"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}

{% endhighlight %}
{% endtabs %}

---

## enableStampAnnotations
Enable or disable stamp annotations at load time.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableStampAnnotations]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}

{% endhighlight %}
{% endtabs %}

---

## enableStickyNotesAnnotation
Enable or disable sticky notes annotations at load time.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableStickyNotesAnnotation]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableTextMarkupAnnotation
Enable or disable text markup annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableTextMarkupAnnotation]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## enableTextMarkupResizer
Enable or disable the text markup resizer to modify bounds in the UI.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [enableTextMarkupResizer]="false"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## exportAnnotationFileName
Gets or sets the exported annotations JSON file name.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      exportAnnotationFileName="Annotation export file_1"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## freeTextSettings
Defaults for Free Text annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  FontStyle,
  AnnotationResizerLocation,
  AllowedInteraction
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [freeTextSettings]="freeTextSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

  /** Default Free Text annotation settings */
  public freeTextSettings = {
    opacity: 1,
    fillColor: '#ffffff00',
    borderColor: '#4070ff',
    author: 'XYZ',
    borderWidth: 1,
    width: 151,
    height: 24.6,

    fontSize: 16,
    fontColor: '#000',
    fontFamily: 'Helvetica',
    defaultText: 'Type Here',
    textAlignment: 'Right',
    fontStyle: FontStyle.Italic,
    allowTextOnly: false,

    annotationSelectorSettings: {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'black',
      resizerFillColor: '#FF4081',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Circle',
      selectorLineDashArray: [],
      resizerLocation: [
        AnnotationResizerLocation.Corners,
        AnnotationResizerLocation.Edges
      ],
      resizerCursorType: null
    },

    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,

    isLock: false,
    allowedInteractions: [
      AllowedInteraction.None
    ],
    isPrint: true,
    isReadonly: false,
    enableAutoFit: false
  };
}
{% endhighlight %}
{% endtabs %}

---

## handWrittenSignatureSettings
Defaults for handwritten signatures.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

import {
  DisplayMode,
  AnnotationResizerLocation,
  CursorType,
  AllowedInteraction
} from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [handWrittenSignatureSettings]="handWrittenSignatureSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {

  public resourceUrl: string =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  /** Handwritten Signature default settings */
  public handWrittenSignatureSettings = {
    signatureItem: ['Signature', 'Initial'],
    saveSignatureLimit: 1,
    saveInitialLimit: 1,

    opacity: 1,
    strokeColor: '#000000',
    width: 150,
    height: 100,
    thickness: 1,

    annotationSelectorSettings: {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'black',
      resizerFillColor: '#FF4081',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [
        AnnotationResizerLocation.Corners,
        AnnotationResizerLocation.Edges
      ],
      resizerCursorType: CursorType.grab
    },

    allowedInteractions: [
      AllowedInteraction.Resize
    ],

    signatureDialogSettings: {
      displayMode: [
        DisplayMode.Draw,
        DisplayMode.Text,
        DisplayMode.Upload
      ],
      hideSaveSignature: false
    },

    initialDialogSettings: {
      displayMode: [
        DisplayMode.Draw,
        DisplayMode.Text,
        DisplayMode.Upload
      ],
      hideSaveSignature: false
    }
  };
}
{% endhighlight %}
{% endtabs %}

---

## highlightSettings
Defaults for Highlight annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [highlightSettings]="highlightSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public highlightSettings = {
    opacity: 1, color: '#DAFF56', author: 'XYZ',
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges]
    },
    isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## inkAnnotationSettings
Defaults for Ink annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [inkAnnotationSettings]="inkAnnotationSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public inkAnnotationSettings = {
    author: 'XYZ', opacity: 1, strokeColor: '#ff0000', thickness: 1,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    isLock: false, allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## isAnnotationToolbarVisible
Open the annotation toolbar initially and read its visibility state.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [isAnnotationToolbarVisible]="true"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf';
}
{% endhighlight %}
{% endtabs %}

---

## lineSettings
Defaults for Line annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [resourceUrl]="resourceUrl"
      [documentPath]="documentPath"
      [lineSettings]="lineSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public lineSettings = {
    opacity: 1, color: '#9c2592', fillColor: '#ffffff00', strokeColor: '#ff0000',
    author: 'XYZ', thickness: 1, borderDashArray: 1,
    lineHeadStartStyle: 'None', lineHeadEndStyle: 'None',
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: null
    },
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## measurementSettings
Defaults for Measurement annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [measurementSettings]="measurementSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public measurementSettings = { conversionUnit: 'cm', displayUnit: 'cm', scaleRatio: 1, depth: 96 };
}
{% endhighlight %}
{% endtabs %}

---

## perimeterSettings
Defaults for Perimeter annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [perimeterSettings]="perimeterSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public perimeterSettings = {
    opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ',
    thickness: 1, borderDashArray: 1, lineHeadStartStyle: 'Open', lineHeadEndStyle: 'Open',
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#4070ff',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## polygonSettings
Defaults for Polygon annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [polygonSettings]="polygonSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public polygonSettings = {
    opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## radiusSettings
Defaults for Radius annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [radiusSettings]="radiusSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public radiusSettings = {
    opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ',
    thickness: 1,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#4070ff',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## rectangleSettings
Defaults for Rectangle annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [rectangleSettings]="rectangleSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public rectangleSettings = {
    opacity: 1, fillColor: '#9c2592', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## shapeLabelSettings
Defaults for shape labels (requires `enableShapeLabel`).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [enableShapeLabel]="true"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [shapeLabelSettings]="shapeLabelSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public shapeLabelSettings = {
    opacity: 1, fillColor: '#9c2592', borderColor: '#ff0000', fontColor: '#000',
    fontSize: 16, labelHeight: 24.6, labelMaxWidth: 151, labelContent: 'XYZ'
  };
}
{% endhighlight %}
{% endtabs %}

---

## stampSettings
Defaults for Stamp annotations (dynamic/sign/business).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, DynamicStampItem, SignStampItem, StandardBusinessStampItem, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [stampSettings]="stampSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public stampSettings = {
    opacity: 1, author: 'XYZ',
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 5, resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    dynamicStamps: [
      DynamicStampItem.Revised, DynamicStampItem.Reviewed, DynamicStampItem.Received,
      DynamicStampItem.Confidential, DynamicStampItem.Approved, DynamicStampItem.NotApproved
    ],
    signStamps: [
      SignStampItem.Witness, SignStampItem.InitialHere, SignStampItem.SignHere,
      SignStampItem.Accepted, SignStampItem.Rejected
    ],
    standardBusinessStamps: [
      StandardBusinessStampItem.Approved, StandardBusinessStampItem.NotApproved,
      StandardBusinessStampItem.Draft, StandardBusinessStampItem.Final,
      StandardBusinessStampItem.Completed, StandardBusinessStampItem.Confidential,
      StandardBusinessStampItem.ForPublicRelease, StandardBusinessStampItem.NotForPublicRelease,
      StandardBusinessStampItem.ForComment, StandardBusinessStampItem.Void,
      StandardBusinessStampItem.PreliminaryResults, StandardBusinessStampItem.InformationOnly
    ],
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## stickyNotesSettings
Defaults for Sticky Notes annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [stickyNotesSettings]="stickyNotesSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public stickyNotesSettings = {
    author: 'XYZ', opacity: 1,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#4070ff',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    isLock: false, allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## strikethroughSettings
Defaults for Strikethrough annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [strikethroughSettings]="strikethroughSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public strikethroughSettings = {
    opacity: 1, color: '#DAFF56', author: 'XYZ',
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges]
    },
    isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## underlineSettings
Defaults for Underline annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [underlineSettings]="underlineSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public underlineSettings = {
    opacity: 1, color: '#9c2592', author: 'XYZ',
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges]
    },
    isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

---

## volumeSettings
Defaults for Volume annotations.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService
  ],
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [volumeSettings]="volumeSettings"
      style="height: 650px">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public volumeSettings = {
    opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
    minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
    annotationSelectorSettings: {
      selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#4070ff',
      resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
      resizerCursorType: CursorType.grab
    },
    allowedInteractions: [AllowedInteraction.Resize], isPrint: true
  };
}
{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotation/create-modify-annotation)
- [Customize Annotation](../../annotation/customize-annotation)
- [Remove Annotation](../../annotation/delete-annotation)
- [Handwritten Signature](../../annotation/signature-annotation)
- [Export and Import Annotation](../../annotation/export-import/export-annotation)
- [Annotation in Mobile View](../../annotation/annotations-in-mobile-view)
- [Annotation Events](../../annotation/annotation-event)