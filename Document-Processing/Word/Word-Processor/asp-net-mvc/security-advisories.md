---
layout: post
title: Security Advisories in ASP.NET MVC DOCX Editor Control | Syncfusion
description: Learn here all about Security Advisories in ASP.NET MVC Document Editor component of Syncfusion Essential JS2 and more.
control: Security Advisories
platform: document-processing
documentation: ug
---

# Security Advisories in ASP.NET MVC Document Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> prioritizes the security of its controls. You can rely on the security of our controls, as we have implemented all necessary measures to mitigate security vulnerabilities such as cross-site scripting and insecure dependencies. To meet security standards, Syncfusion<sup style="font-size:70%">&reg;</sup> uses the [ESLint](https://eslint.org/) and [ESLint plugin security](https://github.com/eslint-community/eslint-plugin-security#rules) tools for static code analysis. Additionally, Syncfusion<sup style="font-size:70%">&reg;</sup> packages are scanned using the SOOS security tool.

This document describes the security updates available for Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS2 controls for each volume release.

## Security Updates

The following security updates are available for the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor and are listed by release version.

### 2024 Volume 2 (v26.2.4) - July 25, 2024

This release resolves critical and moderate security vulnerabilities affecting the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor Docker image.

**Threat:**

* ASP.NET Core (Kestrel) Components: Multiple moderate vulnerabilities in HTTP request handling could lead to access control issues and data leakage.

* Npgsql: A potential SQL injection vulnerability via Protocol Message Size Overflow was detected.

* Dynamic LINQ: Vulnerable to remote code execution via untrusted input manipulation.

**Resolution:**

* Updated the affected ASP.NET Core packages.

* The Npgsql package and Dynamic LINQ have been removed because they are no longer required. This change enhances security and mitigates the risk of SQL injection attacks.

## Common Security Updates


For details on common security updates related to Syncfusion<sup style="font-size:70%">&reg;</sup> products, see [this link](https://ej2.syncfusion.com/aspnetmvc/documentation/common/content-security-policy). This resource provides information on the latest advisories and best practices to help ensure the security and integrity of your applications.



## Security Issue

If you discover a security issue with Syncfusion<sup style="font-size:70%">&reg;</sup> controls or need help resolving it, contact us by creating a support ticket on [our support site](https://syncfusion.com/support) or by posting your query on Stack Overflow with the tag `syncfusion-ej2`.
