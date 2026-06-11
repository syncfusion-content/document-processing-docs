---
title: How to install a Syncfusion NuGet package from a local source
description: This page explains about how to perform a clean installation of a NuGet package from a local source.
platform: document-processing
control: XlsIO
documentation: UG
---

# Steps for a clean installation of a NuGet package from a local source

To perform a clean installation of a NuGet package from a local source, follow these steps:
 
1. Save the .nupkg file 

Save the NuGet package file (.nupkg) to a local directory, such as: C:\MyNuGetPackages

2. Configure the local package source in Visual Studio

* Open Visual Studio

* Navigate to: Tools > Options > NuGet Package Manager > Package Sources

* Add a new package source and point it to the folder from Step 1

3. Uninstall the existing package 

If the package is already installed in your project, uninstall it to avoid conflicts.

4. Clear the NuGet cache 

Run the following command in a terminal or command prompt to clear cached packages:

~~~
dotnet nuget locals all --clear
~~~

5. Reinstall the package from the local source 

Use the NuGet Package Manager or CLI to install the package from the newly added local source.