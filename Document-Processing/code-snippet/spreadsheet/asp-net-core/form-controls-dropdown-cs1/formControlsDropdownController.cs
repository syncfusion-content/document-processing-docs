public IActionResult Index()
{
    // Sample data for demonstration
    List<object> departments = new List<object>()
    {
        new { Department = "Sales" },
        new { Department = "Marketing" },
        new { Department = "Engineering" },
        new { Department = "HR" },
        new { Department = "Finance" }
    };
    
    ViewBag.DefaultData = departments;
    return View();
}
