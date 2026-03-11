import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);
  const CUSTOM_IDS = {
    quickNote: 'custom_quick_note',
    highlight: 'custom_highlight',
    clear: 'custom_clear',
  };

  const onQuickNote = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    const sheet = spreadsheet.getActiveSheet();
    const range = sheet.selectedRange || sheet.activeCell || 'A1';
    spreadsheet.updateCell({ value: 'Note' }, range);
  };

  const onHighlight = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    const sheet = spreadsheet.getActiveSheet();
    const range = sheet.selectedRange || sheet.activeCell || 'A1';
    spreadsheet.cellFormat({ backgroundColor: '#FFF9C4', color: '#5D4037' }, range);
  };

  const onClear = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    const sheet = spreadsheet.getActiveSheet();
    const range = sheet.selectedRange || sheet.activeCell || 'A1';
    spreadsheet.clear({ type: 'Clear All', range });
  };

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.addToolbarItems('Home', [
      {
        id: CUSTOM_IDS.quickNote,
        text: 'Quick Note',
        tooltipText: 'Insert a short note in the current selection',
        click: onQuickNote,
      },
      {
        id: CUSTOM_IDS.highlight,
        text: 'Highlight',
        tooltipText: 'Highlight the current selection',
        click: onHighlight,
      },
      {
        id: CUSTOM_IDS.clear,
        text: 'Clear',
        tooltipText: 'Clear contents of the current selection',
        click: onClear,
      },
    ]);
  };

  return (
    <div style={{ padding: 12 }}>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
        showFormulaBar={false}
        showSheetTabs={false}
        allowInsert={true}
        allowDelete={true}
        allowMerge={true}
      >
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);