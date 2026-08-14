---
layout: post
title: How to Install Packages for the PDF Viewer in ASP.NET | Syncfusion
description: Install the NuGet packages required to use the ASP.NET MVC PDF Viewer control in your Visual Studio project with the correct dependencies.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Install Packages for the PDF Viewer in ASP.NET MVC PDF Viewer

Here’s a rephrased version of your instructions for installing the Syncfusion ASP.NET MVC PDF Viewer package:

---

### Installing Syncfusion PDF Viewer in an ASP.NET MVC Project

To integrate the Syncfusion PDF Viewer into your ASP.NET MVC application, follow these steps:

1. **Add the NuGet Package**  

Install the `Syncfusion.EJ2.MVC5` package to your project. You can do this in one of two ways:

- **Using Visual Studio**: Go to **Manage NuGet Packages** → **Browse** → Search for `Syncfusion.EJ2.MVC5` → Click **Install**.

- **Using Command Line**: Run the following command in the terminal:

```bash
dotnet add package Syncfusion.EJ2.MVC5
```

2. **Restore Dependencies**  

When you build the project or run `dotnet restore`, NuGet will automatically download the package and its required dependencies.

3. **Register Your Syncfusion License**  

Before publishing your application, make sure to register your Syncfusion license key. This is required for the components to work properly.  
Refer to the [Syncfusion licensing guide](https://help.syncfusion.com/document-processing/licensing/how-to-generate) for instructions on how to obtain and register your license key.
