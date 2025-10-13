import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, getFormatFromType, configureLocalizedFormat } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { loadCldr, setCurrencyCode, setCulture, Ajax } from '@syncfusion/ej2-base';
import { data } from './datasource';

function App() {

  const spreadsheetRef = React.useRef(null);
  // Loading the culture-related files.
  const loadCultureFiles = (locales) => {
    const files = ['ca-gregorian', 'numbers', 'timeZoneNames', 'currencies', 'numberingSystems'];
    locales.forEach((locale) => {
      for (const fileName of files) {
        const url = `./cldr-data/${fileName === 'numberingSystems' ? '' : `${locale}/`}${fileName}.json`;
        const ajax = new Ajax(url, 'GET', false);
        ajax.onSuccess = (value) => loadCldr(JSON.parse(value));
        ajax.send();
      }
    });
  }

  loadCultureFiles(['de', 'fr-CH', 'zh']);
  // Setting German culture.
  setCulture('de');
  // Setting currency code for the German culture.
  setCurrencyCode('EUR');

  const localeFormats = {
    'de': [{ id: 37, code: '#,##0;-#,##0' }, { id: 38, code: '#,##0;[Red]-#,##0' },
    { id: 39, code: '#,##0.00;-#,##0.00' }, { id: 40, code: '#,##0.00;[Red]-#,##0.00' }, { id: 5, code: '#,##0 "€";-#,##0 "€"' },
    { id: 6, code: '#,##0 "€";[Red]-#,##0 "€"' }, { id: 7, code: '#,##0.00 "€";-#,##0.00 "€"' },
    { id: 8, code: '#,##0.00 "€";[Red]-#,##0.00 "€"' }, { id: 41, code: '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-' },
    { id: 42, code: '_-* #,##0 "€"_-;-* #,##0 "€"_-;_-* "-" "€"_-;_-@_-' },
    { id: 43, code: '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"??_-;_-@_-' },
    { id: 44, code: '_-* #,##0.00 "€"_-;-* #,##0.00 "€"_-;_-* "-"?? "€"_-;_-@_-' },
    { id: 14, code: 'dd.MM.yyyy' }, { id: 15, code: 'dd. MMM yy' }, { id: 16, code: 'dd. MMM' }, { id: 17, code: 'MMM yy' },
    { id: 20, code: 'hh:mm' }, { id: 21, code: 'hh:mm:ss' }, { id: 22, code: 'dd.MM.yyyy hh:mm' }],
    'zh': [{ id: 37, code: '#,##0;-#,##0' }, { id: 38, code: '#,##0;[Red]-#,##0' }, { id: 39, code: '#,##0.00;-#,##0.00' },
    { id: 40, code: '#,##0.00;[Red]-#,##0.00' }, { id: 5, code: '"¥"#,##0;"¥"-#,##0' }, { id: 6, code: '"¥"#,##0;[Red]"¥"-#,##0' },
    { id: 7, code: '"¥"#,##0.00;"¥"-#,##0.00' }, { id: 8, code: '"¥"#,##0.00;[Red]"¥"-#,##0.00' },
    { id: 41, code: '_ * #,##0_ ;_ * -#,##0_ ;_ * "-"_ ;_ @_' }, { id: 42, code: '_ "¥"* #,##0_ ;_ "¥"* -#,##0_ ;_ "¥"* "-"_ ;_ @_' },
    { id: 43, code: '_ * #,##0.00_ ;_ * -#,##0.00_ ;_ * "-"??_ ;_ @_' },
    { id: 44, code: '_ "¥"* #,##0.00_ ;_ "¥"* -#,##0.00_ ;_ "¥"* "-"??_ ;_ @_' },
    { id: 14, code: 'yyyy/m/d' }, { id: 22, code: 'yyyy/m/d h:mm' }],
    'fr-CH': [{ id: 37, code: '#,##0;-#,##0' }, { id: 38, code: '#,##0;[Red]-#,##0' }, { id: 39, code: '#,##0.00;-#,##0.00' },
    { id: 40, code: '#,##0.00;[Red]-#,##0.00' }, { id: 5, code: '#,##0 "CHF";-#,##0 "CHF"' },
    { id: 6, code: '#,##0 "CHF";[Red]-#,##0 "CHF"' }, { id: 7, code: '#,##0.00 "CHF";-#,##0.00 "CHF"' },
    { id: 8, code: '#,##0.00 "CHF";[Red]-#,##0.00 "CHF"' }, { id: 14, code: 'dd.MM.yyyy' }, { id: 15, code: 'dd.MMM.yy' },
    { id: 16, code: 'dd.MMM' }, { id: 17, code: 'MMM.yy' }, { id: 20, code: 'HH:mm' }, { id: 21, code: 'HH:mm:ss' },
    { id: 22, code: 'dd.MM.yyyy HH:mm' }, { id: 42, code: '_-* #,##0 "CHF"_-;-* #,##0 "CHF"_-;_-* "-" "CHF"_-;_-@_-' },
    { id: 44, code: '_-* #,##0.00 "CHF"_-;-* #,##0.00 "CHF"_-;_-* "-"?? "CHF"_-;_-@_-' },
    { id: 41, code: '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-' }, { id: 43, code: '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"??_-;_-@_-' }
    ],
    'en-US': []
  };

  // Mapping default number formats for the German ('de') locale before the spreadsheet is created.
  // We can also map the formats after the spreadsheet is created in the created event.
  configureLocalizedFormat(spreadsheetRef.current, localeFormats['de']);

  const cultureList = [
    { Culture: 'German - Germany', localeOption: 'de EUR ;' },
    { Culture: 'French - Switzerland', localeOption: 'fr-CH CHF ;' },
    { Culture: 'Chinese - China', localeOption: 'zh CNY ,' },
    { Culture: 'English', localeOption: 'en-US USD ,' }
  ];

  const placeholder = 'Select a locale';
  // maps the appropriate column to fields property
  const fields = { text: 'Culture', value: 'localeOption' };

  const change = (args) => {
    const spreadsheet = spreadsheetRef.current;
    const localeOption = (args.value).split(' ');
    // Setting the culture name like 'de', 'fr-CH', 'zh', and 'en-US'.
    const cultureName = localeOption[0];
    setCulture(cultureName);
    // Setting the currency code for the selected locale like 'EUR', 'CNY', 'CHF', and 'USD'.
    setCurrencyCode(localeOption[1]);
    // Mapping the default number format codes for the selected locale.
    configureLocalizedFormat(spreadsheet, localeFormats[cultureName]);
    // Setting the culture for the spreadsheet.
    spreadsheet.locale = cultureName;
    // Setting the list separator for the selected locale.
    spreadsheet.listSeparator = localeOption[2];
    // Refreshing the changes immediately in the spreadsheet.
    spreadsheet.dataBind();
    applyFormats();
  }

  const applyFormats = () => {
    const spreadsheet = spreadsheetRef.current;
    // Apply format to the specified range in the active sheet.
    // The getFormatFromType method returns the culture-based format code based on the mapped formats.
    // If a format ID is not mapped or is not applicable, it will return the format code based on the loaded culture.
    // For 'en-US' (English) culture, the format code will be 'm/d/yyyy'.
    // For 'de' (German) culture, the format code will be 'dd.MM.yyyy'.
    // For 'fr-CH' (French-Switzerland) culture, the format code will be 'dd.MM.yyyy'.
    // For 'zh' (Chinese) culture, the format code will be 'yyyy/m/d'.
    spreadsheet.numberFormat(getFormatFromType('ShortDate'), 'B2:B11');
    // For 'en-US' (English) culture, the format code will be 'h:mm:ss AM/PM'.
    // For 'de' (German) culture, the format code will be 'HH:mm:ss'.
    // For 'fr-CH' (French-Switzerland) culture, the format code will be 'HH:mm:ss'.
    // For 'zh' (Chinese) culture, the format code will be 'h:mm:ss AM/PM'.
    spreadsheet.numberFormat(getFormatFromType('Time'), 'C2:C11');
    // For 'en-US' (English) culture, the format code will be '$#,##0.00'.
    // For 'de' (German) culture, the format code will be '#,##0.00 "€"'.
    // For 'fr-CH' (French-Switzerland) culture, the format code will be '#,##0.00 "CHF"'.
    // For 'zh' (Chinese) culture, the format code will be '"¥"#,##0.00'.
    spreadsheet.numberFormat(getFormatFromType('Currency'), 'E2:F11');
    // For 'en-US' (English) culture, the format code will be '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'.
    // For 'de' (German) culture, the format code will be '_-* #,##0.00 "€"_-;-* #,##0.00 "€"_-;_-* "-"?? "€"_-;_-@_-'.
    // For 'fr-CH' (French-Switzerland) culture, the format code will be '_-* #,##0.00 "CHF"_-;-* #,##0.00 "CHF"_-;_-* "-"?? "CHF"_-;_-@_-'
    // For 'zh' (Chinese) culture, the format code will be '_ "¥"* #,##0.00_ ;_ "¥"* -#,##0.00_ ;_ "¥"* "-"??_ ;_ @_'
    spreadsheet.numberFormat(getFormatFromType('Accounting'), 'H2:H11');
    // The percentage format code will be '0.00%' for all the cultures.
    spreadsheet.numberFormat('0.00%', 'G2:G11');
  }

  const created = () => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:H1');
      applyFormats();
    }
  };

  return (
    <div>
      <DropDownListComponent id="ddlelement" dataSource={cultureList} fields={fields} placeholder={placeholder} change={change} />
      <SpreadsheetComponent ref={spreadsheetRef} locale='de' listSeparator=';' created={created}>
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={data}></RangeDirective>
            </RangesDirective>
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