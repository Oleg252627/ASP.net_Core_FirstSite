using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstSiteCore.Controllers
{
    public class AboutUsController : Controller
    {
        public IActionResult About_As()
        {
            return View();
        }
    }
}