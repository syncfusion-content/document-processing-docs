---
layout: post
title: Example Prompts | AI Agent Tools | Syncfusion
description: Explore example prompts for Syncfusion Document SDK AI Agent Tools to automate document processing tasks with AI agents.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Example Prompts - AI Agent Tools

Speed up your document automation using these example prompts for Syncfusion Document SDK AI Agent Tools. Each prompt demonstrates real-world scenarios—like document creation, data extraction, conversion, and manipulation.

## Document Processing Prompts

### PDF

Create, manipulate, secure, extract content from, and perform OCR on PDF documents using AI Agent Tools.

{% promptcards columns=1 %}
{% promptcard CreatePdfDocument, ExtractText, FindTextInPdf, ExportPDFDocument %}
Load the insurance policy document 'policy_document.pdf' from {InputDir}. Extract all text content from the document. Then search for all occurrences of the term 'exclusion' and return their exact page locations and bounding rectangle positions so our legal team can quickly audit every exclusion clause in the policy.
{% endpromptcard %}
{% promptcard  CreatePdfDocument, FindTextInPdf, RedactPdf, ExportPDFDocument %}
Load the court filing document 'case_filing.pdf' from {InputDir}. Permanently redact all personally identifiable information: on page 1, redact the name 'John Michael' and the address '4821 Ellwood Drive, Austin, TX 78701'; on page 3, redact the social security number '472-90-1835'. Use black highlight color for all redactions. Export the redacted document as 'case_filing_redacted.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreatePdfDocument, SignPdf, ExportPDFDocument %}
Load the vendor contract 'vendor_agreement_draft.pdf' from {InputDir} and apply a digital signature using the company certificate 'certificate.pfx' (located at {InputDir}) with the password 'password123'. Place the signature in the bottom-right corner of the last page and use the company logo 'signature_logo.png' from {InputDir} as the signature appearance image. Export the signed contract as 'vendor_agreement_signed.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard MergePdfs, ReorderPdfPages, ExportPDFDocument %}
Merge the following monthly financial reports into a single consolidated annual report: 'Jan_report.pdf', 'Feb_report.pdf', 'Mar_report.pdf', 'Apr_report.pdf', 'May_report.pdf', 'Jun_report.pdf' — all located at {InputDir}. After merging, reorder the pages so the executive summary (currently the last page) appears first, followed by the monthly reports in chronological order. Export the final document as 'annual_report_2025.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreatePdfDocument, EncryptPdf, SetPermissions, ExportPDFDocument %}
Load the sensitive HR performance review document 'performance_review_Q4.pdf' from {InputDir}. Encrypt it using AES-256 encryption with the password 'HR@Secure2025'. Restrict permissions so that only reading and accessibility copy operations are allowed — disable printing, editing, and annotation. Export the secured document as 'performance_review_Q4_secured.pdf' to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### Word

Create, edit, protect, mail-merge, track changes, and manage form fields in Word documents.

{% promptcards columns=1 %}
{% promptcard CreateDocument, MergeDocuments, ExportDocument %}
Assemble the annual company report by merging the following department Word documents from {InputDir} in order: 'cover_page.docx', 'executive_summary.docx', 'finance_report.docx', 'hr_report.docx', 'operations_report.docx', and 'appendix.docx'. Merge them all into 'cover_page.docx' using destination styles to maintain a consistent look. Export the final assembled report as 'annual_report_2025.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateDocument, ExecuteMailMerge, ExportDocument %}
Load the employee Onboarding letter template 'Onboarding_template.docx' from {InputDir} and execute a mail merge using the new hire data from the file 'new_hire_data.json' located at {InputDir}. Export the merged letters as 'Onboarding_letters_april2026.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateDocument, FindAndReplace, FindAndReplaceWithRegex, ExportDocument %}
Load the legal service agreement template 'service_agreement_template.docx' from {InputDir}. Replace the placeholder '[CLIENT_NAME]' with 'Apex Innovations Ltd.', '[SERVICE_FEE]' with '$18,500', and '[CONTRACT_DATE]' with 'April 1, 2026'. Additionally, use a regex pattern to find all date placeholders matching the pattern '\[DATE_[A-Z]+\]' and replace them with 'TBD'. Return the total count of all replacements made. Export the finalized agreement as 'service_agreement_apex.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateDocument, ImportMarkdown, ExportDocument %}
Our developer wrote the API release notes in Markdown format — load the file 'release_notes_v3.2.md' from {InputDir}, import it into a new Word document to convert it into a properly formatted .docx file suitable for distribution to non-technical stakeholders. Export the document as 'release_notes_v3.2.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateDocument, GetFormData, SetFormFields, ExportDocument %}
Load the patient intake form 'patient_intake_form.docx' from {InputDir}. First, read all current form field values to see what fields are available. Then set the form with the following patient information: PatientName='Robert Hayes', DateOfBirth='03/12/1978', Gender='Male', ContactNumber='+1 (214) 555-7834', EmailAddress='robert.hayes@example.com', Address='4567 Elm Street, Apt 210, Dallas, TX 75201, United States', InsuranceProvider='Blue Cross Blue Shield', InsuranceID='INS-4892-XY', InsuranceGroupNumber='GRP-10293', Diabetes = "true", EmergencyContact='Laura Hayes', EmergencyRelation='Spouse', EmergencyPhone='+1 (214) 555-4466', Declaration = 'true', PatientSignature='Robert Hayes', FormDate='04/02/2026'. Export the completed form as 'Intake_Form_Robert_Hayes.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateDocument, GetBookmarks, SplitDocument, ExportDocument %}
Load the comprehensive legal contract bundle 'master_contracts_2026.docx' from {InputDir}. List all bookmarks in the document to identify the section boundaries. Split the document by bookmarks so that each bookmarked region — such as 'VendorAgreement', 'NDASection', and 'SLATerms' — becomes a standalone contract file. Export each split document to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### Excel

Create and manage workbooks, worksheets, apply formulas, charts, conditional formatting, and data validation.

{% promptcards columns=1 %}
{% promptcard CreateWorkbook, CreateWorksheet, SetValue, SetFormula, CreateChart, SetChartElements, ExportWorkbook %}
Create a sales performance dashboard workbook 'sales_dashboard_Q1_2026.xlsx'. Add a worksheet named 'Sales_Data' and populate it with the following Q1 data — headers: (Region, January, February, March, Q1_Total); rows: North (42000, 45000, 51000), South (38000, 40000, 44000), East (55000, 58000, 63000), West (29000, 31000, 35000) — and add Q1_Total formulas summing January through March for each region. Then create a clustered bar chart from the data range A1:D5, positioning it in rows 8–23 and columns 1–8. Set the chart title to 'Q1 2026 Regional Sales Performance', set the category axis title to 'Region', and the value axis title to 'Revenue (USD)'. Enable the chart legend at the bottom. Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateWorkbook, CreateWorksheet, SetValue, AddConditionalFormat, SetFormula, ExportWorkbook %}
Create an inventory management workbook 'inventory_status.xlsx' with a worksheet named 'Stock_Levels'. Add headers (SKU, Product_Name, Category, In_Stock, Reorder_Point, Status) and populate it with 10 product rows across Electronics, Furniture, and Stationery categories with realistic stock and reorder data. Add a formula in the Status column that returns 'Reorder' when In_Stock is less than Reorder_Point and 'OK' otherwise. Apply conditional formatting to the In_Stock column (D2:D11): highlight cells in red where the value is less than the reorder threshold (use 10 as the formula threshold for the conditional format). Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateWorkbook, CreateWorksheet, SetValue, SetFormula, ProtectWorksheet, ProtectWorkbook, ExportWorkbook %}
Create a confidential board-level financial model workbook 'board_financial_model_2026.xlsx' with three worksheets: 'Assumptions', 'Projections', and 'Summary'. In the Assumptions sheet, add key input values (growth rate, cost ratio, tax rate, discount rate). In Projections, add a 5-year revenue model with formulas referencing the Assumptions sheet. In the Summary sheet, add KPIs calculated from the Projections sheet. Protect the Assumptions and Projections worksheets with the password 'ModelLock@2026' to prevent unauthorized edits to the model logic. Protect the overall workbook structure with the password 'Board@2026' to prevent adding or deleting sheets. Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateWorkbook, CreateWorksheet, SetValue, SetFormula, CalculateFormulas, ExportWorkbook %}
Create a new Excel workbook 'budget_tracker_2026.xlsx' with two worksheets named 'Revenue' and 'Expenses'. In the Revenue sheet, add headers (Month, Product_A, Product_B, Product_C, Total) and populate data for January through June with realistic monthly revenue figures. Add a SUM formula in the Total column for each row. In the Expenses sheet, add headers (Month, Salaries, Marketing, Operations, Total) and populate similar monthly data with SUM formulas in the Total column. Force a full formula recalculation to verify all totals. Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateWorkbook, CreateWorksheet, SetValue, SetFormula, CreatePivotTable, ExportWorkbook %}
Create a sales analysis workbook 'sales_pivot_analysis.xlsx'. In a worksheet named 'Raw_Data', add the following headers: (SaleDate, Region, Salesperson, Product, Units, Revenue) and populate it with at least 12 rows of realistic Q1 2026 sales transactions spanning 3 regions, 4 salespersons, and 3 products. Then create a pivot table in a new worksheet named 'Pivot_Summary' at cell A3 named 'RegionalSummary' — use Region as the row field (index 1), Product as the column field (index 3), and Revenue as the data field (index 5) with a Sum subtotal. Export the workbook to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### PowerPoint

Load, merge, split, secure, and extract content from PowerPoint presentations.

{% promptcards columns=1 %}
{% promptcard LoadPresentation, FindAndReplace, ExportPresentation %}
Load the product launch presentation 'product_launch_template.pptx' from {InputDir}. The presentation is a reusable template — replace all occurrences of '[PRODUCT_NAME]' with 'Orion Pro X1', '[LAUNCH_DATE]' with 'May 15, 2026', '[PRICE]' with '$299', and '[TARGET_MARKET]' with 'Enterprise Customers'. Export the customized presentation as 'product_launch_orion_pro_x1.pptx' to {OutputDir}.
{% endpromptcard %}
{% promptcard LoadPresentation, MergePresentations, ExportPresentation %}
Assemble the annual all-hands meeting presentation by merging the following department slide decks from {InputDir} into the master deck 'all_hands_master.pptx', preserving each department's source formatting: 'chief_executive_officer_intro.pptx', 'finance_update.pptx', 'product_road_map.pptx', 'hr_highlights.pptx', 'engineering_wins.pptx'. Export the complete merged presentation as 'all_hands_annual_2026.pptx' to {OutputDir}.
{% endpromptcard %}
{% promptcard LoadPresentation, EncryptPresentation, ExportPresentation %}
Load the confidential M&A strategy presentation 'ma_strategy_2026.pptx' from {InputDir}. Encrypt it with the password 'MAStrategy@Conf2026' to ensure only authorized executives can open it. Export the encrypted file as 'ma_strategy_2026_encrypted.pptx' to {OutputDir}.
{% endpromptcard %}
{% promptcard LoadPresentation, ExportAsImage, ExportPresentation %}
Load the product demo presentation 'product_demo_v3.pptx' from {InputDir}. Export all slides as individual PNG images to {OutputDir} so the marketing team can use them as standalone visual assets for social media and documentation. Also export the original presentation to {OutputDir} as a backup.
{% endpromptcard %}
{% promptcard LoadPresentation, GetSlideCount, GetText, ExportPresentation %}
Load the investor pitch deck 'investor_pitch_Q1_2026.pptx' from {InputDir}. Get the total slide count to confirm it's complete. Extract all text content from the presentation so we can review the messaging before the meeting. Return the slide count and full text content.
{% endpromptcard %}
{% endpromptcards %}

### Conversions

Convert documents between different formats including Word, Excel, and PowerPoint to PDF.

{% promptcards columns=1 %}
{% promptcard CreateDocument (Word), ConvertToPDF, WatermarkPdf, ExportPDFDocument %}
Load the signed vendor contract 'vendor_contract_final.docx' from {InputDir}, convert it to PDF for archiving purposes, and then apply a 'ARCHIVED' watermark with 30% opacity across all pages of the resulting PDF. Export the archived PDF as 'vendor_contract_final_archived.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard CreateWorkbook (Excel), ConvertToPDF, EncryptPdf, ExportPDFDocument %}
Load the annual financial summary workbook 'financial_summary_2025.xlsx' from {InputDir}, convert it to PDF for board distribution, then encrypt the resulting PDF with the password 'Board@Secure2025' and restrict permissions to read-only (no printing or editing). Export the secured financial report as 'financial_summary_2025_board.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard LoadPresentation (PowerPoint), ConvertToPDF, MergePdfs, ExportPDFDocument %}
Convert the sales conference presentation 'sales_conference_2026.pptx' from {InputDir} to PDF. Then merge the converted PDF with the existing supplementary materials PDF 'conference_appendix.pdf' (also at {InputDir}) into a single unified conference package. Export the combined document as 'sales_conference_package_2026.pdf' to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### Data Extraction

Extract structured data including text, tables, forms, and checkboxes from PDFs and images as JSON.

{% promptcards columns=1 %}
{% promptcard ExtractDataAsJSON %}
Extract all structured data from the vendor invoice 'invoice_APR2026_00142.pdf' located at {InputDir}. Enable both form and table detection to capture invoice header fields (vendor name, invoice number, date, due date) and the line-item table (description, quantity, unit price, total). Use a confidence threshold of 0.7 for reliable results. Save the extracted JSON to 'invoice_APR2026_00142_data.json' in {OutputDir}.
{% endpromptcard %}
{% promptcard ExtractTableAsJSON %}
Extract only the table data from the quarterly financial report 'financial_report_Q1_2026.pdf' located at {InputDir}. The report contains multiple financial tables across 15 pages — enable border less table detection to ensure all tables are captured even if they lack visible borders. Use a confidence threshold of 0.65. Save the extracted table data as 'financial_tables_Q1_2026.json' in {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

## See also

* [Tools](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools)
* [Getting Started](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/getting-started)
* [Customization](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/customization)
* [Overview](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/overview)
