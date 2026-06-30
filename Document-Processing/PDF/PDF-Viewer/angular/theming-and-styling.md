---
layout: post
title: Theming and styling in Angular PDF Viewer component | Syncfusion
description: Learn how to apply built-in themes, configure dark mode, and customize the UI styles of the Syncfusion Angular PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Theming and Styling in Angular PDF Viewer

The Angular PDF Viewer supports multiple built-in themes and flexible styling options to match your application's UI design.

## Supported Themes

The PDF Viewer styles the toolbar, buttons, panels, annotations, and dialogs based on the selected theme. The available built-in Syncfusion themes are:

- Material 3
- Fluent 2
- Bootstrap 5
- Tailwind

## How-to: Quick Start

**Step 1:** Create an Angular PDF Viewer application by following the [Angular PDF Viewer getting started guide](./getting-started).

**Step 2:** Import the required theme CSS files in `angular.json` or `styles.css`. Example for Tailwind theme:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-angular-pdfviewer/styles/tailwind3.css';
```

## Tutorial

1. Create a new Angular app and install the Syncfusion PDF Viewer package.
2. Add the required theme imports to the global styles file.
3. Render the PDF Viewer in your application component.
4. Add a theme switcher for light and dark modes.
5. Apply scoped custom styles using a wrapper class.

## Theming for Dark Mode

Dark themes provide a better viewing experience in low-light environments. The Angular PDF Viewer supports:

- Material 3 Dark
- Bootstrap 5 Dark
- Fluent 2 Dark
- Tailwind Dark
- Fluent 2 High Contrast

N> Update the viewer container background color when switching to dark theme for visual consistency.

### How-to: Toggle Dark Mode

You can dynamically change the theme by swapping the linked stylesheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, OnInit } from '@angular/core';
import {
  PdfViewerModule, LinkAnnotationService, BookmarkViewService, 
  MagnificationService, ThumbnailViewService, ToolbarService,
  NavigationService, TextSearchService, TextSelectionService, 
  PrintService, PageOrganizerService, AnnotationService,
  FormDesignerService, FormFieldsService,
} from '@syncfusion/ej2-angular-pdfviewer';

type ThemeName = 'material3' | 'material3-dark';
const THEME_LINK_ID = 'e-current-theme';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    AnnotationService, TextSearchService, TextSelectionService,
    PrintService, FormDesignerService, FormFieldsService,
    PageOrganizerService,
  ],
  template: `
    <!-- Theme Switcher -->
    <div style="margin-bottom:10px; display:flex; gap:8px; align-items:center">
      <label for="themeSelect"><strong>Theme:</strong></label>
      <select id="themeSelect" [value]="theme" (change)="onThemeChange($event)">
        <option value="material3">Material 3 (Light)</option>
        <option value="material3-dark">Material 3 Dark</option>
      </select>
    </div>

    <!-- PDF Viewer -->
    <div class="content-wrapper e-custom-style">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:640px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource =
    'https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2-pdfviewer-lib';

  public theme: ThemeName = 'material3';

  ngOnInit(): void {
    this.applyTheme(this.theme);
  }

  onThemeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as ThemeName;
    this.theme = value;
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: ThemeName): void {
    const themeUrl = `https://cdn.syncfusion.com/ej2/33.1.44/${theme}.css`;

    let themeLink = document.getElementById(THEME_LINK_ID) as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = THEME_LINK_ID;
      themeLink.rel = 'stylesheet';
      document.head.prepend(themeLink);
    }

    themeLink.href = themeUrl;
  }
}

{% endhighlight %}
{% endtabs %}

## Custom Styles

Built-in themes cover common needs, but you can safely apply your own overrides using scoped styles.

### Guidelines

* **Load Order:** Always load the Syncfusion default theme CSS before applying any custom overrides.
* **Custom Classes:** Prefer using `.e-custom-style` classes for overrides to ensure your styles are applied correctly without conflicting with internal logic.
* **Avoid Deep Overrides:** Do not override internal classes deeply, as this may break the component's layout or responsiveness in future updates.

### Example: Scoped Custom Styles

```css
.e-custom-style .e-pv-page-container {
  background: #0b1220;
}

.e-custom-style .e-pdfviewer-signatureformfields,
.e-custom-style .e-pdfviewer-signatureformfields-signature {
  border: 1px solid #b3d1ff;
  border-radius: 5px;
}
```

```html
<div class="control-section e-custom-style">
  <ejs-pdfviewer
    [resourceUrl]="resource"
    [documentPath]="documentPath"
    style="height:640px">
  </ejs-pdfviewer>
</div>
```

### Explanation

This section explains the rationale behind the recommendations and common pitfalls:

- Use a scoped wrapper class (for example `.e-custom-style`) to avoid fragile, global overrides that can break when internal selectors change.
- Load order is important: theme CSS provides base variables and components' base rules; custom overrides must load after theme CSS to take effect reliably.
- Prefer toggling theme files or a small root class rather than deep selector overrides when implementing dark mode — this makes switching simpler and reduces maintenance.
- Avoid overusing `!important`; reserve it for third-party widgets or unavoidable form-field styling where the library applies strong specificity.
- Always verify color-contrast and keyboard focus styles after applying themes or overrides to preserve accessibility.

## Reference

- [Theme Studio for Syncfusion Angular components](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio)
