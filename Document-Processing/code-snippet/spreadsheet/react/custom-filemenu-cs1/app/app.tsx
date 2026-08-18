import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  const handleCreated = (): void => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    // Add a single custom item after "Save"
    spreadsheet.addFileMenuItems(
      [
        { text: "Quick Export (.csv)", iconCss: "e-icons e-export" }
      ],
      "Print"
  );
  };

  // Run the action for our custom item
  const handleFileMenuItemSelect = (args: any): void => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    if (args.item.text === 'Quick Export (.csv)') {
      spreadsheet.save({ saveType: 'Csv' });
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
        fileMenuItemSelect={handleFileMenuItemSelect}
        openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
        saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"
      />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);