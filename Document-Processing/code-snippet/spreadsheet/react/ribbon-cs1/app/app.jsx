import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { select, createElement } from '@syncfusion/ej2-base';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
            // Hiding the `Insert` from ribbon.
            spreadsheet.hideRibbonTabs(['Insert']);
            // Set disabled state to `View` ribbon tab.
            spreadsheet.enableRibbonTabs(['View'], false);
            // Adding the `Help` ribbon tab at the last index.
            // Specify the ribbon tab header text in last optional argument(`insertBefore`) for inserting new tab before any existing tab.
            spreadsheet.addRibbonTabs([{
                header: { text: 'Help' }, content: [{
                    text: 'Feedback', tooltipText: 'Feedback',
                    click: () => { /* Any click action for this toolbar item will come here. */ }
                }]
            }]);
            // Hiding the unwanted toolbar items from `Home` by specifying its index.
            spreadsheet.hideToolbarItems('Home', [0, 1, 2, 4, 14, 15, 21, 24]);
            // Set disable state to `Underline`, 'Wrap text` toolbar items from `Home` by specifying the item id.
            spreadsheet.enableToolbarItems('Home', [`${spreadsheet.element.id}_underline`, `${spreadsheet.element.id}_wrap`], false);
            // Set disable state to `Protect Sheet` toolbar item from `Data` by mentioning its index.
            spreadsheet.enableToolbarItems('Data', [0], false);
            // Adding the new `Custom Formulas` toolbar item under `Formulas` tab for adding custom formulas.
            spreadsheet.addToolbarItems('Formulas', [{ type: 'Separator' }, {
                text: 'Custom Formulas', tooltipText: 'Custom Formulas',
                // You can set click handler for each new custom toolbar item
                click: () => {
                    // You can add custom formulas here.
                }
            }]);
            // Adding new custom item `Import` after the existing `Open` item. By default, new item will add after the specified item.
            spreadsheet.addFileMenuItems([{ text: 'Import', iconCss: 'e-open e-icons' }], 'Open');
            // Adding new custom item `Export As` after the existing `Save As` item.
            // Set `insertAfter` optional argument as `false` for adding new item before the specified item.
            spreadsheet.addFileMenuItems([{
                text: 'Export As', iconCss: 'e-save e-icons', items: [{ text: 'XLSX', iconCss: 'e-xlsx e-icons' },
                { text: 'XLS', iconCss: 'e-xls e-icons' }, { text: 'CSV', iconCss: 'e-csv e-icons' }]
            }], 'Save As', false);
            // Adding the new `custom dropdown button` in the ribbon toolbar item under the `Data` tab for adding a custom dropdown button using the addToolbarItems method in the spreadsheet ribbon.
            spreadsheet.addToolbarItems('Data', [{ type: 'Separator' }, { id: 'custombtn', tooltipText: 'Custom Btn', template: appendDropdownBtn('custombtn') }], 7);
        }
    }, []);
    const fileMenuBeforeOpen = () => {
        // Because the file menu items are created dynamically, you need to perform the hide or show and enable/disable operations
        // under filemenu before open event.
        // Hiding the `Save As` and `Open` item.
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.hideFileMenuItems(['Save As', 'Open']);
            // Set disable state to `New` item. You can perform any file menu items customization by specifying the item id,
            // if it has more than one same item text. Set the last argument `isUniqueId` as true for using the item id.
            spreadsheet.enableFileMenuItems([`${spreadsheet.element.id}_New`], false, true);
        }
    };
    const fileMenuItemSelect = (args) => {
        let spreadsheet = spreadsheetRef.current;
        // Custom file menu items select handler
        switch (args.item.text) {
            case 'Import': select(`#${spreadsheet.element.id}_fileUpload`, spreadsheet.element).click();
                break;
            case 'XLSX': if (spreadsheet) { spreadsheet.save({ saveType: 'Xlsx' }) };
                break;
            case 'XLS': if (spreadsheet) { spreadsheet.save({ saveType: 'Xls' }) };
                break;
            case 'CSV': if (spreadsheet) { spreadsheet.save({ saveType: 'Csv' }) };
                break;
            default:
                break;
        }
    };
    const appendDropdownBtn = (id) => {
        let ddlItems = [
            {
                text: 'Download Excel',
            },
            {
                text: 'Download CSV',
            },
        ];
        let btnObj = new DropDownButton({
            items: ddlItems,
            content: 'Download',
            iconCss: 'e-icons e-download',
            select: (args) => {
                alert(args.item.text + ' clicked');
            },
        });
        btnObj.appendTo(createElement('button', { id: id }));
        return btnObj.element;
    }

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} fileMenuBeforeOpen={fileMenuBeforeOpen} fileMenuItemSelect={fileMenuItemSelect}
                showFormulaBar={false} showSheetTabs={false} allowInsert={false} allowDelete={false} allowMerge={false}
                openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
                saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);