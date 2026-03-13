import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

let spreadsheet: Spreadsheet | null = null;

// To create plus icon wrapper.
function createPlusIconWrapper(): HTMLElement {
  const wrapperDiv: HTMLDivElement = document.createElement("div");
  wrapperDiv.className = 'e-custom-wrapper';
  const iconSpan: HTMLSpanElement = document.createElement("span");
  iconSpan.className = 'e-icons e-plus e-custom-icon';
  wrapperDiv.appendChild(iconSpan);
  return wrapperDiv;
}

function handleCreated(): void {
  if (!spreadsheet) return;
  spreadsheet.updateCell({ template: 'plus-icon' } as any, 'A1');
  spreadsheet.updateCell({ template: 'plus-icon' } as any, 'B1');
  spreadsheet.updateCell({ template: 'plus-icon' } as any, 'C1');
  spreadsheet.resize();
  spreadsheet.addRibbonTabs([
    {
      header: { text: 'Template' },
      content: [
        {
          text: 'Add Icon',
          tooltipText: 'Initialize',
          click: () => {
            if (!spreadsheet) return;
            const sheet: any = spreadsheet.getActiveSheet();
            spreadsheet.updateCell(
              { template: 'plus-icon' } as any,
              sheet.activeCell
            );
            spreadsheet.resize();
          },
        },
      ],
    },
  ]);
}

function handleBeforeCellRender(args: any): void {
  if (args.cell && args.cell.template === 'plus-icon') {
    const wrapperDiv: HTMLElement = createPlusIconWrapper();
    args.element.insertBefore(wrapperDiv, args.element.firstChild);
  }
}

spreadsheet = new Spreadsheet({
  created: handleCreated,
  beforeCellRender: handleBeforeCellRender,
});

// Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');
