import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetModel } from '@syncfusion/ej2-react-spreadsheet';

function App(): React.ReactElement {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const sheets: SheetModel[] = [
        {
            columns: [{ width: 200 }],
            rows: [
                { cells: [{ value: 'Plain Text' }] },
                {
                    cells: [
                        {
                            value: 'Annual Sales Report 2026 (Draft)',
                            richText: [
                                { text: 'Annual Sales Report ', style: { fontWeight: 'bold' } },
                                { text: '2026', style: { color: '#0078D4' } },
                                { text: ' (Draft)', style: { fontStyle: 'italic' } }
                            ]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            value: 'Customer Loyalty Program',
                            richText: [
                                { text: 'Customer Loyalty ', style: { textDecoration: 'underline' } },
                                { text: 'Program', style: { fontFamily: 'Georgia', fontSize: '14pt' } }
                            ]
                        }
                    ]
                },
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
                }
            ]
        }
    ];
    
    const onCreated = (): void => {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;
        spreadsheet.updateCell({
        value: 'Premium Membership valid until 31st Dec 2026',
        richText: [
                { text: 'Premium Membership ', style: { fontWeight: 'bold', color: '#2E7D32' } },
                { text: 'valid until ', style: { fontStyle: 'italic' } },
                { text: '31', style: { textDecoration: 'underline' } },
                { text: 'st', style: { verticalAlign: 'super' } },
                { text: ' Dec 2026' }
            ]
        }, 'A4');
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} sheets={sheets} created={onCreated} >
            </SpreadsheetComponent>
        </div>
    );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);