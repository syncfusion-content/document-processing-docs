
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Selection, SfdtExport, Editor);
function App() {
    let documenteditor;
    // Add event listener for requestNavigate event to customize hyperlink navigation functionality
    let requestNavigate = (args) => {
        if (args.linkType !== 'Bookmark') {
            let link = args.navigationLink;
            if (args.localReference.length > 0) {
                link += '#' + args.localReference;
            }
            //Navigate to the specified URL.
            window.open(link);
            args.isHandled = true;
        }
    };
    return (<DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} enableSelection={true} enableSfdtExport={true} requestNavigate={requestNavigate} isReadOnly={false} enableEditor={true}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
