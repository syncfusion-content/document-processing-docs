<template>
  <ejs-spreadsheet ref="spreadsheet" locale="ar-AE" :enableRtl="true">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
import { L10n } from '@syncfusion/ej2-base';
import { SpreadsheetComponent, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';

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

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective
  },
  data: () => {
    return {
      dataSource: defaultData
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
