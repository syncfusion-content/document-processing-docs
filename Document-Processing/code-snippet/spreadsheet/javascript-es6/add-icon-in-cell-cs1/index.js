import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// To create plus icon wrapper.
function createPlusIconWrapper() {
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = 'e-custom-wrapper';
  const iconSpan = document.createElement("span");
  iconSpan.className = 'e-icons e-plus e-custom-icon';
  wrapperDiv.appendChild(iconSpan);
  return wrapperDiv;
}

function handleCreated() {
  if (!spreadsheet) return;
  spreadsheet.updateCell({ template: 'plus-icon' }, 'A1');
  spreadsheet.updateCell({ template: 'plus-icon' }, 'B1');
  spreadsheet.updateCell({ template: 'plus-icon' }, 'C1');
  spreadsheet.resize();
  spreadsheet.addRibbonTabs([
    {
      header: { text: 'Template' },
      content: [
        {
          text: 'Add Icon',
          tooltipText: 'Initialize',
          click: function () {
            if (!spreadsheet) return;
            var sheet = spreadsheet.getActiveSheet();
            spreadsheet.updateCell(
              { template: 'plus-icon' },
              sheet.activeCell
            );
            spreadsheet.resize();
          },
        },
      ],
    },
  ]);
}

function handleBeforeCellRender(args) {
  if (args.cell && args.cell.template === 'plus-icon') {
    const wrapperDiv = createPlusIconWrapper();
    args.element.insertBefore(wrapperDiv, args.element.firstChild);
  }
}

let spreadsheet = new Spreadsheet({
  created: handleCreated,
  beforeCellRender: handleBeforeCellRender,
});

// Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');
