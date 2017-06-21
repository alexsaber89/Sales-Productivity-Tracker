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
            var forms = _repo.GetAllProductivityForms().ToList();

            List<ProductivityForm> formattedForms = new List<ProductivityForm>();

            foreach(var form in forms)
            {
                ProductivityForm formattedForm = new ProductivityForm();
                ApplicationUser user = new ApplicationUser();
                user.FirstName = form.User.FirstName;
                user.LastName = form.User.LastName;
                user.Id = form.User.Id;
                formattedForm.User = user;
                formattedForm.BookedDailyRevenue = form.BookedDailyRevenue;
                formattedForm.DailyCallCount = form.DailyCallCount;
                formattedForm.Quarter = form.Quarter;
                formattedForm.DailyCasesCompleted = form.DailyCasesCompleted;
                formattedForm.DailyEmailCount = form.DailyEmailCount;
                formattedForm.Id = form.Id;
                formattedForm.ProductivityDate = form.ProductivityDate;
                formattedForm.TimeStamp = form.TimeStamp;
                formattedForms.Add(formattedForm);
            }

            return formattedForms;
        }
    }
}