import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  const handleCreated = (): void => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    spreadsheet.addRibbonTabs(
      [
        {
          header: { text: 'Custom tab' },
          content: [
            {
              text: 'Custom',
              tooltipText: 'Custom Btn',
              cssClass: 'e-custom-btn',
              click: () => {
                // Your custom action here
                spreadsheet.updateCell({ value: 'Custom action executed' } as any, 'A1');
              }
            }
          ]
        }
      ]
    );
  };

  return (
    <div style={{ padding: 10 }}>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
        showFormulaBar={true}
        showSheetTabs={true}
      />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);