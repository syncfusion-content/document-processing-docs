import * as React from 'react';
import { useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

function App() {

const dialogRef = useRef(null);
const spreadsheetRef = useRef(null);
const openDialog = () => {
    dialogRef.current.show();
};
const closeDialog = () => {
    dialogRef.current.hide();
};
const onDialogOpen = useCallback(() => {
    setTimeout(() => {
        spreadsheetRef.current.resize();
    }, 0);
}, []);

return (
    <div className="page">
        <header className="header">
            <h3 style={{ margin: 0 }}>Spreadsheet inside Dialog</h3>
            <div style={{ marginLeft: 'auto' }}>
                <button onClick={openDialog}>Open Spreadsheet</button>
            </div>
        </header>
        <DialogComponent
            ref={(dlg) => (dialogRef.current = dlg)}
            isModal={true}
            visible={false}
            header="Spreadsheet"
            showCloseIcon={true}
            minHeight="80vh"
            width="80vw"
            height="80vh"
            allowDragging={true}
            closeOnEscape={true}
            target={document.body}
            overlayClick={closeDialog}
            open={onDialogOpen}
        >
            <SpreadsheetComponent height="100%" width="100%" />
        </DialogComponent>
    </div>
);

}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);