

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, height: '370px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documenteditor.enableAllModules();

documenteditor.appendTo('#DocumentEditor');

let statusBarDiv = document.getElementById('page-fit-type-div');
let startPage: number = 1;
let label: HTMLElement = createElement('label', { styles: 'margin-top: 6px;margin-right: 2px' });
label.textContent = 'Page ';
statusBarDiv.appendChild(label);
let pageNumberLabel = createElement('label', { id: 'documenteditor_page_no', styles: 'text-transform:capitalize;white-space:pre;overflow:hidden;user-select:none;cursor:text;height:17px;max-width:150px' });
let editablePageNumber = createElement('div', { id: 'editablePageNumber', styles: 'border: 1px solid #F1F1F1;display: inline-flex;height: 17px;padding: 0px 4px;', className: 'single-line e-de-pagenumber-text' });
editablePageNumber.appendChild(pageNumberLabel);
updatePageNumber();
statusBarDiv.appendChild(editablePageNumber);
editablePageNumber.setAttribute('title', 'The current page number in the document. Click or tap to navigate specific page.');
let label1: HTMLElement = createElement('label', { id: 'documenteditor_pagecount', styles: 'margin-left:2px;letter-spacing: 1.05px;' });
label1.textContent = 'of';
statusBarDiv.appendChild(label1);
let pageCount = createElement('label', { id: 'documenteditor_pagecount', styles: 'margin-left:6px;letter-spacing: 1.05px;' });
statusBarDiv.appendChild(pageCount);
let editorPageCount = undefined;
updatePageCount();
let zoom: DropDownButton;
let zoomBtn: HTMLButtonElement = createElement('button', {
    id: 'documenteditor-zoom',
    // tslint:disable-next-line:max-line-length
    className: 'e-de-statusbar-zoom'
}) as HTMLButtonElement;
statusBarDiv.appendChild(zoomBtn);
zoomBtn.setAttribute('title', 'Zoom level. Click or tap to open the Zoom options.');

let items: ItemModel[] = [
    {
        text: '200%',
    },
    {
        text: '175%',
    },
    {
        text: '150%',
    },
    {
        text: '125%',
    },
    {
        text: '100%',
    },
    {
        text: '75%',
    },
    {
        text: '50%',
    },
    {
        text: '25%',
    },
    {
        separator: true
    },
    {
        text: 'Fit one page'
    },
    {
        text: 'Fit page width',
    },
];
zoom = new DropDownButton({ content: '100%', items: items, select: onZoom }, zoomBtn);
editablePageNumber.addEventListener('click', updateDocumentEditorPageNumber);
editablePageNumber.addEventListener('keydown', onKeyDown);
editablePageNumber.addEventListener('blur', onBlur);

//Update page number on `viewChange` event
documenteditor.viewChange = (e): void => {
    updatePageNumberOnViewChange(e);
};

//Update page count on `contentChange` event.
documenteditor.contentChange = (): void => {
    //Set page count
    updatePageCount();
};

function updatePageNumberOnViewChange(args) {
    if (documenteditor.selection
        && documenteditor.selection.startPage >= args.startPage && documenteditor.selection.startPage <= args.endPage) {
        startPage = documenteditor.selection.startPage;
    } else {
        startPage = args.startPage;
    }
    updatePageNumber();
}

function onBlur() {
    if (editablePageNumber.textContent === '' || parseInt(editablePageNumber.textContent, 0) > editorPageCount) {
        updatePageNumber();
    }
    editablePageNumber.contentEditable = 'false';
}

function onKeyDown(e) {
    if (e.which === 13) {
        e.preventDefault();
        let pageNumber: number = parseInt(editablePageNumber.textContent, 0);
        if (pageNumber > editorPageCount) {
            updatePageNumber();
        } else {
            if (documenteditor.selection) {
                documenteditor.selection.goToPage(parseInt(editablePageNumber.textContent, 0));
            } else {
                documenteditor.scrollToPage(parseInt(editablePageNumber.textContent, 0));
            }
        }
        editablePageNumber.contentEditable = 'false';
        if (editablePageNumber.textContent === '') {
            updatePageNumber();
        }
    }
    if (e.which > 64) {
        e.preventDefault();
    }
}

//Update zoom factor.
function onZoom(args) {
    setZoomValue(args.item.text);
    updateZoomContent();
}
function setZoomValue(text) {
    if (text.match('Fit one page')) {
        documenteditor.fitPage('FitOnePage');
    } else if (text.match('Fit page width')) {
        documenteditor.fitPage('FitPageWidth');
    } else {
        documenteditor.zoomFactor = parseInt(text, 0) / 100;
    }
}
function updateZoomContent() {
    zoom.content = Math.round(documenteditor.zoomFactor * 100) + '%';
}
function updatePageNumber() {
    pageNumberLabel.textContent = startPage.toString();
}
function updatePageCount() {
    editorPageCount = documenteditor.pageCount;
    pageCount.textContent = editorPageCount.toString();
}
function updateDocumentEditorPageNumber() {
    let editablePageNumber = document.getElementById('editablePageNumber');
    editablePageNumber.contentEditable = 'true';
    editablePageNumber.focus();
    window.getSelection().selectAllChildren(editablePageNumber);
}


