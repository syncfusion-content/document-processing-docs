import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx'); // fetch the remote url
            const fileBlob = await response.blob(); // convert the excel file to blob
            const file = new File([fileBlob], 'Sample.xlsx'); //convert the blob into file
            let spreadsheet = spreadsheetRef.current;
            if (spreadsheet) {
                spreadsheet.open({ file }); // open the file into Spreadsheet
            }
        };
        fetchData();
    }, []);

    return (
        <SpreadsheetComponent ref={spreadsheetRef} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);