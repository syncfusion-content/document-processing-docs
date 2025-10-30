import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const btnClick = (): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.autoFillSettings.showFillOptions = !spreadsheet.autoFillSettings.showFillOptions; //To change whether fill options need to be shown or not.
        }
    };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            spreadsheet.autoFill('D4:D11', 'D2:D3', 'Down', 'CopyCells');
            spreadsheet.autoFill('E4:E11', 'E2:E3', 'Down', 'FillSeries');
            spreadsheet.autoFill('B4:B11', 'B2:B3', 'Down', 'FillFormattingOnly');
            spreadsheet.autoFill('C4:C11', 'C2:C3', 'Down', 'FillWithoutFormatting');
        }
    }, []);

    return (
        <div>
            <button className='e-btn' onClick={btnClick}>Change ShowFillOptions</button>
            <SpreadsheetComponent ref={spreadsheetRef}>
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={130}></ColumnDirective>
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
