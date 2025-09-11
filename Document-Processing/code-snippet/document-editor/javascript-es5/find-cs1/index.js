var documenteditor = new ej.documenteditor.DocumentEditor({ enableSelection: true, enableSearch: true, enableEditor: true, isReadOnly: false, enableOptionsPane: true });
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
document.getElementById('showhidepane').addEventListener('click', () => {
    documenteditor.showOptionsPane();
});

