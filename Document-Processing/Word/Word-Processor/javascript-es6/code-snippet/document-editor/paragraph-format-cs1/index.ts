

import { DocumentEditor, Editor, Selection, EditorHistory, SfdtExport, ContextMenu } from '@syncfusion/ej2-documenteditor';
import { Toolbar } from '@syncfusion/ej2-navigations';
import { ItemModel, DropDownButton } from '@syncfusion/ej2-splitbuttons';

//Inject the require module
DocumentEditor.Inject(Editor, Selection, EditorHistory, SfdtExport, ContextMenu);

let documenteditor: DocumentEditor = new DocumentEditor({
    height: '370px', isReadOnly: false, enableSelection: true, enableEditorHistory: true, enableEditor: true, enableContextMenu: true, enableSfdtExport: true
});

function toolbarButtonClick(arg) {
    switch (arg.item.id) {
        case 'AlignLeft':
            //Toggle the Left alignment for selected or current paragraph
            documenteditor.editor.toggleTextAlignment('Left');
            break;
        case 'AlignRight':
            //Toggle the Right alignment for selected or current paragraph
            documenteditor.editor.toggleTextAlignment('Right');
            break;
        case 'AlignCenter':
            //Toggle the Center alignment for selected or current paragraph
            documenteditor.editor.toggleTextAlignment('Center');
            break;
        case 'Justify':
            //Toggle the Justify alignment for selected or current paragraph
            documenteditor.editor.toggleTextAlignment('Justify');
            break;
        case 'IncreaseIndent':
            //Increase the left indent of selected or current paragraph
            documenteditor.editor.increaseIndent();
            break;
        case 'DecreaseIndent':
            //Decrease the left indent of selected or current paragraph
            documenteditor.editor.decreaseIndent();
            break;
        case 'ClearFormat':
            //Clear all formattiing of the selected paragraph or content.
            documenteditor.editor.clearFormatting();
            break;
        case 'ShowParagraphMark':
            //Show or hide the hidden characters like spaces, tab, paragraph marks, and breaks.
            documenteditor.documentEditorSettings.showHiddenMarks = !documenteditor.documentEditorSettings.showHiddenMarks;
            break;
    }
}
//Change the line spacing of selected or current paragraph
function lineSpacingAction(args: any) {
    let text: string = args.item.text;
    switch (text) {
        case 'Single':
            documenteditor.selection.paragraphFormat.lineSpacing = 1;
            break;
        case '1.15':
            documenteditor.selection.paragraphFormat.lineSpacing = 1.15;
            break;
        case '1.5':
            documenteditor.selection.paragraphFormat.lineSpacing = 1.5;
            break;
        case 'Double':
            documenteditor.selection.paragraphFormat.lineSpacing = 2;
            break;
    }
    setTimeout((): void => {
        documenteditor.focusIn();
    }, 30);
}
documenteditor.selectionChange = () => {
    setTimeout(() => {
        onSelectionChange();
    }, 20);
};
// Selection change to retrieve formatting
function onSelectionChange() {
    if (documenteditor.selection) {
        var paragraphFormat = documenteditor.selection.paragraphFormat;
        var toggleBtnId = ['AlignLeft', 'AlignCenter', 'AlignRight', 'Justify', 'ShowParagraphMark'];
        for (var i = 0; i < toggleBtnId.length; i++) {
            let toggleBtn: HTMLElement = document.getElementById(toggleBtnId[i]);
            //Remove toggle state.
            toggleBtn.classList.remove('e-btn-toggle');
        }
        //Add toggle state based on selection paragraph format.
        if (paragraphFormat.textAlignment === 'Left') {
            document.getElementById('AlignLeft').classList.add('e-btn-toggle');
        } else if (paragraphFormat.textAlignment === 'Right') {
            document.getElementById('AlignRight').classList.add('e-btn-toggle');
        } else if (paragraphFormat.textAlignment === 'Center') {
            document.getElementById('AlignCenter').classList.add('e-btn-toggle');
        } else {
            document.getElementById('Justify').classList.add('e-btn-toggle');
        }
        if (documenteditor.documentEditorSettings.showHiddenMarks) {
            document.getElementById('ShowParagraphMark').classList.add('e-btn-toggle');
        }
        // #endregion
    }
}
//Toolbar configuration to add paragraph formatting options
let toolBar: Toolbar = new Toolbar({
    clicked: toolbarButtonClick,
    items: [
        {
            prefixIcon: 'e-de-ctnr-alignleft e-icons',
            tooltipText: 'Align Left',
            id: 'AlignLeft',
        },
        {
            prefixIcon: 'e-de-ctnr-aligncenter e-icons',
            tooltipText: 'Align Center',
            id: 'AlignCenter',
        },
        {
            prefixIcon: 'e-de-ctnr-alignright e-icons',
            tooltipText: 'Align Right',
            id: 'AlignRight',
        },
        {
            prefixIcon: 'e-de-ctnr-justify e-icons',
            tooltipText: 'Justify',
            id: 'Justify',
        },
        {
            prefixIcon: 'e-de-ctnr-increaseindent e-icons',
            tooltipText: 'Increase Indent',
            id: 'IncreaseIndent',
        },
        {
            prefixIcon: 'e-de-ctnr-decreaseindent e-icons',
            tooltipText: 'Decrease Indent',
            id: 'DecreaseIndent',
        },
        {
            type: 'Separator'
        },
        {
            id: 'lineSpacing'
        },
        {
            prefixIcon: 'e-de-ctnr-clearall e-icons',
            tooltipText: 'ClearFormatting',
            id: 'ClearFormat',
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-de-e-paragraph-mark e-icons',
            tooltipText: 'Show the hidden characters like spaces, tab, paragraph marks, and breaks.(Ctrl + *)',
            id: 'ShowParagraphMark',
        }
    ],
});
toolBar.appendTo('#toolbar');
let items: ItemModel[] = [
    {
        text: 'Single',
    },
    {
        text: '1.15',
    },
    {
        text: '1.5',
    },
    {
        text: 'Double',
    },
];
let dropdown = new DropDownButton({
    items: items,
    iconCss: 'e-de-ctnr-linespacing e-icons',
    select: lineSpacingAction,
});
dropdown.appendTo('#lineSpacing');

documenteditor.appendTo('#DocumentEditor');


