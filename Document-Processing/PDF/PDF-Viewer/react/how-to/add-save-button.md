---
layout: post
title: Add save button in toolbar in React Pdfviewer component | Syncfusion
description: Learn here all about Add Save button in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add Save button in Built-In Toolbar in React

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Save Button - New `save` button-item can defined by [**CustomToolbarItemModel**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/customToolbarItemModel/) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings/) property. Newly added save button-item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/react/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - `Save` button-item can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  `Save` button-item can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";

export function App() {

// Add OnCreateSearch outside the App function
function OnCreateSearch() {
  this.addIcon('prepend', 'e-icons e-search');
}

  var toolItem1 = {
    prefixIcon: 'e-icons e-save',
    id: 'download',
    text: 'Save',
    tooltipText: 'Save button',
    align: 'Left'
};

  function toolbarClick(args){
    if (args.item && args.item.id === 'download') {
        viewer.download();
    }
  };
return (<div>
    <div className='control-section'>
        <PdfViewerComponent
            id="container"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
            toolbarSettings={{ showTooltip : true, toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
            toolbarClick={toolbarClick}
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";

export function App() {

// Add OnCreateSearch outside the App function
function OnCreateSearch() {
  this.addIcon('prepend', 'e-icons e-search');
}

  var toolItem1 = {
    prefixIcon: 'e-icons e-save',
    id: 'download',
    text: 'Save',
    tooltipText: 'Save button',
    align: 'Left'
};

  function toolbarClick(args){
    var viewer = document.getElementById('container').ej2_instances[0];
    if (args.item && args.item.id === 'download') {
        viewer.download();
    }
  };
return (<div>
    <div className='control-section'>
        <PdfViewerComponent
            id="container"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
            toolbarSettings={{ showTooltip : true, toolbarItems: ['OpenOption', toolItem1,  'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
            toolbarClick={toolbarClick}
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align Property

The align property is used to specify the alignment of a `save` button-item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a `save` button-item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a `save` button-item. It allows custom styling of the `save` button-item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item.
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel` in the context of Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing `save` button-item, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)
