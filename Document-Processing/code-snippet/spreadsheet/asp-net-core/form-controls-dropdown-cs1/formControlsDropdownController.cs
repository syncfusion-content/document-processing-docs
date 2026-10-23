public IActionResult Index()
{
    // Form controls data for dropdown
    var formControls = new List<object>
    {
        new { type = "DropDown", text = "Select Delivery", cellLink = "D2", inputRange = "H1:H5", selectedIndex = 0, top = 40, left = 150, height = 22, width = 120 },
        new { type = "DropDown", text = "Select Payment", cellLink = "D4", inputRange = "I1:I4", selectedIndex = 0, top = 100, left = 150, height = 22, width = 120 },
        new { type = "DropDown", text = "Select Priority", cellLink = "D6", inputRange = "J1:J3", selectedIndex = 1, top = 160, left = 150, height = 22, width = 120 }
    };

    // Data for dropdown lists
    var deliveryOptions = new List<string> { "Standard Delivery", "Express Delivery", "Priority Delivery", "Pickup at Store", "Digital Download" };
    var paymentMethods = new List<string> { "Cash on Delivery", "Credit Card", "Debit Card", "Online Payment" };
    var priorityLevels = new List<string> { "Low", "Medium", "High" };

    ViewBag.FormControls = formControls;
    ViewBag.DeliveryOptions = deliveryOptions;
    ViewBag.PaymentMethods = paymentMethods;
    ViewBag.PriorityLevels = priorityLevels;

    return View();
}
