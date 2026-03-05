import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  const handleSaveAsJson = React.useCallback(async () => {
    if (!spreadsheetRef.current) return;
    try {
      const options = {};
      const result = await spreadsheetRef.current.saveAsJson(options);
      const jsonObject = result && result.jsonObject ? result.jsonObject : result;
      const content = typeof jsonObject === 'string' ? jsonObject : JSON.stringify(jsonObject, null, 2);
      const blob = new Blob([content], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'spreadsheet.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Failed to save as JSON', e);
      alert('Failed to save as JSON.');
    }
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section spreadsheet-control">
        <div style={{ padding: '8px 0' }}>
          <button className="e-btn e-primary" onClick={handleSaveAsJson}>
            Save as JSON
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