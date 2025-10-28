import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, SaveCompleteEventArgs, BeforeSaveEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {

  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  
  const beforeSave = (args: BeforeSaveEventArgs): void => {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
  }

  const saveComplete = (args: SaveCompleteEventArgs): void => {
    // To obtain the blob data.
    console.log("Spreadsheet BlobData :", args.blobData)
  }
  
  return (
    <div className='control-section spreadsheet-control'>
        <SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' ref={spreadsheetRef} beforeSave={beforeSave} saveComplete={saveComplete} >
          <SheetsDirective>
            <SheetDirective name="Car Sales Report">
              <RangesDirective>
                <RangeDirective dataSource={data}></RangeDirective>
              </RangesDirective>
              <ColumnsDirective>
                <ColumnDirective width={180}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
                <ColumnDirective width={180}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
                <ColumnDirective width={120}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);