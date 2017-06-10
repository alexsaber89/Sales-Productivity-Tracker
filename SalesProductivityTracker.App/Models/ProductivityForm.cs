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
        [Required]
        public int Id { get; set; }

        [Required]
        public Employee EmployeeId { get; set; }

        [Required]
        public DateTime TimeStamp { get; set; }

        [Required]
        public DateTime ProductivityDate { get; set; }

        [Required]
        public float BookedDailyRevenue { get; set; }

        [Required]
        public int DailyCasesCompleted { get; set; }

        [Required]
        public int DailyCallCount { get; set; }

        [Required]
        public int DailyEmailCount { get; set; }
    }
}