public IActionResult Index()
{
    // Form controls data for checkbox
    var formControls = new List<object>
    {
        new { type = "CheckBox", text = "Accept Terms", cellLink = "D2", value = "Unchecked", top = 40, left = 150, height = 20, width = 120 },
        new { type = "CheckBox", text = "Enable Notifications", cellLink = "D4", value = "Unchecked", top = 80, left = 150, height = 20, width = 120 },
        new { type = "CheckBox", text = "Select All Options", cellLink = "D6", value = "Unchecked", top = 120, left = 150, height = 20, width = 120 }
    };

    ViewBag.FormControls = formControls;

    return View();
}
