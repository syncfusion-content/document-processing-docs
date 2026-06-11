import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { L10n, loadCldr, setCurrencyCode, setCulture } from '@syncfusion/ej2-base';
import deDELocalization from './locale.json';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json';
import { data } from './datasource';

L10n.load(deDELocalization);

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  setCulture('de');
  setCurrencyCode('EUR');
  loadCldr(cagregorian, currencies, numbers, timeZoneNames, numberingSystems);

  React.useEffect(() => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:E1');
      spreadsheet.numberFormat(getFormatFromType('Currency'), 'D2:E12');
      spreadsheet.numberFormat(getFormatFromType('Currency'), 'E13:E15');
    }
  }, []);

  return (
    <div>
      <SpreadsheetComponent ref={spreadsheetRef} locale='de' listSeparator=';' showSheetTabs={false} showRibbon={false}>
        <SheetsDirective>
          <SheetDirective selectedRange='E14'>
            <RangesDirective>
              <RangeDirective dataSource={data}></RangeDirective>
            </RangesDirective>
            <RowsDirective>
              <RowDirective index={12}>
                <CellsDirective>
                  <CellDirective index={3} value='Subtotal:'></CellDirective>
                  <CellDirective formula='=SUBTOTAL(9;E2:E12)'></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={3} value='Discount (8,5%):'></CellDirective>
                  <CellDirective formula='=PRODUCT(8,5;E13)/100'></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={3} value='Total Amount:'></CellDirective>
                  <CellDirective formula='=E13-E14'></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <ColumnsDirective>
              <ColumnDirective width={120}></ColumnDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={120}></ColumnDirective>
              <ColumnDirective width={120}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
    )
};
export default App;