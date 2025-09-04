

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, height: '370px', enableEditor: true
});
documenteditor.appendTo('#DocumentEditor');
//Open default document in DocumentEditor
onLoadDefault();
documenteditor.scrollToPage(2);

function onLoadDefault(): void {
    let defaultDocument: object = {
        "sections": [
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "First page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Second page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            }
        ],
        "characterFormat": {},
        "paragraphFormat": {},
        "background": {
            "color": "#FFFFFFFF"
        },
        "styles": [
            {
                "type": "Paragraph",
                "name": "Normal",
                "next": "Normal"
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            }
        ]
    }
    documenteditor.open(JSON.stringify(defaultDocument));
    documenteditor.focusIn();
}


