var documenteditor = new ej.documenteditor.DocumentEditor({ enableSelection: true, enableSearch: true, enableEditor: true, isReadOnly: false });
documenteditor.appendTo('#DocumentEditor');
var sfdt = `{
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
                            "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                        }
                    ]
                }
            ]
        }
    ]
}`;
documenteditor.open(sfdt);
document.getElementById('replace_all').addEventListener('click',function () {
    var textToFind = (document.getElementById('find_text')).value;
    var textToReplace = (document.getElementById('replace_text')).value;
    if (textToFind !== '') {
        // Find all the occurences of given text
        documenteditor.searchModule.findAll(textToFind);
        if (documenteditor.searchModule.searchResults.length > 0) {
            // Replace all the occurences of given text
            documenteditor.searchModule.searchResults.replaceAll(textToReplace);
        }
    }
});

