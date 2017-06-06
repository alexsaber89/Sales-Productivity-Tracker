using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SalesProductivityTracker.App.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public virtual ApplicationUser RootUserId { get; set; }
        public Manager ManagerId { get; set; }
    }
}