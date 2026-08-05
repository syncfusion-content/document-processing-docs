---
layout: post
title: View in Angular DOCX Editor component | Syncfusion
description: Learn here all about View in Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
control: View 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# View in Angular Document Editor Component

## Web layout

[Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) container component allows you to change the view to a web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/layoutType).

```typescript
/**
 * Add below codes in app.component.ts file
 */
@Component({
      selector: 'app-root',
      templateUrl: '<ejs-documenteditorcontainer #documenteditor_default [enableToolbar]=true (created)="onCreate()" height="600px" style="display:block;"></ejs-documenteditorcontainer>',
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;

    onCreate(): void {
        this.container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
        this.container.layoutType='Continuous';
    }

}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> The default value of [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/layoutType).

### Online Demo

Explore how to view Word documents in web layout using the Angular Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/web-layout).

## Ruler

The ruler helps you set specific margins, tab stops, and indentations within a document to ensure consistent formatting in the Document Editor.

The following example illustrates how to enable the ruler in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/ruler-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/ruler-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/ruler-cs1" %}

### Online Demo

Explore how to use the ruler in the Angular Document Editor for working with Word documents in this [live demo](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/ruler).

## Heading Navigation Pane

The heading navigation pane allows users to quickly navigate documents by heading, making it easier to move through the document.

The following example demonstrates how to enable the heading navigation pane in a Document Editor.

```typescript
import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "settings" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    public settings = {showNavigationPane : true};
    ngOnInit(): void {
    }
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Online Demo

Explore how to navigate through headings in Word documents using the Angular Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/heading-navigation).
