//Initialize action items.
var items = [
  {
    text: "Copy"
  },
  {
    text: "Cut"
  },
  {
    text: "Paste"
  }
];

// Initialize the DropDownButton component.
var drpDownBtn = new ej.splitbuttons.DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: function (args) {
    if (args.item.text === 'Copy')
      spreadsheet.copy();
    if (args.item.text === 'Cut')
      spreadsheet.cut();
    if (args.item.text === 'Paste')
      spreadsheet.paste();
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo("#element");


// Initialize the Spreadsheet component.

var columns = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns }],
    enableClipboard: true
});


// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');



