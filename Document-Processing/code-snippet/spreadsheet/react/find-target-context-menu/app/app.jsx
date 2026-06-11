import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { closest } from '@syncfusion/ej2-base';

function App() {
  const contextMenuBeforeOpen = (args) => {
    if (closest(args.event.target, '.e-sheet-content')) {
      console.log('Cell Context Menu');
    } else if (closest(args.event.target, '.e-colhdr-table')) {
      console.log('Column Header Context Menu');
    } else if (closest(args.event.target, '.e-rowhdr-table')) {
      console.log('Row Header Context Menu');
    } else if (closest(args.event.target, '.e-toolbar-item')) {
      console.log('Footer Context Menu');
    }
  }
  return (
    <SpreadsheetComponent
      contextMenuBeforeOpen={contextMenuBeforeOpen}
    > </SpreadsheetComponent>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);