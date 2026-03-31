import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  // Example toolbar item indices inside Home tab to enable/disable
  const homeItemsToToggle = [0, 1, 2, 3, 4, 5];

  const disableInsertTab = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.enableRibbonTabs(['Insert'], false);
  };

  const enableInsertTab = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.enableRibbonTabs(['Insert'], true);
  };

  const disableHomeItems = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.enableToolbarItems('Home', homeItemsToToggle, false);
  };

  const enableHomeItems = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.enableToolbarItems('Home', homeItemsToToggle, true);
  };

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    // Initial example state: disable Insert tab and a few Home items
    spreadsheet.enableRibbonTabs(['Insert'], false);
    spreadsheet.enableToolbarItems('Home', homeItemsToToggle, false);
  };

  return (
    <div style={{ padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={enableInsertTab}>Enable Insert Tab</button>
        <button onClick={disableInsertTab}>Disable Insert Tab</button>
        <button onClick={enableHomeItems}>Enable Home Items</button>
        <button onClick={disableHomeItems}>Disable Home Items</button>
      </div>

      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
      />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
