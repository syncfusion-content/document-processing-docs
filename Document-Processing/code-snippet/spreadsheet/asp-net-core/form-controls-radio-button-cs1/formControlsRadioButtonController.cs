public IActionResult Index()
{
    // Form controls data for radio button
    var formControls = new List<object>
    {
        // Shipping options group - linked to same cell (D2)
        new { type = "RadioButton", text = "Standard Shipping", cellLink = "D2", value = "Unchecked", top = 40, left = 150, height = 20, width = 120 },
        new { type = "RadioButton", text = "Express Shipping", cellLink = "D2", value = "Unchecked", top = 70, left = 150, height = 20, width = 120 },
        new { type = "RadioButton", text = "Overnight Shipping", cellLink = "D2", value = "Unchecked", top = 100, left = 150, height = 20, width = 120 },
        // Payment options group - linked to same cell (D4)
        new { type = "RadioButton", text = "Credit Card", cellLink = "D4", value = "Unchecked", top = 160, left = 150, height = 20, width = 120 },
        new { type = "RadioButton", text = "Debit Card", cellLink = "D4", value = "Unchecked", top = 190, left = 150, height = 20, width = 120 },
        new { type = "RadioButton", text = "Wire Transfer", cellLink = "D4", value = "Unchecked", top = 220, left = 150, height = 20, width = 120 }
    };

    ViewBag.FormControls = formControls;

    return View();
}
