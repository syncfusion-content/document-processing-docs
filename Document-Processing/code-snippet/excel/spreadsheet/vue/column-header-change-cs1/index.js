import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
  <ejs-spreadsheet ref="spreadsheet" :beforeCellRender="beforeCellRender"></ejs-spreadsheet>
`,
  methods: {
    beforeCellRender: function (args) {
      // Condition to check whether the rendered element is header cell.
      if (
        args.colIndex >= 0 &&
        args.colIndex <= 10 &&
        args.element.classList.contains('e-header-cell')
      ) {
        var text = 'custom header ' + args.colIndex.toString();
        // Add the custom text to the innerText of the element.
        args.element.innerText = text;
      }
    }
  }

});
