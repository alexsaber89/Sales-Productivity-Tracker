﻿using Microsoft.AspNet.Identity;
using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
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
        [Route("api/pto-forms")]
        public List<PTORequestForm> Get()
        {
            var forms = _repo.GetAllPTOForms().ToList();
            return forms;
        }

        [HttpGet]
        [Route("api/pto-forms-by-employee")]
        public List<PTORequestForm> GetPTOFormsByEmployeeId()
        {
            string aspNetUserId = User.Identity.GetUserId();
            Debug.WriteLine("aspNetUserId: " + aspNetUserId);

            var forms = _repo.GetPTOFormsByEmployeeId(aspNetUserId).ToList();
            return forms;
        }

        [HttpGet]
        [Route("api/pto-form/{formId}")]
        public PTORequestForm GetPTOFormByPTOFormId(int formId)
        {
            var form = _repo.GetPTOFormByPTOFormId(formId);
            return form;
        }

        [HttpPost]
        [Route("api/pto-forms")]
        public void SubmitPTOForm(PTORequestForm ptoForm)
        {
            _repo.SubmitPTOForm(ptoForm);
        }
    }
}