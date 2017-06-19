using SalesProductivityTracker.App.DAL.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SalesProductivityTracker.App.Models;
using System.Data.Entity.Validation;
using System.Diagnostics;
using Microsoft.AspNet.Identity;
using System.Data.Entity;

namespace SalesProductivityTracker.App.DAL.Repositories
{
    public class ManagerPTOFormsRepository : IManagerPTOFormsRepository
    {
        readonly ApplicationDbContext _context;

        public ManagerPTOFormsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<PTORequestForm> GetAllPTOForms()
        {
            return _context.PTORequestForms;
        }

        public PTORequestForm GetPTOFormByFormId(int formId)
        {
            return _context.PTORequestForms.FirstOrDefault(f => f.Id == formId);
        }

        public void ApprovePTOForm(int formId)
        {
            try
            {
                PTORequestForm _formToApprove = _context.PTORequestForms.Where(f => f.Id == formId).Include(f => f.User).FirstOrDefault();
                _formToApprove.IsApproved = true;
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