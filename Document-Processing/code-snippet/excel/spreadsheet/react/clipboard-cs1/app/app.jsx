import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const items = [
        { text: "Cut" },
        { text: "Copy" },
        { text: "Paste" }
    ];
    const itemSelect = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            if (args.item.text === 'Cut')
                spreadsheet.cut();
            if (args.item.text === 'Copy')
                spreadsheet.copy();
            if (args.item.text === 'Paste')
                spreadsheet.paste();
        }
    };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
        }
    }, []);

    return (
        <div>
            <DropDownButtonComponent items={items} select={itemSelect}> Clipboard </DropDownButtonComponent>
            <SpreadsheetComponent ref={spreadsheetRef} enableClipboard={true}>
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={defaultData}></RangeDirective>
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