---
layout: post
title: Signature Workflow in ASP.NET MVC PDF Viewer | Syncfusion
description: Add signature fields, configure signing workflows, and apply PKI digital signatures to PDFs in the ASP.NET MVC PDF Viewer.
platform: document-processing
control: PdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Digital Signature Workflows in ASP.NET MVC PDF Viewer

This guide shows how to design signature fields, collect handwritten/typed e‑signatures in the browser, and apply **digital certificate (PKI) signatures** to PDF forms using the ASP.NET MVC PDF Viewer and the .NET PDF Library. Digital signatures provide **authenticity** and **tamper detection**, making them suitable for legally binding scenarios.

## Overview

A **digital signature** is a cryptographic proof attached to a PDF that verifies the signer’s identity and flags any post‑sign changes. It differs from a simple electronic signature (handwritten image/typed name) by providing **tamper‑evidence** and compliance with standards like CMS/PKCS#7. The Syncfusion **.NET PDF Library** exposes APIs to create and validate digital signatures programmatically, while the **ASP.NET MVC PDF Viewer** lets you design signature fields and capture handwritten/typed signatures in the browser.

## Quick Start

Follow these steps to add a **visible digital signature** to an existing PDF and finalize it.

1. **Render the ASP.NET MVC PDF Viewer with Form Designer enabled**

The Viewer requires the **Form Designer** capability to be enabled so that signature fields can be placed and configured.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer")
            .DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf")
            .EnableFormDesigner(true)
            .Render()
    </div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer")
            .ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/"))
            .DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf")
            .EnableFormDesigner(true)
            .Render()
    </div>

{% endhighlight %}
{% endtabs %}

2. **Place a signature field (UI or API)**
   - **UI:** Open **Form Designer** → choose **Signature Field** → click to place → configure properties like required, tooltip, and thickness.
   ![Signature Field](../../javascript-es6/images/ui-signature-edit.png)
   - **API:** Use `formDesignerModule.addFormField('SignatureField', options)` to create a signature field programmatically.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('SignatureField', {
                    name: 'ApproverSignature',
                    pageNumber: 1,
                    bounds: { X: 72, Y: 640, Width: 220, Height: 48 },
                    isRequired: true,
                    tooltip: 'Sign here'
                });
            };
        });
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('SignatureField', {
                    name: 'ApproverSignature',
                    pageNumber: 1,
                    bounds: { X: 72, Y: 640, Width: 220, Height: 48 },
                    isRequired: true,
                    tooltip: 'Sign here'
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

3. **Apply a PKI digital signature (.NET PDF Library)**

The library provides `PdfSignatureField` and `PdfSignature` for PKI signing with algorithms such as **SHA‑256**. Combine the MVC Viewer (signature-field design) with the .NET PDF Library (cryptographic signing) on the server.

```csharp
// Load existing PDF that already contains the signature field designed by the Viewer
using (PdfLoadedDocument document = new PdfLoadedDocument(pdfBytes))
{
    // Get the first page
    PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

    // Create a visible signature field if not already present
    PdfSignatureField signatureField = new PdfSignatureField(page, "ApproverSignature",
        new RectangleF(72, 640, 220, 48));
    document.Form.Fields.Add(signatureField);

    // Create a CMS signature using a PFX (certificate + private key)
    PdfCertificate certificate = new PdfCertificate(pfxPath, password);
    PdfSignature signature = new PdfSignature(document, page, certificate, "ApproverSignature", signatureField);

    signature.Settings.CryptographicStandard = CryptographicStandard.CMS;
    signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;

    // Save the signed document
    using (FileStream output = new FileStream("signed.pdf", FileMode.Create))
    {
        document.Save(output);
    }
    document.Close(true);
}
```

N> For sequential or multi‑user flows and digital signature appearances, see these live demos: [eSigning PDF Form](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/esigning-pdf-forms), [Invisible Signature](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/invisible-digital-signature) and [Visible Signature](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/visible-digital-signature) in the ASP.NET MVC Sample Browser.

## How‑to guides

### Add a signature field (UI)
Use the Form Designer toolbar to place a **Signature Field** where signing is required. Configure indicator text, required state, and tooltip in the properties pane.

 ![Signature Field](../../javascript-es6/images/ui-signature.png)

### Add a signature field (API)

Adds a signature field programmatically at the given bounds.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('SignatureField', {
                    name: 'CustomerSign',
                    pageNumber: 1,
                    bounds: { X: 56, Y: 700, Width: 200, Height: 44 },
                    isRequired: true
                });
            };
        });
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('SignatureField', {
                    name: 'CustomerSign',
                    pageNumber: 1,
                    bounds: { X: 56, Y: 700, Width: 200, Height: 44 },
                    isRequired: true
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Capture handwritten/typed signature in the browser

When users click a signature field at runtime, the Viewer’s dialog lets them **draw**, **type**, or **upload** a handwritten signature image—no plugin required—making it ideal for quick approvals.

  ![Signature Image](../images/handwritten-sign.png)

N> For a ready‑to‑try flow that routes two users to sign their own fields and then finalize, open [eSigning PDF Form](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/esigning-pdf-forms) in the sample browser.

### Apply a PKI digital signature

Use the **.NET PDF Library** to apply a cryptographic signature on a field, with or without a visible appearance. See the **Digital Signature** documentation for additional options (external signing callbacks, digest algorithms, etc.).

N> To preview visual differences, check the [Invisible Signature](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/invisible-digital-signature) and [Visible Signature](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/visible-digital-signature) in our Sample Browser. Digital Signature samples in the ASP.NET MVC sample browser.

### Finalize a signed document (lock)

After collecting all signatures and passing validations, **[Lock](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#lock-signature)** the PDF (and optionally restrict permissions) to prevent further edits.

```csharp
using (PdfLoadedDocument document = new PdfLoadedDocument(signedPdfBytes))
{
    // Restrict editing to prevent further changes after signing
    document.Security.Permissions = PdfPermissionsFlags.Print;

    using (FileStream output = new FileStream("signed-locked.pdf", FileMode.Create))
    {
        document.Save(output);
    }
    document.Close(true);
}
```

## Signature Workflow Best Practices

Designing a well‑structured signature workflow ensures clarity, security, and efficiency when working with PDF documents. Signature workflows typically involve multiple participants—reviewers and approvers each interacting with the document at different stages.

### Why structured signature workflows matter

A clear signature workflow prevents improper edits, guarantees document authenticity, and reduces bottlenecks during review cycles. When multiple stakeholders sign or comment on a document, maintaining order is crucial for compliance, traceability, and preventing accidental overwrites.

### Choosing the appropriate signature type

Different business scenarios require different signature types. Consider the purpose, regulatory requirements, and level of trust demanded by the workflow.

- **Handwritten/typed (electronic) signature** – Best for informal approvals, acknowledgments, and internal flows. (Captured via the Viewer’s signature dialog.)

  ![Handwritten Signature](../images/handwritten-sign.png)

- **Digital certificate signature (PKI)** – Required for legally binding contracts and tamper detection with a verifiable signer identity. (Created with the .NET PDF Library.)

N> You can explore and try out live demos for [Invisible Signature](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/invisible-digital-signature) and [Visible Signature](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/visible-digital-signature) in our Sample Browser.

### Pre‑signing validation checklist

To prevent rework, validate the PDF before enabling signatures:
- Confirm all **required form fields** are completed (names, dates, totals). (See [Form Validation](../forms/form-validation).)
- Re‑validate key values (financial totals, tax calculations, contract amounts).
- Lock or restrict editing during review to prevent unauthorized changes.
- Use [annotations](../annotation/overview) and [comments](../annotation/comments) for clarifications before signing.

### Role‑based authorization flow

- **Reviewer** – Reviews the document and adds [comments/markups](../annotation/comments). Avoid placing signatures until issues are resolved.
  ![Reviewer using highlights and comments](../images/highlight-comments.png)
- **Approver** – Ensures feedback is addressed and signs when finalized.
  ![Signature Image](../images/handwritten-sign.png)
- **Final Approver** – Verifies requirements, then [Lock Signature](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#lock-signature) to make signatures permanent and restrict further edits.

N> **Implementation tip:** Use the PDF Library’s `Flatten` option when saving to make [annotations](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-annotations#flatten-annotations) and [form fields](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-form-fields#flatten-form-fields) permanent before the last signature.

### Multi‑signer patterns and iterative approvals
- Route the document through a defined **sequence of signers**.
- Use [comments and replies](../annotation/comments#add-comments-and-replies) for feedback without altering document content.
- For external participants, share only annotation data (XFDF/JSON) when appropriate instead of the full PDF.
- After all signatures, **[Lock Signature](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature#lock-signature)** to make the file read-only.

N> Refer to [eSigning PDF Forms](https://document.syncfusion.com/demos/pdf-viewer/asp-net-mvc/pdfviewer/esigning-pdf-forms) sample that shows two signers filling only their designated fields and finalizing the document.

### Security, deployment, and audit considerations

- **Restrict access:** Enforce authentication and role‑based permissions.
- **Secure endpoints:** Protect PDF endpoints with token‑based access and authorization checks.
- **Audit and traceability:** Log signature placements, edits, and finalization events for compliance and audits.
- **Data protection:** Avoid storing sensitive PDFs on client devices; prefer secure server storage and transmission.
- **Finalize:** After collecting all signatures, lock to prevent edits.

## See also
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Digital Signature - .NET PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature)
- [Handwritten Signature](../annotation/signature-annotation)
- [Form Fields API](../forms/form-fields-api)
- [Add Digital Signature](./add-digital-signature-mvc)
- [Customize Signature Appearance](./customize-signature-appearance)
- [Validate Digital Signatures](./validate-digital-signatures-mvc)
