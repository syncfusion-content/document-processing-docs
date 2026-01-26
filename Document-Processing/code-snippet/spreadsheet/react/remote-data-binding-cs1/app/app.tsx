import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const query: Query = new Query().select(['OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry', 'Freight']).take(200);
    const data: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/Orders',
        crossDomain: true
    });

    return (
        <SpreadsheetComponent>
            <SheetsDirective>
                <SheetDirective name='Shipment Details'>
                    <RangesDirective>
                        <RangeDirective dataSource={data} query={query}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={100}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={100}></ColumnDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);