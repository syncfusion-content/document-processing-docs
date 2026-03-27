import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {

return (
        <div style={styles.page}>
            <header style={styles.header}>
                <h3 style={{ margin: 0 }}>Dashboard</h3>
            </header>

            <main style={styles.grid}>
                <aside style={styles.sidebar}>
                    <div style={{ padding: 12 }}>
                        <h4 style={{ marginTop: 0 }}>Filters</h4>
                        <p>Put other controls here</p>
                    </div>
                </aside>

                <section style={styles.viewerArea}>
                    <SpreadsheetComponent height="100%" width="100%" />
                </section>
            </main>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '56px 1fr',
        background: '#fafafa'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        background: '#fff',
        borderBottom: '1px solid #e5e5e5'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: 16,
        padding: 16,
        minHeight: 0 // lets children use available height
    },
    sidebar: {
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        overflow: 'auto'
    },
    viewerArea: {
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        padding: 8,
        display: 'grid',
        gridTemplateRows: '1fr',
        minHeight: 0 // critical so the viewer can grow/shrink
    }
};


export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);