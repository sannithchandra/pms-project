using System;
using System.Collections.Generic;

namespace ProductCrudAPI.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public string Name { get; set; } = null!;
        public int TransactionId { get; set; }
        public string CreditDebit { get; set; } = null!;
    }
}
