//Initialize action items.
let items = [
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
let drpDownBtn = new ej.splitbuttons.DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: (args) => {
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
  enableClipboard: true,
  // Triggers before the action begins.
  actionBegin: (pasteArgs) => {
    // To cancel the paste action.
    if (pasteArgs.action === 'clipboard' && pasteArgs.args.eventArgs.requestType === 'paste') {
      pasteArgs.args.eventArgs.cancel = true;
    }
  }
});


// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');



