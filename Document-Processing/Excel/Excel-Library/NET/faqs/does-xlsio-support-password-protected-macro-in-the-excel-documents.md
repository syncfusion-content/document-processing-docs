---
title: XlsIO Support for Password-Protected Macros | Syncfusion
description: Explains whether Syncfusion XlsIO preserves the password protection of a VBA macro when an Excel workbook is re-saved.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support password-protected macros in Excel documents?

**Yes.** Syncfusion<sup>&reg;</sup> XlsIO preserves the password protection of an embedded VBA macro when an Excel workbook is re-saved through `Workbook.SaveAs` or `Workbook.Save`. The protection travels with the bytes; you do not need to re-apply it. However, XlsIO does not expose APIs to **add**, **change**, or **remove** the macro's password programmatically.

## See Also

* [Does XlsIO support Excel files with macros that are digitally signed?](does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How to check whether an Excel document contains macro?](how-to-check-whether-an-excel-document-contains-macro)
* [How to open an Excel 2013 Macro Enabled Template?](how-to-open-an-excel-2013-macro-enabled-template)
* [How to create a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#creating-a-macro)
* [How to edit a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#editing-a-macro)
* [How to remove macros?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#removing-macros)
