using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class AddToolbarController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
