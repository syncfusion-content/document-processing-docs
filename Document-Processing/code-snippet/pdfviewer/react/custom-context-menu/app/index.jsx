import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

export function App() {
    var viewer;
    var enableObj;
    var positionObj;
    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icon e-search'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icon e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icon e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Fields',
            iconCss: 'e-icon e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Fields',
            iconCss: 'e-icon e-unlock',
            id: 'read_only_false'
        },
    ];
return (<div>
    <tbody>
        <tr>
            <td>Hide Default Context Menu</td>
            <td>
                <CheckBoxComponent ref={(scope) => { enableObj = scope; }} id="hide-default-context-menu" change={contextmenuHelper}></CheckBoxComponent>
            </td>
        </tr>
        <tr>
            <td>Add Custom option at bottom</td>
            <td>
                <CheckBoxComponent ref={(scope) => { positionObj = scope; }} id="show-custom-menu-bottom" change={contextmenuHelper}></CheckBoxComponent>
            </td>
        </tr>
    </tbody>
    <div className='control-section'>
    <PdfViewerComponent ref={(scope) => { viewer = scope; }} id="container" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib" documentLoad={documentLoad} customContextMenuSelect = {customContextMenuSelect} customContextMenuBeforeOpen = {customContextMenuBeforeOpen} style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
    </div>
</div>);

    function documentLoad(args) {
        viewer.addCustomMenu(menuItems, false, false);
    }

    function customContextMenuSelect(args) {
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
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
                } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && viewer.selectedItems.formFields.length !== 0) {
                    var isReadOnlyOption = args.ids[i] === "read_only_true";
                    for (var k = 0; k < viewer.selectedItems.formFields.length; k++) {
                        var selectedFormFields = viewer.selectedItems.formFields[k];
                        if (selectedFormFields) {
                            var selectedFormField = viewer.selectedItems.formFields[k].isReadonly;
                            var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                            search.style.display = displayMenu ? 'block' : 'none';
                        }
                    }
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

    function contextmenuHelper(args) {
        viewer.addCustomMenu(menuItems,enableObj.checked, positionObj.checked);
    }

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);