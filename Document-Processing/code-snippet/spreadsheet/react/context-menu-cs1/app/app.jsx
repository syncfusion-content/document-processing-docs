import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';

function App() {
  const spreadsheetRef = React.useRef(null);

  // Add a custom context menu item right before the menu opens
  const handleContextMenuBeforeOpen = (args) => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    // Only modify the Spreadsheet's own context menu
    if (args.element.id === `${spreadsheet.element.id}_contextmenu`) {
      spreadsheet.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false);  //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
    }
  };

  // Handle clicks on context menu items (including our custom one)
  const handleContextMenuItemSelect = (args) => {
    const spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    switch (args.item.text) {
      case 'Custom Item': {
        // Example action: write a note into the active cell
        const sheet = spreadsheet.getActiveSheet();
        const range = sheet.activeCell || 'A1';
        spreadsheet.updateCell({ value: 'Custom item clicked' }, range);
        break;
      }
      // You can also branch on built‑in items if you want custom behavior for them
      // case 'Paste Special':
      //   // custom logic for Paste Special (optional)
      //   break;
      default:
        break;
    }
  };

  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      contextMenuBeforeOpen={handleContextMenuBeforeOpen}
      contextMenuItemSelect={handleContextMenuItemSelect}
    />
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);