
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  Print,
  SfdtExport,
  WordExport,
  TextExport,
  Selection,
  Search,
  Editor,
  ImageResizer,
  EditorHistory,
  ContextMenu,
  OptionsPane,
  HyperlinkDialog,
  TableDialog,
  BookmarkDialog,
  TableOfContentsDialog,
  PageSetupDialog,
  StyleDialog,
  ListDialog,
  ParagraphDialog,
  BulletsAndNumberingDialog,
  FontDialog,
  TablePropertiesDialog,
  BordersAndShadingDialog,
  TableOptionsDialog,
  CellOptionsDialog,
  StylesDialog,
} from '@syncfusion/ej2-react-documenteditor';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

DocumentEditorComponent.Inject(
  Print,
  SfdtExport,
  WordExport,
  TextExport,
  Selection,
  Search,
  Editor,
  ImageResizer,
  EditorHistory,
  ContextMenu,
  OptionsPane,
  HyperlinkDialog,
  TableDialog,
  BookmarkDialog,
  TableOfContentsDialog,
  PageSetupDialog,
  StyleDialog,
  ListDialog,
  ParagraphDialog,
  BulletsAndNumberingDialog,
  FontDialog,
  TablePropertiesDialog,
  BordersAndShadingDialog,
  TableOptionsDialog,
  CellOptionsDialog,
  StylesDialog
);

function App() {
  const documentEditorRef: DocumentEditorComponent = React.useRef(null);
  const pageCountRef:any = React.useRef(null);
  const editablePageNumberRef: any = React.useRef(null);
  const pageNumberLabelRef: any = React.useRef(null);
  const zoomRef: any = React.useRef(null);
  let startPage = 1;
  let editorPageCount: any;

  const items: ItemModel[] = [
    { text: '200%' },
    { text: '175%' },
    { text: '150%' },
    { text: '125%' },
    { text: '100%' },
    { text: '75%' },
    { text: '50%' },
    { text: '25%' },
    { separator: true },
    { text: 'Fit one page' },
    { text: 'Fit page width' },
  ];

  React.useEffect(() => {
    const documenteditor = documentEditorRef.current;

    if (documenteditor) {
      documenteditor.viewChange = (e) => updatePageNumberOnViewChange(e);
      documenteditor.contentChange = () => updatePageCount();

      if (editablePageNumberRef.current) {
        editablePageNumberRef.current.onclick = () => updateDocumentEditorPageNumber();
        editablePageNumberRef.current.onkeydown = (e) => onKeyDown(e);
        editablePageNumberRef.current.onblur = () => onBlur();
      }

      updatePageCount();
      updatePageNumber();
    }
  }, []);

  function updatePageNumberOnViewChange(args: any) {
    const documenteditor = documentEditorRef.current;
    if (
      documenteditor?.selection &&
      documenteditor.selection.startPage >= args.startPage &&
      documenteditor.selection.startPage <= args.endPage
    ) {
      startPage = documenteditor.selection.startPage;
    } else {
      startPage = args.startPage;
    }
    updatePageNumber();
  }

  function onBlur() {
    const editablePageNumber = editablePageNumberRef.current;
    if (
      editablePageNumber?.textContent === '' ||
      parseInt(editablePageNumber.textContent, 0) > editorPageCount
    ) {
      updatePageNumber();
    }
    if (editablePageNumber) editablePageNumber.contentEditable = 'false';
  }

  function onKeyDown(e: any) {
    const documenteditor = documentEditorRef.current;
    const editablePageNumber = editablePageNumberRef.current;
    if (e.which === 13) {
      e.preventDefault();
      const pageNumber = parseInt(editablePageNumber?.textContent || '0', 0);
      if (pageNumber > editorPageCount) {
        updatePageNumber();
      } else {
        if (documenteditor?.selection) {
          documenteditor.selection.goToPage(pageNumber);
        } else {
          documenteditor?.scrollToPage(pageNumber);
        }
      }
      if (editablePageNumber) editablePageNumber.contentEditable = 'false';
      if (editablePageNumber?.textContent === '') {
        updatePageNumber();
      }
    }
    if (e.which > 64) {
      e.preventDefault();
    }
  }

  function onZoom(args: any) {
    setZoomValue(args.item.text);
    updateZoomContent();
  }

  function setZoomValue(text: string) {
    const documenteditor = documentEditorRef.current;
    if (text.match('Fit one page')) {
      documenteditor?.fitPage('FitOnePage');
    } else if (text.match('Fit page width')) {
      documenteditor?.fitPage('FitPageWidth');
    } else {
      documenteditor.zoomFactor = parseInt(text, 0) / 100;
    }
  }

  function updateZoomContent() {
    if (zoomRef.current) {
      zoomRef.current.content = Math.round(documentEditorRef.current?.zoomFactor * 100) + '%';
    }
  }

  function updatePageNumber() {
    if (pageNumberLabelRef.current) {
      pageNumberLabelRef.current.textContent = startPage.toString();
    }
  }

  function updatePageCount() {
    const documenteditor = documentEditorRef.current;
    editorPageCount = documenteditor?.pageCount || 0;
    if (pageCountRef.current) {
      pageCountRef.current.textContent = editorPageCount.toString();
    }
  }

  function updateDocumentEditorPageNumber() {
    const editPageNumber = editablePageNumberRef.current;
    if (editPageNumber) {
      editPageNumber.contentEditable = 'true';
      editPageNumber.focus();
      window.getSelection()?.selectAllChildren(editPageNumber);
    }
  }

  return (
    <div>
      <DocumentEditorComponent
        id="container"
        height={'330px'}
        ref={documentEditorRef}
        isReadOnly={false}
        enablePrint={true}
        enableSelection={true}
        enableEditor={true}
        enableEditorHistory={true}
        enableContextMenu={true}
        enableSearch={true}
        enableOptionsPane={true}
        enableBookmarkDialog={true}
        enableBordersAndShadingDialog={true}
        enableFontDialog={true}
        enableTableDialog={true}
        enableParagraphDialog={true}
        enableHyperlinkDialog={true}
        enableImageResizer={true}
        enableListDialog={true}
        enablePageSetupDialog={true}
        enableSfdtExport={true}
        enableStyleDialog={true}
        enableTableOfContentsDialog={true}
        enableTableOptionsDialog={true}
        enableTablePropertiesDialog={true}
        enableTextExport={true}
        enableWordExport={true}
      />
      <div id="page-fit-type-div">
        <label id="page"> Page </label>
        <div id="editablePageNumber" ref={editablePageNumberRef}>
          <label id="documenteditor_page_no" ref={pageNumberLabelRef} />
        </div>
        <label id="of">of</label>
        <label id="documenteditor_pagecount" ref={pageCountRef} />
        <DropDownButtonComponent
          ref={zoomRef}
          items={items}
          cssClass="e-de-statusbar-zoom"
          select={onZoom}
        >
          100%
        </DropDownButtonComponent>
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('sample'));


