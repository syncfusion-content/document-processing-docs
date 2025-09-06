import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { getRangeAddress, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const openComplete = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            let sheets = spreadsheet.sheets;
            for (let index = 0; index < sheets.length; index++) {
                let name = spreadsheet.sheets[index].name;
                let protectSetting = { selectCells: true, formatCells: false };
                //To protect the sheet using sheet name
                spreadsheet.protectSheet(name, protectSetting);
                let address = getRangeAddress([0, 0, sheets[index].usedRange.rowIndex, sheets[index].usedRange.colIndex,]);
                //To lock the used range cells
                spreadsheet.lockCells(name + '!' + address, true);
            }
        }
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} openComplete={openComplete}
            openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open" />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);