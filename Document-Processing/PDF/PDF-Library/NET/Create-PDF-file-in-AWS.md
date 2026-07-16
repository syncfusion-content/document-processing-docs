---
title: Create or Generate PDF document in AWS | Syncfusion
description: Learn how to create or generate a PDF file in AWS using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: aws create pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create a PDF File in Amazon Web Services (AWS)

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents programmatically in AWS without the dependency of Adobe Acrobat. This guide demonstrates how to generate PDF documents using AWS Lambda serverless functions integrated with S3 for scalable, cost-effective PDF processing.

> **Note**: This guide focuses on AWS Lambda (.NET 6.0+) for serverless PDF generation. For traditional EC2 instance deployment of ASP.NET Core applications, refer to general [ASP.NET Core deployment documentation](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/). For first-time AWS users, see [AWS Getting Started](https://aws.amazon.com/getting-started/) resources.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **AWS Account** | Active Amazon Web Services account with billing enabled |
| **IDE** | Visual Studio 2022 or Visual Studio Code with AWS extensions |
| **AWS Tools** | AWS Toolkit for Visual Studio or AWS CLI v2 with configured credentials |
| **.NET Version** | .NET 6.0+, .NET 7.0, or .NET 8.0 (Lambda runtime requirements) |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **AWS Services** | AWS Lambda (compute), S3 (storage), IAM (permissions) |
| **IAM Permissions** | Lambda execution role with S3 read/write permissions |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |

## AWS Toolkit Installation

**For Visual Studio:**
1. In Visual Studio, go to **Extensions → Manage Extensions**
2. Search for "AWS Toolkit for Visual Studio 2022"
3. Download and install; restart Visual Studio to activate

**For Visual Studio Code:**
1. Install the "AWS Toolkit" extension from the VS Code Marketplace
2. Configure AWS credentials: Run `aws configure` in terminal and enter AWS Access Key and Secret

**AWS CLI Setup:**
```bash
# Install AWS CLI v2
# Visit: https://aws.amazon.com/cli/

# Configure credentials
aws configure
# Enter: AWS Access Key ID, Secret Access Key, Region (e.g., us-east-1), Output format (json)
```

## License Registration

Starting with Syncfusion v16.2.0.x, a license key is required. In your Lambda function, register the license before creating PDFs:

```csharp
// At Lambda handler startup (before creating PdfDocument)
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

> **Important**: Store the license key securely using AWS Secrets Manager or Systems Manager Parameter Store. Never hardcode keys in source code. Obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license).

## AWS Services Overview

| AWS Service | Purpose | Details |
|-------------|---------|---------|
| **AWS Lambda** | Compute | Serverless function execution; runs .NET 6.0+ code on-demand |
| **Amazon S3** | Storage | Stores generated PDF documents; integrates with Lambda for input/output |
| **AWS IAM** | Security | Manages permissions; Lambda execution role controls service access |
| **CloudWatch** | Monitoring | Logs Lambda execution details; tracks errors and performance |

## Creating PDF in AWS Lambda

### Step 1: Set Up AWS Lambda IAM Role

Create an IAM role for Lambda with S3 and CloudWatch permissions:

1. Go to **AWS Console → IAM → Roles → Create role**
2. Choose **AWS Lambda** as the trusted service
3. Attach these managed policies:
   - `AWSLambdaBasicExecutionRole` (CloudWatch Logs)
   - Create custom policy for S3 access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

4. Name the role (e.g., `LambdaPDFRole`) and create it

### Step 2: Create S3 Bucket for PDFs

1. Go to **AWS Console → S3 → Create bucket**
2. Enter bucket name (e.g., `pdf-generation-bucket`)
3. Use default settings and create
4. Note the bucket name; you'll reference it in Lambda code

### Step 3: Create Lambda Function

**Option A: Using AWS Toolkit in Visual Studio**

1. Open **AWS Explorer** in Visual Studio
2. Right-click **Lambda** → **Create New AWS Lambda Function**
3. Select **.NET 8** runtime
4. Create function (e.g., `CreatePDFDocument`)
5. Choose `Empty Function` template

**Option B: Using AWS Console**

1. Go to **AWS Console → Lambda → Create function**
2. Function name: `CreatePDFDocument`
3. Runtime: **.NET 8** (x86_64)
4. Execution role: Select the role created in Step 1
5. Create function

### Step 4: Add NuGet Package

In your Lambda project, add the Syncfusion PDF package:

```bash
dotnet add package Syncfusion.Pdf.NET
```

### Step 5: Implement Lambda Function Handler

Replace the default code with this PDF generation handler:

```csharp
using Amazon.Lambda.Core;
using Amazon.S3;
using Amazon.S3.Model;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using System.Collections.Generic;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace PDFGenerationLambda;

public class Function
{
    private readonly IAmazonS3 _s3Client = new AmazonS3Client();
    private const string BucketName = "your-bucket-name"; // Replace with your bucket

    public async Task<string> FunctionHandler(ILambdaContext context)
    {
        try
        {
            context.Logger.LogLine("PDF generation started.");
            
            // Register Syncfusion license
            Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

            // Generate PDF
            using (PdfDocument document = new PdfDocument())
            {
                document.PageSettings.Size = PdfPageSize.A4;
                PdfPage page = document.Pages.Add();
                PdfGraphics graphics = page.Graphics;

                // Draw header
                PdfStandardFont titleFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 20, PdfFontStyle.Bold);
                graphics.DrawString("Adventure Works Cycles", titleFont, PdfBrushes.Black, new PointF(150, 50));

                // Draw description
                string text = "Adventure Works Cycles is a multinational manufacturing company that produces bicycles for commercial markets.";
                PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 12));
                textElement.Draw(page, new RectangleF(0, 100, page.GetClientSize().Width, page.GetClientSize().Height));

                // Create product table
                List<object> productData = new List<object>
                {
                    new { Product_ID = "1001", Product_Name = "Bicycle", Price = "$10,000" },
                    new { Product_ID = "1002", Product_Name = "Head Light", Price = "$3,000" },
                    new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "$1,500" },
                    new { Product_ID = "1004", Product_Name = "Pedal Set", Price = "$2,000" },
                    new { Product_ID = "1005", Product_Name = "Chain", Price = "$500" }
                };

                PdfGrid grid = new PdfGrid();
                grid.DataSource = productData;
                grid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);
                grid.Draw(graphics, new RectangleF(0, 200, page.Size.Width - 80, 0));

                // Save to S3
                using (MemoryStream stream = new MemoryStream())
                {
                    document.Save(stream);
                    stream.Position = 0;

                    string fileName = $"AdventureWorks_{DateTime.UtcNow:yyyyMMdd_HHmmss}.pdf";
                    
                    var putRequest = new PutObjectRequest
                    {
                        BucketName = BucketName,
                        Key = fileName,
                        InputStream = stream,
                        ContentType = "application/pdf"
                    };

                    await _s3Client.PutObjectAsync(putRequest);
                    context.Logger.LogLine($"PDF saved to S3: s3://{BucketName}/{fileName}");

                    return $"PDF generated successfully: {fileName}";
                }
            }
        }
        catch (Exception ex)
        {
            context.Logger.LogLine($"Error generating PDF: {ex.Message}\n{ex.StackTrace}");
            throw;
        }
    }
}
```

### Step 6: Deploy Lambda Function

**Using AWS Toolkit in Visual Studio:**

1. Right-click project → **Publish to AWS Lambda**
2. Select function name created in Step 3
3. Select IAM role from Step 1
4. Click **Upload**

**Using AWS CLI:**

```bash
# Build release package
dotnet publish -c Release

# Package for Lambda
cd bin/Release/net8.0/publish
zip -r ../function.zip .

# Deploy (requires AWS CLI configured)
aws lambda update-function-code \
  --function-name CreatePDFDocument \
  --zip-file fileb://../function.zip
```

### Step 7: Test Lambda Function

1. Go to **AWS Lambda → CreatePDFDocument → Test**
2. Create a test event (empty event: `{}`)
3. Click **Test**
4. View execution result in CloudWatch logs

Verify the PDF was created in your S3 bucket:
- AWS Console → S3 → your-bucket-name → Check for new PDF files

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Ensure `SyncfusionLicenseProvider.RegisterLicense()` is called at Lambda handler startup. License must be registered before creating PdfDocument instances. |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` or manually add to `.csproj`. Verify package version is v16.2.0.x or later for .NET 6.0+ support. |
| **"Access Denied" Uploading to S3** | Verify Lambda execution role has S3 PutObject permission. Check IAM policy includes correct S3 bucket ARN. |
| **Lambda Timeout (15 minutes max)** | Large PDF generation can exceed timeout. Optimize images, reduce content, or split into multiple functions. Monitor duration in CloudWatch. |
| **"No such file or directory" Error** | Lambda runtime is Linux-based. Use forward slashes in file paths: `/tmp/file.pdf` (not `\tmp\file.pdf`). |
| **Licensing Error in Production** | License key scope may differ between development and Lambda environments. Contact Syncfusion Support for serverless/Lambda licensing guidance. |
| **Memory Issues (128MB-10GB configurable)** | Increase Lambda memory allocation in Function Configuration. More memory = faster CPU = faster PDF generation. |
| **"Cannot find namespace" Compilation Error** | Ensure all NuGet dependencies are included. Run `dotnet restore` before building. Check `.csproj` for correct package references. |
| **S3 Bucket Name Not Found** | Verify BucketName variable in code matches actual S3 bucket name exactly (case-sensitive). Bucket must exist in same AWS region as Lambda. |
| **CloudWatch Logs Not Visible** | Verify Lambda execution role has `CloudWatchLogsFullAccess` or `AWSLambdaBasicExecutionRole` attached. Logs appear in CloudWatch after function execution. |

## Next Steps

Explore advanced PDF capabilities and AWS integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine reports from multiple Lambda invocations
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract pages based on S3 event triggers
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Add branding to generated PDFs
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs for compliance

### AWS Integration Patterns
- **[S3 Event-Triggered Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html)** — Generate PDFs automatically when files are uploaded
- **[API Gateway + Lambda](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html)** — Create REST API endpoints for on-demand PDF generation
- **[Lambda Layers for Code Sharing](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)** — Share common PDF logic across multiple functions
- **[Store Secrets Securely](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)** — Use AWS Secrets Manager for license keys (not hardcoded)
- **[Monitor with CloudWatch](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html)** — Track PDF generation metrics and errors

### Cost Optimization
- **[Lambda Provisioned Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html)** — Keep functions warm for consistent performance
- **[S3 Lifecycle Policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)** — Archive old PDFs to reduce storage costs
- **[AWS Pricing Calculator](https://calculator.aws/)** — Estimate costs for your PDF generation workload

## Resources

**Sample Code:**
- [Complete Lambda PDF Generation Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/Lambda)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/)
- [AWS Lambda with .NET](https://docs.aws.amazon.com/lambda/latest/dg/lambda-dotnet.html)
- [Amazon S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS Toolkit for Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [AWS Free Tier](https://aws.amazon.com/free/) — Includes Lambda and S3 free usage tier
- [Explore Syncfusion PDF Features](https://www.syncfusion.com/document-sdk/net-pdf-library)
