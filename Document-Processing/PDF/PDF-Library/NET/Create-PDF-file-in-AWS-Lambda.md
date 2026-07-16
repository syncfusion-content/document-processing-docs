---
title: Create or Generate PDF document in AWS Lambda | Syncfusion
description: Learn how to create or generate a PDF file in AWS Lambda using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: aws lambda create pdf, aws edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create a PDF File in AWS Lambda

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents programmatically in AWS Lambda without the dependency of Adobe Acrobat. This guide demonstrates how to generate and process PDF files in serverless AWS Lambda functions, allowing you to scale PDF operations without managing infrastructure.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2022 or Visual Studio Code |
| **.NET Version** | .NET 6.0+, .NET 7.0, or .NET 8.0 |
| **Lambda Runtime** | .NET 6 (supports x86_64 architecture) or newer |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **AWS Account** | Active Amazon Web Services account with Lambda access |
| **AWS Toolkit** | AWS Toolkit for Visual Studio or AWS CLI v2 with configured credentials |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |
| **IAM Permissions** | Lambda execution role with `logs:CreateLogGroup`, `logs:CreateLogStream`, `logs:PutLogEvents` for CloudWatch logging |

> **Note**: AWS Lambda provides serverless compute for PDF generation with automatic scaling. This guide covers local Lambda development and deployment. For request/response workflows, a client console application is also provided.

## License Registration

Starting with Syncfusion v16.2.0.x, a license key is required for PDF operations. Add the following to your Lambda function initialization:

```csharp
// In Function.cs - add before PDF operations
static Function()
{
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
}
```

> **Important**: Obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license). For production Lambda functions, store the license key in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/) or [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html), never hardcode in source. Refer to [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details. 

## Steps to Create a PDF File in AWS Lambda

**Step 1**: Create a new AWS Lambda project using the AWS Toolkit for Visual Studio.

![AWS Lambda project](GettingStarted_images/AWS_Project.png)

**Step 2**: Select **Blueprint as Empty Function** and click **Finish**.

![Select Blueprint as Empty Function](GettingStarted_images/Blueprint_AWS.png)

**Step 3**: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.NET) NuGet package. Use the Package Manager Console:

```bash
dotnet add package Syncfusion.Pdf.NET
```

![Install NuGet package](GettingStarted_images/NuGetPackageAWSLambda.png)

**Step 4**: Create a `Data` folder in your Lambda project and add the input PDF file (`Input.pdf`). This file will be processed by the Lambda function.

![Create a folder](GettingStarted_images/Data-Folder.png)

**Step 5**: Right-click the PDF file in Solution Explorer → **Properties**. Set **Copy to Output Directory** to "Copy if newer" to ensure the file is included in the deployment package.

![Property change for data files](GettingStarted_images/Document-property-AWS-lambda.png)

**Step 6**: Open `Function.cs` and include the following namespaces:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Amazon.Lambda.Core;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Grid;

{% endhighlight %}

{% endtabs %}

**Step 7**: Add the following code to your `FunctionHandler` method in `Function.cs` to load a PDF, add a product table, and return the modified document as a Base64-encoded string:

{% tabs %}

{% highlight c# tabtitle="C#" %}

public string FunctionHandler(ILambdaContext context)
{
    try
    {
        // Get the path to the input PDF file in the Lambda deployment package
        string dataPath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Data", "Input.pdf");
        
        if (!System.IO.File.Exists(dataPath))
        {
            context.Logger.LogLine($"Error: Input PDF file not found at {dataPath}");
            return "Error: Input PDF file not found";
        }

        // Open the input PDF with proper resource disposal
        using (FileStream fileStream = new FileStream(dataPath, FileMode.Open, FileAccess.Read))
        {
            using (PdfLoadedDocument document = new PdfLoadedDocument(fileStream))
            {
                // Get the first page and its graphics context
                PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;
                PdfGraphics graphics = page.Graphics;

                // Create product data list
                List<object> productData = new List<object>
                {
                    new { Product_ID = "1001", Product_Name = "Bicycle", Price = "$10,000" },
                    new { Product_ID = "1002", Product_Name = "Head Light", Price = "$3,000" },
                    new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "$1,500" },
                    new { Product_ID = "1004", Product_Name = "Pedal Set", Price = "$2,000" },
                    new { Product_ID = "1005", Product_Name = "Chain", Price = "$500" }
                };

                // Create and configure grid table
                PdfGrid pdfGrid = new PdfGrid();
                pdfGrid.DataSource = productData;
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);

                // Draw table on the page
                pdfGrid.Draw(graphics, new RectangleF(40, 400, page.Size.Width - 80, 0));

                // Save to memory stream and return as Base64 string
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    document.Save(memoryStream);
                    memoryStream.Position = 0;
                    string base64Result = Convert.ToBase64String(memoryStream.ToArray());
                    context.Logger.LogLine($"PDF generated successfully. Size: {memoryStream.Length} bytes");
                    return base64Result;
                }
            }
        }
    }
    catch (Exception ex)
    {
        context.Logger.LogLine($"Error generating PDF: {ex.Message}");
        return $"Error: {ex.Message}";
    }
}

{% endhighlight %}

{% endtabs %}

> **Important Notes**:
> - All streams and documents are wrapped in `using` statements for guaranteed resource disposal in the Lambda environment
> - `Assembly.GetExecutingAssembly().Location` correctly resolves the file path in Lambda deployment
> - Error handling with `ILambdaContext.Logger` logs to CloudWatch for debugging
> - The Base64 encoding allows the PDF to be transmitted via Lambda's text-based response

## Deploying to AWS Lambda

**Step 8**: Right-click your Lambda project in Visual Studio and select **Publish to AWS Lambda**.

![Publish to AWS Lambda](GettingStarted_images/Publish.png)

**Step 9**: In the "Upload Lambda Function" window:
- Select or configure your AWS profile (with appropriate credentials)
- Choose **Create new function** to deploy for the first time, or **Re-deploy to existing function** for updates
- Click **Next** to proceed

![Upload Lambda Function](GettingStarted_images/Upload-Lampda.png)

**Step 10**: In the "Advanced Function Details" window:
- **Function Name**: Enter a descriptive name (e.g., `CreatePDFFunction`)
- **IAM Role**: Select or create an execution role with CloudWatch Logs permissions
- **Memory Size**: Set to 512 MB or higher (PDF operations are memory-intensive)
- **Timeout**: Set to 60 seconds or higher to allow sufficient time for PDF processing
- Click **Upload** to deploy your Lambda function

![Advanced Function Details](GettingStarted_images/Advanced-AWS.png)

**Step 11**: After deployment, verify the Lambda function was created successfully by checking the AWS Lambda Console.

![Lambda Function Published](GettingStarted_images/AWS-Lambda-Function.png)

## Testing the Lambda Function

**Step 12**: Navigate to the AWS Lambda Console → select your function → open the **Test** tab. Create a test event and execute the function to verify PDF generation works correctly. Check CloudWatch Logs for output.


## Creating a Console Client to Invoke the Lambda Function

Optionally, you can create a console application to invoke the Lambda function and retrieve the generated PDF. This demonstrates the full end-to-end workflow.

**Step 13**: Create a new .NET Console project.

![Create a console project](GettingStarted_images/Console-APP.png)

**Step 14**: Install the required NuGet packages:

```bash
dotnet add package AWSSDK.Core
dotnet add package AWSSDK.Lambda
dotnet add package Newtonsoft.Json
```

![Install NuGet packages](GettingStarted_images/AWSSDKCore-nuget.png)

**Step 15**: Include the following namespaces in `Program.cs`:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Amazon;
using Amazon.Lambda;
using Amazon.Lambda.Model;
using Newtonsoft.Json;

{% endhighlight %}

{% endtabs %}

**Step 16**: Add the following code to invoke the Lambda function securely. Use [AWS credential chain](https://docs.aws.amazon.com/sdk-for-net/latest/developer-guide/net-dg-config-creds.html) instead of hardcoded credentials:

{% tabs %}

{% highlight c# tabtitle="C#" %}

public static async Task Main(string[] args)
{
    try
    {
        // Create Lambda client using default credential chain (IAM role, environment variables, shared credentials)
        // Never hardcode access keys in source code
        using (AmazonLambdaClient client = new AmazonLambdaClient(RegionEndpoint.USEast1))
        {
            // Invoke the Lambda function
            InvokeRequest invokeRequest = new InvokeRequest
            {
                FunctionName = "CreatePDFFunction", // Replace with your Lambda function name
                InvocationType = InvocationType.RequestResponse,
                Payload = "\"Test\"" // Payload sent to Lambda
            };

            Console.WriteLine("Invoking Lambda function...");
            InvokeResponse response = await client.InvokeAsync(invokeRequest);

            // Read and parse the response
            using (StreamReader streamReader = new StreamReader(response.Payload))
            {
                string responseText = await streamReader.ReadToEndAsync();
                
                // Remove quotes from JSON response
                responseText = responseText.Trim('"');

                if (response.FunctionError != null)
                {
                    Console.WriteLine($"Lambda function error: {responseText}");
                    return;
                }

                // Convert Base64-encoded PDF back to binary
                byte[] pdfBytes = Convert.FromBase64String(responseText);

                // Save PDF to disk
                string outputPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments), "Output.pdf");
                using (FileStream fileStream = new FileStream(outputPath, FileMode.Create))
                {
                    fileStream.Write(pdfBytes, 0, pdfBytes.Length);
                }

                Console.WriteLine($"PDF generated successfully and saved to: {outputPath}");

                // Open the PDF file in default viewer
                System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo()
                {
                    FileName = outputPath,
                    UseShellExecute = true
                });
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error invoking Lambda: {ex.Message}");
    }
}

{% endhighlight %}

{% endtabs %}

> **Security Best Practices**:
> - **Never hardcode AWS credentials** in source code. Use the AWS credential chain (IAM roles, environment variables, or shared credentials file)
> - Use **AWS Secrets Manager** or **Parameter Store** to manage sensitive data like license keys
> - Grant Lambda execution role only the minimum required permissions (principle of least privilege)
> - Enable CloudWatch Logs for debugging without exposing sensitive information

## Expected Output

When you execute the Lambda function or console client, you will generate a PDF document containing:
- The original input PDF document (loaded from `Data/Input.pdf`)
- A formatted table of 5 product records added to the first page
- Professional table styling applied with GridTable4Accent3 style
- The file returned as Base64-encoded string (via Lambda) or saved as `Output.pdf` (via console client)

![Output PDF document](GettingStarted_images/Output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Verify the static constructor in `Function.cs` calls `SyncfusionLicenseProvider.RegisterLicense()` before any PDF operations. The license must be registered at function initialization. |
| **"Input PDF file not found" Error** | Ensure `Data/Input.pdf` exists in your Lambda project and **Copy to Output Directory** is set to "Copy if newer". The file must be included in the deployment package. |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` to install the latest version. Verify v16.2.0.x or later is installed via `dotnet list package`. |
| **Lambda Function Timeout** | Increase the **Timeout** setting in Step 10 to 60+ seconds. PDF processing requires time proportional to file size and complexity. Check CloudWatch Logs for performance bottlenecks. |
| **"Access Denied" or IAM Role Error** | The Lambda execution role must have `lambda:InvokeFunction` and `logs:*` permissions. Check IAM role policy in AWS Console → Lambda → Function → Configuration → Permissions. |
| **OutOfMemoryException in Lambda** | Increase **Memory Size** in Step 10 to 512 MB or higher. Lambda allocates CPU proportionally to memory; larger PDFs need more resources. Monitor memory usage in CloudWatch Metrics. |
| **Console Client Cannot Connect to AWS** | Configure AWS credentials via AWS CLI (`aws configure`) or set environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. Never hardcode credentials in code. |
| **Base64 Decoding Error in Console Client** | Verify the Lambda function returns a valid Base64 string. Check CloudWatch Logs to confirm the PDF was generated successfully before Base64 encoding. |
| **"Build Failed" During Deployment** | Run `dotnet restore` to ensure all NuGet packages are installed. Check Visual Studio Output window for detailed build errors. Verify the project file (.csproj) references are correct. |
| **Licensing Error After Deployment** | Development license keys may not work on AWS Lambda due to environment detection. Use a production license key or obtain a free community license from Syncfusion. For deployment questions, contact Support. |

## Next Steps

Explore advanced PDF capabilities and AWS Lambda integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple PDF documents into a single file
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages from PDF files
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Add company logos or confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for document compliance
- **[PDF Encryption](https://help.syncfusion.com/file-formats/pdf/working-with-security/encrypt-pdf)** — Protect PDFs with passwords and permissions

### AWS Lambda Integration Patterns
- **[API Gateway Integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)** — Expose Lambda as HTTP endpoints for PDF generation
- **[S3 Event Triggers](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html)** — Generate PDFs automatically when files are uploaded to S3
- **[EventBridge Scheduled Rules](https://docs.aws.amazon.com/lambda/latest/dg/services-eventbridge-scheduled-rules.html)** — Schedule batch PDF generation jobs
- **[Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)** — Package Syncfusion library as a reusable layer
- **[Asynchronous Invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)** — Handle PDF generation asynchronously with queues (SQS/SNS)
- **[DynamoDB Integration](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html)** — Stream PDF metadata to DynamoDB for tracking/auditing

### Deployment and Operations
- **[AWS CloudFormation](https://aws.amazon.com/cloudformation/)** — Automate Lambda deployment as Infrastructure-as-Code
- **[AWS SAM (Serverless Application Model)](https://aws.amazon.com/serverless/sam/)** — Deploy serverless applications with simplified templates
- **[CloudWatch Monitoring](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html)** — Monitor function duration, memory usage, errors, and throughput
- **[X-Ray Tracing](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html)** — Trace PDF generation across distributed services
- **[Cost Optimization](https://aws.amazon.com/lambda/pricing/)** — Monitor invocations and memory to optimize Lambda costs

## Resources

**Sample Code:**
- [Complete AWS Lambda example](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/AWSLambdaProject)
- [Console client application](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/ConsoleApp)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/)
- [Deploying .NET Applications to AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/dotnet-handler.html)
- [AWS Toolkit for Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/)
- [AWS SDK for .NET](https://docs.aws.amazon.com/sdk-for-net/)
- [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Explore Syncfusion PDF Features](https://www.syncfusion.com/document-sdk/net-pdf-library)
- [AWS Free Tier](https://aws.amazon.com/free/) — Includes free Lambda and CloudWatch usage
- [AWS Lambda Free Tier](https://aws.amazon.com/lambda/pricing/) — 1 million free requests per month