using SalesProductivityTracker.App.DAL.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SalesProductivityTracker.App.Models;
using System.Data.Entity.Validation;
using System.Diagnostics;
using Microsoft.AspNet.Identity;

namespace SalesProductivityTracker.App.DAL.Repositories
{
    public class ProductivityFormRepository : IProductivityFormRepository
    {
        readonly ApplicationDbContext _context;

        public ProductivityFormRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public ApplicationUser GetCurrentUserById(string aspNetUserId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == aspNetUserId);
        }

        public IEnumerable<ProductivityForm> GetAllProductivityForms()
        {
            return _context.ProductivityForms;
        }

        public IEnumerable<ProductivityForm> GetProductivityFormsByEmployeeId(string aspNetUserId)
        {
            return _context.ProductivityForms.Where(f => f.User.Id == aspNetUserId);
        }

        public ProductivityForm GetProductivityFormByProductivityFormId(int formId)
        {
            return _context.ProductivityForms.FirstOrDefault(e => e.Id == formId);
        }

        public void DeleteProductivityFormByProductivityFormId(int formId)
        {
            throw new NotImplementedException();
        }

        public void SubmitProductivityForm(ProductivityForm productivityForm)
        {
            try
            {
                _context.ProductivityForms.Add(productivityForm);
                _context.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Debug.WriteLine("Property: {0} || Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                    }
                }
            }
        }
    }
}