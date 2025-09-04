
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<ejs-spreadsheet ref= "spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :openComplete="openComplete"></ejs-spreadsheet>
`,

  data: () => {
    return {
      openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
      saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save'
    }
  },
  methods: {
    openComplete: function () {
      var spreadsheet = this.$refs.spreadsheet;
      if (spreadsheet) {
        spreadsheet.ej2Instances.activeSheetIndex = 2;
      }
    }
  }

});