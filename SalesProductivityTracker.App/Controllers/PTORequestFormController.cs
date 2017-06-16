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

        private ApplicationUser GetCurrentApplicationUser()
        {
            string _currentEmployeeId = User.Identity.GetUserId();

            return _repo.GetCurrentUserById(_currentEmployeeId);
        }

        [HttpGet]
        [Route("api/pto-forms")]
        public List<PTORequestForm> Get()
        {
            return _repo.GetAllPTOForms().ToList();
        }

        [HttpGet]
        [Route("api/pto-forms-by-employeeID")]
        public List<PTORequestForm> GetPTOFormsByEmployeeId()
        {
            ApplicationUser _currentUserId = GetCurrentApplicationUser();

            return _repo.GetPTOFormsByEmployeeId(_currentUserId.Id).ToList();
        }

        [HttpGet]
        [Route("api/pto-form")]
        public PTORequestForm GetPTOFormByPTOFormId()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        [Route("api/pto-form/{formId}")]
        public void DeletePTOFormByPTOFormId(int formId)
        {
            _repo.DeletePTOFormByPTOFormId(formId);
        }

        [HttpPost]
        [Route("api/pto-forms")]
        public void SubmitPTOForm(PTORequestForm ptoForm)
        {
            PTORequestForm _ptoForm = new PTORequestForm
            {
                Id = ptoForm.Id,
                Notes = ptoForm.Notes,
                TimeStamp = DateTime.Now,
                RequestedPTODate = ptoForm.RequestedPTODate,
                User = GetCurrentApplicationUser(),
                PTOType = ptoForm.PTOType
            };

            _repo.SubmitPTOForm(_ptoForm);
        }
    }
}