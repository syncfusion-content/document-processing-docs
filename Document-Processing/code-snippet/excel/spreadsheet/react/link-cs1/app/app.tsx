import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, CellDirective, RowDirective, BeforeHyperlinkArgs } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnsDirective, ColumnDirective, CellsDirective, RowsDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const onBeforeHyperlinkClick = (args: BeforeHyperlinkArgs): void => {
        args.target = '_self'; //change target attribute
    };

    return (
        <SpreadsheetComponent beforeHyperlinkClick={onBeforeHyperlinkClick}>
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
                                <CellDirective value='20' ></CellDirective>
                                <CellDirective value='200' ></CellDirective>
                                <CellDirective value='OUT OF STOCK' ></CellDirective>
                                <CellDirective value='Amazon' hyperlink='https://www.amazon.com/'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Sports Shoes' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                                <CellDirective value='30' ></CellDirective>
                                <CellDirective value='600'></CellDirective>
                                <CellDirective value='IN STOCK' hyperlink='Stock!A2:B2' ></CellDirective>
                                <CellDirective value='Overstack' hyperlink='https://www.overstock.com/'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Formal Shoes' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                                <CellDirective value='15' ></CellDirective>
                                <CellDirective value='300'></CellDirective>
                                <CellDirective value='IN STOCK' hyperlink='Stock!A3:B3' ></CellDirective>
                                <CellDirective value='AliExpress' hyperlink='https://www.aliexpress.com/'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Sandals & Floaters' ></CellDirective>
                                <CellDirective value='15' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                                <CellDirective value='300' ></CellDirective>
                                <CellDirective value='OUT OF STOCK' ></CellDirective>
                                <CellDirective value='AliBaba' hyperlink='https://www.alibaba.com/'></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Flip-Flops & Slippers' ></CellDirective>
                                <CellDirective value='30' ></CellDirective>
                                <CellDirective value='10' ></CellDirective>
                                <CellDirective value='300'></CellDirective>
                                <CellDirective value='IN STOCK' hyperlink='Stock!A4:B4' ></CellDirective>
                                <CellDirective value='Taobao' hyperlink='https://taobao.com/'></CellDirective>
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
                <SheetDirective selectedRange='D13' name='Stock'>
                    <RowsDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Item Name' ></CellDirective>
                                <CellDirective value='Available Count' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Casual Shoes' ></CellDirective>
                                <CellDirective value='10' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Sports Shoes' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Formal Shoes' ></CellDirective>
                                <CellDirective value='20' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Sandals & Floaters' ></CellDirective>
                                <CellDirective value='15' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective value='Flip-Flops & Slippers' ></CellDirective>
                                <CellDirective value='30' ></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                    </RowsDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={115}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);