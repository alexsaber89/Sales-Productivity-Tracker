using SalesProductivityTracker.App.DAL.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SalesProductivityTracker.App.Models;

namespace SalesProductivityTracker.App.DAL.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        readonly ApplicationDbContext _context;

        public AuthRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public ApplicationUser GetCurrentUserById(string aspNetUserId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == aspNetUserId);
        }
    }
}