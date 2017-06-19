using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalesProductivityTracker.App.DAL.IRepositories
{
    public interface IManagerProductivityFormsRepository
    {
        IEnumerable<ProductivityForm> GetAllProductivityForms();
    }
}
