import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  const handleCreated = () => {
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
                spreadsheet.updateCell({ value: 'Custom action executed' }, 'A1');
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);