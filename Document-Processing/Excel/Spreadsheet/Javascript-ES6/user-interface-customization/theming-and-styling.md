---
layout: post
title: Theme and Style in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about themes and styling options in the Syncfusion JavaScript ES6 Spreadsheet component for customizing appearance.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Theme and Style in JavaScript ES6 Spreadsheet

Our [JavaScript ES6 Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-es6-spreadsheet-editor) component provides a comprehensive set of built-in themes to deliver a consistent, modern, and visually appealing appearance across applications. Applying a theme loads the corresponding CSS file and updates the component's appearance throughout the UI.

For more information about the built-in themes in Syncfusion, please refer to the [documentation](https://ej2.syncfusion.com/javascript/documentation/appearance/theme).

## Customizing Theme Color

The JavaScript ES6 Spreadsheet Editor supports many themes and lets you apply custom styles. You can customize theme colors using Theme Studio. Theme Studio lets you pick a theme, modify colors, and download a ready‑to‑use CSS file for your project.

For more information on customizing the theme color via theme studio, please refer this [documentation](https://ej2.syncfusion.com/javascript/documentation/appearance/theme-studio)

## CSS Customization

To modify the Spreadsheet appearance, you need to override the default CSS of the spreadsheet. Please find the CSS structure that can be used to modify the Spreadsheet appearance.

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
