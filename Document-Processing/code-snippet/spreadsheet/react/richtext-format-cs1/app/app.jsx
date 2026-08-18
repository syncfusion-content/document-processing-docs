import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const sheets = [
        {
            columns: [{ width: 200 }],
            rows: [
                { cells: [{ value: 'Plain Text' }] },
                {
                    cells: [
                        {
                            value: 'Mineral Water H2O',
                            richText: [
                                { text: 'Mineral Water H' },
                                { text: '2', style: { verticalAlign: 'sub' } },
                                { text: 'O' }
                            ]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            value: 'Energy Supplement C6H12O6',
                            richText: [
                                { text: 'Energy Supplement C' },
                                { text: '6', style: { verticalAlign: 'sub' } },
                                { text: 'H' },
                                { text: '12', style: { verticalAlign: 'sub' } },
                                { text: 'O' },
                                { text: '6', style: { verticalAlign: 'sub' } }
                            ]
                        }
                    ]
                },
                { cells: [{ value: 'H2O' }] },
            ]
        }
    ];
    
    const onCreated = () => {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;
        spreadsheet.updateCell({ richText: [{text: 'H'},{ text: '2', style: { verticalAlign: 'sub' } }, { text: 'O' }
        ] }, 'A4');
        spreadsheet.updateCell({ value: 'X2', richText: [
                { text: 'X' },
                { text: '2', style: { verticalAlign: 'super' } }
            ] }, 'A5');
    };

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