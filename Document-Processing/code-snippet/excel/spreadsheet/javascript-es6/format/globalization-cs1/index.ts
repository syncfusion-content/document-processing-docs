import { Spreadsheet, getFormatFromType, configureLocalizedFormat, FormatOption } from '@syncfusion/ej2-spreadsheet';
import { Ajax, enableRipple, setCulture, setCurrencyCode, loadCldr } from '@syncfusion/ej2-base';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

enableRipple(true);

// Loading the culture-related files.
const loadCultureFiles: (locales: string[]) => void = (locales: string[]): void => {
    const files: string[] = ['ca-gregorian', 'numbers', 'timeZoneNames', 'currencies', 'numberingSystems'];
    locales.forEach((locale: string) => {
        for (const fileName of files) {
            const url: string = `./cldr-data/${fileName === 'numberingSystems' ? '' : `${locale}/`}${fileName}.json`;
            const ajax: Ajax = new Ajax(url, 'GET', false);
            ajax.onSuccess = (value: string) => loadCldr(JSON.parse(value));
            ajax.send();
        }
    });
}
loadCultureFiles(['de', 'fr-CH', 'zh']);

// Setting German culture.
setCulture('de');
// Setting currency code for the German culture.
setCurrencyCode('EUR');

const localeFormats: { [key: string]: FormatOption[] } = {
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
configureLocalizedFormat(null, localeFormats['de']);

const spreadsheet: Spreadsheet = new Spreadsheet({
    locale: 'de',
    listSeparator: ';',
    sheets: [{
        ranges: [{ dataSource: data }],
        columns: [{ width: 130 }, { width: 92 }, { width: 96 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }]
    }],
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        applyFormats();
    }
});

spreadsheet.appendTo('#spreadsheet');

// Setting culture-specific number formats for cells.
const applyFormats: Function = (): void => {
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
};

new DropDownList(
    {
        index: 0,
        width: '150px',
        popupHeight: '200px',
        placeholder: 'Select Locale',
        change: (args: ChangeEventArgs): void => {
            const localeOption: string[] = (args.value as string).split(' ');
            // Setting the culture name like 'de', 'fr-CH', 'zh', and 'en-US'.
            const cultureName: string = localeOption[0];
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
    },
    '#locale');
