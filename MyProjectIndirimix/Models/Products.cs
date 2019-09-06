using MyProjectIndirimix.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyProjectIndirimix.Model
{
    public class Products : BaseEntity
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Location { get; set; }
        public int Like { get; set; }
        public string Description { get; set; }
        public string Store { get; set; }
        public bool IsConfirm { get; set; }
        public int Order { get; set; }

    }
}