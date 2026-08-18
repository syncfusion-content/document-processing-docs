var documenteditor = new ej.documenteditor.DocumentEditor({height: '370px' });

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

