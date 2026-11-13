import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
    private spreadsheet: SpreadsheetComponent | null = null;

    onCreated = (): void => {
        // Fetch Excel file from URL and open in spreadsheet
        fetch('https://cdn.syncfusion.com/downloads/spreadsheet/Sample.xlsx')
            .then((response) => response.blob())
            .then((fileBlob) => {
                const file = new File([fileBlob], 'Sample.xlsx');
                if (this.spreadsheet) {
                    this.spreadsheet.open({ file });
                }
            })
            .catch((error) => {
                console.error('Error loading file from URL:', error);
            });
    };

    render() {
        return (
            <SpreadsheetComponent 
                ref={(scope) => { this.spreadsheet = scope; }}
                allowOpen={true}
                created={this.onCreated} />
        );
    }
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);