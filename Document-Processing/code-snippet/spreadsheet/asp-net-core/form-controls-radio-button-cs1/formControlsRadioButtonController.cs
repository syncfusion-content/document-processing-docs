public IActionResult Index()
{
    // Sample data for demonstration
    List<object> data = new List<object>()
    {
        new { Option = "Option 1", Value = 1 },
        new { Option = "Option 2", Value = 2 },
        new { Option = "Option 3", Value = 3 },
        new { Option = "Option 4", Value = 4 }
    };
    
    ViewBag.DefaultData = data;
    return View();
}
