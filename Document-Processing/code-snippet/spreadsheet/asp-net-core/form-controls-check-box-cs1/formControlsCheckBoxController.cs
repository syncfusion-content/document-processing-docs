public IActionResult Index()
{
    // Sample data for demonstration
    List<object> data = new List<object>()
    {
        new { Description = "Accept Terms", Status = false },
        new { Description = "Enable Notifications", Status = true },
        new { Description = "Subscribe to Newsletter", Status = false }
    };
    
    ViewBag.DefaultData = data;
    return View();
}
