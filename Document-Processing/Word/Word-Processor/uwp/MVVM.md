---
title: MVVM in UWP DOCX Editor | Syncfusion
description: The MVVM in UWP DOCX Editor offers Model-View-ViewModel pattern support, enabling clean separation through view model implementation for the editor.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: mvvm,viewmodel,data-binding,contentchanged,extension-class
---
# MVVM in UWP DOCX Editor

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) control can be used with the Model-View-ViewModel (MVVM) pattern. This section demonstrates how to use the SfRichTextBoxAdv control with the MVVM pattern by binding the document's plain text to a view-model property.

## Creating a view model

The following code example demonstrates how to implement a view-model class that contains properties to preserve the description of some animals and the animal that is selected for discussion. Whenever the animal chosen for discussion is changed, the previously chosen animal's description is updated in the dictionary, and the newly chosen animal's description is assigned to the `Text` property.
{% tabs %}
{% highlight c# %}
/// <summary>
/// Represents the view model class.
/// </summary>
public class ViewModel : INotifyPropertyChanged
{
    #region Field
    private string animal;
    private string text;
    Dictionary<string, string> animals = null;
    bool skipUpdating = false;
    #endregion

    #region Properties
    /// <summary>
    /// Gets or sets the selected animal.
    /// </summary>
    /// <value>
    /// The selected animal.
    /// </value>
    public string Animal
    {
        get
        {
            return animal;
        }
        set
        {
            animal = value;
            NotifyPropertyChanged("Animal");
        }
    }
    /// <summary>
    /// Gets the animals.
    /// </summary>
    /// <value>
    /// The animals.
    /// </value>
    public ICollection<string> Animals
    {
        get
        {
            return animals.Keys;
        }
    }
    /// <summary>
    /// Gets or sets the description text for the selected animal.
    /// </summary>
    /// <value>
    /// The description text.
    /// </value>
    public string Text
    {
        get
        {
            return text;
        }
        set
        {
            text = value;
            NotifyPropertyChanged("Text");
        }
    }
    #endregion

    #region Event
    public event PropertyChangedEventHandler PropertyChanged;
    #endregion

    #region Constructor
    /// <summary>
    /// Initializes a new instance of the <see cref="ViewModel"/> class.
    /// </summary>
    public ViewModel()
    {
        Initialize();
    }
    #endregion

    #region Implementation
    /// <summary>
    /// Handles initialization.
    /// </summary>
    private void Initialize()
    {
        animals = new Dictionary<string, string>();

        animals.Add("Tiger", "The tiger is the largest cat species, reaching a total body length of up to 3.38 m over curves and exceptionally weighing up to 388.7 kg in the wild.");
        animals.Add("Lion", "The lion is one of the strongest animal. It is also known as the king of jungles.");
        animals.Add("Panda", "The giant panda, also known as panda bear or simply panda, is a bear native to south central China. It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body.");
        animals.Add("Beer", "Bears are mammals and are classified as dog like carnivorous.");
        animals.Add("Deer", "Deer are the ruminant mammals. Species in the family include the white-tailed deer, mule deer, elk, moose, red deer, reindeer, fallow deer, roe deer.");

        Animal = "Lion";
    }
    /// <summary>
    /// Notifies the property changed.
    /// </summary>
    /// <param name="propertyName">Name of the property.</param>
    private void NotifyPropertyChanged(string propertyName)
    {
        if (PropertyChanged != null)
            PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        // Updates the text when the animal changes (reflects the view).
        if (propertyName == "Animal")
        {
            skipUpdating = true;
            Text = animals[animal];
            skipUpdating = false;
        }
        // Updates the dictionary when changes are made in the view.
        if (propertyName == "Text" && !skipUpdating)
            animals[Animal] = Text;
    }
    #endregion
}


{% endhighlight %}

{% endtabs %}

## Implementing an extension class for SfRichTextBoxAdv

The following code example demonstrates how to implement an extension class for SfRichTextBoxAdv with a dependency property that supports two-way binding. The extension class exposes a `Text` property that contains the document's plain text and synchronizes it with the SfRichTextBoxAdv document.
{% tabs %}
{% highlight c# %}
/// <summary>
/// Represents the extension class for SfRichTextBoxAdv.
/// </summary>
public class SfRichTextBoxAdvExtension : SfRichTextBoxAdv
{
    #region Fields
    bool skipUpdating = false;
    #endregion

    #region Properties
    /// <summary>
    /// Gets or sets the document's plain text.
    /// </summary>
    public string Text
    {
        get
        {
            return (string)GetValue(TextProperty);
        }
        set
        {
            SetValue(TextProperty, value);
        }
    }
    #endregion

    #region Constructor
    /// <summary>
    /// Initializes a new instance of the SfRichTextBoxAdvExtension class.
    /// </summary>
    public SfRichTextBoxAdvExtension()
    {
        // Subscribes to the ContentChanged event.
        this.ContentChanged += RicTextBoxAdv_ContentChanged;
    }
    #endregion

    #region Static Dependency Properties
    /// <summary>
    /// Used as a backing store for the Text dependency property to enable styling, animation, and data binding.
    /// </summary>
    public static readonly DependencyProperty TextProperty = DependencyProperty.Register("Text", typeof(string), typeof(SfRichTextBoxAdvExtension), new PropertyMetadata(string.Empty, new PropertyChangedCallback(OnTextChanged)));
    #endregion

    #region Static Events
    /// <summary>
    /// Called when the text changes.
    /// </summary>
    /// <param name="obj">The dependency object whose property changed.</param>
    /// <param name="e">The event data.</param>
    private static void OnTextChanged(DependencyObject obj, DependencyPropertyChangedEventArgs e)
    {
        SfRichTextBoxAdvExtension richTextBox = (SfRichTextBoxAdvExtension)obj;
        // Updates the document with the new Text value.
        richTextBox.UpdateDocument((string)e.NewValue);
    }
    #endregion

    #region Events
    /// <summary>
    /// Called when the content changes in SfRichTextBoxAdv.
    /// </summary>
    /// <param name="obj">The source of the event.</param>
    /// <param name="args">The event data.</param>
    void RicTextBoxAdv_ContentChanged(object obj, ContentChangedEventArgs args)
    {
        if (this.Document != null)
        {
            // Used to skip the internal update of the document when the Text property is set.
            skipUpdating = true;
            Stream stream = new MemoryStream();
            // Saves the document's text into a stream.
            this.Save(stream, FormatType.Txt);
            stream.Position = 0;
            // Reads the text from the stream.
            using (StreamReader reader = new StreamReader(stream))
            {
                this.Text = reader.ReadToEnd();
            }
            skipUpdating = false;
        }
    }
    #endregion

    #region Implementation
    /// <summary>
    /// Updates the document.
    /// </summary>
    /// <param name="text">The text to load into the document.</param>
    private void UpdateDocument(string text)
    {
        // If the Text property is set internally, skip updating the document.
        if (!skipUpdating && !string.IsNullOrEmpty(text))
        {
            Stream stream = new MemoryStream();
            // Converts the text to a byte array.
            byte[] bytes = Encoding.UTF8.GetBytes(text);
            // Writes the byte array to the stream.
            stream.Write(bytes, 0, bytes.Length);
            stream.Position = 0;
            // Loads the stream into the document.
            Load(stream, FormatType.Txt);
        }
    }
    /// <summary>
    /// Disposes the instance.
    /// </summary>
    public new void Dispose()
    {
        this.ContentChanged -= RicTextBoxAdv_ContentChanged;
        ClearValue(TextProperty);
        base.Dispose();
    }
    #endregion
}


{% endhighlight %}

{% endtabs %}

## Creating the XAML view

The following code example demonstrates how to create a XAML view with SfRichTextBoxAdv and UI properties bound to view model properties.
{% tabs %}
{% highlight xaml %}
<Page>

    <Page.DataContext>
        <local:ViewModel />
    </Page.DataContext>
    
    <Border>
        <Grid>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto"/>
                <RowDefinition Height="*"/>
            </Grid.RowDefinitions>
            <StackPanel Orientation="Horizontal" Margin="4">
                <TextBlock Text="Animal:" />
                <ComboBox IsTabStop="False" ItemsSource="{Binding Animals}" SelectedValue="{Binding Animal, Mode=TwoWay}" />
            </StackPanel>
            <Grid Margin="10" Grid.Row="1">
                <Grid.RowDefinitions>
                    <RowDefinition Height="Auto"/>
                    <RowDefinition Height="*"/>
                </Grid.RowDefinitions>
                <TextBlock Text="Description" />
                <Border BorderThickness="1" BorderBrush="#A3A3A3">
                    <local:SfRichTextBoxAdvExtension Grid.Row="1" x:Name="richTextBoxAdv" Text="{Binding Path=Text,Mode=TwoWay}" LayoutType="Continuous" ManipulationMode="All"/>
                </Border>
            </Grid>
        </Grid>
    </Border>
</Page>



{% endhighlight %}

{% endtabs %}

## See also

- [Commands in UWP DOCX Editor](./Commands)
- [Document properties in UWP DOCX Editor](./Document-Properties)
- [Getting started with UWP DOCX Editor](./Getting-Started)
