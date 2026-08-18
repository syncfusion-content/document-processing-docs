import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';

import { chartData } from './datasource';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  const handleCreated = () => {
    const spreadsheet = spreadsheetRef.current;

    // Insert a Column chart based on A1:B6
    spreadsheet.insertChart([{
      type: 'Column',               // Column | Bar | Line | Pie | Doughnut | Area | Scatter ...
      range: 'A1:B6',
      top: 120, left: 20, height: 300, width: 500
    }]);
  };

  const removeById = () => {
    const spreadsheet = spreadsheetRef.current!;
    spreadsheet.deleteChart('e_spreadsheet_chart_5'); // removes the chart with id "salesChart"
  };

  const removeActive = () => {
    const spreadsheet = spreadsheetRef.current!;
    spreadsheet.deleteChart(); // no id → removes the currently selected chart
  };

  return (
  <div>
    <button onClick={removeById} style={{ marginRight: 8 }}>Remove by Id</button>
    <button onClick={removeActive}>Remove Active Chart</button>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);