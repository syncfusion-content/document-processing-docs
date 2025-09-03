import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BeforeOpenEventArgs, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const beforeOpen = (args: BeforeOpenEventArgs): void => {
    args.requestData = {
      ...args.requestData,
      headers: { Authorization: 'YOUR TEXT' },
    };
  };

  return (
    <SpreadsheetComponent openUrl="https://services.syncfusion.com/react/production/api/spreadsheet/open" beforeOpen={beforeOpen} />
  );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);