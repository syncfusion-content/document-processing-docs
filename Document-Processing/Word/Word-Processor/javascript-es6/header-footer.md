---
layout: post
title: Header and Footer in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about Header and Footer in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Header and Footer
documentation: ug
domainurl: ##DomainURL##
---

# Header and Footer in JavaScript (ES6) Document Editor control

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) supports headers and footers in a document. Each section in the document can have the following types of headers and footers:

* First page: Used only on the first page of the section.
* Even pages: Used on all even-numbered pages in the section.
* Default: Used on all pages of the section, where first or even pages are not applicable or not specified.

You can define this by setting the format properties of the corresponding section using the following sample code.

```ts
//Defines whether a different header and footer is required for the first page of the section
documentEditor.selection.sectionFormat.differentFirstPage = true;
//Defines whether a different header and footer is required for odd and even pages in the section
documentEditor.selection.sectionFormat.differentOddAndEvenPages = true;
```

## Go to header or footer region

Double-click in the header or footer region to move the selection into it. You can also do this by using the following code.

```ts
documentEditor.selection.goToHeader();
```

```ts
documentEditor.selection.goToFooter();
```

## Header and footer distance

You can define the distance of the header region content from the top of the page. Refer to the following sample code.

```ts
documentEditor.selection.sectionFormat.headerDistance = 36;
```

Similarly, you can define the distance of the footer region content from the bottom of the page. Refer to the following sample code.

```ts
documentEditor.selection.sectionFormat.footerDistance = 36;
```

## Close header and footer region

Move the selection to the document body from the header or footer region by double-clicking or tapping the document area. You can also perform this by using the following sample code.

```ts
documentEditor.selection.closeHeaderFooter();
```

## Link to previous

Link to Previous is enabled by default when a document has more than one section. If you're using different headers and footers, such as a different first page or different odd and even pages, they can't be linked together because they're all separate.

Before setting or getting the `linkToPrevious` value, use the [`goToHeader`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#gotoheader) or [`goToFooter`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#gotofooter) API to move the current selection to the header or footer region.

You can get or set the default header and footer link to previous value of a section at the cursor position by using the following sample code.

```typescript
container.documentEditor.selection.sectionFormat.oddPageHeader.linkToPrevious = false;
container.documentEditor.selection.sectionFormat.oddPageFooter.linkToPrevious = false;
```

In case the document has different header and footer types, such as different first page, odd, and even pages.

```typescript
// Different first page
container.documentEditor.selection.sectionFormat.firstPageHeader.linkToPrevious = false;
container.documentEditor.selection.sectionFormat.firstPageFooter.linkToPrevious = false;

//Even page
container.documentEditor.selection.sectionFormat.evenPageHeader.linkToPrevious = false;
container.documentEditor.selection.sectionFormat.evenPageFooter.linkToPrevious = false;
```

N> When there is more than one section in the document, the Link to Previous option becomes available. By default, this feature is disabled in the UI and set to return false for the first section.

## Online Demo

Explore how to add and customize headers and footers in Word documents using the JavaScript DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/headers-and-footers.html).

## See Also

* [Working with Section Formatting](./section-format)