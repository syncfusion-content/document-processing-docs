---
title: Detect Document Type in .NET Smart Data Extractor | Syncfusion
description: Detect and classify document types from PDFs and images using Smart Data Extractor. The DetectDocumentType API automatically identifies the document category.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Detect Document Type, Document Classification, Document Detection

---

# Detect Document Type in .NET Smart Data Extractor

## Detect Document Type from PDF

The Syncfusion<sup>&reg;</sup> Smart Data Extractor library enables document type detection from PDF documents and images. The DetectDocumentType API examines document content to determine its type.

This feature is useful for automated document processing workflows where you need to classify incoming documents before extracting specific data or routing them to appropriate processing pipelines.

To detect document type, use the following code snippet:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect document type.
    string documentType = extractor.DetectDocumentType(stream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Detect document type.
    string documentType = extractor.DetectDocumentType(stream);
}
			
{% endhighlight %}

{% endtabs %}

N> The DetectDocumentType API returns the detected document type as a string, enabling intelligent document routing and automated processing in document management systems.

## Customize Document Type Detection

The SmartDataExtractor provides a customizable document type detection system through the `DocumentTypes` property. You can add custom document types, modify keywords for existing types, and control which document types are recognized during detection.

### Built-in Document Types

The following document types are supported by default:

| Document Type | Keywords |
|---|---|
| **Invoice** | invoice no, invoice, invoice number, inv no, invoice to, invoice to:, bill to, order id, order id:, invoice date, order date, order date:, date, vendor name, vendor, total amount, amount, invoice total, gross total, net total, subtotal, supplier, product id, quantity, unit price, price |
| **Receipt** | receipt no, receipt, receipt id, receipt number, receipt date, store name, merchant name, amount, total, receipt total, payment method, register, transaction id, clerk |
| **Contract** | contract no, contract, contract number, contract id, effective date, parties, contract value, agreement date, start date, end date, terms, clause, signature, signatory, vendor, vendor address |
| **LeaseAgreement** | lease no, agreement, lease, lease number, lease id, tenant name, tenant, landlord name, landlord, lease start date, start date, lease end date, end date, lease date, rental amount, rent, property address, address |
| **InsuranceClaim** | claim, claim no, claim no:, claim number, claim id, policy no, policy number, policy id, claim date, insured name, insured, insurance, policy, claim amount, coverage amount, deductible, claim status, types of claim:, claim details |
| **IDDocument** | id no, id, id number, document number, first name, last name, full name, date of birth, D.O.B:, birth date, issue date, issued, expiry date, expires, expiration, valid from, sex, Nat.Id:, valid to, gender, nationality |
| **Form** | form, form number, form id, form type, application form, submission date, submitted, applicant name, applicant, application, field name, field, checkbox, signature, date filled, status, instructions, required field, section, reference number, form revision, version, form version, tax, service, services, taxable, tax information, report type, report |

### Access Document Types

The `DocumentTypes` collection is accessible through the `DataExtractor` instance:

```csharp
DataExtractor extractor = new DataExtractor();

// Access the collection (lazily initialized on first access)
DocumentTypeDefinitionCollection definitions = extractor.DocumentTypes;
```

### Add Custom Document Types

Add a new custom document type with specific keywords:

```csharp
DataExtractor extractor = new DataExtractor();

// Add a custom document type with keywords
extractor.DocumentTypes.Add("PurchaseOrder", new[] { 
    "purchase order", 
    "po #", 
    "po number", 
    "vendor", 
    "amount", 
    "total" 
});

// Detect document type - will now recognize PurchaseOrder documents
string docType = extractor.DetectDocumentType(stream);
```

**Notes:**

- Custom types are added to the collection alongside built-in types
- Keywords are case-insensitive during detection
- Document type names cannot be empty or white space
- The name "Unknown" is reserved and cannot be used
- Duplicate type names cannot be added

### Modify Existing Keywords

Access and modify keywords for any document type (built-in or custom):

```csharp
DataExtractor extractor = new DataExtractor();

// Get an existing definition
DocumentTypeDefinition invoice = extractor.DocumentTypes["Invoice"];

// Modify its keywords
invoice.Keywords.Add("bill no");
invoice.Keywords.Add("invoice amount");

// Remove a keyword if needed
invoice.Keywords.Remove("date");
```

### Remove Document Types

Remove a document type from the collection:

```csharp
DataExtractor extractor = new DataExtractor();

// Remove a built-in or custom type
bool removed = extractor.DocumentTypes.Remove("LeaseAgreement");

if (removed)
{
    Console.WriteLine("LeaseAgreement type removed");
}

// After removal, documents will be detected as a different matching type or "Unknown"
```

### Check if Type Exists

Verify whether a document type is in the collection:

```csharp
DataExtractor extractor = new DataExtractor();

// Check if a type exists (case-insensitive)
if (extractor.DocumentTypes.Contains("Invoice"))
{
    Console.WriteLine("Invoice type is available");
}
```

### Reset to Built-in Types

Restore all built-in document types and remove custom types:

```csharp
DataExtractor extractor = new DataExtractor();

// Make customizations
extractor.DocumentTypes.Add("PurchaseOrder", new[] { "po #", "vendor" });
extractor.DocumentTypes.Remove("Receipt");

// Reset to original state
extractor.DocumentTypes.Reset();

// Now only built-in types are available
```

### Iterate Over All Types

Enumerate all document types in the collection:

```csharp
DataExtractor extractor = new DataExtractor();

foreach (DocumentTypeDefinition definition in extractor.DocumentTypes)
{
    Console.WriteLine($"Type: {definition.Name}");
    Console.WriteLine($"Keywords ({definition.Keywords.Count}): ");
    foreach (string keyword in definition.Keywords)
    {
        Console.WriteLine($"  - {keyword}");
    }
    Console.WriteLine();
}
```
