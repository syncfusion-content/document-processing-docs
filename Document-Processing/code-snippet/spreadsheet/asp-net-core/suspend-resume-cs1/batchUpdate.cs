public IActionResult Index()
{
    List<object> defaultData = new List<object>()
    {
        new { ProjectName = "Website Redesign", Manager = "Anita", Department = "Marketing", StartDate = "04/01/2026", EndDate = "06/20/2026", Budget = 25000, Spent = 18000, Variance = 7000, Status = "In Progress", Priority = 2 },
        new { ProjectName = "Mobile App Upgrade", Manager = "David", Department = "Engineering", StartDate = "04/05/2026", EndDate = "07/15/2026", Budget = 42000, Spent = 26500, Variance = 15500, Status = "In Progress", Priority = 1 },
        new { ProjectName = "CRM Migration", Manager = "Priya", Department = "Sales", StartDate = "03/18/2026", EndDate = "08/10/2026", Budget = 38000, Spent = 31000, Variance = 7000, Status = "On Hold", Priority = 2 },
        new { ProjectName = "HR Portal Refresh", Manager = "Kumar", Department = "HR", StartDate = "04/12/2026", EndDate = "05/30/2026", Budget = 12000, Spent = 9500, Variance = 2500, Status = "Completed", Priority = 3 },
        new { ProjectName = "Finance Dashboard", Manager = "Meera", Department = "Finance", StartDate = "05/01/2026", EndDate = "07/28/2026", Budget = 30000, Spent = 14250, Variance = 15750, Status = "In Progress", Priority = 1 },
        new { ProjectName = "Vendor Portal Integration", Manager = "John", Department = "Procurement", StartDate = "04/22/2026", EndDate = "08/05/2026", Budget = 27000, Spent = 11000, Variance = 16000, Status = "Not Started", Priority = 4 },
        new { ProjectName = "Security Audit Remediation", Manager = "Sara", Department = "IT", StartDate = "03/25/2026", EndDate = "06/18/2026", Budget = 16000, Spent = 13200, Variance = 2800, Status = "In Progress", Priority = 1 },
        new { ProjectName = "Customer Support Automation", Manager = "Rahul", Department = "Support", StartDate = "04/08/2026", EndDate = "07/01/2026", Budget = 21000, Spent = 8000, Variance = 13000, Status = "In Progress", Priority = 2 },
        new { ProjectName = "Inventory Sync Improvement", Manager = "Latha", Department = "Operations", StartDate = "05/10/2026", EndDate = "08/22/2026", Budget = 19500, Spent = 6200, Variance = 13300, Status = "Not Started", Priority = 3 },
        new { ProjectName = "Analytics Reporting Pack", Manager = "Arun", Department = "Business Intelligence", StartDate = "04/15/2026", EndDate = "06/30/2026", Budget = 17500, Spent = 12400, Variance = 5100, Status = "Completed", Priority = 2 }
    };
    ViewBag.DefaultData = defaultData;
    return View();
}