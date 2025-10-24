---
layout: post
title: Customize form designer icons in JavaScript PDF Viewer | Syncfusion
description: Learn how to customize form designer toolbar icons and property window styles in the Syncfusion JavaScript PDF Viewer by applying targeted CSS.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize form designer icons in JavaScript PDF Viewer

Apply the following CSS rules to tailor the form designer toolbar icons and property dialog appearance in the JavaScript PDF Viewer. Add the styles to the page or global stylesheet that hosts the control to adjust color, size, or visibility.

## Customize the text box field icon

Use the following CSS to adjust the text box form field icon.

```
/* To specify color of the textbox*/

  .e-pdfviewer .e-pv-textbox-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```

## Customize the password field icon

Because the password field shares the text box icon styling, apply the following CSS to update its appearance.

```
/* To specify color of the Password*/

  .e-pdfviewer .e-pv-textbox-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```

## Customize the checkbox field icon

Use the following CSS to update the checkbox form field icon.

```
/* To specify color of the CheckBox*/

  .e-pdfviewer .e-pv-checkbox-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```

## Customize the radio button field icon

Use the following CSS to update the radio button form field icon.

```
/* To specify color of the RadioButton*/

  .e-pdfviewer .e-pv-radiobutton-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```
## Customize the list box field icon

Use the following CSS to update the list box form field icon.

```
/* To specify color of the ListBox*/

  .e-pdfviewer .e-pv-listbox-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```

## Customize the drop-down field icon

Use the following CSS to update the drop-down form field icon.

```
/* To specify color of the DropDown*/

  .e-pdfviewer .e-pv-dropdown-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```

## Customize the signature and initial field icon

Use the following CSS to update the signature and initial field icon.

```
/* To specify color of the Signature and initial fields*/

  .e-pdfviewer .e-pv-handwritten-icon{
   color: rgb(119, 249, 238);
   font-size: 16px;
  }

```

## Customize the Close icon

Use the following CSS to hide the Close icon.

```
 #pdfViewer_formdesigner_closeIcon{
    display: none
  }
```

## Customize the property window

Use the following CSS rules to restyle the property window dialog elements.

### Customize the dialog header

Use the following CSS to adjust the dialog header text style.

```
  .e-pv-form-field-property-header {
    color: rgb(119, 249, 238);
    display: block;
    font-family: cursive;
    font-size: 20px;
    font-weight: 500;
  }

  .e-pv-form-field-property-header-general{
    font-family: "calibri";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    color: rgb(119, 249, 238);
  }
```


### Customize the dialog checkbox

Use the following CSS to adjust the checkbox appearance in the dialog.

```
  .e-pdfviewer .e-checkbox-wrapper .e-frame + .e-label, .e-pdfviewer .e-css.e-checkbox-wrapper .e-frame + .e-label{
    font-family: cursive;
  }
  .e-checkbox-wrapper .e-frame{
    border-color: rgb(119, 249, 238);
  }
```

### Customize the dialog close button

Use the following CSS to update the dialog close button style.

```
 .e-dialog .e-btn .e-btn-icon.e-icon-dlg-close {
    font-size: 12px;
    color: rgb(119, 249, 238);
  }
```

### Customize the dialog footer button

Use the following CSS to adjust the dialog footer button style.

```
.e-dialog .e-footer-content .e-btn {
    font-family: "calibri";
    font-size: 13px;
    font-style: normal;
    color: rgb(119, 249, 238);
}

```