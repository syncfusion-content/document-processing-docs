

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

// Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor component
let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' });

// Render Document Editor component.
documenteditor.appendTo('#DocumentEditor');



