import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective} from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef(null);

  const applyBoldToSelection = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    const sheet = spreadsheet.getActiveSheet();
    const range = sheet.selectedRange || sheet.activeCell || 'A1';
    spreadsheet.cellFormat({ fontWeight: 'bold' }, range);
  };

  const highlightSelection = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    const sheet = spreadsheet.getActiveSheet();
    const range = sheet.selectedRange || sheet.activeCell || 'A1';
    spreadsheet.cellFormat({ backgroundColor: '#FFF3CD', color: '#7A5A00' }, range);
    spreadsheet.cellFormat({ border: '1px solid #E0B252' }, range);
  };

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    // Add a custom tab to the Ribbon with custom tools
    spreadsheet.addRibbonTabs([
      {
        header: { text: 'Customize' },
        content: [
          {
            text: 'Bold Selection',
            tooltipText: 'Apply bold to current selection',
            click: () => applyBoldToSelection(),
          },
          {
            text: 'Highlight',
            tooltipText: 'Add highlight fill + border',
            click: () => highlightSelection(),
          },
        ],
      },
    ]);
  };

  return (
    <div>
      <SpreadsheetComponent ref={spreadsheetRef} created={handleCreated}>
          <SheetsDirective>
              <SheetDirective>
                  <RangesDirective>
                      <RangeDirective dataSource={defaultData}></RangeDirective>
                  </RangesDirective>
              </SheetDirective>
          </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);