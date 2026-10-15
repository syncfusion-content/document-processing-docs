---
layout: post
title: Form Controls Types - Checkbox, Radio Button, Dropdown | Syncfusion
description: Learn about the three provided form controls in React Spreadsheet - Checkbox, Radio Button, and Dropdown List with implementation details and examples.
control: Form Controls
platform: document-processing
documentation: ug
---

# Form Controls in React Spreadsheet

The React Spreadsheet component provides three primary form control types that enable interactive data entry within worksheet cells. Each control serves a specific purpose and offers distinct interaction patterns.

## Checkbox

### Overview

The **Checkbox** control allows users to select or deselect a binary option within a cell. It is ideal for toggling boolean values, enabling/disabling features, or marking items as complete or incomplete.

### Key Characteristics

- **Binary State**: Each checkbox can be in one of two states — checked (true) or unchecked (false).
- **Visual Feedback**: The checkbox provides clear visual indication of its current state.
- **Single Cell**: Each checkbox occupies a single cell in the worksheet.
- **Event Driven**: Checkbox state changes can trigger events that you can handle programmatically.

### Use Cases

- Task completion tracking (complete/incomplete)
- Feature toggles (enabled/disabled)
- Agreement confirmations (agree/disagree)
- Selection lists (selected/unselected items)

### Implementation

Checkboxes are configured by defining the cell type as "checkbox" with appropriate properties. The checked state is typically stored as a boolean value in the cell.

#### Basic Checkbox Example

The following code example shows how to create and configure a checkbox in a spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-checkbox-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-checkbox-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/form-controls-checkbox-cs1" %}

### Checkbox Properties

| Property | Type | Description |
|---|---|---|
| `type` | string | Set to "checkbox" to define the cell as a checkbox control |
| `value` | boolean | Represents the current state (true for checked, false for unchecked) |
| `enabled` | boolean | Enables or disables the checkbox interaction |

### Styling Checkboxes

You can apply cell formatting to checkboxes to enhance their visual appearance:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-checkbox-style-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-checkbox-style-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

---

## Radio Button

### Overview

The **Radio Button** control allows users to select a single option from a group of mutually exclusive choices. When one radio button is selected, any previously selected option in the same group is automatically deselected.

### Key Characteristics

- **Single Selection**: Only one radio button in a group can be selected at a time.
- **Grouped Options**: Radio buttons are organized in groups where selection is mutually exclusive.
- **Visual Indication**: Selected and unselected states are clearly distinguished visually.
- **Data Storage**: The selected value is stored as the cell's value.

### Use Cases

- Priority levels (high/medium/low)
- Status selection (active/inactive/pending)
- Yes/No/Maybe questions
- Category selection (various predefined categories)

### Implementation

Radio buttons are configured by defining a group of cells with the "radio" type and assigning a group identifier. Only one radio button per group can be selected at any time.

#### Basic Radio Button Example

The following code example demonstrates how to implement radio buttons in a spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-radio-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-radio-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/form-controls-radio-cs1" %}

### Radio Button Properties

| Property | Type | Description |
|---|---|---|
| `type` | string | Set to "radio" to define the cell as a radio button control |
| `value` | string | Represents the selected option value |
| `group` | string | Identifies the radio button group for mutual exclusion |
| `label` | string | Display text shown next to the radio button |
| `enabled` | boolean | Enables or disables the radio button interaction |

### Styling Radio Buttons

You can customize the appearance of radio buttons through cell formatting:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-radio-style-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-radio-style-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

---

## Dropdown List

### Overview

The **Dropdown List** control presents users with a predefined list of options to select from. It is particularly useful for standardizing data entry and preventing invalid entries by limiting choices to approved values.

### Key Characteristics

- **Predefined Options**: A dropdown contains a fixed set of selectable values.
- **Space-Efficient**: The dropdown collapses when not active, conserving worksheet space.
- **Single Selection**: Users select one value from the list.
- **Searchable**: Users can type to quickly find and select options in long lists.
- **Data Validation**: Ensures entries are limited to approved values.

### Use Cases

- Department selection (Sales, Marketing, IT, etc.)
- Country/Region selection
- Product categories
- Status selection (Open, In Progress, Closed)
- Priority levels with text labels

### Implementation

Dropdowns are configured by defining a cell as "dropdownlist" type and providing a source list of options. The selected value is stored in the cell.

#### Basic Dropdown Example

The following code example shows how to create a dropdown list in a spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/form-controls-dropdown-cs1" %}

### Dropdown Properties

| Property | Type | Description |
|---|---|---|
| `type` | string | Set to "dropdownlist" to define the cell as a dropdown list |
| `value` | string/number | The currently selected value |
| `source` | array | Array of available options to select from |
| `enabled` | boolean | Enables or disables the dropdown interaction |
| `showDropButton` | boolean | Controls visibility of the dropdown button |
| `allowCustom` | boolean | Allows users to enter custom values not in the list |

### Dynamic Dropdown Lists

Dropdowns can be populated dynamically from data sources:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-dynamic-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-dynamic-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

### Styling Dropdowns

Enhance dropdown appearance through cell formatting and customization:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-style-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-style-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

---

## Common Form Control Operations

### Getting Form Control Values

You can programmatically retrieve the values of form controls using the cell data model:

```javascript
// Get checkbox value
const checkboxValue = spreadsheet.getRange('A1').value;

// Get radio button value
const radioValue = spreadsheet.getRange('B1').value;

// Get dropdown value
const dropdownValue = spreadsheet.getRange('C1').value;
```

### Setting Form Control Values

Update form control values programmatically:

```javascript
// Set checkbox value
spreadsheet.setRange('A1', { value: true, type: 'checkbox' });

// Set radio button value
spreadsheet.setRange('B1', { value: 'Option1', type: 'radio', group: 'group1' });

// Set dropdown value
spreadsheet.setRange('C1', { value: 'Option1', type: 'dropdownlist' });
```

### Handling Form Control Events

Form controls trigger events when their state changes:

```javascript
spreadsheet.onFormControlChange = (args) => {
  const { cell, type, value } = args;
  console.log(`Form control at ${cell} changed to ${value}`);
};
```

### Enabling/Disabling Form Controls

Control the interactivity of form controls:

```javascript
// Disable a form control
spreadsheet.setRange('A1', { enabled: false });

// Enable a form control
spreadsheet.setRange('A1', { enabled: true });
```

---

## Form Control Constraints and Considerations

### Data Type Handling

- **Checkbox**: Stored as boolean values (true/false)
- **Radio Button**: Stored as string or numeric values representing the selection
- **Dropdown**: Stored as the selected value from the source list

### Performance

Form controls are optimized for performance:
- Virtual rendering ensures smooth scrolling with many controls
- Cell updates are processed efficiently
- State management is lightweight and scalable

### Compatibility

Form controls work seamlessly with:
- Data Binding
- Sorting and Filtering
- Cell Formatting
- Formulas (cells with form controls can be referenced in formulas)
- Export/Import operations

### Limitations

- Form controls are limited to single cell implementation
- Nested or complex control hierarchies are not supported
- Cross-sheet form control groups are not supported
- Some advanced styling options may not apply to all form control types

---

## Best Practices

1. **Use Appropriate Control Types**: Choose the control type that best fits your data model (checkbox for binary, radio for single selection, dropdown for multiple predefined options).

2. **Provide Clear Labels**: Use column headers and row labels to clearly indicate what each form control represents.

3. **Validate Input**: While form controls inherently validate selection, consider additional validation rules for complex scenarios.

4. **Consistent Styling**: Apply consistent formatting to form controls of the same type to improve user experience.

5. **Handle Events**: Implement event handlers to respond to form control changes and trigger related updates.

6. **Test Accessibility**: Ensure form controls are accessible via keyboard navigation and screen readers.

---

## See Also

* [Form Controls Overview](./overview)
* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
* [Rows and Columns](../rows-and-columns/overview)
