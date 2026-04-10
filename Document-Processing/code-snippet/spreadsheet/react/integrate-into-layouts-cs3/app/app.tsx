import * as React from 'react';
import { useCallback, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective, ExpandEventArgs } from '@syncfusion/ej2-react-navigations';

function App(): React.ReactElement {
        const spreadsheetRef = useRef<SpreadsheetComponent | null>(null);
        const onExpanded = useCallback((args: ExpandEventArgs) => {
              setTimeout(() => {
                  window.dispatchEvent(new Event('resize'));
                  (spreadsheetRef.current as any).refresh();
              }, 0);
        }, []);

        const spreadsheetContent = () => (
            <div className="sheet-pane">
                <SpreadsheetComponent
                    ref={(spreadsheet: any) => (spreadsheetRef.current = spreadsheet)}
                    id="spreadsheetInAccordion"
                    height="100%"
                    width="100%"
                />
            </div>
        );

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
                          content={spreadsheetContent}
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);