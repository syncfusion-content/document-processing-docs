import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, CellsDirective, RowDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent>
            <SheetsDirective>
                <SheetDirective selectedRange='D13' name='PriceDetails'>
                    <RowsDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Item Name' ></CellDirective>
                                <CellDirective value='Quantity' ></CellDirective>
                                <CellDirective value='Price' ></CellDirective>
                                <CellDirective value='Amount' ></CellDirective>
                                <CellDirective value='Stock Detail' ></CellDirective>
                                <CellDirective value='Website' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Casual Shoes' ></CellDirective>
                                <CellDirective value='10' ></CellDirective>
                                <CellDirective value='$20' ></CellDirective>
                                <CellDirective value='$200' ></CellDirective>
                                <CellDirective value='OUT OF STOCK' ></CellDirective>
                                <CellDirective value='Amazon'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Sports Shoes' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                                <CellDirective value='$30' ></CellDirective>
                                <CellDirective value='$600'></CellDirective>
                                <CellDirective value='IN STOCK'></CellDirective>
                                <CellDirective value='Overstack'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Formal Shoes' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                                <CellDirective value='$15' ></CellDirective>
                                <CellDirective value='$300'></CellDirective>
                                <CellDirective value='IN STOCK'></CellDirective>
                                <CellDirective value='AliExpress'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Sandals & Floaters' ></CellDirective>
                                <CellDirective value='15' ></CellDirective>
                                <CellDirective value='$20' ></CellDirective>
                                <CellDirective value='$300' ></CellDirective>
                                <CellDirective value='OUT OF STOCK' ></CellDirective>
                                <CellDirective value='AliBaba'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Flip-Flops & Slippers' ></CellDirective>
                                <CellDirective value='30' ></CellDirective>
                                <CellDirective value='$10' ></CellDirective>
                                <CellDirective value='$300'></CellDirective>
                                <CellDirective value='IN STOCK' ></CellDirective>
                                <CellDirective value='Taobao'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                    </RowsDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={115}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={100}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={100}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);