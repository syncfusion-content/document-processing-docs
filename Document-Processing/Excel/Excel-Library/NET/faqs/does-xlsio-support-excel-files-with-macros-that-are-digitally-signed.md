---
title: Does XlsIO support Excel files with macros that are digitally signed? | XlsIO | Syncfusion
description: Explains whether Syncfusion XlsIO preserves the digital signature on a macro-enabled Excel workbook when it is re-saved.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support Excel files with macros that are digitally signed?

**Yes.** Syncfusion<sup>&reg;</sup> XlsIO preserves the digital signature on a macro-enabled Excel workbook when the workbook is re-saved through `Workbook.SaveAs` or `Workbook.Save`. The signature travels with the bytes; you do not need to re-apply it. However, XlsIO does not expose APIs to **add**, **change**, or **remove** the digital signature programmatically.

## See Also

* [Does XlsIO support password protected macro in the Excel documents?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/does-xlsio-support-password-protected-macro-in-the-excel-documents)
* [How to check whether an Excel document contains macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-check-whether-an-excel-document-contains-macro)
* [How to open an Excel 2013 Macro Enabled Template?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-open-an-excel-2013-macro-enabled-template)
* [How to create and open Excel Template files by using XlsIO?](http://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to create a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#creating-a-macro)
* [How to edit a macro?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#editing-a-macro)
* [How to remove macros?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-macros#removing-macros)
