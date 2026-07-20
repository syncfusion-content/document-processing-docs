---
title: Extract Data from PDF in Windows Forms | Syncfusion
description: Extract tables, text, and form fields from PDF documents in Windows Forms using the .NET Smart Data Extractor Library.
platform: document-processing
control: SmartDataExtractor
documentation: UG

---

# Extract Data in Windows Forms

The Syncfusion<sup>&reg;</sup> Smart Data Extractor is a .NET library used to extract structured data and document elements from PDFs and images in Windows Forms applications.

## Steps to Extract Data in Windows Forms

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install **.NET desktop development** workload with necessary .NET Framework SDK.

Step 1: Create a new Windows Forms application project.

![Create Windows Forms application in Visual Studio](GettingStarted_images/Winforms_ProjectCreation.png)

Step 2: Name the project.
![Name the application](GettingStarted_images/Winforms_ProjectName.png)

Step 3: Install [Syncfusion.SmartDataExtractor.WinForms](https://www.nuget.org/packages/Syncfusion.SmartDataExtractor.WinForms) NuGet package as a reference to your Windows Forms application from the [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.SmartDataExtractor.WinForms NuGet package](GettingStarted_images/Winforms_Nuget.png)

Add the input PDF file named **Input.pdf** to the Data folder before running the sample.

Step 4: Include the following namespaces in the **Form1.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Text;
using System.Windows.Forms;
using Syncfusion.SmartDataExtractor;

{% endhighlight %}

{% endtabs %}

Step 5: Add a new button in **Form1.Designer.cs** to extract data from PDF as follows.

{% tabs %}

{% highlight c# tabtitle="C#" %}

private Button btnExtract;
private Label label;

private void InitializeComponent()
{
label = new Label();
btnExtract = new Button();

// Label
label.Location = new System.Drawing.Point(0, 40);
label.Size = new System.Drawing.Size(426, 35);
label.Text = "Click the button to extract data from PDF using Smart Data Extractor.";
label.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;

// Button
btnExtract.Location = new System.Drawing.Point(160, 110);
btnExtract.Size = new System.Drawing.Size(120, 36);
btnExtract.Text = "Extract Data from PDF";
btnExtract.Click += new EventHandler(btnExtract_Click);

// Form
ClientSize = new System.Drawing.Size(450, 150);
Controls.Add(label);
Controls.Add(btnExtract);
Text = "Extract Data from PDF";
}
{% endhighlight %}

{% endtabs %}

Step 6: Add the following code in **btnExtract_Click** to extract data from PDF.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Load the existing PDF document
using (FileStream stream = new FileStream(Path.GetFullPath(@"../../Data/Input.pdf"), FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor
    DataExtractor extractor = new DataExtractor();
    // Extract data as JSON string
    string data = extractor.ExtractDataAsJson(stream);
    // Save the extracted JSON data into an output file
    File.WriteAllText(Path.GetFullPath(@"../../Output.json"), data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}

Step 7: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

By executing the program, you will get the JSON file as follows.

![Windows Forms output JSON document](GettingStarted_images/JSON_Output.png)

{% endtabcontent %}

{% endtabcontents %}

