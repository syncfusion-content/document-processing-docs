

import { DocumentEditor, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-documenteditor';
import { Toolbar } from '@syncfusion/ej2-navigations';
import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { ColorPicker } from '@syncfusion/ej2-inputs';
//Inject required modules.
DocumentEditor.Inject(Editor, Selection, EditorHistory, SfdtExport);
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', isReadOnly: false, enableSelection: true, enableEditorHistory: true, enableEditor: true, enableSfdtExport: true });

function toolbarButtonClick(arg) {
    switch (arg.item.id) {
        case 'bold':
            //Toggles the bold of selected content
            documenteditor.editor.toggleBold();
            break;
        case 'italic':
            //Toggles the Italic of selected content
            documenteditor.editor.toggleItalic();
            break;
        case 'underline':
            //Toggles the underline of selected content
            documenteditor.editor.toggleUnderline('Single');
            break;
        case 'strikethrough':
            //Toggles the strikethrough of selected content
            documenteditor.editor.toggleStrikethrough();
            break;
        case 'subscript':
            //Toggles the subscript of selected content
            documenteditor.editor.toggleSubscript();
            break;
        case 'superscript':
            //Toggles the superscript of selected content
            documenteditor.editor.toggleSuperscript();
            break;
    }
}
//To change the font Style of selected content
function changeFontFamily(args) {
    documenteditor.selection.characterFormat.fontFamily = args.value;
    documenteditor.focusIn();
}
//To Change the font Size of selected content
function changeFontSize(args) {
    documenteditor.selection.characterFormat.fontSize = args.value;
    documenteditor.focusIn();
}
//To Change the font Color of selected content
function changeFontColor(args) {
    documenteditor.selection.characterFormat.fontColor = args.currentValue.hex;
    documenteditor.focusIn();
}
documenteditor.selectionChange = () => {
    setTimeout(() => { onSelectionChange(); }, 20);
};
//Selection change to retrieve formatting
function onSelectionChange() {
    if (documenteditor.selection) {
        enableDisableFontOptions();
        // #endregion
    }
}
function enableDisableFontOptions() {
    var characterformat = documenteditor.selection.characterFormat;
    var properties = [characterformat.bold, characterformat.italic, characterformat.underline, characterformat.strikethrough];
    var toggleBtnId = ["bold", "italic", "underline", "strikethrough"];
    for (var i = 0; i < properties.length; i++) {
        changeActiveState(properties[i], toggleBtnId[i]);
    }
}
function changeActiveState(property, btnId) {
    let toggleBtn: HTMLElement = document.getElementById(btnId);
    if ((typeof (property) == 'boolean' && property == true) || (typeof (property) == 'string' && property !== 'None'))
        toggleBtn.classList.add("e-btn-toggle");
    else {
        if (toggleBtn.classList.contains("e-btn-toggle"))
            toggleBtn.classList.remove("e-btn-toggle");
    }
}
let fontStyle: string[] = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];
let fontSize: string[] = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];

let toolBar: Toolbar = new Toolbar({
    clicked: toolbarButtonClick,
    items: [
        {
            prefixIcon: 'e-de-ctnr-bold e-icons',
            tooltipText: 'Bold',
            id: 'bold',
        },
        {
            prefixIcon: 'e-de-ctnr-italic e-icons',
            tooltipText: 'Italic',
            id: 'italic',
        },
        {
            prefixIcon: 'e-de-ctnr-underline e-icons',
            tooltipText: 'Underline',
            id: 'underline',
        },
        {
            prefixIcon: 'e-de-ctnr-strikethrough e-icons',
            tooltipText: 'Strikethrough',
            id: 'strikethrough',
        },
        {
            prefixIcon: 'e-de-ctnr-subscript e-icons',
            tooltipText: 'Subscript',
            id: 'subscript',
        },
        {
            prefixIcon: 'e-de-ctnr-superscript e-icons',
            tooltipText: 'Superscript',
            id: 'superscript',
        },
        { type: 'Separator' },
        {
            type: 'Input',
            template: new ColorPicker({
                value: '#000000',
                showButtons: true,
                change: changeFontColor
            }),
        },
        { type: 'Separator' },
        {
            type: 'Input',
            template: new ComboBox({
                dataSource: fontStyle,
                width: 120,
                index: 2,
                allowCustom: true,
                change: changeFontFamily,
                showClearButton: false,
            }),
        },
        {
            type: 'Input',
            template: new ComboBox({
                dataSource: fontSize,
                width: 80,
                allowCustom: true,
                index: 2,
                change: changeFontSize,
                showClearButton: false,
            }),
        },
    ],
});
toolBar.appendTo('#toolbar');

documenteditor.appendTo('#DocumentEditor');


