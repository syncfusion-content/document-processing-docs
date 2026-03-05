import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import type { SerializationOptions } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent | null>(null);

  const handleSaveAsJson = React.useCallback(async () => {
    if (!spreadsheetRef.current) return;
    try {
      const options: SerializationOptions = {};
      const result: any = await spreadsheetRef.current.saveAsJson(options);
      const jsonObject: any = result && (result as any).jsonObject ? (result as any).jsonObject : result;
      const content: string = typeof jsonObject === 'string' ? jsonObject : JSON.stringify(jsonObject, null, 2);
      const blob: Blob = new Blob([content], { type: 'application/json' });
      const url: string = URL.createObjectURL(blob);
      const a: HTMLAnchorElement = document.createElement('a');
      a.href = url;
      a.download = 'spreadsheet.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e: unknown) {
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);