public IActionResult Index()
{
    List<object> data = new List<object>()
    {
        new { Text = "Plain Text" },
        new { Text = "Mineral Water H2O" },
        new { Text = "Energy Supplement C6H12O6" },
        new { Text = "H2O" },
        new { Text = "X2" }
    };
    ViewBag.DefaultData = data;
    return View();
}