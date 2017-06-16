using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalesProductivityTracker.App.DAL.IRepositories
{
    public interface IProductivityFormRepository
    {
        ApplicationUser GetCurrentUserById(string aspNetUserId);
        IEnumerable<ProductivityForm> GetAllProductivityForms();
        IEnumerable<ProductivityForm> GetProductivityFormsByEmployeeId(string aspNetUserId);
        ProductivityForm GetProductivityFormByProductivityFormId(int formId);
        void DeleteProductivityFormByProductivityFormId(int formId);
        void SubmitProductivityForm(ProductivityForm productivityForm);
    }
}
