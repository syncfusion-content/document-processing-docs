import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    let spreadsheet;
    const spreadsheetRef = React.useRef(null);

    const onCreated = () => {
        spreadsheet = spreadsheetRef.current;
        spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    }

    const actionBegin = (args) => {
        console.log('actionBegin triggered');
    }

    const beforeCellSave = (args) => {
        console.log('beforeCellSave triggered')
    }

    const beforeCellUpdate = (args) => {
        console.log('beforeCellUpdate triggered');
    }

    const cellEdit = (args) => {
        console.log('cellEdit triggered');
    }

    const cellEditing = (args) => {
        console.log('cellEditing triggered')
    }

    const cellEdited = (args) => {
        console.log('cellEdited triggered');
    }

    const cellSave = (args) => {
        console.log('cellSave triggered')
    }

    const actionComplete = (args) => {
        console.log('actionComplete triggered');
    }

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} created={onCreated} actionBegin={actionBegin} beforeCellSave={beforeCellSave} beforeCellUpdate={beforeCellUpdate} cellSave={cellSave} cellEdit={cellEdit} cellEditing={cellEditing} cellEdited={cellEdited} actionComplete={actionComplete} >
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);