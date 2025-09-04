
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog, } from '@syncfusion/ej2-react-documenteditor';
//Inject require modules.
DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
    let documenteditor;
    React.useEffect(() => {
        componentDidMount();
    }, []);
    function onLoadDefaultDocument() {
        let defaultDocument = {
            sections: [
                {
                    blocks: [
                        {
                            paragraphFormat: {
                                styleName: 'Normal',
                            },
                            inlines: [
                                {
                                    text: 'First page',
                                },
                            ],
                        },
                    ],
                    headersFooters: {},
                },
                {
                    blocks: [
                        {
                            paragraphFormat: {
                                styleName: 'Normal',
                            },
                            inlines: [
                                {
                                    text: 'Second page',
                                },
                            ],
                        },
                    ],
                    headersFooters: {},
                },
                {
                    blocks: [
                        {
                            paragraphFormat: {
                                styleName: 'Normal',
                            },
                            inlines: [
                                {
                                    text: 'Third page',
                                },
                            ],
                        },
                    ],
                    headersFooters: {},
                },
            ],
            characterFormat: {},
            paragraphFormat: {},
            background: {
                color: '#FFFFFFFF',
            },
            styles: [
                {
                    type: 'Paragraph',
                    name: 'Normal',
                    next: 'Normal',
                },
                {
                    type: 'Character',
                    name: 'Default Paragraph Font',
                },
            ],
        };
        documenteditor.open(JSON.stringify(defaultDocument));
        documenteditor.focusIn();
    }
    function componentDidMount() {
        setTimeout(() => {
            //Load default document.
            onLoadDefaultDocument();
            //Navigate to specified page.
            documenteditor.viewer.scrollToPage(3);
        });
    }
    return (<DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {
            documenteditor = scope;
        }} isReadOnly={false} enablePrint={true} enableSelection={true} enableEditor={true} enableEditorHistory={true} enableContextMenu={true} enableSearch={true} enableOptionsPane={true} enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true} enablePageSetupDialog={true} enableSfdtExport={true} enableStyleDialog={true} enableTableOfContentsDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableTextExport={true} enableWordExport={true}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
