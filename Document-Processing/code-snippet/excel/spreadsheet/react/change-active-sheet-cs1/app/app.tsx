import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const openCompleteHandler = (): void => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      spreadsheet.activeSheetIndex = 2;
    }
  }
  return (
    <SpreadsheetComponent
      openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
      saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
      ref={spreadsheetRef}
      openComplete={openCompleteHandler}
    >
    </SpreadsheetComponent>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);