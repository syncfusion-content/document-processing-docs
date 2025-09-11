var documenteditor = new ej.documenteditor.DocumentEditor({
    enablePrint: true
});

documenteditor.appendTo('#DocumentEditor');

var sfdt ={
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

var printButton = new ej.buttons.Button();
printButton.appendTo('#print');

document.getElementById('print').addEventListener('click',function (){
    documenteditor.print();
});


