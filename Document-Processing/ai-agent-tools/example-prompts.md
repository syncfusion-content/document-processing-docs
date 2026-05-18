---
layout: post
title: Example Prompts | AI Agent Tools | Syncfusion
description: Explore example prompts for Syncfusion Document SDK AI Agent Tools to automate document processing tasks with AI agents.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Example Prompts - AI Agent Tools

Speed up your document automation using these example prompts for Syncfusion Document SDK AI Agent Tools. Each prompt demonstrates real-world scenarios-like document operation, data extraction, conversion, and manipulation.

## Document Processing Prompts

### PDF

{% promptcards %}
{% promptcard Find Text and Its Coordinates %}
Load the insurance policy document ‘policy_document.pdf’ from {InputDir}. Then search for all occurrences of the term ‘exclusion’ and return their exact page locations and bounding rectangle positions so our legal team can quickly audit every exclusion clause in the policy.
{% endpromptcard %}
{% promptcard Redact Specific Text in PDF %}
Load the court filing document ‘case_filing.pdf’ from {InputDir} and Find the Text ‘John Michael’ and ‘Ellwood Drive, Austin, TX 78701’ and ‘472-90-1835’.  Permanently redact all identifiable information. Use black highlight color for all redactions. Export the redacted document as ‘case_filing_redacted.pdf’ to {OutputDir}.
{% endpromptcard %}
{% promptcard Sign PDF with Digital Signature %}
Load the vendor contract ‘vendor_agreement_draft.pdf’ from {InputDir} and apply a digital signature using the company certificate ‘certificate.pfx’ (located at {InputDir}) with the password ‘password123’. Place the signature in the bottom-right corner of the last page and use the company logo ‘signature_logo.png’ from {InputDir} as the signature appearance image. Export the signed contract as ‘vendor_agreement_signed.pdf’ to {OutputDir}.
{% endpromptcard %}
{% promptcard Merge and Reorder PDF Pages %}
Merge the following monthly financial reports into a single consolidated annual report: ‘Jan_report.pdf’, ‘Feb_report.pdf’, ‘Mar_report.pdf’, ‘Apr_report.pdf’, ‘May_report.pdf’, ‘Jun_report.pdf’ - all located at {InputDir}. Each PDF has 3 pages, with the last page being the executive summary. After merging, reorder pages so each month’s summary page appears first, followed by the other two pages, while keeping January–June chronological order. Save the final file as annual_report_2025.pdf in {OutputDir}.
{% endpromptcard %}
{% promptcard Encrypt PDF with Permissions %}
Load the sensitive HR performance review document 'performance_review_Q4.pdf' from {InputDir}. Encrypt it using AES-256 encryption with the password 'HR@Secure2025'. Restrict permissions so that only reading and accessibility copy operations are allowed - disable printing, editing, and annotation. Export the secured document as 'performance_review_Q4_secured.pdf' to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### Word

{% promptcards %}
{% promptcard Merge Word Documents %}
Assemble the annual company report by merging the following department Word documents from {InputDir} in order: 'cover_page.docx', 'executive_summary.docx', 'finance_report.docx', 'hr_report.docx', 'operations_report.docx', and 'appendix.docx'. Merge them all into 'cover_page.docx' using destination styles to maintain a consistent look. Export the final assembled report as 'annual_report_2025.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Execute Mail Merge %}
Load the employee Onboarding letter template 'Onboarding_template.docx' from {InputDir} and execute a mail merge using the new hire data from the file 'new_hire_data.json' located at {InputDir}. Export the merged letters as 'Onboarding_letters_april2026.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Find and Replace Text %}
Load the legal service agreement template 'service_agreement_template.docx' from {InputDir}. Replace the placeholder '[CLIENT_NAME]' with 'Apex Innovations Ltd.', '[SERVICE_FEE]' with '$18,500', and '[CONTRACT_DATE]' with 'April 1, 2026'. Additionally, use a regex pattern to find all date placeholders matching the pattern '\[DATE_[A-Z]+\]' and replace them with 'TBD'. Return the total count of all replacements made. Export the finalized agreement as 'service_agreement_apex.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Convert Markdown to Word %}
Our developer wrote the API release notes in Markdown format - load the file 'release_notes_v3.2.md' from {InputDir}, import it into a new Word document to convert it into a properly formatted .docx file suitable for distribution to non-technical stakeholders. Export the document as 'release_notes_v3.2.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Fill Form Fields %}
Load the patient intake form 'patient_intake_form.docx' from {InputDir}. First, read all current form field values to see what fields are available. Then set the form with the following patient information: PatientName='Robert Hayes', DateOfBirth='03/12/1978', Gender='Male', ContactNumber='+1 (214) 555-7834', EmailAddress='robert.hayes@example.com', Address='4567 Elm Street, Apt 210, Dallas, TX 75201, United States', InsuranceProvider='Blue Cross Blue Shield', InsuranceID='INS-4892-XY', InsuranceGroupNumber='GRP-10293', Diabetes = "true", EmergencyContact='Laura Hayes', EmergencyRelation='Spouse', EmergencyPhone='+1 (214) 555-4466', Declaration = 'true', PatientSignature='Robert Hayes', FormDate='04/02/2026'. Export the completed form as 'Intake_Form_Robert_Hayes.docx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Split Document by Bookmarks %}
Load the comprehensive legal contract bundle 'master_contracts_2026.docx' from {InputDir}. List all bookmarks in the document to identify the section boundaries. Split the document by bookmarks so that each bookmarked region - such as 'VendorAgreement', 'NDASection', and 'SLATerms' - becomes a standalone contract file. Export each split document to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### Excel

{% promptcards %}
{% promptcard Add Dropdown List for a Specific Range %}
Load a sales performance dashboard workbook ‘sales_dashboard_Q1_2026.xlsx’ from {InputDir}. Add a worksheet named ‘DataValidation’ and create the List validation in the A1:B3 range and the list names "Excel", "Presentation", "Word", "PDF". Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard Apply Conditional Formatting to Highlight %}
Load an inventory management workbook ‘inventory_status.xlsx’ from {InputDir}. Get the "Stock_Levels" sheet and apply conditional formatting to the Reorder_point column (D2:D11): highlight cells in red where the value is less than the reorder threshold (use 10 as the formula threshold for the conditional format). Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard Protect Worksheet and Workbook %}
Load a confidential board-level financial model workbook ‘board_financial_model_2026.xlsx’ from {InputDir}. Protect the Assumptions and Projections worksheets with the password ‘ModelLock@2026’ to prevent unauthorized edits to the model logic. Protect the overall workbook structure with the password ‘Board@2026’ to prevent adding or deleting sheets. Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard Create Pivot Table %}
Load a sales analysis workbook ‘sales_pivot_analysis.xlsx’ from {InputDir}. Create new worksheet named as "Pivot_table" and create a pivot table at cell A3 and use the data from 'Raw_Data' sheet and the range A1:F13. use Region as the row field (index 1), Product as the column field (index 3), and Revenue as the data field (index 5) with a Sum subtotal. Apply the built-in style ‘PivotStyleMedium2’ to the pivot table and layout the pivot to materialize the values. Export the workbook to {OutputDir}.
{% endpromptcard %}
{% promptcard Create Chart and Convert to PDF %}
Load a sales performance dashboard workbook ‘car_brands.xlsx’ from {InputDir}. Create a clustered column chart from the `Car_Brands’ sheet data range A1:C10, positioning it in rows 12–35 and columns 1–10. Set the chart title to ‘Premium car sales’, set the category axis title to ‘Brands’, and the value axis title to ‘Price (USD)’. Enable the chart legend at the bottom. Convert the workbook into a PDF to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### PowerPoint

{% promptcards %}
{% promptcard Find and Replace Text %}
Load the product launch presentation 'product_launch_template.pptx' from {InputDir}. The presentation is a reusable template - replace all occurrences of '[PRODUCT_NAME]' with 'Orion Pro X1', '[LAUNCH_DATE]' with 'May 15, 2026', '[PRICE]' with '$299', and '[TARGET_MARKET]' with 'Enterprise Customers'. Export the customized presentation as 'product_launch_orion_pro_x1.pptx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Merge Presentations %}
Assemble the annual all-hands meeting presentation by merging the following department slide decks from {InputDir} into the master deck 'all_hands_master.pptx', preserving each department's source formatting: 'chief_executive_officer_intro.pptx', 'finance_update.pptx', 'product_road_map.pptx', 'hr_highlights.pptx', 'engineering_wins.pptx'. Export the complete merged presentation as 'all_hands_annual_2026.pptx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Encrypt Presentation %}
Load the confidential M&A strategy presentation 'ma_strategy_2026.pptx' from {InputDir}. Encrypt it with the password 'MAStrategy@Conf2026' to ensure only authorized executives can open it. Export the encrypted file as 'ma_strategy_2026_encrypted.pptx' to {OutputDir}.
{% endpromptcard %}
{% promptcard Export Slides as Images %}
Load the product demo presentation 'product_demo_v3.pptx' from {InputDir}. Export all slides as individual PNG images to {OutputDir} so the marketing team can use them as standalone visual assets for social media and documentation.
{% endpromptcard %}
{% promptcard Extract Text with Slide Count %}
Load the investor pitch deck 'investor_pitch_Q1_2026.pptx' from {InputDir}. Get the total slide count to confirm it's complete. Extract all text content from the presentation so we can review the messaging before the meeting. Return the slide count and full text content.
{% endpromptcard %}
{% endpromptcards %}

### Conversions

{% promptcards %}
{% promptcard Convert Word to PDF and Add Watermark %}
Load the signed vendor contract 'vendor_contract_final.docx' from {InputDir}, convert it to PDF for archiving purposes, and then apply a 'ARCHIVED' watermark with 30% opacity across all pages of the resulting PDF. Export the archived PDF as 'vendor_contract_final_archived.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard Convert Excel to Secure PDF %}
Load the annual financial summary workbook 'financial_summary_2025.xlsx' from {InputDir}, convert it to PDF for board distribution, then restrict permissions to read-only (no printing or editing) and encrypt the resulting PDF with the password ‘Board@Secure2025’. Export the secured financial report as 'financial_summary_2025_board.pdf' to {OutputDir}.
{% endpromptcard %}
{% promptcard Convert PowerPoint to PDF and Merge %}
Convert the sales conference presentation 'sales_conference_2026.pptx' from {InputDir} to PDF format. Save the converted PDF as 'sales_conference_2026.pdf' in {InputDir}. Then merge the converted presentation PDF with the existing supplementary materials PDF 'conference_appendix.pdf' (also located in {InputDir}) into a single unified conference package. Finally, export the combined merged document as 'sales_conference_package_2026.pdf' to {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

### Data Extraction

{% promptcards %}
{% promptcard Extract All Data from PDF as JSON %}
Extract all structured data from the PDF document ‘conversion_demo.pdf’ located at {InputDir}. Enable both form and table detection . Use a confidence threshold of 0.6 for reliable results. Save the extracted JSON to ‘conversion_demo_data.json’ in {OutputDir}.
{% endpromptcard %}
{% promptcard Extract Tables from PDF as JSON %}
Extract only the table data from the quarterly financial report ‘table_conversion_demo.pdf’ located at {InputDir}. Enable border less table detection to ensure all tables are captured even if they lack visible borders. Use a confidence threshold of 0.3. Save the extracted table data as ‘table_conversion_demo.json’ in {OutputDir}.
{% endpromptcard %}
{% endpromptcards %}

## See also

* [Tools](./tools)
* [Getting Started](./getting-started)
* [Customization](./customization)
* [Overview](./overview)
* [Example Use Cases](./example-use-cases)