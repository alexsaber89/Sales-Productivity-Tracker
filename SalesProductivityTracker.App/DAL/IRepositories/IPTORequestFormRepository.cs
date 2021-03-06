﻿using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalesProductivityTracker.App.DAL.IRepositories
{
    public interface IPTORequestFormRepository
    {
        ApplicationUser GetCurrentUserById(string aspNetUserId);
        IEnumerable<PTORequestForm> GetPTOFormsByEmployeeId(string aspNetUserId);
        PTORequestForm GetPTOFormByPTOFormId(int formId);
        void DeletePTOFormByPTOFormId(int formId);
        void SubmitPTOForm(PTORequestForm ptoForm);
    }
}
