---
layout: post
title: Form Fields API in Angular PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in Angular PDF Viewer

The Angular PDF Viewer provides APIs to create, edit, validate, navigate, and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#isformfielddocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#isformdesignertoolbarvisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) | Enables or disables form field validation.|
| [enableFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformfields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableformdesignertoolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerModule,
  PdfViewerComponent,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="updateFormFieldsValue()">updateFormFieldsValue</button>
      <ejs-pdfviewer
        #pdfviewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  updateFormFieldsValue(): void {
    const fields = this.pdfviewer?.retrieveFormFields() as any[] | undefined;
    const field = fields?.find((f: any) => f.name === 'First Name') || fields?.[0];
    if (field) {
      field.value = 'John Doe';
      field.tooltip = 'First';
      this.pdfviewer?.updateFormFieldsValue(field);
    }
  }
}
{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerModule,
  PdfViewerComponent,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="updateFormFields()">updateFormFields</button>
      <ejs-pdfviewer
        #pdfviewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  updateFormFields(): void {
    const fields = this.pdfviewer?.retrieveFormFields() as any[] | undefined;
    const field = fields?.find((f: any) => f.name === 'First Name') || fields?.[0];
    if (field) {
      this.pdfviewer?.formDesignerModule.updateFormField(field, {
        value: 'John',
        fontFamily: 'Courier',
        fontSize: 12,
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        thickness: 2,
        alignment: 'Left',
        maxLength: 50,
      } as any);
    }
  }
}
{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="retrieveFormFields()">retrieveFormFields</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  retrieveFormFields(): void {
    const fields = this.pdfviewer?.retrieveFormFields();
    console.log(fields);
  }
}
{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="resetFormFields()">resetFormFields</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  resetFormFields(): void {
    this.pdfviewer?.resetFormFields();
  }
}
{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="importFormFields()">importFormFields</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  importFormFields(): void {
    // Adjust the arguments as per your integration; FormFieldDataFormat enum may be used
    this.pdfviewer?.importFormFields('File', 'Json' as any);
  }
}
{% endhighlight %}
{% endtabs %}

## focusFormField

Moves focus to a form field by name or ID.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="focusFormField()">focusFormField</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  focusFormField(): void {
    this.pdfviewer?.focusFormField('FirstName');
  }
}
{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="exportFormFieldsAsObject()">exportFormFieldsAsObject</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;
  exportedData: Object | undefined;

  exportFormFieldsAsObject(): void {
    this.pdfviewer?.exportFormFieldsAsObject('Fdf' as any).then((data: any) => {
      this.exportedData = data;
      console.log('Exported object:', this.exportedData);
    });
  }
}
{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="exportFormFields()">exportFormFields</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  exportFormFields(): void {
    this.pdfviewer?.exportFormFields('FormData', 'Json' as any);
  }
}
{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="clearFormFields()">clearFormFields</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  clearFormFields(): void {
    const fields = this.pdfviewer?.retrieveFormFields();
    if (fields && fields.length) {
      this.pdfviewer?.clearFormFields(fields[0]);
    }
  }
}
{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="checkFormFieldDocument()">checkFormFieldDocument</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  checkFormFieldDocument(): void {
    console.log(this.pdfviewer?.isFormFieldDocument);
  }
}
{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the Form Designer toolbar and returns its visibility status.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="openFormDesigner()">Open Form Designer</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  openFormDesigner(): void {
    this.pdfviewer?.enableFormDesignerToolbar(true);
    console.log(this.pdfviewer?.isFormDesignerToolbarVisible);
  }
}
{% endhighlight %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="logFormFieldCollections()">formfieldcollection</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  logFormFieldCollections(): void {
    console.log(this.pdfviewer?.formFieldCollections);
  }
}
{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer id="pdfViewer" [enableFormFieldsValidation]="true" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
}
{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer id="pdfViewer" [enableFormFields]="false" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService, TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
}
{% endhighlight %}
{% endtabs %}

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerModule,
  PdfViewerComponent,
  ToolbarService,
  MagnificationService,
  NavigationService,
  AnnotationService,
  TextSelectionService,
  TextSearchService,
  FormFieldsService,
  FormDesignerService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `
    <div class="content-wrapper">
      <button (click)="showFormDesigner()">Show Form Designer</button>
      <button (click)="hideFormDesigner()">Hide Form Designer</button>
      <ejs-pdfviewer #pdfviewer id="pdfViewer" [resourceUrl]="resourceUrl" [documentPath]="document" style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>
  `,
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    AnnotationService,
    TextSelectionService,
    TextSearchService,
    FormFieldsService,
    FormDesignerService,
  ],
})
export class AppComponent {
  public document =
    'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resourceUrl =
    'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
  @ViewChild('pdfviewer') public pdfviewer?: PdfViewerComponent;

  showFormDesigner(): void {
    if (this.pdfviewer) this.pdfviewer.enableFormDesignerToolbar = true;
  }

  hideFormDesigner(): void {
    if (this.pdfviewer) this.pdfviewer.enableFormDesignerToolbar = false;
  }
}
{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)