---
layout: post
title: Ribbon in React PowerPoint Editor | Syncfusion
description: Customize the ribbon in the React PowerPoint Editor, including layouts, the File menu, tabs, groups, items, and enabling or disabling the ribbon.
control: Ribbon
platform: document-processing
documentation: ug
domainurl:
---

# Ribbon in React PowerPoint Editor

The React PowerPoint Editor provides a Ribbon interface similar to Microsoft PowerPoint. Commands are organized into tabs and groups so you can open, export, and print a presentation, inspect the current selection, start a slide show, and change the view.

The ribbon is available when the `Toolbar` module is injected and `enableToolbar` is `true`. By default, `enableToolbar` is `true` and `ribbonLayout` is `Simplified`.

## Enable the ribbon

To enable the ribbon, inject the `Toolbar` module and add the dependent component styles from the **../node_modules/@syncfusion** package folder. Add the style references in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-ribbon/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-pptxeditor/styles/material3.css';
```

The following code shows how to enable the ribbon in the PowerPoint Editor.

```tsx
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { PptxEditorComponent, Toolbar } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar);

function Default() {
    return (
        <div className="control-pane">
            <div className="control-section">
                <PptxEditorComponent
                    id="pptx-editor"
                    enableToolbar={true}
                />
            </div>
        </div>
    );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

Set `enableToolbar` to `false` to remove the ribbon. The `Toolbar` module must stay injected if you turn the ribbon back on later.

## Ribbon layouts

The PowerPoint Editor provides two ribbon layouts:

* **Classic** — A traditional Office-like ribbon with group headers and a larger command layout.
* **Simplified** — A compact ribbon. This is the default.

The following code shows how to configure the Classic ribbon layout.

```tsx
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { PptxEditorComponent, Toolbar } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar);

function Default() {
    return (
        <div className="control-pane">
            <div className="control-section">
                <PptxEditorComponent
                    id="pptx-editor"
                    enableToolbar={true}
                    ribbonLayout="Classic"
                />
            </div>
        </div>
    );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

You can also switch the layout after the component is created:

```tsx
container.current.ribbonLayout = 'Simplified';
container.current.dataBind();
```

## Tab customization

You can show, hide, enable, disable, or add ribbon tabs.

Built-in tabs, in order:

| Tab | ID |
| --- | --- |
| Home | `RibbonTabId.Home` (`pptx-ribbon-tab-home`) |
| Slide Show | `RibbonTabId.SlideShow` (`pptx-ribbon-tab-slideshow`) |
| View | `RibbonTabId.View` (`pptx-ribbon-tab-view`) |

**File** is a menu, not a tab. Tab methods do not apply to it.

### Show or hide a tab

Use `showRibbonTab` and `hideRibbonTab` with a built-in tab ID or a custom tab ID.

```tsx
import { RibbonTabId } from '@syncfusion/ej2-react-pptxeditor';

// Hide the View tab.
container.current.hideRibbonTab(RibbonTabId.View);

// Show the View tab.
container.current.showRibbonTab(RibbonTabId.View);

// Hide a custom tab by its id.
container.current.hideRibbonTab('custom_tab');
```

`disableRibbonTab` keeps the tab header visible but not selectable. `enableRibbonTab` makes it selectable again.

```tsx
container.current.disableRibbonTab(RibbonTabId.SlideShow);
container.current.enableRibbonTab(RibbonTabId.SlideShow);
```

### Add a tab

`addRibbonTab` inserts a `RibbonTabInfo` tab. Pass an existing tab ID as the second argument to insert the new tab before that tab. Omit the second argument to append the tab.

```tsx
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { PptxEditorComponent, Toolbar, RibbonTabId } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar);

function Default() {
    const container = React.useRef<PptxEditorComponent | null>(null);
    React.useEffect(() => {
        const editor = container.current;
        if (!editor) {
            return;
        }
        const ribbonTab = {
            header: 'Custom Tab',
            id: 'custom_tab',
            groups: [
                {
                    id: 'custom_group',
                    header: 'Custom Group',
                    items: [
                        {
                            id: 'custom_new',
                            text: 'About',
                            iconCss: 'e-icons e-circle-info',
                            clicked: () => {
                                editor.openAbout();
                            }
                        }
                    ]
                }
            ]
        };
        // Add the tab at the end of the ribbon.
        editor.addRibbonTab(ribbonTab);

        // Add the tab before the View tab.
        // editor.addRibbonTab(ribbonTab, RibbonTabId.View);
    }, []);
    return (
        <div className="control-pane">
            <div className="control-section">
                <PptxEditorComponent
                    id="pptx-editor"
                    ref={container}
                    enableToolbar={true}
                />
            </div>
        </div>
    );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

Set `visible` to `false` on the tab to add it hidden. Call `showRibbonTab` with the same `id` to show it later.

## Group customization

You can show, hide, enable, disable, or add groups on a tab.

Built-in groups:

| Group | Tab | ID |
| --- | --- | --- |
| Clipboard | Home | `RibbonGroupId.Clipboard` (`pptx-ribbon-group-clipboard`) |
| Font | Home | `RibbonGroupId.Font` (`pptx-ribbon-group-font`) |
| Start Slide Show | Slide Show | `RibbonGroupId.StartSlideShow` (`pptx-ribbon-group-start-slide-show`) |
| Presenter | Slide Show | `RibbonGroupId.Presenter` (`pptx-ribbon-group-presenter`) |
| Show | View | `RibbonGroupId.Show` (`pptx-ribbon-group-show`) |
| Zoom | View | `RibbonGroupId.Zoom` (`pptx-ribbon-group-zoom`) |

### Show or hide a group

Use `showRibbonGroup` and `hideRibbonGroup` with the group ID.

```tsx
import { RibbonGroupId } from '@syncfusion/ej2-react-pptxeditor';

// Hide the Home Font group.
container.current.hideRibbonGroup(RibbonGroupId.Font);

// Show the Home Font group.
container.current.showRibbonGroup(RibbonGroupId.Font);

// Hide a custom group by its id.
container.current.hideRibbonGroup('custom_group');
```

`disableRibbonGroup` and `enableRibbonGroup` leave the group visible and change whether its commands can be used.

```tsx
container.current.disableRibbonGroup(RibbonGroupId.Clipboard);
container.current.enableRibbonGroup(RibbonGroupId.Clipboard);
```

### Add a group

`addRibbonGroup` adds a `RibbonGroupInfo` group to a tab. Pass an existing group ID as the third argument to insert the new group before that group. Omit it to append the group.

```tsx
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { PptxEditorComponent, Toolbar, RibbonTabId, RibbonGroupId } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar);

function Default() {
    const container = React.useRef<PptxEditorComponent | null>(null);
    React.useEffect(() => {
        const editor = container.current;
        if (!editor) {
            return;
        }
        const ribbonGroup = {
            id: 'custom_group',
            header: 'Custom Group',
            items: [
                {
                    id: 'custom_about',
                    text: 'About',
                    iconCss: 'e-icons e-circle-info',
                    clicked: () => {
                        editor.openAbout();
                    }
                }
            ]
        };
        // Add the group at the end of the Home tab.
        editor.addRibbonGroup(RibbonTabId.Home, ribbonGroup);

        // Add the group before the Font group.
        // editor.addRibbonGroup(RibbonTabId.Home, ribbonGroup, RibbonGroupId.Font);
    }, []);
    return (
        <div className="control-pane">
            <div className="control-section">
                <PptxEditorComponent
                    id="pptx-editor"
                    ref={container}
                    enableToolbar={true}
                />
            </div>
        </div>
    );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

Set `visible` to `false` to add the group hidden.

## Item customization

You can show, hide, enable, disable, or add individual items. Use `RibbonItemId` for a built-in command, or the `id` you assigned to a custom item.

| Item | ID |
| --- | --- |
| Open | `RibbonItemId.OpenDevice` |
| Export | `RibbonItemId.Download` |
| Print | `RibbonItemId.PrintAll` |
| Copy | `RibbonItemId.Copy` |
| Font family, Font size | `RibbonItemId.FontFamily`, `RibbonItemId.FontSize` |
| Bold, Italic, Underline, Strikethrough | `RibbonItemId.FontBold`, `RibbonItemId.FontItalic`, `RibbonItemId.FontUnderline`, `RibbonItemId.FontStrikethrough` |
| From Beginning, From Current Slide | `RibbonItemId.StartFromBeginning`, `RibbonItemId.StartFromCurrent` |
| Presenter View | `RibbonItemId.PresenterView` |
| Thumbnails, Notes | `RibbonItemId.ShowThumbnails`, `RibbonItemId.ShowNotes` |
| Zoom, Fit to Window | `RibbonItemId.ZoomDropdown`, `RibbonItemId.FitWindow` |

### Show or hide an item

```tsx
import { RibbonItemId } from '@syncfusion/ej2-react-pptxeditor';

// Hide Copy on the Home tab.
container.current.hideRibbonItem(RibbonItemId.Copy);

// Show Copy.
container.current.showRibbonItem(RibbonItemId.Copy);

// Hide a custom item by its id.
container.current.hideRibbonItem('custom_item');
```

### Enable or disable an item

```tsx
import { RibbonItemId } from '@syncfusion/ej2-react-pptxeditor';

// Disable Copy.
container.current.disableRibbonItem(RibbonItemId.Copy);

// Enable Copy.
container.current.enableRibbonItem(RibbonItemId.Copy);

// Disable a custom item by its id.
container.current.disableRibbonItem('custom_item');
```

Disabling a ribbon item does not change the matching editor property. `disableRibbonItem(RibbonItemId.Download)` disables the Export menu item. Setting `enableDownload` to `false` is the editor-level gate, and the editor reapplies it to Export when that property changes.

### Add an item

`addRibbonItem` adds a button described by `RibbonItemInfo` to a group. Pass an existing item ID as the third argument to insert the new item before that item. Omit it to append the item. The item is added to the group's first collection.

```tsx
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { PptxEditorComponent, Toolbar, RibbonGroupId, RibbonItemId } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar);

function Default() {
    const container = React.useRef<PptxEditorComponent | null>(null);
    React.useEffect(() => {
        const editor = container.current;
        if (!editor) {
            return;
        }
        const ribbonItem = {
            id: 'custom_item',
            text: 'About',
            iconCss: 'e-icons e-circle-info',
            tooltip: 'About this editor',
            clicked: () => {
                editor.openAbout();
            }
        };
        // Add the item at the end of the Home Clipboard group.
        editor.addRibbonItem(RibbonGroupId.Clipboard, ribbonItem);

        // Add the item before Copy.
        // editor.addRibbonItem(RibbonGroupId.Clipboard, ribbonItem, RibbonItemId.Copy);
    }, []);
    return (
        <div className="control-pane">
            <div className="control-section">
                <PptxEditorComponent
                    id="pptx-editor"
                    ref={container}
                    enableToolbar={true}
                />
            </div>
        </div>
    );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

`RibbonItemInfo` fields:

| Field | Description |
| --- | --- |
| `id` | Required. Unique item ID. |
| `text` | Button label. |
| `iconCss` | Icon CSS classes. |
| `tooltip` | Tooltip text. |
| `disabled` | When `true`, the item is added disabled. |
| `visible` | When `false`, the item is added hidden. |
| `clicked` | Click handler. |

Custom items added with this method are buttons. The built-in ribbon uses combo boxes and drop-downs for font and zoom, but those item types are not part of `RibbonItemInfo`.

## Enable or disable the ribbon

The ribbon is rendered only when the `Toolbar` module is injected and `enableToolbar` is `true`. Set `enableToolbar` to `false` and call `dataBind()` to remove it. Set it back to `true` to show it again.

```tsx
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { PptxEditorComponent, Toolbar } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar);

function Default() {
    const container = React.useRef<PptxEditorComponent | null>(null);
    const disableRibbon = () => {
        const editor = container.current;
        if (!editor) return;
        editor.enableToolbar = false;
        editor.dataBind();
    };
    const enableRibbon = () => {
        const editor = container.current;
        if (!editor) return;
        editor.enableToolbar = true;
        editor.dataBind();
    };
    return (
        <div className="control-pane">
            <div className="control-section">
                <button onClick={disableRibbon}>Disable ribbon</button>
                <button onClick={enableRibbon}>Enable ribbon</button>
                <PptxEditorComponent
                    id="pptx-editor"
                    ref={container}
                    enableToolbar={true}
                />
            </div>
        </div>
    );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

While `enableToolbar` is `false`, the ribbon customization methods do nothing. Call them again after the ribbon is enabled.

To keep the ribbon visible and block one tab, group, or command, use `disableRibbonTab`, `disableRibbonGroup`, or `disableRibbonItem`.

## Notes

* Customization methods require the injected `Toolbar` module and `enableToolbar` set to `true`.
* Use the exported ID constants. The PowerPoint Editor ribbon methods take IDs, not tab, group, or item indexes.
* The optional ID passed to `addRibbonTab`, `addRibbonGroup`, and `addRibbonItem` means "insert before this ID".
* Home font controls show the formatting of the selected slide text. They are status indicators, not editing commands.
* The PowerPoint Editor does not provide an API to replace the File menu items or to add a backstage view.
