

import { DocumentEditor, Print } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

DocumentEditor.Inject(Print);

let documenteditor: DocumentEditor = new DocumentEditor({
    enablePrint: true, height: '370px'
});
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

documenteditor.open(sfdt);
let printButton: Button = new Button();
printButton.appendTo('#print');
document.getElementById('print').addEventListener('click', () => {
    documenteditor.print();
});


