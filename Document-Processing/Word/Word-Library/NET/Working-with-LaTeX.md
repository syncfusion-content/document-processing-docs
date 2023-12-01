---
title: Working with LaTeX | DocIO | Syncfusion
description: Learn how to create mathematical equations in a Word document using LaTeX with the .NET Word (DocIO) library without Microsoft Word.
platform: file-formats
control: DocIO
documentation: UG
---

# LaTeX

The .NET Word (DocIO) library allows to create mathematical equation in Word document using **LaTeX**.

## Accent

Add **accent** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create accent equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an accent equation using LaTeX.
document.LastParagraph.AppendMath(@"\dot{a}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an accent equation using LaTeX.
document.LastParagraph.AppendMath(@"\dot{a}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an accent equation using LaTeX.
document.LastParagraph.AppendMath(@"\dot{a}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format accent equations.

<table>
<thead>
<tr>
<th width="20%">
S.No
</th>
<th width="40%">
Professional
</th>
<th width="40%">
LaTeX
</th>
</tr>
</thead>
<tr>
<td>
1.
</td>
<td>
 <img src="WorkingwithMathematicalEquation_images/Accent1.png" alt="Accent1">
</td>
<td>
\dot{a}
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
 <img src="WorkingwithMathematicalEquation_images/Accent2.png" alt="Accent2">
</td>
<td>
\ddot{a}
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
 <img src="WorkingwithMathematicalEquation_images/Accent3.png" alt="Accent3">
</td>
<td>
\dddot{a}
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
 <img src="WorkingwithMathematicalEquation_images/Accent4.png" alt="Accent4">
</td>
<td>
\hat{a}
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
 <img src="WorkingwithMathematicalEquation_images/Accent5.png" alt="Accent5">
</td>
<td>
\check{a}
</td>
</tr>
</table>

The following table demonstrates the LaTeX equivalent to professional format accent equations.

![LaTeX equivalent to professional format accent equations](WorkingwithMathematicalEquation_images/Table-LaTeX.png)

## Bar

Add **bar** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create bar equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an bar equation using LaTeX.
document.LastParagraph.AppendMath(@"\dot{a}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an bar equation using LaTeX.
document.LastParagraph.AppendMath(@"\dot{a}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an bar equation using LaTeX.
document.LastParagraph.AppendMath(@"\dot{a}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}


You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format bar equations.

## Box

Add **box** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create box equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an box equation using LaTeX.
document.LastParagraph.AppendMath(@"\box{a}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an box equation using LaTeX.
document.LastParagraph.AppendMath(@"\box{a}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an box equation using LaTeX.
document.LastParagraph.AppendMath(@"\box{a}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format box equations.

## Border Box

Add **border box** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create border box equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an border box equation using LaTeX.
document.LastParagraph.AppendMath(@"\boxed{x^2 + y^2 = z^2}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an border box equation using LaTeX.
document.LastParagraph.AppendMath(@"\boxed{x^2 + y^2 = z^2}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an border box equation using LaTeX.
document.LastParagraph.AppendMath(@"\boxed{x^2 + y^2 = z^2}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format border box equations.

## Delimiter

Add **delimiter** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create delimiter equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an delimiter equation using LaTeX.
document.LastParagraph.AppendMath(@"\left(a\right)");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an delimiter equation using LaTeX.
document.LastParagraph.AppendMath(@"\left(a\right)");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an delimiter equation using LaTeX.
document.LastParagraph.AppendMath(@"\left(a\right)")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format delimiter equations.

## Fraction

Add **fraction** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create fraction equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an fraction equation using LaTeX.
document.LastParagraph.AppendMath(@"{\frac{dy}{dx}}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an fraction equation using LaTeX.
document.LastParagraph.AppendMath(@"{\frac{dy}{dx}}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an fraction equation using LaTeX.
document.LastParagraph.AppendMath(@"{\frac{dy}{dx}}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format fraction equations.

## Function

Add **function** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create function equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an function equation using LaTeX.
document.LastParagraph.AppendMath(@"\sin{\theta}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an function equation using LaTeX.
document.LastParagraph.AppendMath(@"\sin{\theta}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an function equation using LaTeX.
document.LastParagraph.AppendMath(@"\sin{\theta}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format function equations.

## Group character

Add **group character** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create group character equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an group character equation using LaTeX.
document.LastParagraph.AppendMath(@"\overbrace{a-b}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an group character equation using LaTeX.
document.LastParagraph.AppendMath(@"\overbrace{a-b}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an group character equation using LaTeX.
document.LastParagraph.AppendMath(@"\overbrace{a-b}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format group character equations.

## Limit

Add **limit** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create limit equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an limit equation using LaTeX.
document.LastParagraph.AppendMath(@"\lim\belowb{a}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an limit equation using LaTeX.
document.LastParagraph.AppendMath(@"\lim\belowb{a}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an limit equation using LaTeX.
document.LastParagraph.AppendMath(@"\lim\belowb{a}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format limit equations.

## Matrix

Add **matrix** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create matrix equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an matrix equation using LaTeX.
document.LastParagraph.AppendMath(@"\begin{matrix}a&b\\\end{matrix}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an matrix equation using LaTeX.
document.LastParagraph.AppendMath(@"\begin{matrix}a&b\\\end{matrix}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an matrix equation using LaTeX.
document.LastParagraph.AppendMath(@"\begin{matrix}a&b\\\end{matrix}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format matrix equations.

## N-array

Add **N-array** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create N-array equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an N-array equation using LaTeX.
document.LastParagraph.AppendMath(@"\sum a");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an N-array equation using LaTeX.
document.LastParagraph.AppendMath(@"\sum a");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an N-array equation using LaTeX.
document.LastParagraph.AppendMath(@"\sum a")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format N-array equations.

## Radical

Add **radical** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create radical equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an radical equation using LaTeX.
document.LastParagraph.AppendMath(@"\sqrt a");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an radical equation using LaTeX.
document.LastParagraph.AppendMath(@"\sqrt a");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an radical equation using LaTeX.
document.LastParagraph.AppendMath(@"\sqrt a")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format radical equations.

## SubSuperScript

Add **SubSuperScript** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create SubSuperScript equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@"a^b");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@"a^b");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@"a^b")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format SubSuperScript equations.

## Left SubSuperScript

Add **Left SubSuperScript** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create Left SubSuperScript equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an Left SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@"{_40}^{20}}100");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an Left SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@"{_40}^{20}}100");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an Left SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@"{_40}^{20}}100");

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format Left SubSuperScript equations.

## Right SubSuperScript

Add **Right SubSuperScript** equation to a Word document using the LaTeX through **AppendMath** API.

The following code example illustrates how to create Right SubSuperScript equation using LaTeX in Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an Right SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@”{100}_{40}^{20}");

//Save the Word document to MemoryStream
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);


{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new Word document.
using WordDocument document = new WordDocument();

//Add one section and one paragraph to the document.
document.EnsureMinimal();

//Append an Right SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@”{100}_{40}^{20}");

//Save the Word document.
document.Save("Result.docx", FormatType.Docx);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new Word document.
Dim document As WordDocument = New WordDocument()

'Add one section and one paragraph to the document.
document.EnsureMinimal()

'Append an Right SubSuperScript equation using LaTeX.
document.LastParagraph.AppendMath(@”{100}_{40}^{20}")

'Save the Word document.
document.Save("Result.docx", FormatType.Docx)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.

The following table demonstrates the LaTeX equivalent to professional format Right SubSuperScript equations.