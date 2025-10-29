// Initialize the Spreadsheet component.

var data= [ {
    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    Website: 'https://www.amazon.com/'
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    Website: 'https://www.overstock.com/'
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    Website: 'https://www.aliexpress.com/'
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    ShipName: 'Victuailles en stock',
    ShipCity: 'Lyon',
    Website: 'http://www.alibaba.com/'
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    ShipName: 'Suprêmes délices',
    ShipCity: 'Charleroi',
    Website: 'https://taobao.com/'
  }];

  //Initialize action items.
var items = [{
    text: "Clear All"
  },
  {
    text: "Clear Formats"
  },
  {
    text: "Clear Contents"
  },
  {
    text: "Clear Hyperlinks"
  }];

  // initialize DropDownButton control
  var drpDownBtn = new ej.splitbuttons.DropDownButton({items: items,
    select: (function (args) {
            if (args.item.text === 'Clear All')
              spreadsheet.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
            if (args.item.text === 'Clear Formats')
              spreadsheet.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
            if (args.item.text === 'Clear Contents')
              spreadsheet.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
            if (args.item.text === 'Clear Hyperlinks')
              spreadsheet.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
        })
  });

  // Render initialized DropDownButton.
  drpDownBtn.appendTo('#element');

var sheet = [{
                ranges: [{ dataSource: data }],
                columns: [{ width: 80 }, { width: 80 },{ width: 80},
                          { width: 160 }, { width: 100 }, {width: 150}]
            }]
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt'}, 'A1:E1');
        spreadsheet.cellFormat({ color: '#10c469' }, 'B1:B10');
    }
    });

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

