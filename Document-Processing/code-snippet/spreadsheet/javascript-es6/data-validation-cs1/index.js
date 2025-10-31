var sheet = [
    {
        rows: [
            {
                    index: 0,
                    cells: [{ index: 0, value: 'Seller Name', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 1, value: 'Customer Id', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 2, value: 'Customer Name', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 3, value: 'Product Name', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 4, value: 'Product Price', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 5, value: 'Sales Date', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 5, value: 'Billing Time', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 6, value: 'Total Price', style:{fontWeight : "bold", textAlign: "center"} }]
                },
                {
                    index: 1,
                    cells: [{ index: 0, value: 'John'},
                    { index: 1, value: '1', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Nash'},
                    { index: 3, value: 'Digger', validation:{ type: 'List', value1: 'Digger, Digger, Cherrypicker' }},
                    { index: 4, value: '50000', validation:{ type: 'List', value1: '50000,50000,45000' }},
                    { index: 5, value: '04/11/2019'},
                    { index: 6, value: '11:34:32 AM'},
                    { index: 7, value: '1,45,000.00'}]
                },
                {
                    index: 2,
                    cells: [{ index: 0, value: 'Mike'},
                    { index: 1, value: '2', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Jim'},
                    { index: 3, value: 'Cherrypicker', validation:{ type: 'List', value1: 'Cherrypicker, JCB, Wheelbarrow' }},
                    { index: 4, value: '45000', validation:{ type: 'List', value1: '45000,90000,40' }},
                    { index: 5, value: '04/11/2019'},
                    { index: 6, value: '10:15:00 AM'},
                    { index: 7, value: '1,40,040.00'}]
                },
                {
                    index: 3,
                    cells: [{ index: 0, value: 'shane' },
                    { index: 1, value: '3', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Sean'},
                    { index: 3, value: 'Kango', validation:{ type: 'List', value1: 'Kango, Ropes' }},
                    { index: 4, value: '450', validation:{ type: 'List', value1: '450, 95' }},
                    { index: 5, value: '06/25/2019'},
                    { index: 6, value: '01:30:11 PM'},
                    { index: 7, value: '545.00'}]
                },
                {
                    index: 4,
                    cells: [{ index: 0, value: 'John' },
                    { index: 1, value: '1', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Nash'},
                    { index: 3, value: 'JCB', validation:{ type: 'List', value1: 'JCB, Ropes, scaffolding' }},
                    { index: 4, value: '90000', validation:{ type: 'List', value1: '90000, 95, 10000' }},
                    { index: 5, value: '09/22/2019'},
                    { index: 6, value: '12:30:02 PM'},
                    { index: 7, value: '1,00,095.00' }]
                }
        ],
        columns: [
            { width: 88,  }, { width: 88 }, { width: 106 }, { width: 98 }, { width: 88 }, { width: 86 }, { width: 107 }, { width: 81}
        ]
    },
{
    name: 'PriceDetails',
}
];

//Initialize the SpreadSheet control
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: sheet,
  dataBound: function () {
        if (spreadsheet.activeSheetTab === 1) {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
    }
  },
  created: function() {
            ////add Data validation to range.
            spreadsheet.addDataValidation({ type: 'TextLength' , operator: 'LessThanOrEqualTo' , value1: '4' }, 'A2:A5');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }, 'B2:B5');
            spreadsheet.addDataValidation({ type: 'Date', operator: 'NotEqualTo', value1: '04/11/2019'}, 'F2:F5');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'Between', value1: '10:00:00 AM', value2: '11:00:00 AM' }, 'G2:G5');
            spreadsheet.addDataValidation({ type: 'Decimal', operator: 'LessThan', value1: '100000.00'}, 'H2:H5');
            //Highlight Invalid Data.
            spreadsheet.addInvalidHighlight('A1:H5');
        }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

