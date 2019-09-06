using MyProjectIndirimix.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyProjectIndirimix.Model
{
    public class Comments : BaseEntity
    {  
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public string Comment { get; set; }       

    }
}