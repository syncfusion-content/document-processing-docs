import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { jsonData } from './datasource';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent | null>(null);

  const handleOpenFromJson = React.useCallback((): void => {
    if (!spreadsheetRef.current) return;
      spreadsheetRef.current.openFromJson({ file: jsonData });
  }, []);

  return (
    <div className="control-pane">
      <div className="control-section spreadsheet-control">
        <div style={{ padding: '8px 0' }}>
          <button className="e-btn e-primary" onClick={handleOpenFromJson}>
            Load workbook JSON
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