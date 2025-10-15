ej.base.enableRipple(true);

let spreadsheet = new ej.spreadsheet.Spreadsheet({
  beforeCellRender: function (args) {
    if (
      args.colIndex >= 0 &&
      args.colIndex <= 10 &&
      args.element.classList.contains('e-header-cell')
    ) {
      let text = 'custom header ' + args.colIndex.toString();
      args.element.innerText = text;
    }
  },
});

spreadsheet.appendTo('#spreadsheet');
