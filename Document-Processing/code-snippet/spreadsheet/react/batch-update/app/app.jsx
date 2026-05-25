import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    function onCreated() {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Suspend UI updates
            spreadsheet.suspendRefresh();

            // Perform multiple operations
            spreadsheet.addHyperlink('www.google.com', 'H1:H11', 'Google');
            spreadsheet.cellFormat({ textDecoration: 'underline line-through', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Arial Black', fontSize: '14pt', color: 'green', textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#FFFF00' }, 'Price Details!H2:H3');
            spreadsheet.merge('F1:G1', 'Horizontally');
            spreadsheet.numberFormat('$#,##0.00', 'D3');
            spreadsheet.addDataValidation({ type: 'TextLength', operator: 'LessThanOrEqualTo', value1: '1', isHighlighted: true }, 'E1:E11');
            spreadsheet.wrap('A6', true);
            spreadsheet.setBorder({ border: '1px solid red' }, 'D1:E11', 'Outer');
            spreadsheet.setColWidth(130, 1);
            spreadsheet.setRowHeight(50, 1);
            spreadsheet.insertRow(3, 5);
            spreadsheet.insertColumn(3, 5);

            // Resume and apply all changes
            spreadsheet.resumeRefresh();
        }
    }

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} allowSave={true} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' created={onCreated.bind(this)}>
                <SheetsDirective>
                    <SheetDirective name="Price Details">
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={92}></ColumnDirective>
                            <ColumnDirective width={96}></ColumnDirective>
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