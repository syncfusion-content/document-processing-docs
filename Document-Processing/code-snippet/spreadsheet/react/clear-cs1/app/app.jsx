import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const items = [
        { text: "Clear All" },
        { text: "Clear Formats" },
        { text: "Clear Contents" },
        { text: "Clear Hyperlinks" }
    ];
    const handleItemSelect = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            if (args.item.text === 'Clear All')
                spreadsheet.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
            if (args.item.text === 'Clear Formats')
                spreadsheet.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
            if (args.item.text === 'Clear Contents')
                spreadsheet.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
            if (args.item.text === 'Clear Hyperlinks')
                spreadsheet.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
        }
    };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt' }, 'A1:F1');
            spreadsheet.cellFormat({ color: '#10c469' }, 'B1:B10');
        }
    }, []);

    return (
        <div>
            <DropDownButtonComponent items={items} select={handleItemSelect}> Clear </DropDownButtonComponent>
            <SpreadsheetComponent ref={spreadsheetRef}>
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data} />
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100} />
                            <ColumnDirective width={110} />
                            <ColumnDirective width={100} />
                            <ColumnDirective width={180} />
                            <ColumnDirective width={130} />
                            <ColumnDirective width={130} />
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