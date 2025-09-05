---
layout: post
title: Localization in Xamarin.iOS PDF viewer | Syncfusion
description: Set localized text for the static texts used in Syncfusion<sup>®</sup> Xamarin.iOS PDF viewer Control, its elements, and more.
platform: document-processing
control: SfPdfViewer
documentation: UG
---

# Localization in Xamarin.iOS PDF viewer

Localization is the process of configuring the application to a specific language. PdfViewerControl supports to localize its static text.

SfPdfViewer uses the following static text that can be localized in application level:

<table>

<tr>
<th>Keyword</th>
<th>Text(English)</th>
</tr>

<tr>
<td>sfpdfviewer_copy</td>
<td>Copy</td>
</tr>

<tr>
<td>sfpdfviewer_highlight</td>
<td>Highlight</td>
</tr>

<tr>
<td>sfpdfviewer_underline</td>
<td>Underline</td>
</tr>

<tr>
<td>sfpdfviewer_strikeout</td>
<td>Strikeout</td>
</tr>

<tr>
<td>sfpdfviewer_continuouspagemode</td>
<td>Continuous Pages</td>
</tr>

<tr>
<td>sfpdfviewer_singlepagemode</td>
<td>Page By Page</td>
</tr>

<tr>
<td>sfpdfviewer_done</td>
<td>Done</td>
</tr>

<tr>
<td>sfpdfviewer_Ok</td>
<td>OK</td>
</tr>

<tr>
<td>sfpdfViewer_signaturepad_title</td>
<td>Create Signature</td>
</tr>

<tr>
<td>sfpdfViewer_signaturepad_cancel</td>
<td>Cancel</td>
</tr>

<tr>
<td>sfpdfViewer_signaturepad_clear</td>
<td>Clear</td>
</tr>

<tr>
<td>sfpdfviewer_signaturepad_done</td>
<td>Done</td>
</tr>

<tr>
<td>sfpdfviewer_bookmarks_title</td>
<td>Bookmark</td>
</tr>

<tr>
<td>sfpdfviewer_no_bookmarks_text</td>
<td>No Bookmark</td>
</tr>

<tr>
<td>sfpdfviewer_pagenavigationalert_title</td>
<td>Go to page</td>
</tr>

<tr>
<td>sfpdfviewer_pagenavigationalert_message</td>
<td>Enter page Number</td>
</tr>

<tr>
<td>sfpdfviewersearchplaceholdertext</td>
<td>Enter text to search</td>
</tr>

<tr>
<td>sfpdfviewer_searchresult_title</td>
<td>Search Result</td>
</tr>

<tr>
<td>sfpdfviewer_searchresult_nomatch</td>
<td>No matches were found</td>
</tr>

<tr>
<td>sfpdfviewer_searchresult_nomoreoccurrence</td>
<td>No more matches were found</td>
</tr>

<tr>
<td>sfpdfviewer_passwordalert_title</td>
<td>Enter Password</td>
</tr>

<tr>
<td>sfpdfviewer_passwordalert_message</td>
<td>Enter the password to open this PDF File</td>
</tr>

<tr>
<td>sfpdfviewer_passwordalert_errorText</td>
<td>Invalid Password</td>
</tr>

<tr>
<td>sfpdfviewer_passwordalert_placeholder</td>
<td>Password</td>
</tr>

<tr>
<td>sfpdfviewer_printalert_title</td>
<td>Error</td>
</tr>

<tr>
<td>sfpdfviewer_printalert_message</td>
<td>Password protected document cannot be printed</td>
</tr>

<tr>
<td>sfpdfviewer_printalert_ok</td>
<td>OK</td>
</tr>

<tr>
<td>sfpdfviewer_undo</td>
<td>Undo</td>
</tr>

<tr>
<td>sfpdfviewer_redo</td>
<td>Redo</td>
</tr>

<tr>
<td>sfpdfviewer_save</td>
<td>Save</td>
</tr>

<tr>
<td>sfpdfviewer_print</td>
<td>Print</td>
</tr>

<tr>
<td>sfpdfviewer_scaleratio</td>
<td>Scale Ratio</td>
</tr>

<tr>
<td>sfpdfviewer_hyperlink_title</td>
<td>Open Web Page</td>
</tr>

<tr>
<td>sfpdfviewer_hyperlink_open</td>
<td>Open</td>
</tr>

<tr>
<td>sfpdfviewer_hyperlink_message</td>
<td>Do you want to open the page</td>
</tr>

<tr>
<td>sfpdfviewer_hyperlink_cancel</td>
<td>Cancel</td>
</tr>

</table>

To localize the SfPdfViewer, follow the steps in application level:

Create Localizable.strings in resource file in iOS.

Location- ProjectName.iOS/Resources/fr-FR.lproj/Localizable.strings

![SfPdfViewer](pdfviewer_images/iosresources.png)

In below screenshot we have localized the text in PDF Viewer in Xamarin.iOS from English to French language.

![PDF Viewer with localized text](pdfviewer_images/localizationstrings.png)

![PDF Viewer in Xamarin.iOS](pdfviewer_images/localizationoutput.png)