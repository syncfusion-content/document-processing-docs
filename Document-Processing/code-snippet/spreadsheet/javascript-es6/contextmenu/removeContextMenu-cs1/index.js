ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
     // To remove existing context menu items.
        contextMenuBeforeOpen: function () {
          spreadsheet.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
        }
});

spreadsheet.appendTo('#spreadsheet');

