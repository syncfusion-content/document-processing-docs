<template>
  <div>
    <input type="file" accept=".xlsx,.xls,.csv" class="custom-btn" @change="openFile" />
    <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
  methods: {
    openFile(event) {
      const file = event.target.files[0];
      if (file) {
        this.$refs.spreadsheet.open({ file });
      }
    }
  }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';

.custom-btn {
  margin-bottom: 10px;
}
</style>
