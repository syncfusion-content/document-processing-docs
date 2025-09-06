import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
  const spreadsheetRef = React.useRef(null);
  const uploaderRef = React.useRef(null);
  const asyncSettings = {
    saveUrl:
      'https://services.syncfusion.com/react/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
  };
  const allowedExtensions = '.xlsx, .xls, .csv';
  const onSuccess = (args) => {
    if (args.operation == 'upload')
      spreadsheetRef.current.open({ file: args.file.rawFile });
  };

  return (
    <div>
      <UploaderComponent
        ref={uploaderRef}
        asyncSettings={asyncSettings}
        success={onSuccess}
        allowedExtensions={allowedExtensions}
      ></UploaderComponent>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      />
    </div>
  );
}
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);