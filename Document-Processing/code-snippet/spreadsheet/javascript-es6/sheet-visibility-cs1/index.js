ej.base.enableRipple(true);

var sheets =  [{
    name: 'Visible Sheet',
    ranges: [{ dataSource: data }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }],
    // State sets as `Visible` by default. No need to said in sample
    state: 'Visible'
},
{
    name: 'Very Hidden Sheet',
    ranges: [{ dataSource: data }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }],
    // Sets sheet state as `VeryHidden`. It can't be unhidden.
    state: 'VeryHidden'
},
{
    name: 'Hidden Sheet',
    ranges: [{ dataSource: data }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }],
    // Sets sheet state as `Hidden`. It can be unhidden dynamically.
    state: 'Hidden'
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        // Applies style formatting to active visible sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // Applies style formatting to active hidden sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Hidden Sheet!A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'Hidden Sheet!D2:H11');
    },
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    // Removed the unwanted support for this samples
    showFormulaBar: false, showRibbon: false
});

spreadsheet.appendTo('#spreadsheet');

