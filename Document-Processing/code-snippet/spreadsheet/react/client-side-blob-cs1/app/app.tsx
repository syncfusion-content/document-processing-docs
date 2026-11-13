import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
    private spreadsheet: SpreadsheetComponent | null = null;

    handleBlobData = (): void => {
        // Example: Creating a Blob from string data (in real scenario, this could be from an API response)
        const excelData = 'UEsDBAoAAAAAALJdHFYAAAAA...'; // Base64 encoded Excel data
        const byteCharacters = atob(excelData);
        const byteNumbers = new Array(byteCharacters.length);
        
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const file = new File([blob], 'Sample.xlsx');
        
        // Open the Blob data as a file in the spreadsheet
        if (this.spreadsheet) {
            this.spreadsheet.open({ file });
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.handleBlobData}>Load Excel from Blob Data</button>
                <SpreadsheetComponent 
                    ref={(scope) => { this.spreadsheet = scope; }}
                    allowOpen={true} />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);