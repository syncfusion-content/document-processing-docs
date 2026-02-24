var items = [
  {
    text: 'ActiveSheet',
  },
  {
    text: 'Workbook',
  },
];

var budgetData = [
  {
    'Expense Type': 'Housing',
    'Projected Cost': 7000,
    'Actual Cost': 7500,
    Difference: -500,
  },
  {
    'Expense Type': 'Transportation',
    'Projected Cost': 500,
    'Actual Cost': 500,
    Difference: 0,
  },
  {
    'Expense Type': 'Insurance',
    'Projected Cost': 1000,
    'Actual Cost': 1000,
    Difference: 0,
  },
  {
    'Expense Type': 'Food',
    'Projected Cost': 2000,
    'Actual Cost': 1800,
    Difference: 200,
  },
  {
    'Expense Type': 'Pets',
    'Projected Cost': 300,
    'Actual Cost': 200,
    Difference: 100,
  },
  {
    'Expense Type': 'Personel Care',
    'Projected Cost': 500,
    'Actual Cost': 500,
    Difference: 0,
  },
  {
    'Expense Type': 'Loan',
    'Projected Cost': 1000,
    'Actual Cost': 1000,
    Difference: 0,
  },
  {
    'Expense Type': 'Tax',
    'Projected Cost': 200,
    'Actual Cost': 200,
    Difference: 0,
  },
  {
    'Expense Type': 'Savings',
    'Projected Cost': 1000,
    'Actual Cost': 900,
    Difference: 100,
  },
  {
    'Expense Type': 'Total',
    'Projected Cost': 13500,
    'Actual Cost': 13600,
    Difference: -100,
  },
];

var salaryData = [
  {
    Earnings: 'Basic',
    'Credit Amount': 20000,
    Deductions: 'Provident Fund',
    'Debit Amount': 2400,
  },
  {
    Earnings: 'HRA',
    'Credit Amount': 8000,
    Deductions: 'ESI',
    'Debit Amount': 0,
  },
  {
    Earnings: 'Special Allowance',
    'Credit Amount': 25000,
    Deductions: 'Professional Tax',
    'Debit Amount': 200,
  },
  {
    Earnings: 'Incentives',
    'Credit Amount': 2000,
    Deductions: 'TDS',
    'Debit Amount': 2750,
  },
  {
    Earnings: 'Bonus',
    'Credit Amount': 1500,
    Deductions: 'Other Deduction',
    'Debit Amount': 0,
  },
  {
    Earnings: 'Total Earnings',
    'Credit Amount': 56500,
    Deductions: 'Total Deductions',
    'Debit Amount': 5350,
  },
];


var allowGridLines;
var allowRowColumnHeader;
var drpDownBtn = new ej.splitbuttons.DropDownButton({
  items: items,
  cssClass: 'e-round-corner',
  select: function (args) {
    spreadsheet.print({
      type: args.item.text,
      allowGridLines: allowGridLines,
      allowRowColumnHeader: allowRowColumnHeader,
    });
  },
});

drpDownBtn.appendTo('#element');

var checkboxgrid = document.getElementById('gridline');

if (checkboxgrid != null) {
  checkboxgrid.onchange = function () {
    allowGridLines = checkboxgrid.checked;
  };
}

var checkboxheader = document.getElementById('header');

if (checkboxheader != null) {
  checkboxheader.onchange = function () {
    allowRowColumnHeader = checkboxheader.checked;
  };
}

var columns = [{ width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }];
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  allowOpen: true,
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  allowSave: true,
  saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  sheets: [
    { name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns },
    { name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns },
  ],
  created: function () {
    spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:D1');
  }
});

spreadsheet.appendTo('#spreadsheet');
