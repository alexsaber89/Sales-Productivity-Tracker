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
    public class ProductivityFormController : ApiController
    {
        public IProductivityFormRepository _repo { get; set; }

        public ProductivityFormController(IProductivityFormRepository repo)
        {
            _repo = repo;
        }

        private ApplicationUser GetCurrentApplicationUser()
        {
            string _currentEmployeeId = User.Identity.GetUserId();

            return _repo.GetCurrentUserById(_currentEmployeeId);
        }

        public int GetQuarter(DateTime date)
        {
            return (date.Month + 2) / 3;
        }

        [HttpGet]
        [Route("api/productivity-forms")]
        public List<ProductivityForm> Get()
        {
            return _repo.GetAllProductivityForms().ToList();
        }

        [HttpGet]
        [Route("api/productivity-forms-by-employeeID")]
        public List<ProductivityForm> GetProductivityFormsByEmployeeId()
        {
            ApplicationUser _currentUserId = GetCurrentApplicationUser();

            return _repo.GetProductivityFormsByEmployeeId(_currentUserId.Id).ToList();
        }

        [HttpGet]
        [Route("api/productivity-form")]
        public ProductivityForm GetProductivityFormByProductivityFormId()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        [Route("api/productivity-form")]
        public ProductivityForm DeleteProductivityFormByProductivityFormId()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        [Route("api/productivity-forms")]
        public void SubmitProductivityForm(ProductivityForm productivityForm)
        {
            ProductivityForm _productivityForm = new ProductivityForm
            {
                Id = productivityForm.Id,
                ProductivityDate = productivityForm.ProductivityDate,
                TimeStamp = DateTime.Now,
                BookedDailyRevenue = productivityForm.BookedDailyRevenue,
                DailyCasesCompleted = productivityForm.DailyCasesCompleted,
                DailyCallCount = productivityForm.DailyCallCount,
                DailyEmailCount = productivityForm.DailyEmailCount,
                Quarter = GetQuarter(productivityForm.ProductivityDate),
                User = GetCurrentApplicationUser()
            };

            _repo.SubmitProductivityForm(_productivityForm);
        }
    }
}