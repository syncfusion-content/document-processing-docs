import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { jsonData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef(null);

  const handleOpenFromJson = React.useCallback(() => {
    if (!spreadsheetRef.current) return;
    try {
      spreadsheetRef.current.openFromJson({ file: jsonData });
    } catch (e) {
      console.error('Failed to open from JSON', e);
      alert('Failed to open from JSON.');
    }
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section spreadsheet-control">
        <div style={{ padding: '8px 0' }}>
          <button className="e-btn e-primary" onClick={handleOpenFromJson}>
            Open from JSON
          </button>
        </div>
        <div>
          <SpreadsheetComponent id="spreadsheet" ref={spreadsheetRef} />
        </div>
      </div>
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);