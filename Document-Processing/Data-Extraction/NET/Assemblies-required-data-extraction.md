---
title: Assemblies required for DataExtraction | Syncfusion
description: This section details the Syncfusion assemblies required to configure and run  Data Extraction seamlessly in .NET projects.
platform: document-processing
control: DataExtraction
documentation: UG
keywords: Assemblies
---
# Assemblies required for Data Extraction

## Assemblies for Smart Data Extractor

The following assemblies need to be referenced in your application based on the platform.
<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{'WPF'| markdownify }},
        {{'Windows Forms'| markdownify }} and {{'ASP.NET MVC'| 
		markdownify }}      
      </td>
      <td>
        Syncfusion.Compression.Base<br/>
        Syncfusion.ImagePreProcessor.Base<br/>
        Syncfusion.OCRProcessor.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.PdfToImageConverter.Base<br/>
        Syncfusion.SmartFormRecognizer.Base<br/>
        Syncfusion.SmartTableExtractor.Base<br/>
        Syncfusion.Markdown<br/>
      </td>
    </tr>
    <tr>
      <td>
      {{'.NET Core'| markdownify }}
      and {{'.NET Platforms'| markdownify }}
      </td>
      <td>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.ImagePreProcessor.Portable<br/>
        Syncfusion.OCRProcessor.Portable<br/>
        Syncfusion.Pdf.Imaging.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.PdfToImageConverter.Portable<br/>
        Syncfusion.SmartFormRecognizer.Portable<br/>
        Syncfusion.SmartTableExtractor.Portable<br/>
        Syncfusion.Markdown<br/>
      </td>
    </tr>
    <tr>
      <td>
      {{'.NET Multi-platform App UI (.NET MAUI)'| markdownify }}
      </td>
      <td>
        Syncfusion.Compression.NET<br/>
        Syncfusion.ImagePreProcessor.NET<br/>
        Syncfusion.OCRProcessor.NET<br/>
        Syncfusion.Pdf.Imaging.NET<br/>
        Syncfusion.Pdf.NET<br/>
        Syncfusion.PdfToImageConverter.NET<br/>
        Syncfusion.SmartFormRecognizer.NET<br/>
        Syncfusion.SmartTableExtractor.NET<br/>
        Syncfusion.Markdown<br/>
      </td>
    </tr>
  </tbody>
</table>

## Assemblies for Smart Table Extractor 

The following assemblies need to be referenced in your application based on the platform.
<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{'WPF'| markdownify }},
        {{'Windows Forms'| markdownify }} and {{'ASP.NET MVC'| 
		markdownify }}     
      </td>
      <td>
        Syncfusion.Compression.Base<br/>
        Syncfusion.ImagePreProcessor.Base<br/>
        Syncfusion.OCRProcessor.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.PdfToImageConverter.Base<br/>
        Syncfusion.Markdown<br/>
      </td>
    </tr>
    <tr>
      <td>
      {{'.NET Core'| markdownify }}
      and {{'.NET Platforms'| markdownify }}
      </td>
      <td>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.ImagePreProcessor.Portable<br/>
        Syncfusion.OCRProcessor.Portable<br/>
        Syncfusion.Pdf.Imaging.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.PdfToImageConverter.Portable<br/>
        Syncfusion.Markdown<br/>
      </td>
    </tr>
    <tr>
      <td>
      {{'.NET Multi-platform App UI (.NET MAUI)'| markdownify }}
      </td>
      <td>
        Syncfusion.Compression.NET<br/>
        Syncfusion.ImagePreProcessor.NET<br/>
        Syncfusion.OCRProcessor.NET<br/>
        Syncfusion.Pdf.Imaging.NET<br/>
        Syncfusion.Pdf.NET<br/>
        Syncfusion.PdfToImageConverter.NET<br/>
        Syncfusion.Markdown<br/>
      </td>
    </tr>
  </tbody>
</table>


## Assemblies for Smart Form Recognizer

The following assemblies need to be referenced in your application based on the platform.

<table>
  <thead>
    <tr>
      <th><b>Platform(s)</b></th>
      <th><b>Assembly</b></th>
      <th><b>Dependent Assemblies</b></th>
    </tr>
  </thead>

  <!-- BASE -->
  <tr>
    <td>Windows Forms, WPF and ASP.NET MVC5</td>
    <td>Syncfusion.SmartFormRecognizer.Base</td>
    <td>
      <ul>
        <li>Syncfusion.Pdf.Base</li>
        <li>Syncfusion.Compression.Base</li>
        <li>Syncfusion.PdfToImageConverter.Base</li>
      </ul>
    </td>
  </tr>

  <!-- PORTABLE -->
  <tr>
    <td rowspan="2">Blazor, .NET Core and .NET Platforms</td>
    <td>Syncfusion.SmartFormRecognizer.Portable</td>
    <td>
      <ul>
        <li>Syncfusion.Pdf.Portable</li>
        <li>Syncfusion.Compression.Portable</li>
        <li>Syncfusion.PdfToImageConverter.Portable</li>
      </ul>
    </td>
  </tr>

  <!-- .NET -->
  <tr>
    <td>Syncfusion.SmartFormRecognizer.NET</td>
    <td>
      <ul>
        <li>Syncfusion.Pdf.NET</li>
        <li>Syncfusion.Compression.NET</li>
        <li>Syncfusion.PdfToImageConverter.NET</li>
      </ul>
    </td>
  </tr>
</table>

