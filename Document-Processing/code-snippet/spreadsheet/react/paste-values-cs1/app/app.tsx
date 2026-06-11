import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { getDefaultData } from './datasource';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent | null>(null);

  const actionBegin = (args: any): void => {
    // If the user is pasting, force paste to values only.
    if (args.action === "clipboard") {
      args.args.eventArgs.type = 'Values';
    }
  };

  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      actionBegin={actionBegin}
      sheets={[
        {
          name: 'Sheet1',
          ranges: [
            {
              dataSource: getDefaultData(),
              startCell: 'A1'
            }
          ]
        }
      ]}
    >
    </SpreadsheetComponent>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);