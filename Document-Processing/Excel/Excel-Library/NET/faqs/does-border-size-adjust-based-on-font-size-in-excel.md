---
title: Does Border size adjust based on font size in Excel? | Syncfusion
description: This page Explains that cell border thickness is not automatically adjusted based on font size and must be controlled through border styles.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does Border size adjust based on font size in Excel?

In Microsoft Excel, the thickness of a cell border does not change based on the font size used within the cell. Borders are rendered independently of text formatting, meaning that increasing or decreasing the font size will only affect the appearance of the text, not the border. To modify border thickness, users must explicitly choose from predefined border styles such as thin, medium, or thick. Simply reducing the font size will not automatically make the border thinner.

Syncfusion XlsIO follows the same behavior as Microsoft Excel to maintain consistency. In XlsIO, border thickness is also independent of font size, and there is no automatic scaling of borders when text size changes. Like Excel, any adjustment to border thickness must be done manually by selecting the appropriate border style.
