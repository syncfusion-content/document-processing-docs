---
layout: post
title: Header footer in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Header footer in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Header footer 
documentation: ug
domainurl: ##DomainURL##
---

# Header footer in JavaScript (ES5) Document editor control

Document Editor supports headers and footers in its document. Each section in the document can have the following types of headers and footers:

* First page: Used only on the first page of the section.
* Even pages: Used on all even numbered pages in the section.
* Default: Used on all pages of the section, where first or even pages are not applicable or not specified.

You can define this by setting format properties of the corresponding section using the following sample code.

```ts
//Defines whether different header footer is required for first page of the section
documenteditor.selection.sectionFormat.differentFirstPage = true;
//Defines whether different header footer is required for odd and even pages in the section
documenteditor.selection.sectionFormat.differentOddAndEvenPages = true;
```

## Go to header footer region

Double click in header or footer region to move the selection into it. You can also do this by using the following code.

```ts
documenteditor.selection.goToHeader();
```

```ts
documenteditor.selection.goToFooter();
```

## Header and footer distance

You can define the distance of header region content from the top of the page. Refer to the following sample code.

```ts
documenteditor.selection.sectionFormat.headerDistance= 36;
```

Same way, you can define the distance of footer region content from the bottom of the page. Refer to the following sample code.

```ts
documenteditor.selection.sectionFormat.footerDistace=36;
```

## Close header footer region

Move the selection to the document body from header or footer region by double clicking or tapping the document area. You can also perform this by using the following sample code.

```ts
documenteditor.selection.closeHeaderFooter()
```

## Link to previous

Link to previous is enabled by default when document has more than one section. If you're using different headers and footers such as different first page or different odd and even pages, they can't be linked together because they're all separate.

Before setting or getting the link to previous value, use the ['goToHeader'](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#gotoheader/) or ['goToFooter'](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#gotofooter/) API to move the current selection to the header or footer region.

You can get or set the default header footer link to previous value of a section at cursor position by using the following sample code.

```javascript
container.documentEditor.selection.sectionFormat.oddPageHeader.linkToPrevious = false;
container.documentEditor.selection.sectionFormat.oddPageFooter.linkToPrevious = false;
```

In case the document has different header and footer types, such as different first page, odd, and even pages.

```javascript
// Different first page
container.documentEditor.selection.sectionFormat.firstPageHeader.linkToPrevious = false;
container.documentEditor.selection.sectionFormat.firstPageFooter.linkToPrevious = false;

//Even page
container.documentEditor.selection.sectionFormat.evenPageHeader.linkToPrevious = false;
container.documentEditor.selection.sectionFormat.evenPageFooter.linkToPrevious = false;
```

>Note: When there is more than one section in the document, the Link to Previous option becomes available. By default, this feature is disabled state in UI and set to return false for the first section.

## See Also

* [Working with Section Formatting](./section-format)