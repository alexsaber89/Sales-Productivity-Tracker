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
    public class PTORequestFormRepository : IPTORequestFormRepository
    {
        readonly ApplicationDbContext _context;

        public PTORequestFormRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<PTORequestForm> GetAllPTOForms()
        {
            return _context.PTORequestForms;
        }

        public IEnumerable<PTORequestForm> GetPTOFormsByEmployeeId(int employeeId)
        {
            return _context.PTORequestForms.Where(f => f.Employee.Id == employeeId);
        }

        public PTORequestForm GetPTOFormByPTOFormId(int ptoFormId)
        {
            return _context.PTORequestForms.FirstOrDefault(f => f.Id == ptoFormId);
        }

        public void SubmitPTOForm(PTORequestForm ptoForm)
        {
            try
            {
                _context.PTORequestForms.Add(ptoForm);
                _context.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Debug.WriteLine("Property: {0} Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                    }
                }
            }
        }
    }
}