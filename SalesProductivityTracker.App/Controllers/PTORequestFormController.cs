using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SalesProductivityTracker.App.Controllers
{
    public class PTORequestFormController : ApiController
    {
        public IGetPTOFormsRepository _repo { get; set; }

        public PTORequestFormController(IGetPTOFormsRepository repo)
        {
            _repo = repo;
        }

        [Route("api/pto")]
        public List<PTORequestForm> GetAll()
        {
            var forms = _repo.GetAllPTOForms().ToList();
            return forms;
        }

        [Route("api/pto/{employeeId}")]
        public List<PTORequestForm> GetAll(int employeeId)
        {
            var forms = _repo.GetPTOFormsByEmployeeId(employeeId).ToList();
            return forms;
        }
    }
}