import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = useRef(null);

  // To create plus icon wrapper.
  const createPlusIconWrapper = () => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'e-custom-wrapper';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  };

  // Triggers after the component is created
  const handleCreated = () => {
    if (!spreadsheetRef.current) return;
    // Initialize icons in the cells when the spreadsheet loads.
    spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'A1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'B1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'C1');
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
              const sheet = spreadsheetRef.current.getActiveSheet();
              spreadsheetRef.current.updateCell({ template: 'plus-icon' }, sheet.activeCell);
              spreadsheetRef.current.resize();
            },
          },
        ],
      },
    ]);
  };

  // Triggers before the cell is appended to DOM
  const handleBeforeCellRender = (args) => {
    if (args.cell && args.cell.template === 'plus-icon') {
      // Pass the rowIndex to the wrapper to make the click handler reliable.
      const wrapperDiv = createPlusIconWrapper();
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);