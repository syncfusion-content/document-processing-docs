---
layout: post
title: Ribbon in Angular PPTX Editor | Syncfusion
description: Customize the ribbon in the Angular PPTX Editor, including layouts, tabs, groups, items, and enabling or disabling the ribbon.
control: Ribbon
platform: document-processing
documentation: ug
domainurl:
---

# Ribbon in Angular PPTX Editor

The Angular PPTX Editor provides a Ribbon interface similar to Microsoft PowerPoint. Commands are organized into tabs and groups so you can open, export, and print a presentation, inspect the current selection, start a slide show, and change the view.

The ribbon is available when the `ToolbarService` is provided and `enableToolbar` is `true`. By default, `enableToolbar` is `true` and `ribbonLayout` is `Simplified`.

## Enable the ribbon

To enable the ribbon, provide `ToolbarService` and add the dependent component styles from the **../node_modules/@syncfusion** package folder. Add the style references in [src/styles.css] using the following code.

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

The following code shows how to enable the ribbon in the PPTX Editor.

```typescript
/**
 * Add the following code in the app.html file.
 */
<ejs-pptxeditor #pptxeditor id="pptx-editor" [enableToolbar]="true"></ejs-pptxeditor>

/**
 * Add the following code in the app.ts file.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { PptxEditorModule, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class AppComponent {
}
```

Set `enableToolbar` to `false` to remove the ribbon. `ToolbarService` must stay in `providers` if you turn the ribbon back on later.

## Ribbon layouts

The PPTX Editor provides two ribbon layouts:

* **Classic** — A traditional Office-like ribbon with group headers and a larger command layout.
* **Simplified** — A compact ribbon. This is the default.

The following code shows how to configure the Classic ribbon layout.

```typescript
/**
 * Add the following code in the app.html file.
 */
<ejs-pptxeditor #pptxeditor id="pptx-editor" [enableToolbar]="true" ribbonLayout="Classic"></ejs-pptxeditor>

/**
 * Add the following code in the app.ts file.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { PptxEditorModule, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class AppComponent {
}
```

You can also switch the layout after the component is created:

```typescript
this.container.ribbonLayout = 'Simplified';
this.container.dataBind();
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

```typescript
import { RibbonTabId } from '@syncfusion/ej2-angular-pptxeditor';

// Hide the View tab.
this.container.hideRibbonTab(RibbonTabId.View);

// Show the View tab.
this.container.showRibbonTab(RibbonTabId.View);

// Hide a custom tab by its id.
this.container.hideRibbonTab('custom_tab');
```

`disableRibbonTab` keeps the tab header visible but not selectable. `enableRibbonTab` makes it selectable again.

```typescript
this.container.disableRibbonTab(RibbonTabId.SlideShow);
this.container.enableRibbonTab(RibbonTabId.SlideShow);
```

### Add a tab

`addRibbonTab` inserts a `RibbonTabInfo` tab. Pass an existing tab ID as the second argument to insert the new tab before that tab. Omit the second argument to append the tab. Call it from the `created` event so the ribbon is initialized.

```typescript
/**
 * Add the following code in the app.html file.
 */
<ejs-pptxeditor #pptxeditor id="pptx-editor" [enableToolbar]="true" (created)="onCreated()"></ejs-pptxeditor>

/**
 * Add the following code in the app.ts file.
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PptxEditorComponent, PptxEditorModule, RibbonTabId, RibbonTabInfo, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class AppComponent {
    @ViewChild('pptxeditor')
    public container: PptxEditorComponent;

    public onCreated(): void {
        const ribbonTab: RibbonTabInfo = {
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
                            clicked: (): void => {
                                this.container.openAbout();
                            }
                        }
                    ]
                }
            ]
        };
        // Add the tab at the end of the ribbon.
        this.container.addRibbonTab(ribbonTab);

        // Add the tab before the View tab.
        // this.container.addRibbonTab(ribbonTab, RibbonTabId.View);
    }
}
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

```typescript
import { RibbonGroupId } from '@syncfusion/ej2-angular-pptxeditor';

// Hide the Home Font group.
this.container.hideRibbonGroup(RibbonGroupId.Font);

// Show the Home Font group.
this.container.showRibbonGroup(RibbonGroupId.Font);

// Hide a custom group by its id.
this.container.hideRibbonGroup('custom_group');
```

`disableRibbonGroup` and `enableRibbonGroup` leave the group visible and change whether its commands can be used.

```typescript
this.container.disableRibbonGroup(RibbonGroupId.Clipboard);
this.container.enableRibbonGroup(RibbonGroupId.Clipboard);
```

### Add a group

`addRibbonGroup` adds a `RibbonGroupInfo` group to a tab. Pass an existing group ID as the third argument to insert the new group before that group. Omit it to append the group.

```typescript
/**
 * Add the following code in the app.html file.
 */
<ejs-pptxeditor #pptxeditor id="pptx-editor" [enableToolbar]="true" (created)="onCreated()"></ejs-pptxeditor>

/**
 * Add the following code in the app.ts file.
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PptxEditorComponent, PptxEditorModule, RibbonGroupId, RibbonGroupInfo, RibbonTabId, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class AppComponent {
    @ViewChild('pptxeditor')
    public container: PptxEditorComponent;

    public onCreated(): void {
        const ribbonGroup: RibbonGroupInfo = {
            id: 'custom_group',
            header: 'Custom Group',
            items: [
                {
                    id: 'custom_about',
                    text: 'About',
                    iconCss: 'e-icons e-circle-info',
                    clicked: (): void => {
                        this.container.openAbout();
                    }
                }
            ]
        };
        // Add the group at the end of the Home tab.
        this.container.addRibbonGroup(RibbonTabId.Home, ribbonGroup);

        // Add the group before the Font group.
        // this.container.addRibbonGroup(RibbonTabId.Home, ribbonGroup, RibbonGroupId.Font);
    }
}
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

```typescript
import { RibbonItemId } from '@syncfusion/ej2-angular-pptxeditor';

// Hide Copy on the Home tab.
this.container.hideRibbonItem(RibbonItemId.Copy);

// Show Copy.
this.container.showRibbonItem(RibbonItemId.Copy);

// Hide a custom item by its id.
this.container.hideRibbonItem('custom_item');
```

### Enable or disable an item

```typescript
import { RibbonItemId } from '@syncfusion/ej2-angular-pptxeditor';

// Disable Copy.
this.container.disableRibbonItem(RibbonItemId.Copy);

// Enable Copy.
this.container.enableRibbonItem(RibbonItemId.Copy);

// Disable a custom item by its id.
this.container.disableRibbonItem('custom_item');
```

Disabling a ribbon item does not change the matching editor property. `disableRibbonItem(RibbonItemId.Download)` disables the Export menu item. Setting `enableDownload` to `false` is the editor-level gate, and the editor reapplies it to Export when that property changes.

### Add an item

`addRibbonItem` adds a button described by `RibbonItemInfo` to a group. Pass an existing item ID as the third argument to insert the new item before that item. Omit it to append the item. The item is added to the group's first collection.

```typescript
/**
 * Add the following code in the app.html file.
 */
<ejs-pptxeditor #pptxeditor id="pptx-editor" [enableToolbar]="true" (created)="onCreated()"></ejs-pptxeditor>

/**
 * Add the following code in the app.ts file.
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PptxEditorComponent, PptxEditorModule, RibbonGroupId, RibbonItemId, RibbonItemInfo, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class AppComponent {
    @ViewChild('pptxeditor')
    public container: PptxEditorComponent;

    public onCreated(): void {
        const ribbonItem: RibbonItemInfo = {
            id: 'custom_item',
            text: 'About',
            iconCss: 'e-icons e-circle-info',
            tooltip: 'About this editor',
            clicked: (): void => {
                this.container.openAbout();
            }
        };
        // Add the item at the end of the Home Clipboard group.
        this.container.addRibbonItem(RibbonGroupId.Clipboard, ribbonItem);

        // Add the item before Copy.
        // this.container.addRibbonItem(RibbonGroupId.Clipboard, ribbonItem, RibbonItemId.Copy);
    }
}
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

The ribbon is rendered only when `ToolbarService` is provided and `enableToolbar` is `true`. Set `enableToolbar` to `false` and call `dataBind()` to remove it. Set it back to `true` to show it again.

```typescript
/**
 * Add the following code in the app.html file.
 */
<button (click)="disableRibbon()">Disable ribbon</button>
<button (click)="enableRibbon()">Enable ribbon</button>
<ejs-pptxeditor #pptxeditor id="pptx-editor" [enableToolbar]="true"></ejs-pptxeditor>

/**
 * Add the following code in the app.ts file.
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PptxEditorComponent, PptxEditorModule, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class AppComponent {
    @ViewChild('pptxeditor')
    public container: PptxEditorComponent;

    public disableRibbon(): void {
        this.container.enableToolbar = false;
        this.container.dataBind();
    }

    public enableRibbon(): void {
        this.container.enableToolbar = true;
        this.container.dataBind();
    }
}
```

While `enableToolbar` is `false`, the ribbon customization methods do nothing. Call them again after the ribbon is enabled.

To keep the ribbon visible and block one tab, group, or command, use `disableRibbonTab`, `disableRibbonGroup`, or `disableRibbonItem`.

## Notes

* Customization methods require `ToolbarService` in `providers` and `enableToolbar` set to `true`.
* Use the exported ID constants. The PPTX Editor ribbon methods take IDs, not tab, group, or item indexes.
* The optional ID passed to `addRibbonTab`, `addRibbonGroup`, and `addRibbonItem` means "insert before this ID".
* Home font controls show the formatting of the selected slide text. They are status indicators, not editing commands.
* The PPTX Editor does not provide an API to replace the File menu items or to add a backstage view.
