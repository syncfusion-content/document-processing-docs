#!/usr/bin/env dotnet-script
#r "nuget: Syncfusion.XlsIO.Net.Core"
#r "nuget: Syncfusion.XlsIORenderer.Net.Core"
#r "nuget: Syncfusion.Licensing"

using System;
using System.IO;
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

// Register Syncfusion License
var licenseKey = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
if (string.IsNullOrWhiteSpace(licenseKey))
{
    var licenseFile = Path.Combine(Directory.GetCurrentDirectory(), "SyncfusionLicense.txt");
    if (File.Exists(licenseFile))
    {
        licenseKey = File.ReadAllText(licenseFile).Trim();
    }
}
 
if (!string.IsNullOrWhiteSpace(licenseKey))
{
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(licenseKey);
} 

try
{
    // *** INSERT OPERATION CODE HERE ***
    
    Console.WriteLine("SUCCESS: {output-file-path}");
}
catch (Exception ex)
{
    Console.Error.WriteLine($"ERROR: {ex.Message}");
    Environment.Exit(1);
}
