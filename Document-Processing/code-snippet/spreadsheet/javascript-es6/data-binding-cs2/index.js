var query = new ej.data.Query().select([
    'OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry', 'Freight'
]).take(200);

//Initialize DataManager.
var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    crossDomain: true
});

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [
        {
            name: 'Shipment Details',
            rows: [{
                cells: [{ value: 'Order ID' }, { value: 'Customer Name' }, { value: 'Freight' }, { value: 'Ship Name' },
                { value: 'Ship City' }, { value: 'Ship Country' }]
            }],
            ranges: [{ dataSource: data, query: query, showFieldAsHeader: false, startCell: 'A2' }],
            columns: [{ width: 100 }, { width: 130 }, { width: 100 }, { width: 220 }, { width: 150 }, { width: 180 }]
        }],
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
});

spreadsheet.appendTo('#spreadsheet');

