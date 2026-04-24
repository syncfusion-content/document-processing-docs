import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { chartData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef(null);

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;

    // Insert a Column chart based on A1:B6
    spreadsheet.insertChart([{
      type: 'Column',               // Column | Bar | Line | Pie | Doughnut | Area | Scatter ...
      range: 'A1:B6',
      top: 120, left: 20, height: 300, width: 500
    }]);
    spreadsheet.insertChart([{
      type: 'Pie',
      range: 'A1:B6',
      top: 120, left: 500, height: 300, width: 500
    }]);
    spreadsheet.insertChart([{
      type: 'Area',
      range: 'A1:B6',
      top: 120, left: 1000, height: 300, width: 500
    }]);
  };

  return (
  <div>
      <SpreadsheetComponent ref={spreadsheetRef} created={handleCreated}>
            <SheetsDirective>
                <SheetDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={chartData}></RangeDirective>
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);