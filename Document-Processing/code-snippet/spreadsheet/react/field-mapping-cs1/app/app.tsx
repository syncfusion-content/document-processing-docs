import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const data: object[] = [
        {
            "Customer Name": "Romona Heaslip",
            "Model": "Taurus",
            "Color": "Aquamarine",
            "Payment Mode": "Debit Card",
            "Delivery Date": "07/11/2015",
            "Amount": "8529.22"
        },
        {
            "Customer Name": "Clare Batterton",
            "Model": "Sparrow",
            "Color": "Pink",
            "Payment Mode": "Cash On Delivery",
            "Delivery Date": "7/13/2016",
            "Amount": "17866.19"
        },
        {
            "Customer Name": "Eamon Traise",
            "Model": "Grand Cherokee",
            "Color": "Blue",
            "Payment Mode": "Net Banking",
            "Delivery Date": "09/04/2015",
            "Amount": "13853.09"
        },
        {
            "Customer Name": "Julius Gorner",
            "Model": "GTO",
            "Color": "Aquamarine",
            "Payment Mode": "Credit Card",
            "Delivery Date": "12/15/2017",
            "Amount": "2338.74"
        },
        {
            "Customer Name": "Jenna Schoolfield",
            "Model": "LX",
            "Color": "Yellow",
            "Payment Mode": "Credit Card",
            "Delivery Date": "10/08/2014",
            "Amount": "9578.45"
        },
        {
            "Customer Name": "Marylynne Harring",
            "Model": "Catera",
            "Color": "Green",
            "Payment Mode": "Cash On Delivery",
            "Delivery Date": "7/01/2017",
            "Amount": "19141.62"
        },
        {
            "Customer Name": "Vilhelmina Leipelt",
            "Model": "7 Series",
            "Color": "Goldenrod",
            "Payment Mode": "Credit Card",
            "Delivery Date": "12/20/2015",
            "Amount": "6543.30"
        },
        {
            "Customer Name": "Barby Heisler",
            "Model": "Corvette",
            "Color": "Red",
            "Payment Mode": "Credit Card",
            "Delivery Date": "11/24/2014",
            "Amount": "13035.06"
        }
    ];
    const fieldsOrder: string[] = ['Customer Name', 'Payment Mode', 'Model', 'Color', 'Amount', 'Delivery Date'];
    return (
        <SpreadsheetComponent>
            <SheetsDirective>
                <SheetDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={data} fieldsOrder={fieldsOrder}></RangeDirective>
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