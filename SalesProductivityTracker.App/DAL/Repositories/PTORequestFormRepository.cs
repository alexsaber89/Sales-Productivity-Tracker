using SalesProductivityTracker.App.DAL.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SalesProductivityTracker.App.Models;

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
            return _context.PTORequestForms.Where(f => f.Id == employeeId);
        }
    }
}