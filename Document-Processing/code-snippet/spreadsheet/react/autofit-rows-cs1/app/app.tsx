import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  React.useEffect(() => {
    const spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      // AutoFit a single row and a row range in the active sheet.
      spreadsheet.autoFit('1');
      spreadsheet.autoFit('2:5');
      // AutoFit rows on another sheet.
      spreadsheet.autoFit('Sheet2!1:3');
    }
  }, []);

  return (
    <SpreadsheetComponent ref={spreadsheetRef}>
      <SheetsDirective>
        <SheetDirective name="Sheet1">
          <RangesDirective>
            <RangeDirective dataSource={defaultData}></RangeDirective>
          </RangesDirective>
        </SheetDirective>
        <SheetDirective name="Sheet2">
          <RangesDirective>
            <RangeDirective dataSource={defaultData}></RangeDirective>
          </RangesDirective>
        </SheetDirective>
      </SheetsDirective>
    </SpreadsheetComponent>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
