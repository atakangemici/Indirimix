using MyProjectIndirimix.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyProjectIndirimix.Model
{
    public class Favorites : BaseEntity
    {
        public int Id { get; set; }
        public int ProductId { get; set; }

       
    }
}