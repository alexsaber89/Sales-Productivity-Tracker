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
        public IPTORequestFormRepository _repo { get; set; }

        public PTORequestFormController(IPTORequestFormRepository repo)
        {
            _repo = repo;
        }

        [Route("api/pto-forms")]
        public List<PTORequestForm> GetPTOFormsByEmployeeId(int? employeeId, int? formId)
        {
            if (employeeId.HasValue)
            {
                var forms = _repo.GetPTOFormsByEmployeeId(employeeId.Value).ToList();
                return forms;
            }

            else if (formId.HasValue)
            {
                var forms = new List<PTORequestForm> { _repo.GetPTOFormByPTOFormId(formId.Value) };
                return forms;
            }
            
            else
            {
                var forms = _repo.GetAllPTOForms().ToList();
                return forms;
            }
        }
    }
}