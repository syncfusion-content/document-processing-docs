
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Selection, Editor);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function onLoadDefault() {
        let defaultDocument: object = {
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
            onLoadDefault();
            //Scroll to specified page.
            documenteditor.scrollToPage(2);
        });
    }
    return (
        <DocumentEditorComponent id="DocumentEditor" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableEditor={true} />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
