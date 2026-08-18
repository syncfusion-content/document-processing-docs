import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const actionBegin = (args: any) => {
        appendElement(`actionBegin triggered for <b>&nbsp;${args.action}</b> action<hr>`);
        console.log(args);
    }

    const actionComplete = (args: any) => {
        appendElement(`actionComplete triggered for <b>&nbsp;${args.action}</b> action<hr>`);
        console.log(args);
    }

    const clearBtnClick = () => {
        const eventLog = document.getElementById('EventLog');
        if (eventLog) {
            eventLog.innerHTML = "";
        }
    };
    const appendElement = (html: any) => {
        const span = document.createElement("span");
        span.innerHTML = html;
        const log = document.getElementById('EventLog');
        if (log) {
            log.insertBefore(span, log.firstChild);
        }
    };

    return (
        <div>
            <div>
                <SpreadsheetComponent ref={spreadsheetRef} actionBegin={actionBegin} actionComplete={actionComplete}>
                    <SheetsDirective>
                        <SheetDirective>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);