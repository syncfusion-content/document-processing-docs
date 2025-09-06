import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { getRangeAddress, ProtectSettingsModel, SheetModel, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const openComplete = (): void => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      let sheets: SheetModel[] = spreadsheet.sheets;
      for (let index: number = 0; index < sheets.length; index++) {
        let name: string = spreadsheet.sheets[index].name as string;
        let protectSetting: ProtectSettingsModel = { selectCells: true, formatCells: false };
        //To protect the sheet using sheet name
        spreadsheet.protectSheet(name, protectSetting);
        let address: string = getRangeAddress([0, 0, sheets[index].usedRange.rowIndex as number, sheets[index].usedRange.colIndex as number,]);
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);