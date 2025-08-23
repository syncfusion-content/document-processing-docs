

import { DocumentEditor, Editor, Selection, OptionsPane, Search, ContextMenu, EditorHistory, ImageResizer, ListDialog, TableDialog, HyperlinkDialog, ParagraphDialog, FontDialog, PageSetupDialog, BookmarkDialog, StyleDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, TableOfContentsDialog } from '@syncfusion/ej2-documenteditor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

let defaultCheckBoxObj: CheckBox = new CheckBox({ label: 'Hide Default Context Menu', change: contextmenuHelper });
defaultCheckBoxObj.appendTo('#default-context-menu');

let positionCheckBoxObj: CheckBox = new CheckBox({ label: 'Add Custom option at bottom', change: contextmenuHelper });
positionCheckBoxObj.appendTo('#position-context-menu');

//Initialize Document Editor component.
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, height: '370px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/'
});

//Enable all built in modules.
documentEditor.enableAllModules();

//Render Document Editor component.
documentEditor.appendTo('#DocumentEditor');

//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];

//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);

//To show/hide custom menu item
documentEditor.customContextMenuBeforeOpen = (args: BeforeOpenCloseCustomContentMenuEventArgs): void => {
    let search: HTMLElement = document.getElementById(args.ids[0]);
    search.style.display = 'none';
    let searchContent: string = documentEditor.selection.text;
    if ((!documentEditor.selection.isEmpty) && (/\S/.test(searchContent))) {
        search.style.display = 'block';
    }
};

//To handle contextmenu select event
documentEditor.customContextMenuSelect = (args: CustomContentMenuEventArgs): void => {
    let item: string = args.id;
    let id: string = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            let searchContent: string = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
};

//function to handle the CheckBox change event
function contextmenuHelper(args: ChangeEventArgs): void {
    documentEditor.contextMenu.addCustomMenu(menuItems, defaultCheckBoxObj.checked, positionCheckBoxObj.checked);
}



