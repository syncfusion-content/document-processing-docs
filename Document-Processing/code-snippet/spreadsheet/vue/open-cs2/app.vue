<template>
  <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :allowOpen="true" :created="created"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

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
    created: function () {
      fetch("https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx") // fetch the remote url
        .then((response) => {
          response.blob().then((fileBlob) => { // convert the excel file to blob
            let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
            this.$refs.spreadsheet.open({ file: file }); // open the file into Spreadsheet
          })
        })
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
