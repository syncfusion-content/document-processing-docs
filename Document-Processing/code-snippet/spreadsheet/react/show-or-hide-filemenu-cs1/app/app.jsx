import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  // Toggle this to control visibility
  const [hideItems, setHideItems] = React.useState(true);

  // File menu items are created dynamically; update visibility here
  const handleFileMenuBeforeOpen = () => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    if (hideItems) {
      spreadsheet.hideFileMenuItems(['Open', 'Save As']);
    } else {
      // Show again (second arg: false)
      spreadsheet.hideFileMenuItems(['Open', 'Save As'], false);
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setHideItems(false)}>Show</button>
        <button onClick={() => setHideItems(true)}>Hide</button>
      </div>

      <SpreadsheetComponent
        ref={spreadsheetRef}
        fileMenuBeforeOpen={handleFileMenuBeforeOpen}
        openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
        saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"
      />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);