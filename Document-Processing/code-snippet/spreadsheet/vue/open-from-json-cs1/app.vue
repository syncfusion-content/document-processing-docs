<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent } from '@syncfusion/ej2-vue-spreadsheet';
import { jsonData } from './data.json';

export default {
  name: 'App',
  components: {
    'ejs-spreadsheet': SpreadsheetComponent
  },
  methods: {
    created: function () {
      // Load workbook JSON data into the Spreadsheet using openFromJson.
      this.$refs.spreadsheet.openFromJson({ file: jsonData });
      // Apply additional styling after loading the JSON data.
      this.$refs.spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:D11');
      this.$refs.spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:F11');
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css';
</style>