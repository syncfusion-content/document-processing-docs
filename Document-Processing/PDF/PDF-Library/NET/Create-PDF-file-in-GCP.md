---
title:  Create or Generate PDF document in GCP | Syncfusion
description: Learn how to create or generate a PDF file in the Google Cloud Platform (GCP) using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
keywords: gcp os save pdf, gcp os load pdf, c# save pdf, c# load pdf
---
# Create a PDF Document on Google Cloud Platform (GCP)

The [.NET Core PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, edits, and converts PDF documents programmatically, with no dependency on Adobe Acrobat. You can use this library to create a PDF document on GCP.

N> If this is your first time working with GCP, see the [Google Cloud getting-started docs](https://cloud.google.com/docs/get-started). This section explains how to create a PDF document in C# using the .NET Core PDF library on GCP; for Google App Engine, see [Create a PDF File in Google App Engine](create-pdf-file-in-google-app-engine).

## Prerequisites

- A **GCP account** with access to the App Engine service (or Cloud Run, which is the modern recommendation for .NET workloads). If you don't have one, [create a GCP account](https://cloud.google.com/free) before starting.
- **.NET SDK 8.0** or later installed locally.
- **Visual Studio 2022** with the **ASP.NET and web development** workload, or **Visual Studio Code** with the C# Dev Kit extension.
- The **Google Cloud CLI (`gcloud`)** installed and authenticated. Install it from the [Google Cloud SDK page](https://cloud.google.com/sdk/docs/install) and run `gcloud init` to configure your project and credentials.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For App Engine / Cloud Run, store the key in an environment variable (for example, `SYNCFUSION_LICENSE_KEY`) and read it at application startup. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the project.

## GCP deployment options

| Service | NuGet package | Tutorial |
| --- | --- | --- |
| Google App Engine | [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) | [Create a PDF File in Google App Engine](create-pdf-file-in-google-app-engine) |
| Cloud Run | [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) | [Create a PDF File on Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service) |

N> `Syncfusion.Pdf.Net.Core` depends on SkiaSharp native assets. App Engine **Standard** does not support custom native binaries, so use **App Engine Flexible** (`env: flex`) or **Cloud Run** with the `aspnetcore:6.0` base image. On Linux, also install `libfontconfig` and `libgdiplus` for font rendering.

## Step to create a PDF document on Google App Engine

**Step 1:** Create a new **ASP.NET Core Web Application** project.
**Step 2:** Add the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package to the project.
**Step 3:** Register your Syncfusion<sup>&reg;</sup> license key at application startup using `SyncfusionLicenseProvider.RegisterLicense(Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY"))`.
**Step 4:** Use the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class to generate the PDF and return it from a controller action.
**Step 5:** Add an `app.yaml` file with the `env: flex` runtime and the `SYNCFUSION_LICENSE_KEY` environment variable.
**Step 6:** Run `gcloud app deploy` from the project folder to deploy the application.
**Step 7:** Test the deployed service by navigating to the URL printed by `gcloud app deploy` or by invoking it with `curl`.

For the complete tutorial, see [Create a PDF File in Google App Engine](create-pdf-file-in-google-app-engine).

You can download a complete working sample from the [Google App Engine folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/GCP).

Running the program produces a PDF document that you can download from the service's response or save to Google Cloud Storage.

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup, or load the key from the `SYNCFUSION_LICENSE_KEY` environment variable configured in `app.yaml` or Cloud Run's **Variables & Secrets** tab.
- **`TypeInitializationException` or `DllNotFoundException` for SkiaSharp on App Engine Standard** — Standard does not support custom native binaries. Migrate to **App Engine Flexible** (`env: flex`) or **Cloud Run** with the `aspnetcore:6.0` base image.
- **`Deployment failed: ...` from `gcloud app deploy`** — Run `gcloud components update` to ensure the SDK is current, and verify the active project with `gcloud config get-value project`.
- **App Engine Flexible instance fails to start** — Inspect the instance logs with `gcloud app logs tail -s default`. Common causes: missing `libgdiplus` / `libfontconfig` in the runtime container, or invalid `app.yaml` syntax.
- **Cold start latency** — Enable [Cloud Run minimum instances](https://cloud.google.com/run/docs/configuring/min-instances) (set `--min-instances 1`) for production workloads.
- **`AccessDenied` when writing to Cloud Storage** — Attach a service account to the App Engine / Cloud Run service with the `storage.objects.create` permission on the destination bucket.
- **Font rendering issues on Linux containers** — Install `libfontconfig` (and `libgdiplus` for legacy fonts) in the runtime via a custom `Dockerfile` (Cloud Run) or by including them in the runtime image (App Engine Flexible).
- **`gcloud` command not found** — Install the Google Cloud SDK from the [Google Cloud SDK page](https://cloud.google.com/sdk/docs/install) and restart your terminal.

## See also

- [Create a PDF File in Google App Engine](create-pdf-file-in-google-app-engine)
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Create a PDF file in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [Create a PDF file in Docker](create-pdf-document-in-docker)
- [Open and read PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default)