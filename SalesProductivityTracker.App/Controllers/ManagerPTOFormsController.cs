using Microsoft.AspNet.Identity;
using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SalesProductivityTracker.App.Controllers
{
    public class ManagerPTOFormsController : ApiController
    {
        public IManagerPTOFormsRepository _repo { get; set; }

        public ManagerPTOFormsController(IManagerPTOFormsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("api/manager-pto-forms")]
        public List<PTORequestForm> Get()
        {
            return _repo.GetAllPTOForms().ToList();
        }

        [HttpPost]
        [Route("api/manager-pto-form/{formId}")]
        public void ApprovePTOForm(int formId)
        {
            //PTORequestForm _form = _repo.GetPTOFormByFormId(formId);

            //ApplicationUser _user = _form.User;

            //PTORequestForm _formToApprove = new PTORequestForm
            //{
            //    Id = _form.Id,
            //    Notes = _form.Notes,
            //    IsApproved = _form.IsApproved,
            //    TimeStamp = DateTime.Now,
            //    RequestedPTODate = _form.RequestedPTODate,
            //    User = _user,
            //    PTOType = _form.PTOType
            //};

            _repo.ApprovePTOForm(formId);
        }
    }
}