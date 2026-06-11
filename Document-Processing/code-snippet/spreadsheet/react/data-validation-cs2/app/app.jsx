import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const boldCenter = { fontWeight: 'bold', textAlign: 'center' };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            //Add Custom Data validation to range.
            spreadsheet.addDataValidation({ type: 'Custom', value1: '=AND(B2>10, B2<100)' }, 'E2:E5');
            //Highlight Invalid Data.
            spreadsheet.addInvalidHighlight('E2:E5');
        }
    }, []);

    return (
        <div> <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false}>
            <SheetsDirective>
                <SheetDirective name={'PriceDetails'}>
                    <RowsDirective>
                        <RowDirective index={0}>
                            <CellsDirective>
                                <CellDirective index={0} value={'Seller Name'} style={boldCenter}></CellDirective>
                                <CellDirective index={1} value={'Customer Id'} style={boldCenter}></CellDirective>
                                <CellDirective index={2} value={'Customer Name'} style={boldCenter}></CellDirective>
                                <CellDirective index={3} value={'Product Name'} style={boldCenter}></CellDirective>
                                <CellDirective index={4} value={'Product Price'} style={boldCenter}></CellDirective>
                                <CellDirective index={5} value={'Total Price'} style={boldCenter}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective index={1}>
                            <CellsDirective>
                                <CellDirective index={0} value={'John'}></CellDirective>
                                <CellDirective index={1} value={'101'}></CellDirective>
                                <CellDirective index={2} value={'Nash'}></CellDirective>
                                <CellDirective index={3} value={'Digger'}></CellDirective>
                                <CellDirective index={4} value={'50000'}></CellDirective>
                                <CellDirective index={5} value={'1,45,000.00'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective index={2}>
                            <CellsDirective>
                                <CellDirective index={0} value={'Mike'}></CellDirective>
                                <CellDirective index={1} value={'25'}></CellDirective>
                                <CellDirective index={2} value={'Jim'}></CellDirective>
                                <CellDirective index={3} value={'Cherrypicker'}></CellDirective>
                                <CellDirective index={4} value={'45000'}></CellDirective>
                                <CellDirective index={5} value={'1,45,000.00'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective index={3}>
                            <CellsDirective>
                                <CellDirective index={0} value={'shane'}></CellDirective>
                                <CellDirective index={1} value={'35'}></CellDirective>
                                <CellDirective index={2} value={'Sean'}></CellDirective>
                                <CellDirective index={3} value={'Kango'}></CellDirective>
                                <CellDirective index={4} value={'35000'}></CellDirective>
                                <CellDirective index={5} value={'1,54,500.00'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective index={4}>
                            <CellsDirective>
                                <CellDirective index={0} value={'John'}></CellDirective>
                                <CellDirective index={1} value={'101'}></CellDirective>
                                <CellDirective index={2} value={'Nash'}></CellDirective>
                                <CellDirective index={3} value={'JCB'}></CellDirective>
                                <CellDirective index={4} value={'90000'}></CellDirective>
                                <CellDirective index={5} value={'1,00,095.00'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                    </RowsDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={88}></ColumnDirective>
                        <ColumnDirective width={88}></ColumnDirective>
                        <ColumnDirective width={106}></ColumnDirective>
                        <ColumnDirective width={98}></ColumnDirective>
                        <ColumnDirective width={88}></ColumnDirective>
                        <ColumnDirective width={81}></ColumnDirective>
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