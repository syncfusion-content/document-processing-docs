import { useRef } from 'react';
import { SpreadsheetComponent, getCellIndexes, getCell, setCell } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

function App() {
  let spreadsheet: SpreadsheetComponent | null = null;
  const spreadsheetRef = useRef<SpreadsheetComponent | null>(null);

  const dropDownOptions: number[] = [10, 20, 30, 40, 50, 60];

  const onCreated = (): void => {
    spreadsheet = spreadsheetRef.current;
    if (!spreadsheet) return;

    // Custom template tab to add dropdown to cell.
    spreadsheet.addRibbonTabs([{ header: { text: 'Template' }, content: [{
      text: 'DropDown List', click: () => {
        if (!spreadsheet) return;
        const sheet = spreadsheet.getActiveSheet();
        const [rowIdx, colIdx] = getCellIndexes((sheet as any).activeCell);
        const cellModel = getCell(rowIdx, colIdx, sheet as any);
        const cellEle = spreadsheet.getCell(rowIdx, colIdx);
        if (cellModel && (cellModel as any).template === 'dropdown-list') return;
        addDropDownlist(cellEle as any, dropDownOptions);
      }
    }] }]);

    spreadsheet.setRowsHeight(35, ['1:100']);
    // Rendering dropdown list for a specific range initially.
    const activeSheet = spreadsheet.getActiveSheet();
    for (let colIdx = 0; colIdx <= 3; colIdx++) {
        setCell(0, colIdx, activeSheet as any, { template: 'dropdown-list' } as any, true);
    }
    spreadsheet.resize();
  };

  // Triggers before the cell is appended to the DOM.
  const beforeCellRender = (args: any): void => {
    if (args.rowIndex !== undefined && args.colIndex !== undefined) {
      // To render dropdown if template property 'dropdown-list' is set.
      if (args.cell && args.cell.template === 'dropdown-list') {
        addDropDownlist(args.element as HTMLElement, dropDownOptions);
      }
    }
  };

  // To render the dropdown list.
  const addDropDownlist = (element: HTMLElement, legendOptions: number[]): void => {
    element.innerHTML = '';
    const inputEle = document.createElement('input');
    element.appendChild(inputEle);
    new DropDownList({
      placeholder: 'Select a value',
      dataSource: legendOptions,
      cssClass: 'e-dropdown-list',
    }, inputEle);
  };

  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      created={onCreated}
      beforeCellRender={beforeCellRender}
    />
  );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);