---
layout: post
title: Dialog in Angular Document editor component | Syncfusion
description: Learn here all about Dialog in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog in Angular Document editor component

Document Editor provides dialog support to major operations such as insert or edit hyperlink, formatting text, paragraph, style, list and table properties.

## Font Dialog

Font dialog allows you to modify all text properties for selected contents at once such as bold, italic, underline, font size, font color, strikethrough, subscript and superscript.

Refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/dialog-cs1" %}

## Paragraph dialog

This dialog allows modifying the paragraph formatting for selection at once such as text alignment, indentation, and spacing.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/dialog-cs2" %}

## Table dialog

This dialog allows creating and inserting a table at cursor position by specifying the required number of rows and columns.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/dialog-cs3" %}

## Bookmark dialog

This dialog allows you to perform the following operations:

* View all bookmarks.
* Navigate to a bookmark.
* Create a bookmark at current selection.
* Delete an existing bookmark.
To open this dialog, refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/dialog-cs4" %}

## Hyperlink dialog

This dialog allows editing or inserting a hyperlink at cursor position.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/dialog-cs5" %}

## Table of contents dialog

This dialog allows creating and inserting table of contents at cursor position. If the table of contents already exists at cursor position, you can customize its properties.

To open this dialog, refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  TableOfContentsDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableTableOfContentsDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    TableOfContentsDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public btnClick(): void {
    //Open table of contents dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog(
      'TableOfContents'
    );
  }
}
```

## Styles Dialog

This dialog allows managing the styles in a document. It will display all the styles in the document with options to modify the properties of the existing style or create new style with the help of ‘Style dialog’. Refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  StyleDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableStyleDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    StyleDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public btnClick(): void {
    //Open styles dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog('Styles');
  }
}
```

## Style dialog

You can directly use this dialog for modifying any existing style or add new style by providing the style name.

To open this dialog, refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  StyleDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableStyleDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    StyleDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public btnClick(): void {
    //Open style dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog('Style');
  }
}
```

## List dialog

This dialog allows creating a new list or modifying existing lists in the document.

To open this dialog, refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  ListDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableListDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    ListDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public btnClick(): void {
    //Open list dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog('List');
  }
}
```

## Borders and shading dialog

This dialog allows customizing the border style, border width, and background color of the table or selected cells.

To open this dialog, refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  BordersAndShadingDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableBordersAndShadingDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    BordersAndShadingDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public btnClick(): void {
    //Open borders and shading dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog(
      'BordersAndShading'
    );
  }
}
```

## Table options dialog

This dialog allows customizing the default cell margins and spacing between each cells of the selected table.

To open this dialog, refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  TableOptionsDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false (created)="onCreate()" [enableSfdtExport]=true
[enableTableOptionsDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    TableOptionsDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;
  onCreate(): void {
    (this.documentEditor as DocumentEditorComponent).editor.insertTable(2, 2);
  }
  public btnClick(): void {
    //Open table options dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog('TableOptions');
  }
}
```

## Table properties dialog

This dialog allows customizing the table, row, and cell properties of the selected table.

To open this dialog, refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  SfdtExportService,
  SelectionService,
  TablePropertiesDialogService,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false (created)="onCreate()" [enableSfdtExport]=true
      [enableTablePropertiesDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    SfdtExportService,
    SelectionService,
    EditorService,
    TablePropertiesDialogService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;
  onCreate(): void {
    (this.documentEditor as DocumentEditorComponent).editor.insertTable(2, 2);
  }
  public btnClick(): void {
    //open table properties dialog.
    (this.documentEditor as DocumentEditorComponent).showDialog(
      'TableProperties'
    );
  }
}
```

## Page setup dialog

This dialog allows customizing margins, size, and layout options for pages of the section.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor/dialog-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/dialog-cs6" %}

## See Also

* [Feature module](./feature-module)