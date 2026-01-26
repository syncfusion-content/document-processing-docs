import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { print } from '@syncfusion/ej2-base';
import { budgetData, salaryData, printElement } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const items = [
        { text: "Print" },
        { text: "Print All" }
    ];
    let isPrint = false;
    const dataBound = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && isPrint) {
            printElement.querySelector(".e-sheet-content").innerHTML += document.querySelector(".e-sheet-content").outerHTML;
            let usedRange = spreadsheet.getActiveSheet().usedRange;
            let tbody = printElement.querySelector('.e-sheet-content').children[spreadsheet.activeSheetIndex].querySelector('tbody');
            for (let i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
                if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
                    tbody.getElementsByClassName('e-row')[i].remove();
                }
            }
            let sheets = spreadsheet.sheets;
            if (sheets.length - 1 === spreadsheet.activeSheetIndex) {
                let count = printElement.querySelector(".e-sheet-content").childElementCount;
                if (count > 1) {
                    for (let i = 0; i < count; i++) {
                        (printElement.querySelector('.e-sheet-content').children[i].getElementsByClassName('e-virtualtrack')[0]).style.height = 'auto';
                        printElement.querySelector('.e-sheet-content').children[i].setAttribute('style', 'page-break-after: always;')
                    }
                }
                print(printElement);
                isPrint = false;
                printElement.querySelector(".e-sheet-content").innerHTML = '';
            } else {
                if (sheets[spreadsheet.activeSheetIndex + 1]) {
                    spreadsheet.goTo(sheets[spreadsheet.activeSheetIndex + 1].name + "!A1");
                }
            }
        }
    };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
        }
    }, []);
    const itemSelect = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            if (args.item.text === 'Print') {
                printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(".e-sheet-content").outerHTML; //  To add the spreadsheet table
                let usedRange = spreadsheet.getActiveSheet().usedRange;
                let tbody = printElement.querySelector('tbody');
                for (let i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
                    if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
                        tbody.getElementsByClassName('e-row')[i].remove();
                    }
                }
                (printElement.querySelector('.e-sheet-content').children[0].getElementsByClassName('e-virtualtrack')[0]).style.height = 'auto';
                print(printElement);
                printElement.querySelector(".e-sheet-content").innerHTML = '';
            }
            if (args.item.text === 'Print All') {
                let sheets = spreadsheet.sheets;
                if (spreadsheet.activeSheetIndex === 0) {
                    printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(".e-sheet-content").outerHTML; //  To add the spreadsheet table
                    let usedRange = spreadsheet.getActiveSheet().usedRange;
                    let tbody = printElement.querySelector('tbody');
                    for (let i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
                        if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
                            tbody.getElementsByClassName('e-row')[i].remove();
                        }
                    }
                    if (sheets[spreadsheet.activeSheetIndex + 1]) {
                        spreadsheet.goTo(sheets[spreadsheet.activeSheetIndex + 1].name + "!A1");
                        isPrint = true;
                    } else {
                        print(printElement);
                        printElement.querySelector(".e-sheet-content").innerHTML = '';
                    }
                } else {
                    if (sheets[0]) {
                        spreadsheet.goTo(sheets[0].name + "!A1");
                        isPrint = true;
                    }
                }
            }
        }
    };

    return (
        <div>
            <DropDownButtonComponent items={items} select={itemSelect}> Print </DropDownButtonComponent>
            <SpreadsheetComponent ref={spreadsheetRef} dataBound={dataBound} >
                <SheetsDirective>
                    <SheetDirective name={"Budget"}>
                        <RangesDirective>
                            <RangeDirective dataSource={budgetData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name={"Salary"}>
                        <RangesDirective>
                            <RangeDirective dataSource={salaryData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
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