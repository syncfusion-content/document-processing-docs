ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
        // To add context menu items.
        contextMenuBeforeOpen: function () {
           spreadsheet.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false); //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
        }
});

spreadsheet.appendTo('#spreadsheet');

