import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef(null);

  React.useEffect(() => {
    const spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      // AutoFit a single column and a column range in the active sheet.
      spreadsheet.autoFit('A');
      spreadsheet.autoFit('B:D');
      // AutoFit columns on another sheet.
      spreadsheet.autoFit('Sheet2!A:C');
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);
