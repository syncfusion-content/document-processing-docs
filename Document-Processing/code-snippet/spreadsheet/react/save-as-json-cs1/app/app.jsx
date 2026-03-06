import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  const [savedJson, setSavedJson] = React.useState(null);

  const handleSaveAsJson = React.useCallback(async () => {
    if (!spreadsheetRef.current) return;
    const options = {};
    const result = await spreadsheetRef.current.saveAsJson(options);
    const jsonObject = result && (result).jsonObject ? (result).jsonObject : result;
    const content = typeof jsonObject === 'string' ? jsonObject : JSON.stringify(jsonObject, null, 2);
    setSavedJson(content);
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

        {savedJson && (
          <div style={{ marginTop: 12 }}>
            <strong>Saved JSON</strong>
            <pre style={{ maxHeight: 200, overflow: 'auto', background: '#f5f5f5', padding: 12 }}>
              {savedJson}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);