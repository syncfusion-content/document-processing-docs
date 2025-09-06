

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
//Initialize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, height: '370px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documenteditor.enableAllModules();
documenteditor.appendTo('#DocumentEditor');
onLoadDefaultDocument();
documenteditor.selection.goToPage(3);

function onLoadDefaultDocument(): void {
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
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Third page"
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


