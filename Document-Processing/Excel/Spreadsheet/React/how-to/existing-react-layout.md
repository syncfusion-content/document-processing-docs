--- 
layout: post
title: Integrating Spreadsheet into existing React layouts | Syncfusion
description: Guidance on embedding the Spreadsheet into react layouts using the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Integrating Spreadsheet into Existing React Layouts

## Overview

The React Spreadsheet component can be embedded into dashboards, admin panels, split‑screen views, tabs, dialogs, collapsible/accordion sections, sidebars, and multi‑column layouts. This guide provides concise layout patterns and minimal code examples to ensure the Spreadsheet renders correctly, resizes properly, and refreshes when hosted inside common layout containers.

## How‑To

### Place the Spreadsheet inside basic divs

Insert the Spreadsheet inside a container with a defined height. The Spreadsheet automatically fills the available space within its parent element.

{% tabs %} 
{% highlight ts tabtitle="App.tsx" %} 
import React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {
    return (
        <div style={{ height: '80vh' }}>
            <SpreadsheetComponent height="100%" width="100%" />
        </div>
    );
}
{% endhighlight %} 
{% endtabs %}

### Place the Spreadsheet inside a flex layout

When placing the Spreadsheet inside a flex container, ensure the flex item has min-height: 0 so the component can grow and shrink correctly. The parent container must have a defined height.

{% tabs %} 
{% highlight ts tabtitle="App.tsx" %} 
import React from 'react'; 
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <header style={{ height: '100px', textAlign: 'center' }}>Header Content</header>
            <main style={{ flex: 1, minHeight: 0 }}>
                <div style={{ height: '100%' }}>
                    <SpreadsheetComponent height="100%" width="100%" />
                </div>
            </main>
        </div>
    );
}
{% endhighlight %} 
{% endtabs %}

### Place the Spreadsheet inside a CSS grid

Define explicit row or column sizes using grid-template-rows or grid-template-columns. This ensures the grid cell has a measurable height for the Spreadsheet to render correctly.

{% tabs %} 
{% highlight ts tabtitle="App.tsx" %} 
import React from 'react'; 
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export const App: React.FC = () => {
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

const styles: Record<string, React.CSSProperties> = {
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

{% endhighlight %} 
{% endtabs %}

### Use Spreadsheet inside Tab components

The React Spreadsheet component is supported inside Syncfusion Tab components.

{% tabs %} 
{% highlight ts tabtitle="App.tsx" %}
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-react-navigations';

export default function App() {

    const SpreadsheetTabContent: React.FC = () => {
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
{% endhighlight %}
{% endtabs %}

### Use spreadsheet inside Dialog

If the spreadsheet sits inside a dialog, for example Syncfusion Dialog, render or initialize the spreadsheet after the dialog open events. The DOM must be visible for the spreadsheet to measure layout.

{% tabs %} 
{% highlight ts tabtitle="App.tsx" %} 
import { useRef, useCallback } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import "./App.css"

export default function App() {
    const dialogRef = useRef<DialogComponent | null>(null);
    const openDialog = () => {
        dialogRef.current!.show();
    };
    const closeDialog = () => {
        dialogRef.current!.hide();
    };
    const onDialogOpen = useCallback(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
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
                ref={(dlg: any) => (dialogRef.current = dlg)}
                isModal={true}
                visible={false}
                header="Spreadsheet"
                showCloseIcon={true}
                minHeight="80vh"
                width="80vw"
                height="80vh"
                allowDragging={true}
                closeOnEscape={true}
                target={document.body as any}
                overlayClick={closeDialog}
                open={onDialogOpen}
            >
                <SpreadsheetComponent height="100%" width="100%" />
            </DialogComponent>
        </div>
    );
};
{% endhighlight %}
{% endtabs %}

### Use Spreadsheet inside collapsible sections

For accordions or collapsible containers, you can render the Spreadsheet inside an `AccordionItem`. If the item is rendered while hidden, trigger a resize event when the section becomes active so the component can recalculate its layout.

{% tabs %} 
{% highlight ts tabtitle="App.tsx" %} 
import { useCallback } from 'react';
import {
    AccordionComponent, AccordionItemsDirective, AccordionItemDirective
} from '@syncfusion/ej2-react-navigations';
import type { ExpandEventArgs } from '@syncfusion/ej2-react-navigations';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default function App() {

    const onExpanded = useCallback((args: ExpandEventArgs) => {
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
};
{% endhighlight %}
{% endtabs %}

## See also

- [Overview of Syncfusion React Tab component](https://ej2.syncfusion.com/react/documentation/tab/getting-started)
- [Overview of Syncfusion React Dialog component](https://ej2.syncfusion.com/react/documentation/dialog/getting-started)
- [Overview of Syncfusion React Accordion component](https://ej2.syncfusion.com/react/documentation/accordion/getting-started)
