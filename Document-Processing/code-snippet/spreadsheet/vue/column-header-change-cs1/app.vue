<template>
  <ejs-spreadsheet ref="spreadsheet" :beforeCellRender="beforeCellRender"></ejs-spreadsheet>
</template>

<script>

import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
  methods: {
    beforeCellRender: function (args) {
      // Condition to check whether the rendered element is header cell.
      if (
        args.colIndex >= 0 &&
        args.colIndex <= 10 &&
        args.element.classList.contains('e-header-cell')
      ) {
        let text = 'custom header ' + args.colIndex.toString();
        // Add the custom text to the innerText of the element.
        args.element.innerText = text;
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>
