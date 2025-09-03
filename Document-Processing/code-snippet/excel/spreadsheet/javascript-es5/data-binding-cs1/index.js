// Initialize the Spreadsheet component.

var data= [{
    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    ShipAddress: '59 rue de lAbbaye'
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    ShipAddress: 'Luisenstr. 48'
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua do Paço, 67'
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    ShipName: 'Victuailles en stock',
    ShipCity: 'Lyon',
    ShipAddress: '2, rue du Commerce'
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    ShipName: 'Suprêmes délices',
    ShipCity: 'Charleroi',
    ShipAddress: 'Boulevard Tirou, 255'
  }];

var sheet = [{
  ranges: [{ dataSource: data }],
  columns: [{ width: 80 }, { width: 80 }, { width: 80 },
  { width: 160 }, { width: 100 }, { width: 150 }]
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: sheet
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

