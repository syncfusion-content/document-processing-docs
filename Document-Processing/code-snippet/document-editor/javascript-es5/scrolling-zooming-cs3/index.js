var documenteditor = new ej.documenteditor.DocumentEditor({
  isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documenteditor.enableAllModules();
documenteditor.appendTo('#DocumentEditor');
var statusBarDiv = document.getElementById('page-fit-type-div');
var startPage = 1;
var label = document.createElement('label');
label.styles = 'margin-top: 6px;margin-right: 2px';
label.textContent = 'Page ';
statusBarDiv.appendChild(label);
var pageNumberLabel = document.createElement('label');
pageNumberLabel.id = 'documenteditor_page_no';
pageNumberLabel.style= 'text-transform:capitalize;white-space:pre;overflow:hidden;user-select:none;cursor:text;height:17px;max-width:150px';

var editablePageNumber = document.createElement('div');
pageNumberLabel.id= 'editablePageNumber';
pageNumberLabel.style= 'border: 1px solid #F1F1F1;display: inline-flex;height: 17px;padding: 0px 4px;';
pageNumberLabel.className= 'single-line e-de-pagenumber-text';
editablePageNumber.appendChild(pageNumberLabel);
updatePageNumber();
statusBarDiv.appendChild(editablePageNumber);
editablePageNumber.setAttribute('title', 'The current page number in the document. Click or tap to navigate specific page.');
var label1 = document.createElement('label');
label1.id = 'documenteditor_pagecount';
label1.styles = 'margin-left:2px;varter-spacing: 1.05px;';
label1.textContent = 'of';
statusBarDiv.appendChild(label1);
var pageCount = document.createElement('label');
pageCount.id = 'documenteditor_pagecount'
pageCount.style = 'margin-left:6px;varter-spacing: 1.05px;';
updatePageCount();
statusBarDiv.appendChild(pageCount);
var editorPageCount = undefined;
var zoom;
var zoomBtn = document.createElement('button');
zoomBtn.id= 'documenteditor-zoom';
zoomBtn.className = 'e-de-statusbar-zoom';
statusBarDiv.appendChild(zoomBtn);
zoomBtn.setAttribute('title', 'Zoom level. Click or tap to open the Zoom options.');
var items = [
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
zoom = new ej.splitbuttons.DropDownButton({ content: '100%', items: items, select: onZoom }, zoomBtn);
editablePageNumber.addEventListener('click', updateDocumentEditorPageNumber);
editablePageNumber.addEventListener('keydown', onKeyDown);
editablePageNumber.addEventListener('blur', onBlur);
documenteditor.viewChange = function (e) {
  updatePageNumberOnViewChange(e);
};
documenteditor.contentChange = function () {
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
    var pageNumber = parseInt(editablePageNumber.textContent, 0);
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
  var editablePageNumber = document.getElementById('editablePageNumber');
  editablePageNumber.contentEditable = 'true';
  editablePageNumber.focus();
  window.getSelection().selectAllChildren(editablePageNumber);
}

