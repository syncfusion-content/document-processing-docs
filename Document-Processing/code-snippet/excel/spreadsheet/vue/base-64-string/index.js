
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(SpreadsheetPlugin);

var base64String;

new Vue({
  el: '#app',
  template: `<div>
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
`,

  data: () => {
    return {
      dataSource: data,
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    }
  },
  methods: {
    beforeSave: function (args) {
      args.needBlobData = true; // To trigger the saveComplete event.
      args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
    },
    saveComplete: function (args) {
      // Convert blob data to base64 string.
      var reader = new FileReader();
      reader.readAsDataURL(args.blobData);
      reader.onloadend = function () {
        base64String = reader.result;
      };
    },
    importBtn: function () {
      var spreadsheet = this.$refs.spreadsheet;
      fetch(base64String)
        .then((response) => response.blob())
        .then((fileBlob) => {
          var file = new File([fileBlob], 'Sample.xlsx');
          spreadsheet.open({ file: file });
        });
    },
    exportBtn: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.save({
        url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
        fileName: 'Worksheet',
        saveType: 'Xlsx',
      }); // Specifies the save URL, file name, file type need to be saved.
      // Logs base64 string into the console.
      console.log('Base64 String - ', base64String);
    }
  }

});