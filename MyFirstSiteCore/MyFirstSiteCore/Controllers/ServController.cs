using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstSiteCore.Controllers
{
    public class ServController : Controller
    {
        public IActionResult Services()
        {
            return View();
        }
    }
}