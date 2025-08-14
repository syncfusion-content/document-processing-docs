---
title: How to avoid conflicts with multiple Syncfusion library versions
description: This page explains about how to avoid conflicts when using multiple versions of Syncfusion libraries.
platform: document-processing
control: XlsIO
documentation: UG
---

# Avoid conflicts with multiple Syncfusion library versions

When working with Syncfusion across multiple projects in a solution, version mismatches can lead to build errors, runtime issues, and unexpected behavior. This FAQ outlines common problems and best practices to maintain consistency and avoid conflicts.
 
## Common Issues:

* Visual Studio throws errors when multiple versions of Syncfusion assemblies are referenced.
* Assembly version mismatches occur during manual upgrades.
* Dependency conflicts arise when upgrading only one component (e.g., XlsIO).

## Solutions:

* **Use consistent versions across all projects:** Ensure all Syncfusion assemblies are of the same version.
* **Use the Syncfusion Project Migration utility:** Avoid manual reference updates to prevent missing dependencies.
* **Avoid installing packages separately:** For example, installing Syncfusion.Licensing.dll independently can cause framework conflicts.
* **Upgrade all components together:** Prevent shared dependency issues by upgrading all Syncfusion components simultaneously.