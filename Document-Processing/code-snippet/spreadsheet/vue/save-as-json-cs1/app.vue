<template>
  <div class="control-pane">
    <div class="control-section spreadsheet-control">
      <div style="margin-bottom: 10px;">
        <button class="e-btn e-primary" @click="handleSaveAsJson">
          Save as JSON
        </button>
      </div>

      <div>
        <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
      </div>

      <div v-if="savedJson">
        <strong>Saved JSON</strong>
        <pre>{{ savedJson }}</pre>
      </div>
    </div>
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
      savedJson: null
    };
  },
  methods: {
    async handleSaveAsJson() {
      const spreadsheet = this.$refs.spreadsheet;
      if (!spreadsheet) return;
      const result = await spreadsheet.saveAsJson();
      const content = JSON.stringify(result.jsonObject, null, 2);
      this.savedJson = content;
    }
  }
};
</script>