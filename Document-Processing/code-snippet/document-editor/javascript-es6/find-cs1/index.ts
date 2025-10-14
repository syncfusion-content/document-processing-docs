

import { DocumentEditor, Selection, Editor, Search, OptionsPane, EditorHistory } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Selection, Search, Editor, OptionsPane, EditorHistory);
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableSelection: true, enableSearch: true, enableEditor: true, isReadOnly: false, enableOptionsPane: true, enableEditorHistory : true });
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
documenteditor.open(sfdt);
document.getElementById('showhidepane').addEventListener('click', () => {
    documenteditor.showOptionsPane();
});


