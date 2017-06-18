using SalesProductivityTracker.App.DAL.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SalesProductivityTracker.App.Models;

namespace SalesProductivityTracker.App.DAL.Repositories
{
    public class ManagerProductivityFormsRepository : IManagerProductivityFormsRepository
    {
        readonly ApplicationDbContext _context;

        public ManagerProductivityFormsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<ProductivityForm> GetAllProductivityForms()
        {
            return _context.ProductivityForms.OrderBy(f => f.ProductivityDate).ThenBy(n => n.User.UserName);
        }
    }
}