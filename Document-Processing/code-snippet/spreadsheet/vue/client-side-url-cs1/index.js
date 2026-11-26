import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
  el: "#app",
  template: `<div>
    <button type="button" class="custom-btn" @click="openFromUrl">Open from URL</button>
    <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
  </div>`,
  methods: {
    openFromUrl() {
      fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx")
        .then((response) => response.blob())
        .then((fileBlob) => {
          // Convert the fetched Blob data to a File before opening it in the Spreadsheet.
          const file = new File([fileBlob], "Sample.xlsx");
          this.$refs.spreadsheet.open({ file });
        });
    }
  }
});
