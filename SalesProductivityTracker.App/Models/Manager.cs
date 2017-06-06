using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SalesProductivityTracker.App.Models
{
    public class Manager
    {
        [Key]
        public int Id { get; set; }
        public virtual ApplicationUser RootUserId { get; set; }
    }
}