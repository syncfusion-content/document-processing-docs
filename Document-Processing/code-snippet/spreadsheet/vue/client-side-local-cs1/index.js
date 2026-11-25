import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
  el: "#app",
  template: `<div>
    <input type="file" accept=".xlsx,.xls,.csv" class="custom-btn" @change="openFile" />
    <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
  </div>`,
  methods: {
    openFile(event) {
      const file = event.target.files[0];
      if (file) {
        this.$refs.spreadsheet.open({ file });
      }
    }
  }
});
