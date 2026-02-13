ej.base.enableRipple(true);

var columns = [{ width: 180 }, { width: 130 }, { width: 130 }, { width: 180 }, { width: 130 }, { width: 120 }];

var sheets = [{ ranges: [{ dataSource: data }], columns: columns }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
        // Hiding the `Insert` from ribbon.
        spreadsheet.hideRibbonTabs(['Insert']);
        // Set diabled state to `View` ribbon tab.
        spreadsheet.enableRibbonTabs(['View'], false);
        // Adding the `Help` ribbon tab at the last index.
        // Specify the ribbon tab header text in last optional argument(`insertBefore`) for inserting new tab before any existing tab.
        spreadsheet.addRibbonTabs([{ header: { text: 'Help' }, content: [{ text: 'Feedback', tooltipText: 'Feedback',
            click: function (args) { /* Any click action for this toolbar item will come here. */ } }] }]);
        // Hiding the unwanted toobar items from `Home` by specifying its index.
        spreadsheet.hideToolbarItems('Home', [0, 1, 2, 4, 14, 15, 21, 24]);
        // Set diable state to `Underline`, 'Wrap text` toobar items from `Home` by specifying the item id.
        spreadsheet.enableToolbarItems('Home', [`${spreadsheet.element.id}_underline`, `${spreadsheet.element.id}_wrap`], false);
        // Set diable state to `Protect Sheet` toolbar item from `Data` by mentioning its index.
        spreadsheet.enableToolbarItems('Data', [0], false);
        // Adding the new `Custom Formulas` toolbar item under `Formulas` tab for adding custom formulas. 
        spreadsheet.addToolbarItems(
            'Formulas', [{ type: 'Separator' }, {
                text: 'Custom Formulas', tooltipText: 'Custom Formulas',
                // You can set click handler for each new custom toolbar item
                click: function (args) {
                    // You can add custom formualas here.
                }
            }]);
        // Adding new custom item `Import` after the existing `Open` item. By default, new item will add after the specified item.
        spreadsheet.addFileMenuItems([{ text: 'Import', iconCss: 'e-open e-icons' }], 'Open');
        // Adding new custom item `Export As` after the existing `Save As` item.
        // Set `insertAfter` optional argument as `false` for adding new item before the specified item.
        spreadsheet.addFileMenuItems(
            [{
                text: 'Export As', iconCss: 'e-save e-icons', items: [{ text: 'XLSX', iconCss: 'e-xlsx e-icons' },
                    { text: 'XLS', iconCss: 'e-xls e-icons' }, { text: 'CSV', iconCss: 'e-csv e-icons' }]
            }],
            'Save As', false);
        // Adding the new `custom dropdown button` in the ribbon toolbar item under the `Data` tab for adding a custom dropdown button using the addToolbarItems method in the spreadsheet ribbon.
        spreadsheet.addToolbarItems('Data', [{ type: 'Separator' }, { id: 'custombtn', tooltipText: 'Custom Btn', template: appendDropdownBtn('custombtn') }], 7);
    },
    fileMenuBeforeOpen: function () {
        // Since the file menu items are created dynamically, so need to perform the hide/show and enable/disable operations
        // under filemenu before open event.
        // Hiding the `Save As` and `Open` item.
        spreadsheet.hideFileMenuItems(['Save As', 'Open']);
        // Set diable state to `New` item. You can perform any file menu items customization by specifying the item id,
        // if it has more than one same item text. Set the last argument `isUniqueId` as true for using the item id.
        spreadsheet.enableFileMenuItems([`${spreadsheet.element.id}_New`], false, true);
    },
    fileMenuItemSelect: function (args) {
        // Custom file menu items select handler
        switch (args.item.text) {
            case 'Import': select(`#${spreadsheet.element.id}_fileUpload`, spreadsheet.element).click();
                break;
            case 'XLSX': spreadsheet.save({ saveType: 'Xlsx' });
                break;
            case 'XLS': spreadsheet.save({ saveType: 'Xls' });
                break;
            case 'CSV': spreadsheet.save({ saveType: 'Csv' });
                break;
        }
    },
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    // Removed the unwanted support for this samples
    showFormulaBar: false, showSheetTabs: false, allowInsert: false, allowDelete: false, allowMerge: false
});

spreadsheet.appendTo('#spreadsheet');

function appendDropdownBtn(id) {
    var ddlItems = [
        {
            text: 'Download Excel',
        },
        {
            text: 'Download CSV',
        },
    ];
    var btnObj = new ej.splitbuttons.DropDownButton({
        items: ddlItems,
        content: 'Download',
        iconCss: 'e-icons e-download',
        select: function (args) {
            alert(args.item.text + ' clicked');
        },
    });
    btnObj.appendTo(ej.base.createElement('button', { id: id }));
    return btnObj.element;
}
