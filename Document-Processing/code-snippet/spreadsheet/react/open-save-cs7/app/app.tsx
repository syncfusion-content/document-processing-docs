import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, MenuSelectEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { createElement } from '@syncfusion/ej2-base';
import { defaultData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const fileMenuItemSelect = (args: MenuSelectEventArgs): void => {
    let spreadsheet = spreadsheetRef.current;
    if (args.item.text === 'Microsoft Excel' && spreadsheet) {
      args.cancel = true;
      spreadsheet.saveAsJson().then((response) => {
        let formData: FormData = new FormData();
        formData.append('JSONData', JSON.stringify(response.jsonObject.Workbook));
        formData.append('fileName', 'Sample');
        formData.append('saveType', 'Xlsx');
        formData.append('pdfLayoutSettings', JSON.stringify({ fitSheetOnOnePage: false, orientation: 'Portrait' }));
        fetch(
          'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
          {
            method: 'POST',
            headers: { Authorization: 'YOUR TEXT' },
            body: formData,
            mode: 'no-cors'
          }
        ).then((response) => {
          response.blob().then((data) => {
            let anchor: HTMLElement = createElement('a', {
              attrs: { download: 'Sample.xlsx' },
            });
            const url: string = URL.createObjectURL(data);
            anchor.href = url;
            document.body.appendChild(anchor);
            anchor.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(anchor);
          });
        });
      });
    }
  };

  return (
    <SpreadsheetComponent ref={spreadsheetRef} allowSave={true} fileMenuItemSelect={fileMenuItemSelect}
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save" >
      <SheetsDirective>
        <SheetDirective>
          <RangesDirective>
            <RangeDirective dataSource={defaultData}></RangeDirective>
          </RangesDirective>
          <ColumnsDirective>
            <ColumnDirective width={180}></ColumnDirective>
            <ColumnDirective width={130}></ColumnDirective>
            <ColumnDirective width={130}></ColumnDirective>
          </ColumnsDirective>
        </SheetDirective>
      </SheetsDirective>
    </SpreadsheetComponent>
  );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);