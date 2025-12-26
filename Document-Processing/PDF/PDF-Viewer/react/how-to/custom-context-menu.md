---
layout: post
title: Customize the context menu in React PDF Viewer | Syncfusion
description: Learn how to add and customize custom context menu options in the React PDF Viewer using addCustomMenu, customContextMenuSelect, and related events.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize the context menu in PDF Viewer in React

PDF Viewer supports adding custom options to the context menu using the [addCustomMenu()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#addcustommenu) method. Define actions for custom items with the [customContextMenuSelect()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#customcontextMenuselect) method.

### Add a custom option

The following example adds custom options to the context menu.

```js
   export function App() {

    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-search'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    function documentLoad(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.addCustomMenu(menuItems, false);
    }

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    documentLoad={documentLoad}
                    customContextMenuSelect={customContextMenuSelect}
                    customContextMenuBeforeOpen={customContextMenuBeforeOpen}
                    height='640px'>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>);

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

#### Show or hide custom items before opening

Use [customContextMenuBeforeOpen()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#customcontextMenubeforeopen) to hide or show custom options dynamically.

```js
 export function App() {

    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-search'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    function documentLoad(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.addCustomMenu(menuItems, true);
    }

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    documentLoad={documentLoad}
                    customContextMenuSelect={customContextMenuSelect}
                    customContextMenuBeforeOpen={customContextMenuBeforeOpen}
                    height='640px'>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>);

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the `customContextMenuBeforeOpen()` method.

```js
export function App() {

    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-search'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    function documentLoad(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.addCustomMenu(menuItems, false, false);
    }

    function customContextMenuSelect(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (\/\S\/.test(content))) {
                        window.open('http://google.com/search?q=' + content);
                    }
                }
                break;
            case 'lock_annotation':
                lockAnnotations(args);
                break;
            case 'unlock_annotation':
                unlockAnnotations(args);
                break;
            case 'read_only_true':
                setReadOnlyTrue(args);
                break;
            case 'read_only_false':
                setReadOnlyFalse(args);
                break;
            default:
                break;
        }
    }

    function customContextMenuBeforeOpen(args) {
        for (var i = 0; i < args.ids.length; i++) {
            var search = document.getElementById(args.ids[i]);
            var viewer = document.getElementById('container').ej2_instances[0];
            if (search) {
                search.style.display = 'none';
                if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
                    search.style.display = 'block';
                } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                    var isLockOption = args.ids[i] === "lock_annotation";
                    for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
                        var selectedAnnotation = viewer.selectedItems.annotations[j];
                        if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                            var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                            search.style.display = shouldDisplay ? 'block' : 'none';
                        }
                    }
                } else if (args.ids[i] === "read_only_true" && viewer.selectedItems.formFields.length !== 0) {
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    search.style.display = selectedFormField ? 'none' : 'block';
                } else if (args.ids[i] === "read_only_false" && viewer.selectedItems.formFields.length !== 0) {
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    search.style.display = selectedFormField ? 'block' : 'none';
                } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
                    search.style.display = 'block';
                }
            }
        }
    }

    function lockAnnotations(args) {
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
                viewer.annotationCollection[i].annotationSettings.isLock = true;
                viewer.annotationCollection[i].isCommentLock = true;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
            args.cancel = false;
        }
    }

    function unlockAnnotations(args) {
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
                viewer.annotationCollection[i].annotationSettings.isLock = false;
                viewer.annotationCollection[i].isCommentLock = false;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
            args.cancel = false;
        }
    }

    function setReadOnlyTrue(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                viewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: true,
                });
            }
            args.cancel = false;
        }
    }

    function setReadOnlyFalse(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                viewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: false,
                });
            }
            args.cancel = false;
        }
    }

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    documentLoad={documentLoad}
                    customContextMenuSelect={customContextMenuSelect}
                    customContextMenuBeforeOpen={customContextMenuBeforeOpen}
                    height='640px'>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>);

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```
The following is the output of the custom context menu with customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
{% include code-snippet/pdfviewer/react/custom-context-menu/app/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
{% include code-snippet/pdfviewer/react/custom-context-menu/app/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**, add the following `serviceUrl` within the <div> element in either the `index.TSX` or `index.JSX` file:
**serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**.

{% previewsample "/document-processing/code-snippet/pdfviewer/react/custom-context-menu" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Custom%20Context%20Menu)