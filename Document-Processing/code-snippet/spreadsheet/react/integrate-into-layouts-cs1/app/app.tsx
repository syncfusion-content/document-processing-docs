import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-react-navigations';

function App(): React.ReactElement {

const SpreadsheetTabContent: any = () => {
    return (
            <div className="spreadsheet-pane">
                <div>
                    <SpreadsheetComponent height="100%" width="100%" />
                </div> 
            </div>
        );
    };

    return (
        <div className="page">
            <header className="header">
                <h3 style={{ margin: 0 }}>Spreadsheet in tab</h3>
            </header>

            <div className="tab-host">
                <TabComponent height="100%">
                    <TabItemsDirective>
                        <TabItemDirective
                            header={{ text: 'Overview' }}
                            content={() => (
                                <div className="panel">
                                    <h4>Overview</h4>
                                    <p>Put general dashboard content here.</p>
                                </div>
                            )}
                        />
                        <TabItemDirective
                            header={{ text: 'Spreadsheet' }}
                            content={SpreadsheetTabContent}
                        />
                        <TabItemDirective
                            header={{ text: 'Settings' }}
                            content={() => (
                                <div className="panel">
                                    <h4>Settings</h4>
                                    <p>Any settings or forms can go here.</p>
                                </div>
                            )}
                        />
                    </TabItemsDirective>
                </TabComponent>
            </div>
        </div>
    );
};

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);