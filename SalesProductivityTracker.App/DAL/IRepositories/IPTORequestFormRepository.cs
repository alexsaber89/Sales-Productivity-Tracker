using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalesProductivityTracker.App.DAL.IRepositories
{
    public interface IPTORequestFormRepository
    {
        int GetCurrentEmployeeId(string aspNetUserId);
        IEnumerable<PTORequestForm> GetAllPTOForms();
        IEnumerable<PTORequestForm> GetPTOFormsByEmployeeId(int aspNetUserId);
        PTORequestForm GetPTOFormByPTOFormId(int formId);
        void DeletePTOFormByPTOFormId(int formId);
        void SubmitPTOForm(PTORequestForm ptoForm);
    }
}
