import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
  const spreadsheetRef = useRef<SpreadsheetComponent | null>(null);

  // To create plus icon wrapper.
  const createPlusIconWrapper = (): HTMLElement => {
    const wrapperDiv: HTMLDivElement = document.createElement('div');
    wrapperDiv.className = 'e-custom-wrapper';
    const iconSpan: HTMLSpanElement = document.createElement('span');
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  };

  // Triggers after the component is created
  const handleCreated = (): void => {
    if (!spreadsheetRef.current) return;
    // Initialize icons in the cells when the spreadsheet loads.
    spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, 'A1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, 'B1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, 'C1');
    spreadsheetRef.current.resize();
    // This is to Add a header Ribbon tab with a button to initialize everything on click.
    spreadsheetRef.current.addRibbonTabs([
      {
        header: { text: 'Template' },
        content: [
          {
            text: 'Add Icon',
            tooltipText: 'Initialize',
            click: () => {
              if (!spreadsheetRef.current) return;
              // Add the plus icon template to the selected cell
              const sheet: any = spreadsheetRef.current.getActiveSheet();
              spreadsheetRef.current.updateCell({ template: 'plus-icon' } as any, (sheet as any).activeCell);
              spreadsheetRef.current.resize();
            },
          },
        ],
      },
    ]);
  };

  // Triggers before the cell is appended to DOM
  const handleBeforeCellRender = (args: any) => {
    if (args.cell && args.cell.template === 'plus-icon') {
      // Pass the rowIndex to the wrapper to make the click handler reliable.
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
