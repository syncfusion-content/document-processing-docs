ej.base.enableRipple(true);

var columns = [
  { width: 150 },
  { width: 120 },
  { width: 120 },
  { width: 120 },
  { width: 140 },
  { width: 150 },
];

var rows = [
  {
    height: 40,
    customHeight: true,
    cells: [
      {
        value: 'Monthly Expense',
        colSpan: 5,
        style: {
          textAlign: 'center',
          fontWeight: 'bold',
          verticalAlign: 'middle',
          fontStyle: 'italic',
          fontSize: '15pt',
        },
      },
    ],
  },
  { height: 30 },
  {
    index: 11,
    cells: [
      { value: 'Totals', style: { fontStyle: 'italic', fontWeight: 'bold' } },
      { formula: '=SUM(B3:B11)' },
      // Calculating total of each column data through cell binding.
      { formula: '=SUM(C3:C11)' },
      { formula: '=SUM(D3:D11)' },
    ],
  },
  {
    cells: [
      {
        index: 1,
        value: 'Number of Categories',
        colSpan: 2,
        style: { fontWeight: 'bold', textAlign: 'right' },
      },
      { index: 3, formula: '=COUNTA(A3:A11)' },
    ],
  },
  {
    cells: [
      {
        index: 1,
        value: 'Average Spend',
        colSpan: 2,
        style: { fontWeight: 'bold', textAlign: 'right' },
      },
      { index: 3, formula: '=AVERAGE(B3:B11)', format: '$#,##0' },
    ],
  },
  {
    cells: [
      {
        index: 1,
        value: 'Min Spend',
        colSpan: 2,
        style: { fontWeight: 'bold', textAlign: 'right' },
      },
      { index: 3, formula: '=MIN(B3:B11)', format: '$#,##0' },
    ],
  },
  {
    cells: [
      {
        index: 1,
        value: 'Max Spend',
        colSpan: 2,
        style: { fontWeight: 'bold', textAlign: 'right' },
      },
      { index: 3, formula: '=MAX(B3:B11)', format: '$#,##0' },
    ],
  },
];

var sheets = [
  { ranges: [{ dataSource: data, startCell: 'A2' }], columns: columns, rows },
];

// Custom function to calculate percentage between two cell values.
function calculatePercentage(firstCell, secondCell) {
  return Number(firstCell) / Number(secondCell);
}

// Custom function to calculate round down for values.
function roundDownHandler(value, digit) {
  var multiplier = Math.pow(10, digit);
  return Math.floor(value * multiplier) / multiplier;
}

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: sheets,
  created: function () {
    spreadsheet.cellFormat(
      { fontWeight: 'bold', textAlign: 'center' },
      'A2:F2'
    );
    spreadsheet.numberFormat('$#,##0', 'B3:D12');
    spreadsheet.numberFormat('0%', 'E3:E12');
    // Adding custom function for calculating the percentage between two cells.
    spreadsheet.addCustomFunction(calculatePercentage, 'PERCENTAGE');
    // Adding custom function for calculating round down for the value.
    spreadsheet.addCustomFunction(roundDownHandler, 'ROUNDDOWN');
    // Calculate percentage using custom added formula in E12 cell.
    spreadsheet.updateCell({ formula: '=PERCENTAGE(C12,D12)' }, 'E12');
    // Calculate round down for average values using custom added formula in F12 cell.
    spreadsheet.updateCell({ formula: '=ROUNDDOWN(F11,1)' }, 'F12');
  },
  showRibbon: false,
  showSheetTabs: false,
});

spreadsheet.appendTo('#spreadsheet');
