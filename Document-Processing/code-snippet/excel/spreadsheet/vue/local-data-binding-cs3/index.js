
import Vue from "vue";
import { L10n } from '@syncfusion/ej2-base';
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

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


new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" locale="ar-AE" :enableRtl="true">
   <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: defaultData,
    }
  }

});