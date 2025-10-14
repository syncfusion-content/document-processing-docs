var documenteditor = new ej.documenteditor.DocumentEditor({ });

documenteditor.appendTo('#DocumentEditor');

var sfdt  ={
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
};

documenteditor.open(JSON.stringify(sfdt));

