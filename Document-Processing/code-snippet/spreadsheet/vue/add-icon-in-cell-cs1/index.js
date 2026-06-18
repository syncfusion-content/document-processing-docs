import Vue from 'vue';
import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet';

Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-spreadsheet
      ref="spreadsheet"
      :created="onCreated"
      :beforeCellRender="onBeforeCellRender">
    </ejs-spreadsheet>
  `,
  methods: {
    // Creates the wrapper that contains the plus icon
    createPlusIconWrapper() {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.className = 'e-custom-wrapper';
      const iconSpan = document.createElement('span');
      iconSpan.className = 'e-icons e-plus e-custom-icon';
      wrapperDiv.appendChild(iconSpan);
      return wrapperDiv;
    },

    // Syncfusion Spreadsheet 'created' event handler
    onCreated() {
      const spreadsheet = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
      if (!spreadsheet) return;

      // Set the template for A1, B1, C1
      spreadsheet.updateCell({ template: 'plus-icon' }, 'A1');
      spreadsheet.updateCell({ template: 'plus-icon' }, 'B1');
      spreadsheet.updateCell({ template: 'plus-icon' }, 'C1');
      spreadsheet.resize();

      // Add a custom Ribbon tab with a button to insert the icon template in the active cell
      spreadsheet.addRibbonTabs([
        {
          header: { text: 'Template' },
          content: [
            {
              text: 'Add Icon',
              tooltipText: 'Initialize',
              click: () => {
                const ss = this.$refs.spreadsheet && this.$refs.spreadsheet.ej2Instances;
                if (!ss) return;
                const sheet = ss.getActiveSheet();
                ss.updateCell({ template: 'plus-icon' }, sheet.activeCell);
                ss.resize();
              },
            },
          ],
        },
      ]);
    },

    // Syncfusion Spreadsheet 'beforeCellRender' event handler
    onBeforeCellRender(args) {
      if (args.cell && args.cell.template === 'plus-icon') {
        const wrapperDiv = this.createPlusIconWrapper();
        args.element.insertBefore(wrapperDiv, args.element.firstChild);
      }
    },
  },
});