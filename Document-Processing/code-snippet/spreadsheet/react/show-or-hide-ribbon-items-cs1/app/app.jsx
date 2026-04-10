import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  // Items in the Home tab to hide/show (by index)
  // Adjust these indices based on your app's ribbon layout
  const homeItemsToToggle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15];

  const hideInsertTab = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.hideRibbonTabs(['Insert']);
  };

  const showInsertTab = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.hideRibbonTabs(['Insert'], false);
  };

  const hideHomeItems = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.hideToolbarItems('Home', homeItemsToToggle);
  };

  const showHomeItems = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;
    spreadsheet.hideToolbarItems('Home', homeItemsToToggle, false);
  };

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    // Initial state: hide the "Insert" tab and selected "Home" items
    spreadsheet.hideRibbonTabs(['Insert']);
    spreadsheet.hideToolbarItems('Home', homeItemsToToggle);
  };

  return (
    <div style={{ padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={showInsertTab}>Show Insert Tab</button>
        <button onClick={hideInsertTab}>Hide Insert Tab</button>
        <button onClick={showHomeItems}>Show Home Items</button>
        <button onClick={hideHomeItems}>Hide Home Items</button>
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