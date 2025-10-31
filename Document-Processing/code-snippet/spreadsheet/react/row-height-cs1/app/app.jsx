import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef(null);
  React.useEffect(() => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      // To change height for single row
      spreadsheet.setRowsHeight(40, ['2']);
      // To change height for multiple rows
      spreadsheet.setRowsHeight(40, ['4:8', '10:12']);
    }
  }, []);

  return (
    <SpreadsheetComponent ref={spreadsheetRef} >
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);