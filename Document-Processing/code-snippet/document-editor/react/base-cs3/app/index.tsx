import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function Default() {
    return (
    <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" enableToolbar={true} />);
}
export default Default
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<Default />);



