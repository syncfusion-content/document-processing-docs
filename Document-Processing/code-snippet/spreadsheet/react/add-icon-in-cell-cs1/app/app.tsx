import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

  // To create plus icon wrapper.
  const createPlusIconWrapper = (): HTMLElement => {
    const wrapperDiv: HTMLDivElement = document.createElement("div");
    wrapperDiv.className = 'e-custom-wrapper';
    const iconSpan: HTMLSpanElement = document.createElement("span");
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  };

  const handleCreated = (): void => {
    if (!spreadsheetRef.current) return;
    spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, 'A1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, 'B1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, 'C1');
    spreadsheetRef.current.resize();
    spreadsheetRef.current.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'Add Icon',
            tooltipText: 'Initialize',
            click: () => {
              if (!spreadsheetRef.current) return;
              const sheet: any = spreadsheetRef.current.getActiveSheet();
              spreadsheetRef.current.updateCell(
                { template: 'plus-icon' } as any,
                sheet.activeCell
              );
              spreadsheetRef.current.resize();
            },
          },
        ],
      },
    ]);
  };

  const handleBeforeCellRender = (args: any) => {
    if (args.cell && args.cell.template === 'plus-icon') {
      const wrapperDiv: HTMLElement = createPlusIconWrapper();
      args.element.insertBefore(wrapperDiv, args.element.firstChild);
    }
  };

  return (
    <div>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={handleCreated}
        beforeCellRender={handleBeforeCellRender}
      />
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
