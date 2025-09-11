
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Print } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(Print);
function App(){
    let documenteditor: DocumentEditorComponent;
     React.useEffect(() => {
    componentDidMount()
    }, []);
    function onPrint() {
        //Print the document content.
        documenteditor.print();
    }
   function componentDidMount() {
        let sfdt: string = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "inlines": [
                                {
                                    "characterFormat": {
                                        "bold": true,
                                        "italic": true
                                    },
                                    "text": "Hello World"
                                }
                            ]
                        }
                    ],
                    "headersFooters": {
                    }
                }
            ]
        }`;
        setTimeout(() => {
            //Open the document in Document Editor.
            documenteditor.open(sfdt);
        });
    }


        return (
            <div>
                <button onClick={onPrint}>Print</button>
                <DocumentEditorComponent
                    id="container"
                    ref={scope => {
                        documenteditor = scope;
                    }}
                    enablePrint={true}
                    height={'330px'}
                />
            </div>
        );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));
