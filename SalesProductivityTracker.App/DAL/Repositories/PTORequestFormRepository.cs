﻿using SalesProductivityTracker.App.DAL.IRepositories;
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

        public ApplicationUser GetCurrentUserById(string aspNetUserId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == aspNetUserId);
        }

        public IEnumerable<PTORequestForm> GetPTOFormsByEmployeeId(string aspNetUserId)
        {
            return _context.PTORequestForms.Where(f => f.User.Id == aspNetUserId);
        }

        //TODO:  Implement logic to get PTO by ID
        public PTORequestForm GetPTOFormByPTOFormId(int formId)
        {
            return _context.PTORequestForms.FirstOrDefault(e => e.Id == formId);
        }

        //TODO:  Implement logic to delete PTO by ID
        public void DeletePTOFormByPTOFormId(int formId)
        {
            PTORequestForm _formToDelete = _context.PTORequestForms.FirstOrDefault(f => f.Id == formId);
            _context.PTORequestForms.Remove(_formToDelete);
            _context.SaveChanges();
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
                        Debug.WriteLine("Property: {0} || Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                    }
                }
            }
        }
    }
}