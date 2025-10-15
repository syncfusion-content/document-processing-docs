import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  React.useEffect(() => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      // To change width of single column
      spreadsheet.setColumnsWidth(100, ['F']);
      // To change width of multiple columns
      spreadsheet.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
    }
  }, []);

  return (
    <SpreadsheetComponent ref={spreadsheetRef}>
      <SheetsDirective>
        <SheetDirective>
          <RangesDirective>
            <RangeDirective dataSource={defaultData}></RangeDirective>
          </RangesDirective>
        </SheetDirective>
      </SheetsDirective>
    </SpreadsheetComponent>
  );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);