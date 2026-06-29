---
title: Collect anonymous usage data with Telemetry in .NET | Syncfusion
description: Syncfusion® Telemetry collects anonymous usage data in .NET to improve product quality, track feature adoption, and guide product planning.
platform: document‑processing
control: Telemetry
documentation: UG
keywords: Assemblies
---

# Overview 

Syncfusion Telemetry library collects anonymous usage data to improve product quality and user experience. This data helps us better understand product usage, feature adoption, usage trends, and make better product roadmap decisions. 

Telemetry is enabled by default. However, you can disable it at any time if required. 

N> Telemetry is automatically disabled in production environments. No data is collected from deployed applications or end users.


## Why do we collect anonymous telemetry? 

We collect anonymous telemetry data to: 

* Understand feature adoption and usage trends 
* Identify frequently used components and frameworks 
* Prioritize future product investments and roadmap decisions 
* Detect compatibility trends across:  
    * .NET versions 
    * Operating systems 
    * Development environments 


## What data is collected? 

Syncfusion collects only a limited set of anonymous usage data during development to understand product usage and improve product planning.  The following anonymous data is collected **only in development mode:** 

The following data fields are collected by the Syncfusion Telemetry Library: 

<table>
<thead>
<tr>
<th><b>Field</b></th>
<th><b>Description</b></th>
</tr>
</thead>
<tbody>
<tr>
<td>Architecture</td>
<td>System architecture information (e.g., x64, x86)</td>
</tr>
<tr>
<td>ComponentName</td>
<td>Name of the component</td>
</tr>
<tr>
<td>Assembly Name</td>
<td>Assembly containing the telemetry module</td>
</tr>
<tr>
<td>SdkName</td>
<td>Name of the SDK being used</td>
</tr>
<tr>
<td>SdkVersion</td>
<td>Version of the SDK</td>
</tr>
<tr>
<td>Framework</td>
<td>Framework (e.g., .NET, .NET Core)</td>
</tr>
<tr>
<td>FrameworkVersion</td>
<td>Version of the framework (e.g., .NET 10.0.9)</td>
</tr>
<tr>
<td>OperatingSystem</td>
<td>Target operating system</td>
</tr>
<tr>
<td>SessionID</td>
<td>Unique session identifier (hashed value)</td>
</tr>
<tr>
<td>EventName</td>
<td>Anonymous product events</td>
</tr>
</tbody>
</table>

N> No user-generated content (e.g., code, files, or personal data) is collected. 

## Where Does Telemetry Apply? 

Telemetry applies only to the use of Syncfusion products during development. 

* It is limited to developer environments 
* It focuses on product and feature usage 
* It does not apply to production applications 
* It does not collect any data from end users 

Telemetry is designed solely to help improve the development experience and product quality, without impacting productions applications or users. 

## Telemetry in Development Mode Only 

Telemetry is designed to run only in development environments. 
* Enabled by default during development 
* Automatically disabled in production builds 
* No data is collected from deployed applications 
This ensures that telemetry does not affect your application users or production systems

## How to Disable Telemetry (Opt-out)? 

You can disable telemetry in Syncfusion .NET products by calling the Telemetry.Disable() API before using any Syncfusion product APIs in your application. 

### Step 1: Add the telemetry namespace 

Add the following namespace in the file where your application starts using Syncfusion components or libraries: 

{% tabs %} 

{% highlight c# tabtitle="C#" %}

using Syncfusion.Telemetry;

{% endhighlight %}

### Step 2: Disable telemetry at application startup

Call the Telemetry.Disable() method before initializing or using any Syncfusion product APIs. 

{% tabs %} 

{% highlight c# tabtitle="C#" %}
using Syncfusion.Telemetry; 

// Disable Syncfusion telemetry data collection. 
Telemetry.Disable();  
// Your Syncfusion product code follows here after disabling the telemetry.
{% endhighlight %}

Now, the telemetry is disabled, you can continue using Syncfusion .NET products based on your application requirements. The Syncfusion product will work normally, but telemetry data will not be collected or sent. 

N> The Telemetry.Disable() API should be called, before creating or using any Syncfusion components, or document-processing library objects. 

## FAQs

<table>
<thead>
<tr>
<th><b>Exception</b></th>
<th><b>Why am I getting "System.Net.Http.HttpRequestException - No such host is known" error? </b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Reason</b></td>
<td>
<p>This error may occur in the following scenarios: </p>
<ul>
<li>'Your application does not have internet connectivity'</li>
<li>'Exception settings are enabled in your application'</li>
</ul>
<p>When exception handling is enabled and the application lacks internet access, the telemetry module attempts to send data to Azure Application Insights, which can trigger this exception.</p>
</td>
</tr>
<tr>
<td><b>Solution</b></td>
<td>
<p>To resolve this error and prevent the exception from being thrown, you can <a href="#how-to-disable-telemetry-opt-out">disable the telemetry</a> in your application. This will turn off telemetry data collection entirely.</p>
</td>
</tr>
</tbody>
</table>

