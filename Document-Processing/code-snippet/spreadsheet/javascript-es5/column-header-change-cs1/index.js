ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  beforeCellRender: function (args) {
    if (
      args.colIndex >= 0 &&
      args.colIndex <= 10 &&
      args.element.classList.contains('e-header-cell')
    ) {
      var text = 'custom header ' + args.colIndex.toString();
      args.element.innerText = text;
    }
  },
});

spreadsheet.appendTo('#spreadsheet');
