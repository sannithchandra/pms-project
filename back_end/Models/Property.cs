namespace ProductCrudAPI.Models
{
    public class Property
    {
        public int Id { get; set; } 
        public string? PropertyName { get; set; }
        public string? PropertyType { get; set; }
        public string? Status { get; set; }
        public string? RentPerMonth { get; set; }
        public string? StreetName { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? ZipCode { get; set; }
        public string? Description { get; set; }
        public string? MaintenanceHistory { get; set; }
        public string? PlacesNearby { get; set; }
        //public int Id { get; internal set; }
    }
}
