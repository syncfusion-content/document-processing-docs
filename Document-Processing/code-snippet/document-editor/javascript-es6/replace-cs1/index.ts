

import { DocumentEditor, Selection, Editor, Search } from '@syncfusion/ej2-documenteditor';
//Inject require modules.
DocumentEditor.Inject(Selection, Search, Editor);

//Initialize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableSelection: true, enableSearch: true, enableEditor: true, isReadOnly: false });
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
                            "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                        }
                    ]
                }
            ]
        }
    ]
}`;

//Open the SFDT document in Document Editor.
documenteditor.open(sfdt);
document.getElementById('replace_all').addEventListener('click', () => {
    let textToFind: string = (document.getElementById('find_text') as HTMLInputElement).value;
    let textToReplace: string = (document.getElementById('replace_text') as HTMLInputElement).value;
    if (textToFind !== '') {
        // Find all the occurences of given text
        documenteditor.searchModule.findAll(textToFind);
        if (documenteditor.searchModule.searchResults.length > 0) {
            // Replace all the occurences of given text
            documenteditor.searchModule.searchResults.replaceAll(textToReplace);
        }
    }
});


