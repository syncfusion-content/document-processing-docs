


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent, DocumentEditor
} from '@syncfusion/ej2-react-documenteditor';

function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
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
        <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

