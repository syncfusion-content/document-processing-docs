import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, CellRenderEventArgs } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const beforeCellRenderHandler = (args: CellRenderEventArgs): void => {
    // Condition to check whether the rendered element is header cell.
    if (
      args.colIndex >= 0 &&
      args.colIndex <= 10 &&
      args.element.classList.contains('e-header-cell')
    ) {
      const text = 'custom header ' + args.colIndex.toString();
      // Add the custom text to the innerText of the element.
      args.element.innerText = text;
    }
  }

  return (
    <SpreadsheetComponent ref={spreadsheetRef} beforeCellRender={beforeCellRenderHandler}>
    </SpreadsheetComponent>
  );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);