using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SalesProductivityTracker.App.Models
{
    public class ProductivityForm
    {
        [Key]
        public int Id { get; set; }
        public Employee EmployeeId { get; set; }
        public DateTime TimeStamp { get; set; }
        public DateTime ProductivityDate { get; set; }
        public float BookedDailyRevenue { get; set; }
        public int DailyCasesCompleted { get; set; }
        public int DailyCallCount { get; set; }
        public int DailyEmailCount { get; set; }
    }
}