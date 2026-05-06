import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  // Toggle this to control "New" item enable/disable by unique ID
  const [disableNew, setDisableNew] = React.useState(true);

  // Enable/disable items when the menu is about to open
  const handleFileMenuBeforeOpen = (): void => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    const newItemId = `${spreadsheet.element.id}_New`;

    // Enable when false, disable when true
    spreadsheet.enableFileMenuItems([newItemId], !disableNew, true);
  };

  return (
    <div style={{ padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => setDisableNew(false)}>Enable New</button>
        <button onClick={() => setDisableNew(true)}>Disable New</button>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);