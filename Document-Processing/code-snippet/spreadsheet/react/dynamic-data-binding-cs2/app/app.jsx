import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, getRangeIndexes, getSwapRange, getRangeAddress } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

function App() {
    const spreadsheetRef = React.useRef(null);
    const created = () => {
        spreadsheetRef.current.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    };

    const updateDataCollection = () => {
        const newDataCollection = {
            dataSource: [
                {
                    'Payment Mode': 'Debit Card',
                    'Delivery Date': '07/11/2015',
                    'Amount': '8529.22',
                },
                {
                    'Payment Mode': 'Cash On Delivery',
                    'Delivery Date': '7/13/2016',
                    'Amount': '17866.19',
                },
                {
                    'Payment Mode': 'Net Banking',
                    'Delivery Date': '09/04/2015',
                    'Amount': '13853.09',
                },
                {
                    'Payment Mode': 'Credit Card',
                    'Delivery Date': '12/15/2017',
                    'Amount': '2338.74',
                },
                {
                    'Payment Mode': 'Credit Card',
                    'Delivery Date': '10/08/2014',
                    'Amount': '9578.45',
                },
                {
                    'Payment Mode': 'Cash On Delivery',
                    'Delivery Date': '7/01/2017',
                    'Amount': '19141.62',
                },
                {
                    'Payment Mode': 'Credit Card',
                    'Delivery Date': '12/20/2015',
                    'Amount': '6543.30',
                },
                {
                    'Payment Mode': 'Credit Card',
                    'Delivery Date': '11/24/2014',
                    'Amount': '13035.06',
                },
                {
                    'Payment Mode': 'Debit Card',
                    'Delivery Date': '05/12/2014',
                    'Amount': '18488.80',
                },
                {
                    'Payment Mode': 'Net Banking',
                    'Delivery Date': '12/30/2014',
                    'Amount': '12317.04',
                },
                {
                    'Payment Mode': 'Credit Card',
                    'Delivery Date': '12/18/2013',
                    'Amount': '6230.13',
                },
                {
                    'Payment Mode': 'Cash On Delivery',
                    'Delivery Date': '02/02/2015',
                    'Amount': '9709.49',
                },
                {
                    'Payment Mode': 'Debit Card',
                    'Delivery Date': '11/19/2014',
                    'Amount': '9766.10',
                },
                {
                    'Payment Mode': 'Net Banking',
                    'Delivery Date': '02/08/2014',
                    'Amount': '7685.49',
                },
                {
                    'Payment Mode': 'Debit Card',
                    'Delivery Date': '08/05/2016',
                    'Amount': '18012.45',
                },
                {
                    'Payment Mode': 'Credit Card',
                    'Delivery Date': '05/30/2016',
                    'Amount': '2785.49',
                },
                {
                    'Payment Mode': 'Debit Card',
                    'Delivery Date': '12/10/2016',
                    'Amount': '9967.74',
                },
            ],
            startCell: 'D1',
        };
        spreadsheetRef.current.updateRange(newDataCollection, 0)
    }

    return (
        <div className='control-section spreadsheet-control'>
            <button className="e-btn custom-btn" onClick={updateDataCollection}> Update Dynamic Data </button>
            <SpreadsheetComponent ref={spreadsheetRef} created={created}>
                <SheetsDirective>
                    <SheetDirective>
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
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);