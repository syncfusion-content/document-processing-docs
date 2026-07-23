---
title: Working with Tables | Syncfusion
description: Learn how to choose between the PdfGrid and PdfLightTable models, what customizations each supports, and which one to use for your scenario.
platform: document-processing
control: PDF
documentation: UG
---

# Working with .NET PDF Tables

The Syncfusion<sup>&reg;</sup> .NET PDF library provides support for two types of [PDF table](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/pdf-tables) models that offer different levels of customization. The two table models are:

1. [PdfGrid* (Recommended)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html)
2. [PdfLightTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Tables.PdfLightTable.html)

N> We strongly recommend using `PdfGrid` for creating tables in PDF documents because it represents a flexible grid that supports a wider range of row and column customizations. Use `PdfLightTable` only when you need a lightweight table with minimal formatting requirements.

## Choosing the right table model

Use the following guidelines to choose between `PdfGrid` and `PdfLightTable`:

Choose **PdfGrid** when you need:
  * Direct, typed access to individual rows, columns, and cells.
  * Row span and column span support.
  * Nested grids (a grid inside a cell).
  * Built-in table styles and rich cell formatting.

Choose **PdfLightTable** when you need:
  * A lightweight table for simple, data-bound reports.
  * Minimal code and fewer customizations.
  * Compatibility with legacy code that uses the `PdfLightTable` API.

## Difference between PdfLightTable and PdfGrid

Both the [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) and [PdfLightTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Tables.PdfLightTable.html) models are supported across all the platforms and the following table explains the level of customizations both the models provide.

<table>
    <thead>
        <tr>
            <th>
                Features
            </th>
            <th>
                PdfLightTable
            </th>
            <th>
                PdfGrid
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center" colspan="3">
                {{ '**Formatting**' | markdownify }}
            </td>
        </tr>
        <tr>
            <td>
                Row
            </td>
            <td>
                No direct API, possible through events.
            </td>
            <td>
                Yes
            </td>
        </tr>
        <tr>
            <td>
                Column
            </td>
            <td>
                Yes (StringFormat)
            </td>
            <td>
                Yes (StringFormat)
            </td>
        </tr>
        <tr>
            <td>
                Cell
            </td>
            <td>
                No direct API for single cell formatting, possible through events.
            </td>
            <td>
                Yes
            </td>
        </tr>
        <tr>
            <td align="center" colspan="3">
                {{ '**Others**' | markdownify }}
            </td>
        </tr>
        <tr>
            <td>
                Row span
            </td>
            <td>
                No
            </td>
            <td>
                Yes
            </td>
        </tr>
        <tr>
            <td>
                Column span
            </td>
            <td>
                No direct API, possible through events.
            </td>
            <td>
                Yes
            </td>
        </tr>
        <tr>
            <td>
                Nested Grid
            </td>
            <td>
                Possible through events
            </td>
            <td>
                Yes
            </td>
        </tr>
        <tr>
            <td>
                Layout Events
            </td>
            <td>
                BeginCellLayout, BeginPageLayout, BeginRowLayout, EndCellLayout, EndPageLayout, EndRowLayout
            </td>
            <td>
                BeginPageLayout, EndPageLayout
            </td>
        </tr>
    </tbody>
</table>
