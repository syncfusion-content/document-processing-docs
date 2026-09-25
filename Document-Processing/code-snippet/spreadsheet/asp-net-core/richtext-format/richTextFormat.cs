public IActionResult Index()
{
    List<object> data = new List<object>()
    {
        new { Text = "Plain Text" },
        new { Text = "Annual Sales Report 2026 (Draft)" },
        new { Text = "Customer Loyalty Program" },
        new { Text = "Mineral Water H2O" },
        new { Text = "Premium Membership valid until 31st Dec 2026" }
    };
    ViewBag.DefaultData = data;
    return View();
}