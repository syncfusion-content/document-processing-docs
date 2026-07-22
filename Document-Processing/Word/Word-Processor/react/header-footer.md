---
layout: post
title: Header Footer in React DOCX Editor Component | Syncfusion
description: Learn here all about header and footer in Syncfusion Essential React DOCX Editor component, its elements and more.
control: Header and Footer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Header and Footer in React DOCX Editor Component

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (DOCX Editor) supports headers and footers in its document. Each section in the document can have the following types of headers and footers:

* First page: Used only on the first page of the section.
* Even pages: Used on all even numbered pages in the section.
* Default: Used on all pages of the section, where first or even pages are not applicable or not specified.

You can define this by setting format properties of the corresponding section using the following sample code.

```ts
//Defines whether different header and footer is required for first page of the section
documenteditor.selection.sectionFormat.differentFirstPage= true;
//Defines whether different header and footer is required for odd and even pages in the section
documenteditor.selection.sectionFormat.differentOddAndEvenPages= true;
```

## Go to Header and Footer Region

Double click in the header or footer region to move the selection into it. You can also do this by using the following code.

```ts
documenteditor.selection.goToHeader();
```

```ts
documenteditor.selection.goToFooter();
```

## Link to Previous

The Link to Previous option is enabled by default when document has more than one section. If you're using different headers and footers such as different first page or different odd and even pages, they can't be linked together because they're all separate.

Before setting or getting the link to previous value, use the ['goToHeader'](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#gotoheader) or ['goToFooter'](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#gotofooter) API to move the current selection to the header or footer region.

You can get or set the default header and footer link to previous value of a section at cursor position by using the following sample code.

```ts
this.container.documentEditor.selection.sectionFormat.oddPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.oddPageFooter.linkToPrevious = false;
```

In case the document has different header and footer types, such as different first page, odd, and even pages:

```ts
// Different first page
this.container.documentEditor.selection.sectionFormat.firstPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.firstPageFooter.linkToPrevious = false;
//Even page
this.container.documentEditor.selection.sectionFormat.evenPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.evenPageFooter.linkToPrevious = false;
```

N> When there is more than one section in the document, the Link to Previous option becomes available. By default, this feature is in disabled state in UI and set to return false for the first section.

## Header and Footer Distance

You can define the distance of header region content from the top of the page. Refer to the following sample code.

```ts
documenteditor.selection.sectionFormat.headerDistance= 36;
```

In the same way, you can define the distance of footer region content from the bottom of the page. Refer to the following sample code.

```ts
documenteditor.selection.sectionFormat.footerDistance=36;
```

## Close Header and Footer Region

Move the selection to the document body from header or footer region by double clicking or tapping the document area. You can also perform this by using the following sample code.

```ts
documenteditor.selection.closeHeaderFooter()
```

## Online Demo

Explore how to add and customize headers and footers in Word documents using the React DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/headers-and-footers).

## See Also

* [Working with Section Formatting](./section-format)