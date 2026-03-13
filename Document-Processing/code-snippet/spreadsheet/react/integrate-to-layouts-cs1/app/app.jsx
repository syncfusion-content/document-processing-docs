import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  SpreadsheetComponent
} from "@syncfusion/ej2-react-spreadsheet";

function App() {
  const spreadsheetRef = React.useRef(null);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: "240px",
          background: "#1e293b",
          color: "#fff",
          padding: "16px",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Menu</h3>
        <ul style={{ lineHeight: "28px" }}>
          <li>Dashboard</li>
          <li>Reports</li>
          <li>Spreadsheets</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flexGrow: 1, padding: "16px" }}>
        <h2 style={{ marginBottom: "16px" }}>Spreadsheet Area</h2>
        
        <div
          style={{
            height: "calc(100vh - 100px)",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <SpreadsheetComponent
            ref={spreadsheetRef}
            showFormulaBar={true}
            showSheetTabs={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);