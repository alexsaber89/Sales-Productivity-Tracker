using Microsoft.AspNet.Identity;
using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SalesProductivityTracker.App.Controllers
{
    [Authorize]
    public class PTORequestFormController : ApiController
    {
        public IPTORequestFormRepository _repo { get; set; }

        public PTORequestFormController(IPTORequestFormRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("api/current-employee-id")]
        public string GetCurrentEmployeeId()
        {
            return User.Identity.GetUserId();
        }

        [HttpGet]
        [Route("api/pto-forms")]
        public List<PTORequestForm> Get()
        {
            var forms = _repo.GetAllPTOForms().ToList();
            return forms;
        }

        [HttpGet]
        [Route("api/pto-forms-by-employeeID/{aspNetUserId}")]
        public List<PTORequestForm> GetPTOFormsByEmployeeId(string aspNetUserId)
        {
            var forms = _repo.GetPTOFormsByEmployeeId(aspNetUserId).ToList();
            return forms;
        }

        [HttpGet]
        [Route("api/pto-form")]
        public PTORequestForm GetPTOFormByPTOFormId()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        [Route("api/pto-form")]
        public PTORequestForm DeletePTOFormByPTOFormId()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        [Route("api/pto-forms")]
        public void SubmitPTOForm(PTORequestForm ptoForm)
        {
            string _currentEmployeeId = User.Identity.GetUserId();

            ApplicationUser _currentUser = _repo.GetCurrentUserById(_currentEmployeeId);

            PTORequestForm _ptoForm = new PTORequestForm
            {
                Id = ptoForm.Id,
                Notes = ptoForm.Notes,
                TimeStamp = DateTime.Now,
                RequestedPTODate = ptoForm.RequestedPTODate,
                User = _currentUser,
                PTOType = ptoForm.PTOType
            };

            _repo.SubmitPTOForm(_ptoForm);
        }
    }
}