namespace SalesProductivityTracker.App.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddProductivityQuarter : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductivityForms", "Quarter", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProductivityForms", "Quarter");
        }
    }
}
