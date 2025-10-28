import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, MenuSelectEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const items = [
        { text: 'Cut' },
        { text: 'Copy' },
        { text: 'Paste' }
    ];
    const onActionBegin = (pasteArgs: any): void => {
        if (pasteArgs.args.action === 'clipboard' && pasteArgs.args.eventArgs.requestType === 'paste') {
            pasteArgs.args.eventArgs.cancel = true;
        }
    };
    const itemSelect = (args: MenuSelectEventArgs): void => {
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
        if (spreadsheetRef.current) {
            spreadsheetRef.current.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
        }
    }, []);

    return (
        <div>
            <DropDownButtonComponent items={items} select={itemSelect}> Clipboard </DropDownButtonComponent>
            <SpreadsheetComponent ref={spreadsheetRef} actionBegin={onActionBegin} enableClipboard={true} >
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);