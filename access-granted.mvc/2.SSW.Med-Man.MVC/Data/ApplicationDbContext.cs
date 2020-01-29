using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SSW.Med_Man.MVC.Models;

namespace SSW.Med_Man.MVC.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Medication> Medications { get; set; }
        public DbSet<Prescription> Prescriptions { get; set; }
        public DbSet<Administrations> Administrations { get; set; }

        public async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager, UserManager<IdentityUser> userManager)
        {
            if (!await roleManager.RoleExistsAsync("Admin"))
            {
                var admin = new IdentityRole("Admin");
                await roleManager.CreateAsync(admin);

                IdentityUser user = new IdentityUser
                {
                    UserName = "admin@admin.com",
                    Email = "admin@admin.com",
                };

                await userManager.CreateAsync(user, "DefaultAdminPassword1!");
                await userManager.AddToRoleAsync(user, "Admin");
            }
        }

    }
}
