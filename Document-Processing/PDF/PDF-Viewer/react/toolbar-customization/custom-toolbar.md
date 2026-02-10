---
layout: post
title: Custom Toolbar in React PDF Viewer Component | Syncfusion
description: Learn here all about custom toolbar in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar in React PDF Viewer

The PDF Viewer provides APIs for user interaction options available in its built-in toolbar. Using these, you can create your own custom user interface for toolbar actions at the application level by hiding the default toolbar.

Follow these steps to create a custom toolbar for the PDF Viewer:

**Step 1: Create a simple PDF Viewer sample.**

Follow the steps provided in the [getting started](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started) guide to create a basic PDF Viewer sample.

**Step 2: Add HTML elements for the custom toolbar.**

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

     render() {
        function template() {
            return (
                <div ><span className='e-pv-total-page-number' id='totalPage'>of 0</span></div>
            );
        }
        function inputTemplate() {
            return (
                <div><input type='text' className='e-input-group e-pv-current-page-number' id='currentPage' /></div>
            );
        }
        return (<div>
            <div className='control-section'>
                <div>
                    <div className='e-pdf-toolbar'>
                        <ToolbarComponent ref={(scope) => { this.toolbar = scope; }} clicked={this.clickHandler.bind(this)}>
                            <ItemsDirective>
                                <ItemDirective prefixIcon='e-pv-open-document-icon' id='file_Open' tooltipText='Open'></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-previous-page-navigation-icon" id='previous_page' tooltipText="Previous Page" align="Center"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-next-page-navigation-icon" id='next_page' tooltipText="Next Page" align="Center"></ItemDirective>
                                <ItemDirective template={inputTemplate} tooltipText="Page Number" type="Input" align="Center"></ItemDirective>
                                <ItemDirective template={template} align="Center" tooltipText="Page Number"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-print-document-icon" tooltipText="Print" id='print' align="Right"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-download-document-icon" tooltipText="Download" id='download' align="Right"></ItemDirective>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>
                    {/* Render the PDF Viewer */}
                    <PdfViewerComponent
                        id="container"
                        ref={(scope) => { this.viewer = scope; }}
                        enableToolbar={false}
                        documentLoad={this.documentLoaded}
                        pageChange={this.onPageChange}
                        documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
                        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                        style={{ 'display': 'block', 'height': '640px' }}>

                                <Inject services={[ Magnification, Navigation, LinkAnnotation, BookmarkView,
                                                    ThumbnailView, Print, TextSelection, TextSearch]} />
                    </PdfViewerComponent>
                    <input type="file"
                    id="fileUpload"
                    accept=".pdf"
                    onChange={this.readFile.bind(this)}
                    style={{ 'display': 'block', 'visibility': 'hidden', 'width': '0', 'height': '0' }} />
                    <div className='e-pdf-toolbar' id="magnificationToolbarItems">
                        <ToolbarComponent id="magnificationToolbar" clicked={this.clickHandler.bind(this)}>
                            <ItemsDirective >
                                <ItemDirective prefixIcon="e-pv-fit-page" id='fit_to_page' tooltipText="Fit to page" ></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-zoom-in-icon" id='zoom_in' tooltipText="Zoom in"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-zoom-out-sample" id='zoom_out' tooltipText="Zoom out" ></ItemDirective>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>

                </div>
            </div>
        </div>
        );
      }

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

     render() {
        function template() {
            return (
                <div ><span className='e-pv-total-page-number' id='totalPage'>of 0</span></div>
            );
        }
        function inputTemplate() {
            return (
                <div><input type='text' className='e-input-group e-pv-current-page-number' id='currentPage' /></div>
            );
        }
        return (<div>
            <div className='control-section'>
                <div>
                    <div className='e-pdf-toolbar'>
                        <ToolbarComponent ref={(scope) => { this.toolbar = scope; }} clicked={this.clickHandler.bind(this)}>
                            <ItemsDirective>
                                <ItemDirective prefixIcon='e-pv-open-document-icon' id='file_Open' tooltipText='Open'></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-previous-page-navigation-icon" id='previous_page' tooltipText="Previous Page" align="Center"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-next-page-navigation-icon" id='next_page' tooltipText="Next Page" align="Center"></ItemDirective>
                                <ItemDirective template={inputTemplate} tooltipText="Page Number" type="Input" align="Center"></ItemDirective>
                                <ItemDirective template={template} align="Center" tooltipText="Page Number"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-print-document-icon" tooltipText="Print" id='print' align="Right"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-download-document-icon" tooltipText="Download" id='download' align="Right"></ItemDirective>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>
                    {/* Render the PDF Viewer */}
                    <PdfViewerComponent
                        id="container"
                        ref={(scope) => { this.viewer = scope; }}
                        enableToolbar={false}
                        documentLoad={this.documentLoaded}
                        pageChange={this.onPageChange}
                        documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
                        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
                        style={{ 'display': 'block', 'height': '640px' }}>

                                <Inject services={[ Magnification, Navigation, LinkAnnotation, BookmarkView,
                                                    ThumbnailView, Print, TextSelection, TextSearch]} />
                    </PdfViewerComponent>
                    <input type="file"
                    id="fileUpload"
                    accept=".pdf"
                    onChange={this.readFile.bind(this)}
                    style={{ 'display': 'block', 'visibility': 'hidden', 'width': '0', 'height': '0' }} />
                    <div className='e-pdf-toolbar' id="magnificationToolbarItems">
                        <ToolbarComponent id="magnificationToolbar" clicked={this.clickHandler.bind(this)}>
                            <ItemsDirective >
                                <ItemDirective prefixIcon="e-pv-fit-page" id='fit_to_page' tooltipText="Fit to page" ></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-zoom-in-icon" id='zoom_in' tooltipText="Zoom in"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-zoom-out-sample" id='zoom_out' tooltipText="Zoom out" ></ItemDirective>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>

                </div>
            </div>
        </div>
        );
      }

{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 3: Import and inject the necessary modules.**

Import and inject the modules required for the custom toolbar functionality:


  ```ts

     import * as ReactDOM from 'react-dom';
     import * as React from 'react';
     import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, Inject
     } from '@syncfusion/ej2-react-pdfviewer';
    import { ToolbarComponent, ItemsDirective, ItemDirective, ClickEventArgs } from '@syncfusion/ej2-react-navigations';
    import { RouteComponentProps } from 'react-router';

  ```

**Step 4: Hide the default toolbar of the PDF Viewer.**

Hide the default toolbar using `enableToolbar` and `enableThumbnail` properties:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

<PdfViewerComponent
id="container"
ref={(scope) => { this.viewer = scope; }}
enableToolbar={false}
documentLoad={this.documentLoaded}
pageChange={this.onPageChange}
documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
style={{ 'display': 'block', 'height': '640px' }}>

        <Inject services={[ Magnification, Navigation, LinkAnnotation, BookmarkView,
                            ThumbnailView, Print, TextSelection, TextSearch]} />
</PdfViewerComponent>

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

    <PdfViewerComponent
    id="container"
    ref={(scope) => { this.viewer = scope; }}
    enableToolbar={false}
    documentLoad={this.documentLoaded}
    pageChange={this.onPageChange}
    documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
    serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
    style={{ 'display': 'block', 'height': '640px' }}>

            <Inject services={[ Magnification, Navigation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch]} />
    </PdfViewerComponent>

{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 5: Add EJ2 Toolbar for primary actions.**

Add Syncfusion EJ2 Toolbar components to perform primary actions like Open, Previous page, Next page, Go to page, Print, and Download:

 ```ts
<ToolbarComponent ref={(scope) => { toolbar = scope; }} clicked={clickHandler.bind(this)}>
      <ItemsDirective>
        <ItemDirective prefixIcon='e-icons e-folder' id='file_Open' tooltipText='Open'></ItemDirective>
        <ItemDirective prefixIcon='e-icons e-save' tooltipText="Save" id='save'></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-chevron-left" id='previous_page' tooltipText="Previous Page" align="Center"></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-chevron-right" id='next_page' tooltipText="Next Page" align="Center"></ItemDirective>
        <ItemDirective template={inputTemplate} tooltipText="Page Number" type="Input" align="Center"></ItemDirective>
        <ItemDirective template={template} align="Center" tooltipText="Page Number"></ItemDirective>
        <ItemDirective type="Separator" tooltipText="separator" align="Center"></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-mouse-pointer" id="text_selection_tool" align="Center" tooltipText="Text Selection tool" />
        <ItemDirective prefixIcon="e-icons e-pan" id="pan_tool" align="Center" tooltipText="Pan Mode" />
        <ItemDirective type="Separator" tooltipText="separator" align="Center"></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-annotation-edit" tooltipText="Edit Annotation" id="edit_annotation" align="Center" ></ItemDirective>
        <ItemDirective type="Separator" align="Center" tooltipText="separator"></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-split-vertical" tooltipText="Add and Edit Form Fields" id="add_form_field" align="Center"></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-search" tooltipText="Find Text" id="find_text" align="Right" ></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-print" tooltipText="Print" id='print' align="Right"></ItemDirective>
      </ItemsDirective>
</ToolbarComponent>

```

**Step 6: Add EJ2 Toolbar for magnification actions.**

Add Syncfusion EJ2 Toolbar components to perform magnification actions in the PDF Viewer:

```ts
<div className='e-pdf-toolbar' id="magnificationToolbarItems">
    <ToolbarComponent id="magnificationToolbar" clicked={clickHandler.bind(this)}>
      <ItemsDirective >
        <ItemDirective prefixIcon="e-pv-fit-page-icon" id='fit_to_page' tooltipText="Fit to page" ></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-circle-add" id='zoom_in' tooltipText="Zoom in"></ItemDirective>
        <ItemDirective prefixIcon="e-icons e-circle-remove" id='zoom_out' tooltipText="Zoom out" ></ItemDirective>
      </ItemsDirective>
    </ToolbarComponent>
</div>

```

**Step 7: Add custom toolbar styling.**

  ```css
   #magnificationToolbarItems {
    position: absolute;
    bottom: 66px;
    display: block;
    width: auto;
    transform: rotate(90deg);
    right: 7.5px;
    z-index: 1001;
   }

   #magnificationToolbar {
     background: transparent;
  }

   .e-pv-zoom-out-sample {
    transform: rotate(-90deg);
   }

   div#magnificationToolbar.e-toolbar .e-toolbar-items {
    background: transparent;
    padding: 2px 3px 2px 2px;
   }

   #magnificationToolbar.e-toolbar .e-tbar-btn {
    border-radius: 50%;
    min-height: 30px;
    min-width: 30px;
    border: 0.5px solid #c8c8c8;
   }

  #topToolbar {
    top: 0px;
    z-index: 1001;
 }

  .e-pv-current-page-number {
    width: 46px;
    height: 28px;
    text-align: center;
  }

  .material .e-pv-current-page-number {
    border-width: 1px;
  }

  .e-pv-icons {
    font-family: "e-pv-icons";
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-transform: none;
  }

  .e-pdf-toolbar .e-icons::before {
    font-family: 'e-pv-icons';
   }

  .e-pv-icon-search::before {
    font-family: 'e-pv-icons';
    font-size: 12px;
  }

  #topToolbar .e-pv-download-document-icon::before {
    padding-left: 4px;
    content: '\ed05';
  }

  #topToolbar .e-pv-print-document-icon::before {
    padding-left: 1px;
    content: '\ed08';
   }

  .e-pv-previous-page-navigation-icon::before {
      content: '\ed01';
    }

   .e-pv-next-page-navigation-icon::before {
     content: '\ed02';
   }

   .e-pv-zoom-out-sample::before {
     content: '\ed03';
    }

    .e-pv-zoom-in-icon::before {
    content: '\ed04';
    }

   .e-pv-fit-page::before {
    content: '\ed12';
   }
   .e-pv-open-document-icon::before {
    content: '\ed13';
   }

  @font-face {
    font-family: "e-pv-icons";
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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yY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWMMUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
    }
 ```

  The icons are embedded in the font file used in the above code snippet.

**Step 8: Add scripts for PDF Viewer user interaction.**

```ts
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  PdfViewerComponent,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

import {
  ToolbarComponent,
  ItemsDirective,
  ItemDirective
} from '@syncfusion/ej2-react-navigations';

class CustomToolbar extends React.Component {
  viewer = null;
  toolbar = null;
  currentPageNumber = '1';
  fileName = '';

  componentDidMount() {
    this.wireEvent();
  }

  wireEvent() {
    const input = document.getElementById('currentPage');
    if (input) {
      input.addEventListener('click', this.currentPageClicked);
      input.addEventListener('keypress', this.onCurrentPageBoxKeypress );
      input.value = this.currentPageNumber;
    }
  }

  documentLoaded = () => {
    const pageCount = document.getElementById('totalPage');
    if (pageCount && this.viewer) {
      pageCount.textContent = 'of ' + this.viewer.pageCount;
      this.updatePageNavigation();
    }
  };

  onPageChange = () => {
    this.currentPageNumber = this.viewer?.currentPageNumber.toString() || '1';
    const input = document.getElementById('currentPage');
    if (input) input.value = this.currentPageNumber;
    this.updatePageNavigation();
  };

  updatePageNavigation() {
    if (!this.viewer) return;
    const prev = document.getElementById('previous_page')?.parentElement ;
    const next = document.getElementById('next_page')?.parentElement ;
    if (!prev || !next) return;

    if (this.viewer.currentPageNumber === 1) {
      (this.toolbar )?.enableItems(prev, false);
      (this.toolbar )?.enableItems(next, true);
    } else if (this.viewer.currentPageNumber === this.viewer.pageCount) {
      (this.toolbar )?.enableItems(prev, true);
      (this.toolbar )?.enableItems(next, false);
    } else {
      (this.toolbar )?.enableItems(prev, true);
      (this.toolbar )?.enableItems(next, true);
    }
  }

  currentPageClicked = () => {
    const el = document.getElementById('currentPage') ;
    el?.select();
  };

  onCurrentPageBoxKeypress = (event) => {
    const box = document.getElementById('currentPage') ;
    if (!box) return;
    const which = (event ).which;
    if ((which < 48 || which > 57) && which !== 8 && which !== 13) {
      event.preventDefault();
      return false;
    } else {
      const n = parseInt(box.value);
      if (which === 13 && this.viewer) {
        if (n > 0 && n <= this.viewer.pageCount) {
          this.viewer.navigation.goToPage(n);
        } else {
          box.value = this.viewer.currentPageNumber.toString();
        }
      }
      return true;
    }
  };

  readFile = (evt) => {
    const files = evt.target.files;
    if (!files || !files.length) return;
    const file = files[0];
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result ;
      if (this.viewer) {
        this.viewer.load(url, null);
        this.viewer.fileName = this.fileName;
        const pageCount = document.getElementById('totalPage');
        if (pageCount) pageCount.textContent = 'of ' + this.viewer.pageCount;
      }
    };
    reader.readAsDataURL(file);
  };

  // Toolbar item click handler
  clickHandler = (args) => {
    switch (args.item.id) {
      case 'file_Open':
        (document.getElementById('fileUpload') )?.click();
        break;
      case 'previous_page':
        this.viewer?.navigation.goToPreviousPage();
        break;
      case 'next_page':
        this.viewer?.navigation.goToNextPage();
        break;
      case 'print':
        this.viewer?.print.print();
        break;
      case 'download':
        this.viewer?.download();
        break;
      case 'fit_to_page':
        this.viewer?.magnification.fitToPage();
        break;
      case 'zoom_in':
        this.viewer?.magnification.zoomIn();
        break;
      case 'zoom_out':
        this.viewer?.magnification.zoomOut();
        break;
    }
  };

  // Small templates for toolbar
  totalTemplate = () => (
    <div style={{ margin: '0 6px' }}>
      <span className="e-pv-total-page-number" id="totalPage">
        of 0
      </span>
    </div>
  );

  inputTemplate = () => (
    <div>
      <input
        type="text"
        className="e-input-group e-pv-current-page-number"
        id="currentPage"
        style={{ width: '42px', textAlign: 'center' }}
      />
    </div>
  );

  render() {
    return (
      <div>
        <div className="e-pdf-toolbar" style={{ marginBottom: 8 }}>
          <ToolbarComponent
            ref={(t) => (this.toolbar = t)}
            clicked={this.clickHandler}
          >
            <ItemsDirective>
              <ItemDirective prefixIcon="e-icons e-folder" id="file_Open" tooltipText="Open" />
              <ItemDirective prefixIcon="e-icons e-chevron-left" id="previous_page" tooltipText="Previous Page" align="Center" />
              <ItemDirective template={this.inputTemplate} type="Input" align="Center" tooltipText="Page Number" />
              <ItemDirective template={this.totalTemplate} align="Center" tooltipText="Total Pages" />
              <ItemDirective prefixIcon="e-icons e-chevron-right" id="next_page" tooltipText="Next Page" align="Center" />
              <ItemDirective type="Separator" align="Center" />
              <ItemDirective prefixIcon="e-pv-fit-page-icon" id="fit_to_page" tooltipText="Fit to page" />
              <ItemDirective prefixIcon="e-icons e-circle-add" id="zoom_in" tooltipText="Zoom in" />
              <ItemDirective prefixIcon="e-icons e-circle-remove" id="zoom_out" tooltipText="Zoom out" />
              <ItemDirective type="Separator" align="Right" />
              <ItemDirective prefixIcon="e-icons e-print" id="print" tooltipText="Print" align="Right" />
              <ItemDirective prefixIcon="e-icons e-download" id="download" tooltipText="Download" align="Right" />
            </ItemsDirective>
          </ToolbarComponent>
        </div>

        <input type="file" id="fileUpload" accept=".pdf" onChange={this.readFile} style={{ display: 'none' }} />

        <PdfViewerComponent
          id="container"
          ref={(v) => (this.viewer = v)}
          enableToolbar={false}
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          documentLoad={this.documentLoaded}
          pageChange={this.onPageChange}
          style={{ height: '640px', width: '100%', display: 'block' }}
        >
          <Inject
            services={[
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch
            ]}
          />
        </PdfViewerComponent>
      </div>
    );
  }
}

```

Sample :
[https://document.syncfusion.com/demos/pdf-viewer/react/#/tailwind3/pdfviewer/custom-toolbar]
(https://document.syncfusion.com/demos/pdf-viewer/react/#/tailwind3/pdfviewer/custom-toolbar)


## See also
* [Feature Modules](./feature-module)
