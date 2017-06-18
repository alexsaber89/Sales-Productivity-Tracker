using Microsoft.AspNet.Identity;
using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SalesProductivityTracker.App.Controllers
{
    public class ManagerProductivityFormsController : ApiController
    {
        public IManagerProductivityFormsRepository _repo { get; set; }

        public ManagerProductivityFormsController(IManagerProductivityFormsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("api/manager-productivity-forms")]
        public List<ProductivityForm> Get()
        {
            return _repo.GetAllProductivityForms().ToList();
        }
    }
}