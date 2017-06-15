namespace SalesProductivityTracker.App.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductivityForm_UpdateUserColumnName : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.ProductivityForms", name: "UserId_Id", newName: "User_Id");
            RenameIndex(table: "dbo.ProductivityForms", name: "IX_UserId_Id", newName: "IX_User_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.ProductivityForms", name: "IX_User_Id", newName: "IX_UserId_Id");
            RenameColumn(table: "dbo.ProductivityForms", name: "User_Id", newName: "UserId_Id");
        }
    }
}
