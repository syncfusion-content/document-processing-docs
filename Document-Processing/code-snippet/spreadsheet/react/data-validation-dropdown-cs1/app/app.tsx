import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective, getColumn, getCellIndexes, getCell, getSheet, getSheetIndex, checkColumnValidation } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';


function App(): React.ReactElement {
    let spreadsheet: any;
    const onCreated = (): void => {
        // Apply styles to the specified range in the active sheet.
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Apply format to the specified range in the active sheet.
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
        // The default format code for the date format is 'm/d/yyyy'.
        spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
        spreadsheet.addDataValidation({ type: 'List', inCellDropDown: true, value1: 'Option 1,Option 2,Option 3,Other' }, 'A1:A25')
        spreadsheet.addDataValidation({ type: 'List', inCellDropDown: true, ignoreBlank: true, value1: 'Option 1,Option 2,Option 3,Other' }, 'B:B');
    };

    const cellSave = (args: any): void => {
        let addressArr = args.address.split('!');
        let indexes = getCellIndexes(addressArr[1]);
        let sheet = getSheet(spreadsheet, getSheetIndex(spreadsheet,addressArr[0]));
        console.log(sheet)
        let cell = getCell(indexes[0], indexes[1], sheet);
        let column = getColumn(sheet, indexes[1]);
        let validation = (cell && cell.validation && cell.validation.type == 'List') || checkColumnValidation(column, indexes[0], indexes[1]);
        if (validation && args.value === 'Other') {
            // Removing data validation if Other option is selected.
            spreadsheet.removeDataValidation(addressArr[1]);
            // To clear the cell content.
            spreadsheet.clear({ type: 'Clear Contents', range: addressArr[1] });
            // To start editing when other option is selected.
            spreadsheet.startEdit();
        } 
    }

    return (<div className='control-pane'>
            <div className='control-section spreadsheet-control'>
                <SpreadsheetComponent openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' ref={(ssObj: any) => { spreadsheet = ssObj; }} created={onCreated.bind(undefined as any)} cellSave={cellSave}>
                    <SheetsDirective>
                        <SheetDirective name="Car Sales Report">
                            <RangesDirective>
                                <RangeDirective dataSource={defaultData}></RangeDirective>
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
        </div>);
}
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);