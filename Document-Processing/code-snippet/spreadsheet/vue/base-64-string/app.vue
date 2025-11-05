<template>
  <div>
    <ejs-button class="e-btn custom-btn" v-on:click.native="importBtn">Import Base64</ejs-button>
    <ejs-button class="e-btn custom-btn" v-on:click.native="exportBtn">Export as Base64</ejs-button>
    <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :beforeSave="beforeSave" :saveComplete="saveComplete">
      <e-sheets>
        <e-sheet name="Car Sales Report">
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width=180></e-column>
            <e-column :width=130></e-column>
            <e-column :width=130></e-column>
            <e-column :width=180></e-column>
            <e-column :width=120></e-column>
            <e-column :width=130></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

let base64String;
export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      dataSource: data,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
    }
  },
  methods: {
    beforeSave: function (args) {
      args.needBlobData = true; // To trigger the saveComplete event.
      args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
    },
    saveComplete: function (args) {
      // Convert blob data to base64 string.
      let reader = new FileReader();
      reader.readAsDataURL(args.blobData);
      reader.onloadend = function () {
        base64String = reader.result;
      };
    },
    importBtn: function () {
      let spreadsheet = this.$refs.spreadsheet;
      fetch(base64String)
        .then((response) => response.blob())
        .then((fileBlob) => {
          let file = new File([fileBlob], 'Sample.xlsx');
          spreadsheet.open({ file: file });
        });
    },
    exportBtn: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.save({
        url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
        fileName: 'Worksheet',
        saveType: 'Xlsx',
      }); // Specifies the save URL, file name, file type need to be saved.
      // Logs base64 string into the console.
      console.log('Base64 String - ', base64String);
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

.custom-btn {
  margin-bottom: 10px;
}
</style>
