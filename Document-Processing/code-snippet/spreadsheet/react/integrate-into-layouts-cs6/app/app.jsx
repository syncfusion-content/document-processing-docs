import * as React from 'react';
import { useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';

function App() {

    const onExpanded = useCallback((args) => {
      setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
      }, 0);
    }, []);

  return (
      <div className="page">
          <header className="header">
              <h3 style={{ margin: 0 }}>Spreadsheet inside an Accordion</h3>
          </header>
          <main className="content">
              <AccordionComponent
                  expandMode="Single"
                  expanding={onExpanded}
                  expanded={onExpanded}
              >
                  <AccordionItemsDirective>
                      <AccordionItemDirective
                          header="Overview"
                          content={() => (
                              <div className="panel">
                                  <h4>Overview</h4>
                                  <p>Place any introductory content here.</p>
                              </div>
                          )}
                      />
                      <AccordionItemDirective
                          header="Spreadsheet"
                          expanded={true}
                          content={() => (
                              <SpreadsheetComponent height="100%" width="100%" /> 
                          )}
                      />
                      <AccordionItemDirective
                          header="Settings"
                          content={() => (
                              <div className="panel">
                                  <h4>Settings</h4>
                                  <p>Your forms and other controls here.</p>
                              </div>
                          )}
                      />
                  </AccordionItemsDirective>
              </AccordionComponent>
          </main>
      </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);