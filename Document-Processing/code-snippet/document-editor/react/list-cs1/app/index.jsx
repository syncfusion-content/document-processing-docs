
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Selection, Editor, EditorHistory, ContextMenu, TableDialog } from '@syncfusion/ej2-react-documenteditor';
import { ToolbarComponent, ItemDirective, ItemsDirective, } from '@syncfusion/ej2-react-navigations';
DocumentEditorComponent.Inject(Selection, Editor, EditorHistory, ContextMenu, TableDialog);
function App() {
    let documenteditor;
    function toolbarButtonClick(args) {
        switch (args.item.id) {
            case 'Bullets':
                //To create bullet list
                documenteditor.editor.applyBullet('\uf0b7', 'Symbol');
                break;
            case 'Numbering':
                //To create numbering list
                documenteditor.editor.applyNumbering('%1)', 'UpRoman');
                break;
            case 'clearlist':
                //To clear list
                documenteditor.editor.clearList();
                break;
        }
    }
    return (<div>
            <ToolbarComponent id="toolbar" clicked={toolbarButtonClick}>
                <ItemsDirective>
                    <ItemDirective id="Bullets" prefixIcon="e-de-ctnr-bullets e-icons" tooltipText="Bullets"/>
                    <ItemDirective id="Numbering" prefixIcon="e-de-ctnr-numbering e-icons" tooltipText="Numbering"/>
                    <ItemDirective id="clearlist" text="Clear" tooltipText="Clear List"/>
                </ItemsDirective>
            </ToolbarComponent>
            <DocumentEditorComponent id="container" height={'330px'} ref={scope => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableEditorHistory={true}/>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
