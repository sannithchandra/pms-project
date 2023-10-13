﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProductCrudAPI.Models
{
    public partial class ProductDBContext : DbContext
    {
        public ProductDBContext()
        {
        }

        public ProductDBContext(DbContextOptions<ProductDBContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Product> Products { get; set; } = null;
        public virtual DbSet<Property> Property { get; set; } = null;

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=L201866;Database=ProductDB;Integrated Security=True");
//            }
//        //}

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Product>(entity =>
        //    {
        //        entity.Property(e => e.CreditDebit)
        //            .HasMaxLength(50)
        //            .IsUnicode(false);

        //        entity.Property(e => e.DateCreated).HasColumnType("date");

        //        entity.Property(e => e.Name)
        //            .HasMaxLength(50)
        //            .IsUnicode(false);
        //    });

        //    OnModelCreatingPartial(modelBuilder);
        ////}

        //partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
