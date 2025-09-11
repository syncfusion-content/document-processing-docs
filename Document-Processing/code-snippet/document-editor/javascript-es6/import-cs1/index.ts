

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px' });

documenteditor.appendTo('#DocumentEditor');

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

//Open the sfdt document in the Document Editor.
documenteditor.open(sfdt);


