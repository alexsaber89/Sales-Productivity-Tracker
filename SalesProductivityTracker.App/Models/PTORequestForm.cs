using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SalesProductivityTracker.App.Models
{
    public class PTORequestForm
    {
        [Key]
        public int Id { get; set; }
        public Employee EmployeeId { get; set; }
        public DateTime TimeStamp { get; set; }
        public DateTime RequestedPTODate { get; set; }
        public string PTOType { get; set; }
        public string Notes { get; set; }
        public bool IsApproved { get; set; }
    }
}