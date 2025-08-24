

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false,  height: '370px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' });

// Enable all built in modules.
documenteditor.enableAllModules();

// Render the Document Editor component.
documenteditor.appendTo('#DocumentEditor');



