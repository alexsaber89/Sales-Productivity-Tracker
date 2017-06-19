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
            var forms = _repo.GetAllPTOForms().ToList();

            List<PTORequestForm> formattedForms = new List<PTORequestForm>();

            foreach (var form in forms)
            {
                PTORequestForm formattedForm = new PTORequestForm();
                ApplicationUser user = new ApplicationUser();
                user.FirstName = form.User.FirstName;
                user.LastName = form.User.LastName;
                formattedForm.User = user;
                formattedForm.Id = form.Id;
                formattedForm.IsApproved = form.IsApproved;
                formattedForm.Notes = form.Notes;
                formattedForm.PTOType = form.PTOType;
                formattedForm.RequestedPTODate = form.RequestedPTODate;
                formattedForm.TimeStamp = form.TimeStamp;
                formattedForms.Add(formattedForm);
            }

            return formattedForms;
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