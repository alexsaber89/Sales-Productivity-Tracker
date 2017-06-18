using Microsoft.AspNet.Identity;
using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SalesProductivityTracker.App.Controllers
{
    public class AuthController : ApiController
    {
        public IAuthRepository _repo { get; set; }

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        private ApplicationUser GetCurrentApplicationUser()
        {
            string _currentEmployeeId = User.Identity.GetUserId();

            return _repo.GetCurrentUserById(_currentEmployeeId);
        }

        [HttpGet]
        [Route("api/is-manager")]
        public bool DetermineIfManager()
        {
            ApplicationUser _currentUser = GetCurrentApplicationUser();

            return _currentUser.IsManager;
        }
    }
}