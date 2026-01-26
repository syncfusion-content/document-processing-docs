<template>
  <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :allowOpen="true"
    :openComplete="openComplete"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
  data: () => {
    return {
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    }
  },
  methods: {
    openComplete: function () {
      let spreadsheet = this.$refs.spreadsheet.ej2Instances;
      let sheets = spreadsheet.sheets;
      for (let index = 0; index < sheets.length; index++) {
        let name = spreadsheet.sheets[index].name;
        let protectSetting = {
          selectCells: true,
          formatCells: false,
        };
        //To protect the sheet using sheet name
        spreadsheet.protectSheet(name, protectSetting);
        let address = getRangeAddress([
          0,
          0,
          sheets[index].usedRange.rowIndex,
          sheets[index].usedRange.colIndex,
        ]);
        //To lock the used range cells
        spreadsheet.lockCells(name + '!' + address, true);
      }
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
