import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  const onCreated = (): void => {
    // Insert a single image anchored at A1 with initial size
    spreadsheetRef.current.insertImage(
      [
        {
          src: 'https://www.syncfusion.com/products/essential-js2/control/images/spreadsheet/javascript-spreadsheet-cell-format.png',
          width: 480,
          height: 250
        }
      ],
      'A1'
    );
  };

  return (
  <div>
      <SpreadsheetComponent ref={spreadsheetRef} created={onCreated} allowImage={true}>
      </SpreadsheetComponent>
</div>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);