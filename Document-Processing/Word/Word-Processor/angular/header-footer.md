---
layout: post
title: Header and Footer in Angular DOCX Editor component | Syncfusion
description: Learn about headers and footers in the Syncfusion Angular Document Editor component.
platform: document-processing
control:  Header and Footer 
documentation: ug
domainurl: ##DomainURL##
---

# Header and Footer in Angular DOCX Editor component

[Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) supports headers and footers. Each section in the document can have the following types of headers and footers:

* First page: Used only on the first page of the section.
* Even pages: Used on all even-numbered pages of the section.
* Default: Used on all pages of the section where first or even pages are not applicable or not specified.

Set the corresponding section-format properties as shown in the following code.

```typescript
//Defines whether different header footer is required for first page of the section
this.documentEditor.selection.sectionFormat.differentFirstPage = true;
//Defines whether different header footer is required for odd and even pages in the section
this.documentEditor.selection.sectionFormat.differentOddAndEvenPages = true;
```

## Go to Header Footer Region

Double-click in the header or footer region to move the selection into it. You can also use the following code to achieve the same result.

```typescript
this.documentEditor.selection.goToHeader();
```

```typescript
this.documentEditor.selection.goToFooter();
```

## Link to Previous

Link to Previous is enabled by default when the document has more than one section. Different header/footer types (first page, odd, even) cannot be linked together because they are independent.

Before setting or getting the Link to Previous value, call [`goToHeader()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection#gotoheader) or [`goToFooter()`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection#gotofooter) to move the selection into the corresponding region.

You can get or set the default header/footer Link to Previous value of the section at the cursor position using the following code.

```typescript
this.container.documentEditor.selection.sectionFormat.oddPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.oddPageFooter.linkToPrevious = false;
```

In case the document has different header and footer types, such as different first page, odd, and even pages.

```typescript
// Different first page
this.container.documentEditor.selection.sectionFormat.firstPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.firstPageFooter.linkToPrevious = false;
// Even page
this.container.documentEditor.selection.sectionFormat.evenPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.evenPageFooter.linkToPrevious = false;
```

N> 1. When there is more than one section in the document, the Link to Previous option becomes available.
N> 2. By default, the Link to Previous option is disabled in the UI and returns `false` for the first section.

## Header and Footer Distance

You can define the distance of header region content from the top of the page. Use the following code to set the distance of the header region from the top of the page.

```typescript
this.documentEditor.selection.sectionFormat.headerDistance = 36;
```

Similarly, you can set the distance of the footer region from the bottom of the page using the following code.

```typescript
this.documentEditor.selection.sectionFormat.footerDistance = 36;
```

## Close Header Footer Region

Move the selection from the header or footer region back to the document body by double-clicking the document area, or use the following code.

```typescript
this.documentEditor.selection.closeHeaderFooter();
```

## Online Demo

Explore how to add and customize headers and footers in Word documents using the Angular Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/headers-footers).

## See Also

* [Working with Section Formatting](./section-format)