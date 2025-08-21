import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { L10n } from '@syncfusion/ej2-base';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
L10n.load({
    'ar-AE': {
        'spreadsheet': {
            "File": "ملف",
            "Home": "هم",
            "Insert": "إدراج",
            "Formulas": "الصيغ",
            "View": "معاينة",
            "Data": "البيانات",
            "Cut": "قطع",
            "Copy": "نسخ",
            "Paste": "معجون",
            "PasteSpecial": "لصق خاص",
            "All": "جميع",
            "Values": "القيم",
            "Formats": "شكل",
            "Font": "الخط",
            "FontSize": "حجم الخط",
            "Bold": "جريء",
            "Italic": "مائل",
            "Underline": "أكد",
            "Strikethrough": "يتوسطه",
            "TextColor": "لون الخط",
            "FillColor": "لون التعبئة",
            "HorizontalAlignment": "المحاذاة الأفقية",
            "AlignLeft": "محاذاة إلى اليسار",
            "AlignCenter": "مركز",
            "AlignRight": "محاذاة إلى اليمين",
            "VerticalAlignment": "محاذاة عمودية",
            "AlignTop": "محاذاة أعلى",
            "AlignMiddle": "محاذاة الأوسط",
            "AlignBottom": "أسفل محاذاة",
            "InsertFunction": "إدراج وظيفة",
            "Delete": "حذف",
            "Rename": "إعادة تسمية",
            "Hide": "إخفاء",
            "Unhide": "ظهار"
        }
    }
});

function App() {
    return (
        <SpreadsheetComponent locale='ar-AE' enableRtl={true}>
            <SheetsDirective>
                <SheetDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={data}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={100}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={100}></ColumnDirective>
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);