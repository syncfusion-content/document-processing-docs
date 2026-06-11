import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, MenuSelectEventArgs, PrintType } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, salaryData } from './datasource';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const items: ItemModel[] = [
        { text: 'ActiveSheet' },
        { text: 'Workbook' }
    ];
    const handleItemSelect = (args: MenuSelectEventArgs): void => {
        let spreadsheet: SpreadsheetComponent = spreadsheetRef.current;
        if (spreadsheet) {
            const allowGridLines: HTMLInputElement = document.getElementById('gridline') as HTMLInputElement;
            const allowRowColumnHeader: HTMLInputElement = document.getElementById('header') as HTMLInputElement;
            spreadsheet.print({
                type: args.item.text as PrintType,
                allowGridLines: allowGridLines.checked,
                allowRowColumnHeader: allowRowColumnHeader.checked
            });
        }
    };
    function onCreated() {
        let spreadsheet: SpreadsheetComponent = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
        }
    }

    return (
        <div>
            <div id="print"><DropDownButtonComponent id="button" items={items} select={handleItemSelect}> Print </DropDownButtonComponent>
                <input type="checkbox" id="gridline" /><label htmlFor="gridline">Allow Grid Lines</label>
                <input type="checkbox" id="header" /><label htmlFor="header">Allow Row Column Header </label>
            </div>
            <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} allowSave={true} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' created={onCreated.bind(this)}>
                <SheetsDirective>
                    <SheetDirective name={"Budget"}>
                        <RangesDirective>
                            <RangeDirective dataSource={budgetData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name={"Salary"}>
                        <RangesDirective>
                            <RangeDirective dataSource={salaryData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);