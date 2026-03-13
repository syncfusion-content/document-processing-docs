import * as React from "react";
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-react-spreadsheet";
import { shipmentData } from "./datasource";

function App(): React.ReactElement {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
     const handleCreated = (): void => {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;

        // ----- Apply Header Style -----
        spreadsheet.cellFormat(
            {
                fontWeight: "bold",
                fontSize: "12pt",
                backgroundColor: "#279377",
                color: "#ffffff",
                textAlign: "Center",
                verticalAlign: "Middle",
            },
            "A1:E1"
        );

        // ----- Apply Row Formatting -----
        spreadsheet.cellFormat(
            {
                fontSize: "11pt",
                color: "#333333",
                textAlign: "Left",
                verticalAlign: "Middle",
            },
            "A2:E12"
        );

        // ----- Highlight Score Column -----
        spreadsheet.cellFormat(
            {
                backgroundColor: "#F3F4F6",
                fontWeight: "bold",
            },
            "E2:E12"
        );

        // ----- Add Borders -----
        spreadsheet.cellFormat(
            {
                border: "1px solid #D1D5DB",
            },
            "A1:D5"
        );
    }

    return (
        <div style={{ padding: "20px" }}>
            <SpreadsheetComponent created={handleCreated} ref={spreadsheetRef} showFormulaBar={true}>
                <SheetsDirective>
                    <SheetDirective name="Report">
                        <RangesDirective>
                            <RangeDirective dataSource={shipmentData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                          <ColumnDirective width={120} />
                          <ColumnDirective width={140} />
                          <ColumnDirective width={140} />
                          <ColumnDirective width={160} />
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);