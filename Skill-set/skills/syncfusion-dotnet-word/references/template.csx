#!/usr/bin/env dotnet-script
#r "nuget: Syncfusion.DocIO.Net.Core"
#r "nuget: Syncfusion.DocIORenderer.Net.Core"
#r "nuget: Syncfusion.Licensing"

using System;
using System.IO;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

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
 

// Ensure output directory exists
Directory.CreateDirectory(Path.Combine(Directory.GetCurrentDirectory(), "output"));

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
