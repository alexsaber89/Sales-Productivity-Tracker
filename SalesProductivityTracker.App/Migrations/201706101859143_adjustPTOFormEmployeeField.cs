namespace SalesProductivityTracker.App.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class adjustPTOFormEmployeeField : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.PTORequestForms", name: "EmployeeId_Id", newName: "Employee_Id");
            RenameIndex(table: "dbo.PTORequestForms", name: "IX_EmployeeId_Id", newName: "IX_Employee_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.PTORequestForms", name: "IX_Employee_Id", newName: "IX_EmployeeId_Id");
            RenameColumn(table: "dbo.PTORequestForms", name: "Employee_Id", newName: "EmployeeId_Id");
        }
    }
}
