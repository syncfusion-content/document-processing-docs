import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  const spreadsheetRef = React.useRef(null);

  // To create plus icon wrapper.
  const createPlusIconWrapper = () => {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = 'e-custom-wrapper';
    const iconSpan = document.createElement("span");
    iconSpan.className = 'e-icons e-plus e-custom-icon';
    wrapperDiv.appendChild(iconSpan);
    return wrapperDiv;
  };

  const handleCreated = () => {
    if (!spreadsheetRef.current) return;
    spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'A1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'B1');
    spreadsheetRef.current.updateCell({ template: 'plus-icon' }, 'C1');
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
              const sheet = spreadsheetRef.current.getActiveSheet();
              spreadsheetRef.current.updateCell({ template: 'plus-icon' }, sheet.activeCell);
              spreadsheetRef.current.resize();
            },
          },
        ],
      },
    ]);
  };

  const handleBeforeCellRender = (args) => {
    if (args.cell && args.cell.template === 'plus-icon') {
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