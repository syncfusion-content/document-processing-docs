import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  const onCreated = (): void => {
    // Insert an image to demonstrate deletion
    spreadsheetRef.current.insertImage(
      [
        {
          src: 'https://www.syncfusion.com/products/essential-js2/control/images/spreadsheet/javascript-spreadsheet-cell-format.png',
          width: 320,
          height: 220
        }
      ],
      'A1'
    );
  };

  const onDeleteById = (): void => {
    // Delete a known image by its overlay id and anchor cell.
    spreadsheetRef.current.deleteImage('spreadsheet_1821633465_0_overlay_picture__5', 'A3');
  };
  

  return (
  <div>
      <button onClick={onDeleteById}>Delete Image by id</button>
      <SpreadsheetComponent ref={spreadsheetRef} created={onCreated} allowImage={true}>
      </SpreadsheetComponent>
  </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);