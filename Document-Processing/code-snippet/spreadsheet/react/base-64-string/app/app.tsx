import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, SaveCompleteEventArgs, BeforeSaveEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const [base64String, setBase64String] = React.useState<string>('')
    const beforeSave = (args: BeforeSaveEventArgs): void => {
        args.needBlobData = true; // To trigger the saveComplete event.
        args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
      }
    
    const saveComplete = (args: SaveCompleteEventArgs): void => {
        // Convert blob data to base64 string.
        let reader: FileReader = new FileReader();
        reader.readAsDataURL(args.blobData);
        reader.onloadend = function () {
          setBase64String(reader.result);
        };
      }
    const importBtn = (): void => {
      let spreadsheet: SpreadsheetComponent = spreadsheetRef.current;
        fetch(base64String)
            .then((response) => response.blob())
            .then((fileBlob) => {
                let file: File = new File([fileBlob], 'Sample.xlsx');
                spreadsheet.open({ file: file });
            });
    }
    const exportBtn = (): void => {
      let spreadsheet: SpreadsheetComponent = spreadsheetRef.current;
        spreadsheet.save({
            url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
            fileName: 'Worksheet',
            saveType: 'Xlsx',
          }); // Specifies the save URL, file name, file type need to be saved.
          // Logs base64 string into the console.
          console.log('Base64 String - ', base64String);
    }
  return (
    <div className='control-section spreadsheet-control'>
            <button className="e-btn custom-btn" onClick={importBtn}>Import Base64</button>
            <button className="e-btn custom-btn" onClick={exportBtn}>Export as Base64</button>
                <SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'  ref={spreadsheetRef} beforeSave={beforeSave} saveComplete={saveComplete} >
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