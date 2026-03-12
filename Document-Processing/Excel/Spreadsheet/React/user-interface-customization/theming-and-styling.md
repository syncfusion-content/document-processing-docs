---
layout: post
title: How to apply themes and styles in the React Spreadsheet component | Syncfusion
description: Learn here how to use built‑in themes and apply custom styles in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Theming and Styling

The Syncfusion React Spreadsheet component supports many themes and also allows you to apply your own custom styles. 

By default, the Spreadsheet uses the Material theme. If you want to change the colors, spacing, or style, you can customize the theme using the Theme Studio. Theme Studio lets you pick a theme, modify colors, and download a ready‑to‑use CSS file for your project.

You can open Theme Studio here:
https://ej2.syncfusion.com/themestudio/?theme=material

Theme Studio documentation:
https://ej2.syncfusion.com/react/documentation/appearance/theme-studio


## Supported Themes
Syncfusion React components provide a wide range of themes. Below is the list of all currently supported themes and their CSS file names:

Theme Style | CSS file
--- | ---
Tailwind 3.4 | tailwind3.css
Tailwind 3.4 Dark | tailwind3-dark.css
Bootstrap 5.3 | bootstrap5.3.css
Bootstrap 5.3 Dark | bootstrap5.3-dark.css
Fluent 2 | fluent2.css
Fluent 2 Dark | fluent2-dark.css
Material 3 | material3.css
Material 3 Dark | material3-dark.css
Bootstrap 5 | bootstrap5.css
Bootstrap 5 Dark | bootstrap5-dark.css
Bootstrap 4 | bootstrap4.css
Bootstrap 3 | bootstrap.css
Bootstrap 3 Dark | bootstrap-dark.css
Material | material.css
Material Dark | material-dark.css
Tailwind CSS | tailwind.css
Tailwind CSS Dark | tailwind-dark.css
Fluent | fluent.css
Fluent Dark | fluent-dark.css
Microsoft Office Fabric | fabric.css
Microsoft Office Fabric Dark | fabric-dark.css
High Contrast | highcontrast.css

# CSS Customization

To modify the Spreadsheet appearance, you need to override the default CSS of the spreadsheet.You can change colors, borders, fonts, and layout using your custom CSS.

You can refer to the CSS styling documentation here:
https://ej2.syncfusion.com/react/documentation/spreadsheet/styles


Please find the CSS structure that can be used to modify the Spreadsheet appearance.

## Customizing the Spreadsheet

Use the below CSS to customize the Spreadsheet root element.

```

.e-spreadsheet {
    font-family: cursive;
}

```

## Header

### Customizing the Spreadsheet Ribbon

Use the below CSS to customize the Spreadsheet Ribbon.

```

.e-spreadsheet .e-ribbon {
    background-color: #808080;
}

```

### Customizing the Spreadsheet formula bar panel

You can customize the Spreadsheet formula bar panel by using this CSS.

```

.e-spreadsheet .e-formula-bar-panel {
   border: none;
}

```

### Customizing the Spreadsheet formula bar text

You can customize the Spreadsheet formula bar text by using this CSS.

```

.e-spreadsheet .e-formula-bar-panel .e-formula-bar {
    font-weight: bold;
}

```

## Sheet

### Customizing the Spreadsheet sheet element

Using this CSS, you can customize the Spreadsheet sheet element.

```

.e-spreadsheet .e-sheet-panel .e-sheet {
    border-color: #000000;
}

```

### Customizing the Spreadsheet sheet header

Use the below CSS to customize the Spreadsheet sheet header.

```

.e-spreadsheet .e-sheet-panel .e-sheet .e-header-panel {
    font-style: oblique;
}

```

### Customizing the Spreadsheet row header

Use the below CSS to customize the Spreadsheet row header.

```
.e-spreadsheet .e-row-header .e-header-cell {
    color: #0000FF !important;
}

```

### Customizing the Spreadsheet column header

Use the below CSS to customize the Spreadsheet column header.

```
.e-spreadsheet .e-column-header .e-header-cell {
    color: #0000FF !important;
}

```

### Customizing the Spreadsheet selection element

Customize the Spreadsheet selection element.

```

.e-spreadsheet .e-selection {
    border-color: #0000FF;
}

```

### Customizing the Spreadsheet active cell element

Customize the Spreadsheet active cell element.

```

.e-spreadsheet .e-active-cell {
    border-color: #0000FF;
}

```

### Customizing the Spreadsheet cell element

Using this CSS, you can customize the Spreadsheet cell element.

```

.e-spreadsheet .e-cell {
    background-color: #0078d7 !important;
}

```

## Ribbon Items

### Customizing the Spreadsheet sorting icon

Use the below CSS to customize the Spreadsheet sorting icon in the Spreadsheet ribbon. You can use the available Syncfusion<sup style="font-size:70%">&reg;</sup> [icons](https://ej2.syncfusion.com/documentation/appearance/icons/#material) based on your theme.

```

.e-spreadsheet .e-sort-filter-icon:before {
    background-color: #deecf9;
    content: '\e306';
}

```

### Customizing the filter dialog content

Use the below CSS to customize the Spreadsheet filter dialog content element.

```

.e-spreadsheet .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}

```

### Customizing the filter dialog footer

Spreadsheet filter dialog footer element can be customized by using the below CSS.

```

.e-spreadsheet .e-filter-popup .e-footer-content {
    background-color: #ccffff;
}

```

### Customizing the filter dialog input element

Use the below CSS to customize the Spreadsheet filter dialog input element.

```

.e-spreadsheet .e-filter-popup .e-input-group input.e-input{
      font-family: cursive;
}

```

### Customizing the filter dialog button element

Use the below CSS to customize the Spreadsheet filter dialog button element.

```

.e-spreadsheet .e-filter-popup .e-btn{
    font-family: cursive;
}

```

### Customizing the Excel filter dialog number filters element

Spreadsheet Excel filter dialog number filters element can be customized by using the below CSS.

```

.e-spreadsheet .e-filter-popup .e-contextmenu-wrapper ul{
    background-color: #deecf9;
}

```

## Footer

### Customizing the Spreadsheet sheet tab panel

Spreadsheet sheet tab panel can be customized by using the below CSS.

```

.e-spreadsheet .e-sheet-tab-panel {
    background: #08fbfb;
}

```

### Customizing the Spreadsheet sheet tab

Spreadsheet sheet tab element can be customized by using the below CSS.

```

.e-spreadsheet .e-sheet-tab-panel .e-tab-header .e-toolbar-item.e-active .e-tab-wrap .e-tab-text {
    font-weight: bold;
}

```