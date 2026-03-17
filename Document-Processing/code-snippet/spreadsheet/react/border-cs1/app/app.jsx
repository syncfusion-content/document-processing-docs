import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const headerStyle = { fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '2px solid #e0e0e0' };

    const onCreated = () => {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;
        // Apply various borders programmatically to demonstrate types
        // Top border for first column header cells
        spreadsheet.setBorder({ border: '2px dashed #0078d4' }, 'A1', 'Top');
        // Left and Right borders for header row
        spreadsheet.setBorder({ border: '1px solid #333' }, 'A3:D12');
        spreadsheet.setBorder({ borderRight: '1px dotted #d14' }, 'E3:E12');
        // Horizontal borders on a block
        spreadsheet.setBorder({ border: '1px solid #040404' }, 'A5:E12', 'Horizontal');
        // Vertical borders on a block
        spreadsheet.setBorder({ border: '1px solid #888' }, 'B3:B12', 'Vertical');
        // Outside border for a range
        spreadsheet.setBorder({ border: '2px solid #000' }, 'B3:B12', 'Outer');
        // Inside borders for a range
        spreadsheet.setBorder({ border: '1px dotted #6a1b9a' }, 'E4:E12', 'Inside');
    };

    // Define sheet model with per-cell border styles
    const sheets = [
        {
            showGridLines: true,
            rows: [
                { height: 40, cells: [{ colSpan: 5, value: 'Order Summary', style: headerStyle }] },
                {
                    index: 1,
                    cells: [
                        { index: 0, style: { borderLeft: '1px double #0a0', borderBottom: '1px double #0a0' } },
                        { index: 1, style: { borderBottom: '1px double #0a0' } },
                        { index: 2, style: { borderBottom: '1px double #0a0' } },
                        { index: 3, style: { borderBottom: '1px double #0a0' } },
                        { index: 4, style: { borderBottom: '1px double #0a0', borderRight: '1px double #0a0' } }
                    ]
                }
            ],
            ranges: [
                { dataSource: data, startCell: 'A2' }
            ],
            columns: [
                { width: 100 },
                { width: 200 },
                { width: 110 },
                { width: 140 },
                { width: 90 }
            ]
        }
    ];

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} sheets={sheets} showFormulaBar={false} created={onCreated} >
            </SpreadsheetComponent>
        </div>
    );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);