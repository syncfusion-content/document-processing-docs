---
title: Working with SmartArt in .NET Word (DocIO) library | Syncfusion
description: Learn how to create, edit, and format smartArt in a Word document using the .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with SmartArt

A SmartArt diagram is a visual representation of information that helps effectively communicate ideas in documents. You can add and modify SmartArt diagrams in Word documents using the Syncfusion Essential DocIO library.

## Create SmartArt 

You can create a SmartArt diagram in a Word document using DocIO by selecting a SmartArt type and adding content to it.

SmartArt diagrams help visually represent information in different formats, making it easier to structure and communicate ideas effectively. The following SmartArt types are available in Word documents using DocIO library.

* List – Displays information in a list format.
* Process – Illustrates steps in a process or workflow.
* Cycle – Represents a continuous cycle or loop.
* Hierarchy – Shows hierarchical relationships, such as organizational structures.
* Relationship – Depicts connections between different elements.
* Matrix – Displays relationships between parts and a whole.
* Pyramid – Represents information in a layered or hierarchical format.
* Picture – Uses images to enhance the visual representation of data.

### List

The following code example illustrating how to create a **List-type SmartArt** in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-List/.NET/Create-SmartArt-List/Program.cs" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange = paragraph.AppendText("Project Planning List");
textRange.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Vertical Chevron List" layout.
WSmartArt verticalChevronListSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.VerticalChevronList, 432, 252);
// Add the "Planning" phase node.
IOfficeSmartArtNode planningNode = verticalChevronListSmartArt.Nodes[0];
planningNode.TextBody.Text = "Planning";
planningNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(planningNode, "Set clear objectives.", "Allocate resources effectively.", 23f);
// Add the "Execution" phase node.
IOfficeSmartArtNode executionNode = verticalChevronListSmartArt.Nodes[1];
executionNode.TextBody.Text = "Execution";
executionNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(executionNode, "Assign tasks to the team.", "Track progress regularly.", 23f);
// Add the "Review" phase node.
IOfficeSmartArtNode reviewNode = verticalChevronListSmartArt.Nodes[2];
reviewNode.TextBody.Text = "Review";
reviewNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(reviewNode, "Analyze outcomes.", "Identify lessons learned.", 23f);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange = paragraph.AppendText("Project Planning List");
textRange.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Vertical Chevron List" layout.
WSmartArt verticalChevronListSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.VerticalChevronList, 432, 252);
// Add the "Planning" phase node.
IOfficeSmartArtNode planningNode = verticalChevronListSmartArt.Nodes[0];
planningNode.TextBody.Text = "Planning";
planningNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(planningNode, "Set clear objectives.", "Allocate resources effectively.", 23f);
// Add the "Execution" phase node.
IOfficeSmartArtNode executionNode = verticalChevronListSmartArt.Nodes[1];
executionNode.TextBody.Text = "Execution";
executionNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(executionNode, "Assign tasks to the team.", "Track progress regularly.", 23f);
// Add the "Review" phase node.
IOfficeSmartArtNode reviewNode = verticalChevronListSmartArt.Nodes[2];
reviewNode.TextBody.Text = "Review";
reviewNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(reviewNode, "Analyze outcomes.", "Identify lessons learned.", 23f);
//Saves the Word document
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument()
Dim section As IWSection = document.AddSection()
' Retrieves the first paragraph and add text.
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
Dim textRange As IWTextRange = paragraph.AppendText("Project Planning List")
textRange.CharacterFormat.FontSize = 28.0F
paragraph = section.AddParagraph()
paragraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
' Add SmartArt with "Vertical Chevron List" layout.
Dim verticalChevronListSmartArt As WSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.VerticalChevronList, 432, 252)
' Add the "Planning" phase node.
Dim planningNode As IOfficeSmartArtNode = verticalChevronListSmartArt.Nodes(0)
planningNode.TextBody.Text = "Planning"
planningNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
AddSmartArtChildNode(planningNode, "Set clear objectives.", "Allocate resources effectively.", 23.0F)
' Add the "Execution" phase node.
Dim executionNode As IOfficeSmartArtNode = verticalChevronListSmartArt.Nodes(1)
executionNode.TextBody.Text = "Execution"
executionNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
AddSmartArtChildNode(executionNode, "Assign tasks to the team.", "Track progress regularly.", 23.0F)
' Add the "Review" phase node.
Dim reviewNode As IOfficeSmartArtNode = verticalChevronListSmartArt.Nodes(2)
reviewNode.TextBody.Text = "Review"
reviewNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
AddSmartArtChildNode(reviewNode, "Analyze outcomes.", "Identify lessons learned.", 23.0F)
' Saves the Word document
document.Save("Result.docx", FormatType.Docx)
' Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

The following code example shows AddSmartArtChildNode, which is used to add child nodes to a given SmartArt node and apply formatting.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private void AddSmartArtChildNode(IOfficeSmartArtNode node, string childText1, string childText2, float fontSize)
{
    node.ChildNodes[0].TextBody.Text = childText1;
    node.ChildNodes[1].TextBody.Text = childText2;
    for (int i = 0; i < node.ChildNodes.Count; i++)
    {
        node.ChildNodes[i].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = fontSize;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void AddSmartArtChildNode(IOfficeSmartArtNode node, string childText1, string childText2, float fontSize)
{
    node.ChildNodes[0].TextBody.Text = childText1;
    node.ChildNodes[1].TextBody.Text = childText2;
    for (int i = 0; i < node.ChildNodes.Count; i++)
    {
        node.ChildNodes[i].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = fontSize;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub AddSmartArtChildNode(node As IOfficeSmartArtNode, childText1 As String, childText2 As String, fontSize As Single)
    node.ChildNodes(0).TextBody.Text = childText1
    node.ChildNodes(1).TextBody.Text = childText2
    For i As Integer = 0 To node.ChildNodes.Count - 1
        node.ChildNodes(i).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = fontSize
    Next
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-List/.NET/).

### Process

The following code example illustrating how to create a **Process-type SmartArt** in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Process/.NET/Create-SmartArt-List/Program.cs" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Healthy Lifestyle Journey");
textRange1.CharacterFormat.FontSize = 28f;
textRange1.CharacterFormat.FontName = "Times New Roman";
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Segmented Process" layout
WSmartArt segmentedProcessSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.SegmentedProcess, 432, 252);
// Add the "Start" phase node
IOfficeSmartArtNode startProcess = segmentedProcessSmartArt.Nodes[0];
startProcess.TextBody.Text = "Start";
startProcess.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(startProcess, "Begin exercise and eat balanced meals.", "Stay hydrated and prioritize sleep.", 12f);
// Add the "Track" phase node
IOfficeSmartArtNode trackProcess = segmentedProcessSmartArt.Nodes[1];
trackProcess.TextBody.Text = "Track";
trackProcess.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(trackProcess, "Record physical activity and food intake.", "Use a fitness app or journal.", 12f);
// Add the "Sustain" phase node
IOfficeSmartArtNode sustainProcess = segmentedProcessSmartArt.Nodes[2];
sustainProcess.TextBody.Text = "Sustain";
sustainProcess.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(sustainProcess, "Maintain healthy habits consistently.", "Set goals for continuous improvement.", 12f);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Healthy Lifestyle Journey");
textRange1.CharacterFormat.FontSize = 28f;
textRange1.CharacterFormat.FontName = "Times New Roman";
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Segmented Process" layout
WSmartArt segmentedProcessSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.SegmentedProcess, 432, 252);
// Add the "Start" phase node
IOfficeSmartArtNode startProcess = segmentedProcessSmartArt.Nodes[0];
startProcess.TextBody.Text = "Start";
startProcess.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(startProcess, "Begin exercise and eat balanced meals.", "Stay hydrated and prioritize sleep.", 12f);
// Add the "Track" phase node
IOfficeSmartArtNode trackProcess = segmentedProcessSmartArt.Nodes[1];
trackProcess.TextBody.Text = "Track";
trackProcess.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(trackProcess, "Record physical activity and food intake.", "Use a fitness app or journal.", 12f);
// Add the "Sustain" phase node
IOfficeSmartArtNode sustainProcess = segmentedProcessSmartArt.Nodes[2];
sustainProcess.TextBody.Text = "Sustain";
sustainProcess.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
AddSmartArtChildNode(sustainProcess, "Maintain healthy habits consistently.", "Set goals for continuous improvement.", 12f);
//Saves the Word document
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument()
Dim section As IWSection = document.AddSection()
' Retrieves the first paragraph and add text.
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
Dim textRange1 As IWTextRange = paragraph.AppendText("Healthy Lifestyle Journey")
textRange1.CharacterFormat.FontSize = 28.0F
textRange1.CharacterFormat.FontName = "Times New Roman"
paragraph = section.AddParagraph()
paragraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
' Add SmartArt with "Segmented Process" layout
Dim segmentedProcessSmartArt As WSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.SegmentedProcess, 432, 252)
' Add the "Start" phase node
Dim startProcess As IOfficeSmartArtNode = segmentedProcessSmartArt.Nodes(0)
startProcess.TextBody.Text = "Start"
startProcess.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
AddSmartArtChildNode(startProcess, "Begin exercise and eat balanced meals.", "Stay hydrated and prioritize sleep.", 12.0F)
' Add the "Track" phase node
Dim trackProcess As IOfficeSmartArtNode = segmentedProcessSmartArt.Nodes(1)
trackProcess.TextBody.Text = "Track"
trackProcess.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
AddSmartArtChildNode(trackProcess, "Record physical activity and food intake.", "Use a fitness app or journal.", 12.0F)
' Add the "Sustain" phase node
Dim sustainProcess As IOfficeSmartArtNode = segmentedProcessSmartArt.Nodes(2)
sustainProcess.TextBody.Text = "Sustain"
sustainProcess.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
AddSmartArtChildNode(sustainProcess, "Maintain healthy habits consistently.", "Set goals for continuous improvement.", 12.0F)
' Saves the Word document
document.Save("Result.docx", FormatType.Docx)
' Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

The following code example shows AddSmartArtChildNode, which is used to add child nodes to a given SmartArt node and apply formatting.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private void AddSmartArtChildNode(IOfficeSmartArtNode node, string childText1, string childText2, float fontSize)
{
    node.ChildNodes[0].TextBody.Text = childText1;
    node.ChildNodes[1].TextBody.Text = childText2;
    for (int i = 0; i < node.ChildNodes.Count; i++)
    {
        node.ChildNodes[i].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = fontSize;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void AddSmartArtChildNode(IOfficeSmartArtNode node, string childText1, string childText2, float fontSize)
{
    node.ChildNodes[0].TextBody.Text = childText1;
    node.ChildNodes[1].TextBody.Text = childText2;
    for (int i = 0; i < node.ChildNodes.Count; i++)
    {
        node.ChildNodes[i].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = fontSize;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub AddSmartArtChildNode(node As IOfficeSmartArtNode, childText1 As String, childText2 As String, fontSize As Single)
    node.ChildNodes(0).TextBody.Text = childText1
    node.ChildNodes(1).TextBody.Text = childText2
    For i As Integer = 0 To node.ChildNodes.Count - 1
        node.ChildNodes(i).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = fontSize
    Next
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Process/.NET/).

### cycle

The following code example illustrating how to create a **Cycle-type SmartArt** in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Cycle/.NET/Create-SmartArt-Cycle/Program.cs" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Customer Service Cycle");
textRange1.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Block Cycle" layout
WSmartArt blockCycleSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.BlockCycle, 432, 252);
// Add the "Inquiry" phase node
IOfficeSmartArtNode inquiryNode = blockCycleSmartArt.Nodes[0];
inquiryNode.TextBody.Text = "Inquiry";
inquiryNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Response" phase node
IOfficeSmartArtNode responseNode = blockCycleSmartArt.Nodes[1];
responseNode.TextBody.Text = "Response";
responseNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Resolution" phase node
IOfficeSmartArtNode resolutionNode = blockCycleSmartArt.Nodes[2];
resolutionNode.TextBody.Text = "Resolution";
resolutionNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Feedback" phase node
IOfficeSmartArtNode feedBackNode = blockCycleSmartArt.Nodes[3];
feedBackNode.TextBody.Text = "Feedback";
feedBackNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Follow-up" phase node
IOfficeSmartArtNode followupNode = blockCycleSmartArt.Nodes[4];
followupNode.TextBody.Text = "Follow-up";
followupNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Customer Service Cycle");
textRange1.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Block Cycle" layout
WSmartArt blockCycleSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.BlockCycle, 432, 252);
// Add the "Inquiry" phase node
IOfficeSmartArtNode inquiryNode = blockCycleSmartArt.Nodes[0];
inquiryNode.TextBody.Text = "Inquiry";
inquiryNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Response" phase node
IOfficeSmartArtNode responseNode = blockCycleSmartArt.Nodes[1];
responseNode.TextBody.Text = "Response";
responseNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Resolution" phase node
IOfficeSmartArtNode resolutionNode = blockCycleSmartArt.Nodes[2];
resolutionNode.TextBody.Text = "Resolution";
resolutionNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Feedback" phase node
IOfficeSmartArtNode feedBackNode = blockCycleSmartArt.Nodes[3];
feedBackNode.TextBody.Text = "Feedback";
feedBackNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
// Add the "Follow-up" phase node
IOfficeSmartArtNode followupNode = blockCycleSmartArt.Nodes[4];
followupNode.TextBody.Text = "Follow-up";
followupNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 15f;
//Saves the Word document
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument()
Dim section As IWSection = document.AddSection()
' Retrieves the first paragraph and add text.
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
Dim textRange1 As IWTextRange = paragraph.AppendText("Customer Service Cycle")
textRange1.CharacterFormat.FontSize = 28.0F
paragraph = section.AddParagraph()
paragraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
' Add SmartArt with "Block Cycle" layout
Dim blockCycleSmartArt As WSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.BlockCycle, 432, 252)
' Add the "Inquiry" phase node
Dim inquiryNode As IOfficeSmartArtNode = blockCycleSmartArt.Nodes(0)
inquiryNode.TextBody.Text = "Inquiry"
inquiryNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
' Add the "Response" phase node
Dim responseNode As IOfficeSmartArtNode = blockCycleSmartArt.Nodes(1)
responseNode.TextBody.Text = "Response"
responseNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
' Add the "Resolution" phase node
Dim resolutionNode As IOfficeSmartArtNode = blockCycleSmartArt.Nodes(2)
resolutionNode.TextBody.Text = "Resolution"
resolutionNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
' Add the "Feedback" phase node
Dim feedBackNode As IOfficeSmartArtNode = blockCycleSmartArt.Nodes(3)
feedBackNode.TextBody.Text = "Feedback"
feedBackNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
' Add the "Follow-up" phase node
Dim followupNode As IOfficeSmartArtNode = blockCycleSmartArt.Nodes(4)
followupNode.TextBody.Text = "Follow-up"
followupNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 15.0F
' Saves the Word document
document.Save("Result.docx", FormatType.Docx)
' Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Cycle/.NET/).

### Hierarchy

The following code example illustrating how to create a **Hierarchy-type SmartArt** in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Company Organizational Structure");
textRange1.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Hierarchy" layout
WSmartArt hierarchySmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.Hierarchy, 432, 252);
// Configure the "Manager" node and its hierarchy
IOfficeSmartArtNode manager = hierarchySmartArt.Nodes[0];
manager.TextBody.Text = "Manager";
manager.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[0].TextBody.Text = "Team Lead 1";
manager.ChildNodes[0].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[0].ChildNodes[0].TextBody.Text = "Employee 1";
manager.ChildNodes[0].ChildNodes[0].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[0].ChildNodes[1].TextBody.Text = "Employee 2";
manager.ChildNodes[0].ChildNodes[1].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[1].TextBody.Text = "Team Lead 2";
manager.ChildNodes[1].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[1].ChildNodes[0].TextBody.Text = "Employee 3";
manager.ChildNodes[1].ChildNodes[0].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Company Organizational Structure");
textRange1.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Hierarchy" layout
WSmartArt hierarchySmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.Hierarchy, 432, 252);
// Configure the "Manager" node and its hierarchy
IOfficeSmartArtNode manager = hierarchySmartArt.Nodes[0];
manager.TextBody.Text = "Manager";
manager.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[0].TextBody.Text = "Team Lead 1";
manager.ChildNodes[0].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[0].ChildNodes[0].TextBody.Text = "Employee 1";
manager.ChildNodes[0].ChildNodes[0].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[0].ChildNodes[1].TextBody.Text = "Employee 2";
manager.ChildNodes[0].ChildNodes[1].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[1].TextBody.Text = "Team Lead 2";
manager.ChildNodes[1].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
manager.ChildNodes[1].ChildNodes[0].TextBody.Text = "Employee 3";
manager.ChildNodes[1].ChildNodes[0].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 20f;
//Saves the Word document
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument()
Dim section As IWSection = document.AddSection()
' Retrieves the first paragraph and add text.
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
Dim textRange1 As IWTextRange = paragraph.AppendText("Company Organizational Structure")
textRange1.CharacterFormat.FontSize = 28.0F
paragraph = section.AddParagraph()
paragraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
' Add SmartArt with "Hierarchy" layout
Dim hierarchySmartArt As WSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.Hierarchy, 432, 252)
' Configure the "Manager" node and its hierarchy
Dim manager As IOfficeSmartArtNode = hierarchySmartArt.Nodes(0)
manager.TextBody.Text = "Manager"
manager.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 20.0F
manager.ChildNodes(0).TextBody.Text = "Team Lead 1"
manager.ChildNodes(0).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 20.0F
manager.ChildNodes(0).ChildNodes(0).TextBody.Text = "Employee 1"
manager.ChildNodes(0).ChildNodes(0).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 20.0F
manager.ChildNodes(0).ChildNodes(1).TextBody.Text = "Employee 2"
manager.ChildNodes(0).ChildNodes(1).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 20.0F
manager.ChildNodes(1).TextBody.Text = "Team Lead 2"
manager.ChildNodes(1).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 20.0F
manager.ChildNodes(1).ChildNodes(0).TextBody.Text = "Employee 3"
manager.ChildNodes(1).ChildNodes(0).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 20.0F
' Saves the Word document
document.Save("Result.docx", FormatType.Docx)
' Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

### Relationship

The following code example illustrating how to create a **Relationship-type SmartArt** in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Relationship/.NET/Create-SmartArt-Relationship/Program.cs" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Remote Work vs Office Work");
textRange1.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Counter Balance Arrows" layout
WSmartArt counterBalanceArrowsSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.CounterBalanceArrows, 432, 252);
// Add the "Remote Work" phase node
IOfficeSmartArtNode remoteWorkNode = counterBalanceArrowsSmartArt.Nodes[0];
remoteWorkNode.TextBody.Text = "Remote Work";
remoteWorkNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 19f;
remoteWorkNode.ChildNodes.Add();
remoteWorkNode.ChildNodes.Add();
AddSmartArtChildNode(remoteWorkNode, "Flexibility", "Work-Life Balance", 15f);
// Add the "Office Work" phase node
IOfficeSmartArtNode officeWorkNode = counterBalanceArrowsSmartArt.Nodes[1];
officeWorkNode.TextBody.Text = "Office Work";
officeWorkNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 19f;
officeWorkNode.ChildNodes.Add();
officeWorkNode.ChildNodes.Add();
AddSmartArtChildNode(officeWorkNode, "Collaboration", "Structured Environment", 15f);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
// Retrieves the first paragraph and add text.
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
IWTextRange textRange1 = paragraph.AppendText("Remote Work vs Office Work");
textRange1.CharacterFormat.FontSize = 28f;
paragraph = section.AddParagraph();
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Add SmartArt with "Counter Balance Arrows" layout
WSmartArt counterBalanceArrowsSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.CounterBalanceArrows, 432, 252);
// Add the "Remote Work" phase node
IOfficeSmartArtNode remoteWorkNode = counterBalanceArrowsSmartArt.Nodes[0];
remoteWorkNode.TextBody.Text = "Remote Work";
remoteWorkNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 19f;
remoteWorkNode.ChildNodes.Add();
remoteWorkNode.ChildNodes.Add();
AddSmartArtChildNode(remoteWorkNode, "Flexibility", "Work-Life Balance", 15f);
// Add the "Office Work" phase node
IOfficeSmartArtNode officeWorkNode = counterBalanceArrowsSmartArt.Nodes[1];
officeWorkNode.TextBody.Text = "Office Work";
officeWorkNode.TextBody.Paragraphs[0].TextParts[0].Font.FontSize = 19f;
officeWorkNode.ChildNodes.Add();
officeWorkNode.ChildNodes.Add();
AddSmartArtChildNode(officeWorkNode, "Collaboration", "Structured Environment", 15f);
//Saves the Word document
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument()
Dim section As IWSection = document.AddSection()
' Retrieves the first paragraph and add text.
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
Dim textRange1 As IWTextRange = paragraph.AppendText("Remote Work vs Office Work")
textRange1.CharacterFormat.FontSize = 28.0F
paragraph = section.AddParagraph()
paragraph = section.AddParagraph()
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
' Add SmartArt with "Counter Balance Arrows" layout
Dim counterBalanceArrowsSmartArt As WSmartArt = paragraph.AppendSmartArt(OfficeSmartArtType.CounterBalanceArrows, 432, 252)
' Add the "Remote Work" phase node
Dim remoteWorkNode As IOfficeSmartArtNode = counterBalanceArrowsSmartArt.Nodes(0)
remoteWorkNode.TextBody.Text = "Remote Work"
remoteWorkNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 19.0F
remoteWorkNode.ChildNodes.Add()
remoteWorkNode.ChildNodes.Add()
AddSmartArtChildNode(remoteWorkNode, "Flexibility", "Work-Life Balance", 15.0F)
' Add the "Office Work" phase node
Dim officeWorkNode As IOfficeSmartArtNode = counterBalanceArrowsSmartArt.Nodes(1)
officeWorkNode.TextBody.Text = "Office Work"
officeWorkNode.TextBody.Paragraphs(0).TextParts(0).Font.FontSize = 19.0F
officeWorkNode.ChildNodes.Add()
officeWorkNode.ChildNodes.Add()
AddSmartArtChildNode(officeWorkNode, "Collaboration", "Structured Environment", 15.0F)
' Saves the Word document
document.Save("Result.docx", FormatType.Docx)
' Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

The following code example shows AddSmartArtChildNode, which is used to add child nodes to a given SmartArt node and apply formatting.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private void AddSmartArtChildNode(IOfficeSmartArtNode node, string childText1, string childText2, float fontSize)
{
    node.ChildNodes[0].TextBody.Text = childText1;
    node.ChildNodes[1].TextBody.Text = childText2;
    for (int i = 0; i < node.ChildNodes.Count; i++)
    {
        node.ChildNodes[i].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = fontSize;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void AddSmartArtChildNode(IOfficeSmartArtNode node, string childText1, string childText2, float fontSize)
{
    node.ChildNodes[0].TextBody.Text = childText1;
    node.ChildNodes[1].TextBody.Text = childText2;
    for (int i = 0; i < node.ChildNodes.Count; i++)
    {
        node.ChildNodes[i].TextBody.Paragraphs[0].TextParts[0].Font.FontSize = fontSize;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub AddSmartArtChildNode(node As IOfficeSmartArtNode, childText1 As String, childText2 As String, fontSize As Single)
    node.ChildNodes(0).TextBody.Text = childText1
    node.ChildNodes(1).TextBody.Text = childText2
    For i As Integer = 0 To node.ChildNodes.Count - 1
        node.ChildNodes(i).TextBody.Paragraphs(0).TextParts(0).Font.FontSize = fontSize
    Next
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Relationship/.NET/).

### Matrix

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

### pyramid

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

### Picture

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

## Modify SmartArt appearance 


{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

## Remove SmartArt


{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

## Nodes in SmartArt

### Adding a node to the SmartArt 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

### Iterating through child nodes of an existing SmartArt 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

### Removing node from an existing SmartArt 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

###Assistant nodes in SmartArt 
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/Create-SmartArt-Hierarchy/Program.cs" %}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/main/SmartArts/Create-SmartArt-Hierarchy/.NET/).

## Limitations

## Supported SmartArt layout types

1. Basic Block List
2. Alternating Hexagons
3. Picture Caption List
4. Lined List
5. Vertical Bullet List
6. Vertical Box List
7. Horizontal Bullet List
8. Square Accent List
9. Picture Accent List
10. Bending Picture Accent List
11. Stacked List
12. Increasing Circle Process
13. Pie Process
14. Detailed Process
15. Grouped List
16. Horizontal Picture List
17. Continuous Picture List
18. Picture Strips
19. Vertical Picture List
20. Alternating Picture Blocks
21. Vertical Picture Accent List
22. Titled Picture Accent List
23. Vertical Block List
24. Vertical Chevron List
25. Vertical Accent List
26. Vertical Arrow List
27. Trapezoid List
28. Descending Block List
29. Table List
30. Segmented Process
31. Vertical Curved List
32. Pyramid List
33. Target List
34. Vertical Circle List
35. Table Hierarchy
36. Basic Process
37. Step Up Process
38. Step Down Process
39. Accent Process
40. Alternating Flow
41. Continuous Block Process
42. Increasing Arrows Process
43. Continuous Arrow Process
44. Process Arrows
45. Circle Accent Time Line
46. Basic Time Line
47. Basic Chevron Process
48. Closed Chevron Process
49. Chevron List
50. Sub-Step Process
51. Phased Process
52. Random to Result Process
53. Staggered Process
54. Process List
55. Circle Arrow Process
56. Basic Bending Process
57. Vertical Bending Process
58. Ascending Picture Accent Process
59. Upward Arrow
60. Descending Process
61. Circular Bending Process
62. Equation
63. Vertical Equation
64. Funnel 
65. Gear
66. Arrow Ribbon
67. Opposing Arrows
68. Converging Arrows
69. Diverging Arrows
70. Basic Cycle
71. Text Cycle
72. Block Cycle
73. Non directional Cycle
74. Continuous Cycle
75. Multi Directional Cycle
76. Segmented Cycle
77. Basic Pie
78. Radial Cycle
79. Basic Radial
80. Diverging Radial
81. Radial Venn
82. Radial Cluster
83. Organization Chart
84. Name and Title Organization Chart
85. Half Circle Organization Chart
86. Circle Picture hierarchy
87. Hierarchy
88. Labeled Hierarchy
89. Horizontal Organization Chart
90. Horizontal Multi-Level Hierarchy
91. Horizontal Hierarchy
92. Horizontal Labeled Hierarchy
93. Balance
94. Circle Relationship
95. Hexagon Cluster
96. Opposing Ideas
97. Plus and Minus 
98. Reverse List
99. Counter Balance Arrows
100. Segmented Pyramid
101. Nested Target
102. Converging Radial 
103. Radial List
104. Basic Target
105. Basic Matrix
106. Titled Matrix
107. Grid Matrix
108. Cycle Matrix
109. Accent Picture
110. Circular Picture Callout
111. Snapshot Picture List
112. Spiral Picture
113. Captioned Pictures
114. Bending Picture Caption
115. Bending Picture-Semi Transparent Text
116. Bending Picture Blocks
117. Bending Picture Caption List
118. Titled Picture Blocks
119. Picture Grid
120. Picture Accent Blocks
121. Alternating Picture Circles
122. Title Picture Lineup
123. Picture Lineup
124. Framed Text Picture
125. Bubble Picture List
126. Basic Pyramid
127. Inverted Pyramid
128. Basic Venn
129. Linear Venn
130. Stacked Venn
131. Hierarchy List
132. Picture Accent Process
133. Repeating Bending Process
134. Vertical Process

## Online Demo

* Explore how to create a SmartArt diagram in a Word document using the .NET Word Library (DocIO) in a live demo [here]().