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
        [Required]
        public int Id { get; set; }

        [Key]
        [Required]
        public virtual ApplicationUser User { get; set; }

        [Required]
        public DateTime TimeStamp { get; set; }

        [Required]
        public DateTime RequestedPTODate { get; set; }

        [Required]
        public string PTOType { get; set; }

        [Required]
        public string Notes { get; set; }

        [Required]
        public bool IsApproved { get; set; }
    }
}