---
layout: post
title: Form Field Events in React Pdfviewer control | Syncfusion
description: Learn here all about different form field in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Form Field Events
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field events in React

The PDF Viewer control provides the support to different Form Field events. The Form Field events supported by the PDF Viewer Control are:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldAddArgs) | Event trigger when a form field is added.|
| [formFieldClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldClickArgs) | Events trigger when the form field is selected.|
| [formFieldDoubleClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldDoubleClickArgs) | Events trigger when the form field is double-clicked.|
| [formFieldFocusOut](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldFocusOutEventArgs) | Events trigger when focus out from the form fields.|
| [formFieldMouseLeave](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMouseLeaveArgs) | Events trigger when the mouse cursor leaves the form field.|
| [formFieldMouseOver](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMouseoverArgs) | Events trigger when the mouse cursor is over a form field.|
| [formFieldMove](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMoveArgs) | Events trigger when a form field is moved.|
| [formFieldPropertiesChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldPropertiesChangeArgs) | Events trigger when a property of form field is changed.|
| [formFieldRemove](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldRemoveArgs) | Events trigger when a form field is removed.|
| [formFieldResize](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldResizeArgs) | Events trigger when a form field is resized.|
| [formFieldSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldSelectArgs) | Events trigger when a form field is selected.|
| [formFieldUnselect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldUnselectArgs) | Events trigger when a form field is unselected.|
| [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/validateFormFieldsArgs) | Events trigger when validation is failed.|

## formFieldAdd event

The [formFieldAdd](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldAddArgs) event is triggered when a new form field is added, either programmatically or through user interaction. The event arguments provide the necessary information about the form field addition.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldAdded(args){
    console.log('form field page number: ' + args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldAdd={formFieldAdded}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldAdded(args){
    console.log('form field page number: ' + args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldAdd={formFieldAdded}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldClick event

The [formFieldClick](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldClickArgs) event is triggered when a form field is clicked. The event arguments provide the necessary information about the form field click event.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldClicked(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldClick={formFieldClicked}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldClicked(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldClick={formFieldClicked}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldDoubleClick event

The [formFieldDoubleClick](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldDoubleClickArgs) event is triggered when a form field is double-clicked. The event arguments provide the necessary information about the form field double-click event.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldDoubleClicked(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldDoubleClick={formFieldDoubleClicked}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldDoubleClicked(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldDoubleClick={formFieldDoubleClicked}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldFocusOut event

The [formFieldFocusOut](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldFocusOutEventArgs) event is triggered when a form field loses focus. The event arguments provide the necessary information about the form field focus out event.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldFocusOuted(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldFocusOut={formFieldFocusOuted}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldFocusOuted(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldFocusOut={formFieldFocusOuted}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseLeave event

The [formFieldMouseLeave](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMouseLeaveArgs) event is triggered when the mouse leaves a form field. The event arguments provide the necessary information about the form field mouse leave event.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldMouseLeaved(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldMouseLeave={formFieldMouseLeaved}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldMouseLeaved(args){
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldMouseLeave={formFieldMouseLeaved}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseOver event

The [formFieldMouseOver](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMouseoverArgs) event is triggered when the mouse hovers over a form field. The event arguments provide the necessary information about the form field mouse over event.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldMouseovered(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log(' mouse over x position '+ args.X + ' mouse over y position '+ args.Y );
    console.log(' mouse over X position respect to the page '+ args.pageX + ' mouse over Y position respect to the page '+ args.pageY);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldMouseover={formFieldMouseovered}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldMouseovered(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log(' mouse over x position '+ args.X + ' mouse over y position '+ args.Y );
    console.log(' mouse over X position respect to the page '+ args.pageX + ' mouse over Y position respect to the page '+ args.pageY);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldMouseover={formFieldMouseovered}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldMove event

The [formFieldMove](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldMoveArgs) event is triggered when the mouse moves inside a form field. The event arguments provide the necessary information about the form field mouse move event.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldMoved(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('mouse current position '+ args.currentPosition);
    console.log('mouse current position '+ args.previousPosition);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldMove={formFieldMoved}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldMoved(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('mouse current position '+ args.currentPosition);
    console.log('mouse current position '+ args.previousPosition);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldMove={formFieldMoved}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldPropertiesChange event

The [formFieldPropertiesChange](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldPropertiesChangeArgs)  event is triggered when the properties of a form field are changed. The event arguments provide the necessary information about which property of the form field has been changed.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldPropertiesChanged(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('Whether form field alignment changed '+ args.isAlignmentChanged);
    console.log('Whether form field backgropund color changed '+ args.isBackgroundColorChanged);
    console.log('Whether form field border color changed '+ args.isBorderColorChanged);
    console.log('Whether form field border width changed '+ args.isBorderWidthChanged);
    console.log('Whether form field color changed changed '+ args.isColorChanged);
    console.log('Whether form field custom data changed '+ args.isCustomDataChanged);
    console.log('Whether form field font family changed '+ args.isFontFamilyChanged);
    console.log('Whether form field font size changed '+ args.isFontSizeChanged);
    console.log('Whether form field font style changed '+ args.isFontStyleChanged);
    console.log('Whether form field maximum length changed '+ args.isMaxLengthChanged);
    console.log('Whether form field name changed '+ args.isNameChanged);
    console.log('Whether form field readonly changed '+ args.isReadOnlyChanged);
    console.log('Whether form field required changed '+ args.isRequiredChanged);
    console.log('Whether form field print changed '+ args.isPrintChanged);
    console.log('Whether form field tool tip changed '+ args.isToolTipChanged);
    console.log('Whether form field visiblity changed '+ args.isVisibilityChanged);
    console.log('Whether form field value changed '+ args.isValueChanged);
    console.log('Whether form field new value changed '+ args.newValue);
    console.log('Whether form field old valuue changed '+ args.oldValue);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldPropertiesChange={formFieldPropertiesChanged}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldPropertiesChanged(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('Whether form field alignment changed '+ args.isAlignmentChanged);
    console.log('Whether form field backgropund color changed '+ args.isBackgroundColorChanged);
    console.log('Whether form field border color changed '+ args.isBorderColorChanged);
    console.log('Whether form field border width changed '+ args.isBorderWidthChanged);
    console.log('Whether form field color changed changed '+ args.isColorChanged);
    console.log('Whether form field custom data changed '+ args.isCustomDataChanged);
    console.log('Whether form field font family changed '+ args.isFontFamilyChanged);
    console.log('Whether form field font size changed '+ args.isFontSizeChanged);
    console.log('Whether form field font style changed '+ args.isFontStyleChanged);
    console.log('Whether form field maximum length changed '+ args.isMaxLengthChanged);
    console.log('Whether form field name changed '+ args.isNameChanged);
    console.log('Whether form field readonly changed '+ args.isReadOnlyChanged);
    console.log('Whether form field required changed '+ args.isRequiredChanged);
    console.log('Whether form field print changed '+ args.isPrintChanged);
    console.log('Whether form field tool tip changed '+ args.isToolTipChanged);
    console.log('Whether form field visiblity changed '+ args.isVisibilityChanged);
    console.log('Whether form field value changed '+ args.isValueChanged);
    console.log('Whether form field new value changed '+ args.newValue);
    console.log('Whether form field old valuue changed '+ args.oldValue);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldPropertiesChange={formFieldPropertiesChanged}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldRemove event

The [formFieldRemove](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldRemoveArgs) event is triggered when a form field is removed from the PDF. The event arguments provide the necessary information about which form field has been removed.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldRemoved(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldRemove={formFieldRemoved}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldRemoved(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldRemove={formFieldRemoved}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldResize event

The [formFieldResize](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldResizeArgs) events are triggered when a form field in a PDF is resized. These events provide the relevant details about the specific form field that has been resized.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldResized(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('form field current position: ', args.currentPosition);
    console.log('form field previous position: ', args.previousPosition);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldResize={formFieldResized}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldResized(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('form field current position: ', args.currentPosition);
    console.log('form field previous position: ', args.previousPosition);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldResize={formFieldResized}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldSelect event

The [formFieldSelect](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldSelectArgs) events are triggered when a form field in a PDF is selected. These events provide the necessary details about the specific form field that has been selected.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldSelected(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldSelect={formFieldSelected}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldSelected(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldSelect={formFieldSelected}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## formFieldUnselect event

The [formFieldUnselect](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/formFieldUnselectArgs) events are triggered when a form field in a PDF is unselected. These events provide the necessary details about the specific form field that has been unselected.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function formFieldUnselected(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldUnselect={formFieldUnselected}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function formFieldUnselected(args){
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        formFieldUnselect={formFieldUnselected}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## validateFormFields event

The [validateFormFields](https://helpej2.syncfusion.com/react/documentation/api/pdfviewer/validateFormFieldsArgs) events are triggered when a required form field is left unfilled before downloading the PDF. These events provide the necessary information for validating which form fields are incomplete.

{% tabs %}
{% highlight js tabtitle="index.JSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function validateFormField(args){
    console.log('form field event name: ' + args.name);
    console.log('form field document name: ' + args.documentName);
    console.log('form field data: ', args.formField);
    console.log('non fillable form field details: ', args.nonFillableFields);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        validateFormFields={validateFormField}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.TSX" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function validateFormField(args){
    console.log('form field event name: ' + args.name);
    console.log('form field document name: ' + args.documentName);
    console.log('form field data: ', args.formField);
    console.log('non fillable form field details: ', args.nonFillableFields);
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        validateFormFields={validateFormField}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}