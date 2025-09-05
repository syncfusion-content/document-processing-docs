import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData, itemData } from './datasource';

function App() {
  const spreadsheetRef = React.useRef(null);
  const dataSourceChanged = (args) => {
    appendElement(`Data source changed with <b>&nbsp;${args.action}</b> action<hr>`);
  };
  const btnClick = () => {
    const spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      spreadsheet.sheets[0].ranges[0].dataSource = itemData;
    }
  };
  const clearBtnClick = () => {
    const eventLog = document.getElementById('EventLog');
    if (eventLog) {
      eventLog.innerHTML = "";
    }
  };
  const appendElement = (html) => {
    const span = document.createElement("span");
    span.innerHTML = html;
    const log = document.getElementById('EventLog');
    if (log) {
      log.insertBefore(span, log.firstChild);
    }
  };

  return (
    <div>
      <div><button id="changeDataBtn" className='e-btn' onClick={btnClick}>Change Datasource</button>
        <SpreadsheetComponent ref={spreadsheetRef} dataSourceChanged={dataSourceChanged}>
          <SheetsDirective>
            <SheetDirective>
              <RangesDirective>
                <RangeDirective dataSource={defaultData}></RangeDirective>
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
      <div>
        <h4><b>Event Trace</b></h4>
        <div id="evt">
          <div>
            <span id="EventLog"></span>
          </div>
          <button id="clearBtn" className='e-btn' onClick={clearBtnClick}>Clear</button>
        </div>
      </div>
    </div>
  );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);