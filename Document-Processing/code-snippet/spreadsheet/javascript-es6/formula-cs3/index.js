ej.base.enableRipple(true);

function loadCultureFiles() {
    var files = ['ca-gregorian.json', 'numbers.json', 'currencies.json', 'timeZoneNames.json', 'numberingSystems.json'];
    var loadCulture = function (prop) {
        var fetch = new ej.base.Fetch('./' + files[prop], 'GET', false);
        fetch.onSuccess = function (response) {
            if (typeof response === 'object') {
                // If the response is an object, convert it to a JSON string
                var jsonString = JSON.stringify(response);
                ej.base.loadCldr(JSON.parse(jsonString));
            } else if (typeof response === 'string') {
                // If the response is already a JSON string, parse and load it
                ej.base.loadCldr(JSON.parse(response));

            } else {
                console.error('Invalid responsetype received:', response);
            }
            ej.base.setCulture('de');
            ej.base.setCurrencyCode('EUR');
        };
        fetch.send();
    };
    for (var prop = 0; prop < files.length; prop++) {
        loadCulture(prop);
    }
}
function loadLocalizationData() {
    var fetch = new ej.base.Fetch('./locale.json', 'GET', false);
    fetch.onSuccess = function (deLocalization) {
        ej.base.L10n.load(deLocalization);
        loadCultureFiles(); 
    };
    fetch.send();
}
loadLocalizationData();

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    locale: 'de',
    listSeparator: ';',
    showSheetTabs: false,
    showRibbon: false,
    sheets: [{
        selectedRange: 'E14',
        ranges: [{ dataSource: data }],
        rows: [{ index: 12, cells: [{ index: 3, value: 'Subtotal:' }, { formula: '=SUBTOTAL(9;E2:E12)' }] },
            { cells: [{ index: 3, value: 'Discount (8,5%):' }, { formula: '=PRODUCT(8,5;E13)/100' }] },
            { cells: [{ index: 3, value: 'Total Amount:' }, { formula: '=E13-E14'}] }],
        columns: [{ width: 120 }, { width: 180 }, { width: 100 }, { width: 120 }, { width: 120 }]
    }],
    created: function () {
        spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:E1');
        spreadsheet.numberFormat(ej.spreadsheet.getFormatFromType('Currency'), 'D2:E12');
        spreadsheet.numberFormat(ej.spreadsheet.getFormatFromType('Currency'), 'E13:E15');
    }
});

spreadsheet.appendTo('#spreadsheet');

