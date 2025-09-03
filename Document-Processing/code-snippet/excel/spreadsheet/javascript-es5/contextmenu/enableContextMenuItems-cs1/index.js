ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    //To enable / disable context menu items.
        contextMenuBeforeOpen: function () {
          spreadsheet.enableContextMenuItems(['Rename'], false, false); // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
        }
});

spreadsheet.appendTo('#spreadsheet');

