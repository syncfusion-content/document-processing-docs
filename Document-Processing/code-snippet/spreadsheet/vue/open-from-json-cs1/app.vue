<template>
  <div class="control-pane">
    <div class="control-section spreadsheet-control">
      <div style="margin-bottom: 10px;">
        <button class="e-btn e-primary" @click="handleOpenFromJson">
          Load workbook JSON
        </button>
      </div>

      <div>
        <ejs-spreadsheet ref="spreadsheet" />
      </div>
    </div>
  </div>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";
import { jsonData } from "./datasource";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
  methods: {
    handleOpenFromJson() {
      const spreadsheetObj = this.$refs.spreadsheet;
      if (!spreadsheetObj) return;
      spreadsheetObj.openFromJson({ file: jsonData });
    }
  }
};
</script>

<style></style>