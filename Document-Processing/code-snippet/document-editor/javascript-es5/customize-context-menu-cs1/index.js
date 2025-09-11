ej.documenteditor.Editor,ej.documenteditor.Selection,ej.documenteditor.OptionsPane, ej.documenteditor.Search, ej.documenteditor.ContextMenu, ej.documenteditor.EditorHistory,ej.documenteditor.ImageResizer, ej.documenteditor.ListDialog,ej.documenteditor.TableDialog, ej.documenteditor.HyperlinkDialog, ej.documenteditor.ParagraphDialog, ej.documenteditor.FontDialog, ej.documenteditor.PageSetupDialog, ej.documenteditor.BookmarkDialog, ej.documenteditor.StyleDialog, ej.documenteditor.TablePropertiesDialog, ej.documenteditor.BordersAndShadingDialog, ej.documenteditor.TableOptionsDialog, ej.documenteditor.CellOptionsDialog, ej.documenteditor.TableOfContentsDialog

var defaultCheckBoxObj = new  ej.buttons.CheckBox({ label: 'Hide Default Context Menu', change: contextmenuHelper });
defaultCheckBoxObj.appendTo('#default-context-menu');
var positionCheckBoxObj = new  ej.buttons.CheckBox({ label: 'Add Custom option at bottom', change: contextmenuHelper });
positionCheckBoxObj.appendTo('#position-context-menu');

var editor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
editor.enableAllModules();
editor.appendTo('#DocumentEditor');


// Creating custom menu items
var menuItems = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
// Adding custom options
editor.contextMenu.addCustomMenu(menuItems, false);
// To show/hide custom menu item
editor.customContextMenuBeforeOpen = function(args) {
    var search = document.getElementById(args.ids[0]);
    search.style.display = 'none';
    var searchContent = editor.selection.text;
    if ((!editor.selection.isEmpty) && (/\S/.test(searchContent))) {
        search.style.display = 'block';
    }
}
// To handle contextmenu select event
editor.customContextMenuSelect = function(args) {
    var item = args.id;
    var id = editor.element.id;
    switch (item) {
        case id + 'search_in_google':
            var searchContent = editor.selection.text;
            if (!editor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
}
function contextmenuHelper(args) {
    editor.contextMenu.addCustomMenu(menuItems, defaultCheckBoxObj.checked, positionCheckBoxObj.checked);
}

