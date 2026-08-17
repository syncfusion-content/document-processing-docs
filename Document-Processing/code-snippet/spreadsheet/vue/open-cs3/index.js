
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet :openUrl="openUrl" :allowOpen="true" :beforeOpen="beforeOpen"></ejs-spreadsheet>
`,

   data: () => {
    return {
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    }
  },
  methods: {
    created: function () {
        fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx")
      .then((response) => {
        response.blob().then((fileBlob) => {
         const file = new File([fileBlob], "Sample.xlsx");
         this.$refs.spreadsheet.open({ file: file });
        })
      })
    }
  }
  
});