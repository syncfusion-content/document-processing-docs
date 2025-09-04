var documenteditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false, enableEditor: true,
});
documenteditor.appendTo('#DocumentEditor');
onLoadDefault();
documenteditor.scrollToPage(2);

 function onLoadDefault() {
    var defaultDocument = {
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

