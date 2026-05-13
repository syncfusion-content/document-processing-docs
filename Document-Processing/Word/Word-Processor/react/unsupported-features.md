---
layout: post
title: Unsupported features in React DOCX Editor component | Syncfusion
description: Learn about the list of unsupported features in the React Document Editor to better understand limitations when creating input documents.
control: Unsupported features
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Unsupported Features in DOCX Editor

This section describes the unsupported elements in Syncfusion® DOCX Editor (Document Editor) 

## Formatting features

| Feature | Details | Supported |
|--------|--------|-----------|
| Paragraph Properties | Shading | No |
|  | Mirror indent | No |
|  | Suppress line numbers | No |
|  | Don’t hyphenate | No |
| Text Properties | Shading, Position, Font kerning, Ligatures, Number spacing, Number forms, Stylistic sets, Contextual alternates | No |
|  | Text Direction (Top to Bottom, Bottom to Top) | No |
| Section Formatting | Mirror margins, Gutter, Line numbers, Bi-direction | No |
| Page Background | Page background image | No |
| WaterMark | Watermark / Theme / Page color | No |
| Table Format | Border styles (*Except dotted and dashed; other styles are rendered as solid*) | Partial |


## Word Document Elements

| Feature | Document Editor |
|--------|----------------|
| ActiveX Controls | No |
| Embedded Objects | No |
| Images | Bitmap images only |
| InkML | No |
| Video or audio files | No |
| Macros | No |
| Models, Smart-Art, and Charts | [Supported Charts](https://help.syncfusion.com/document-processing/word/word-processor/react/chart) |
| Shapes, Textboxes, and WordArt | [Supported shapes](https://help.syncfusion.com/document-processing/word/word-processor/react/shapes#supported-shapes) *(Shape Properties: Fill types, borders, rotation – No) |
| Signature line | No |
| Special Characters, Symbols, Equations | No |
| Comments | Text and mentions supported; images and other items not supported |
| Built-in and custom document properties | No |


## Security

| Feature | Document Editor |
|--------|----------------|
| Password Protection | Supported through server-side implementation |
| Restricted Editing | Yes |



