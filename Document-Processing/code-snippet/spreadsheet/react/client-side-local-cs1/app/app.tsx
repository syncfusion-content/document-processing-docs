import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, Uploader } from '@syncfusion/ej2-react-spreadsheet';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
    private spreadsheet: SpreadsheetComponent | null = null;

    onCreated = (): void => {
        // Spreadsheet created event handler
    };
    
    onSuccess = (args: any): void => {
        // Upload complete, open the file in spreadsheet
        if (this.spreadsheet) {
            this.spreadsheet.open({ file: args.file });
        }
    };

    render() {
        return (
            <div>
                {/* File uploader for local file selection */}
                <UploaderComponent 
                    autoUpload={false} 
                    success={this.onSuccess} 
                    allowedExtensions='.xlsx' />
                
                {/* Spreadsheet component with client-side import enabled */}
                <SpreadsheetComponent 
                    ref={(scope) => { this.spreadsheet = scope; }}
                    allowOpen={true}
                    created={this.onCreated} />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);