<template>
  <div>
    <button type="button" class="custom-btn" @click="openFromUrl">Open from URL</button>
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
  data() {
    return {
      fileUrl: "https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx"
    };
  },
  methods: {
    openFromUrl() {
      fetch(this.fileUrl)
        .then((response) => response.blob())
        .then((fileBlob) => {
          // Convert the fetched Blob data to a File before opening it in the Spreadsheet.
          const file = new File([fileBlob], "Sample.xlsx");
          this.$refs.spreadsheet.open({ file });
        });
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
