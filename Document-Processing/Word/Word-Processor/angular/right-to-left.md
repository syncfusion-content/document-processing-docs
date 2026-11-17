---
layout: post
title: Right to Left in Angular DOCX Editor | Syncfusion
description: Right-to-left support in Angular DOCX Editor enables RTL user interfaces, including menus, dialogs, and text direction for RTL languages.
platform: document-processing
control: Right to left 
documentation: ug
domainurl: ##DomainURL##
---

# Right to Left in Angular DOCX Editor

[Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) provides RTL (right-to-left) support. This can be enabled using the `enableRtl` property.

## Enable right-to-left layout

Set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documenteditormodel#enablertl) property to `true` to render the DOCX Editor user interface — including the toolbar or ribbon, menus, dialogs, and property pane - in a right-to-left layout.

```typescript
@Component({
      selector: 'app-root',
      templateUrl: '<ejs-documenteditorcontainer #documenteditor_default [enableToolbar]=true [enableRtl]=true 
      (created)="onCreate()" height="600px" style="display:block;"></ejs-documenteditorcontainer>',
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;

    onCreate(): void {
        // Use the below service URL for demo purposes only.
        this.container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'; 
    }

}
```

## Localize the DOCX Editor for RTL languages

To fully localize the DOCX Editor for right-to-left languages such as Arabic, set the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documenteditormodel#locale) property to a right-to-left culture and load the localized strings. This translates the built-in texts of the toolbar, dialogs, and context menus into the specified language.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/rtl-cs1" %}

## Online demo

Explore how to enable right-to-left layout in Word documents using the Angular DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/right-to-left).
