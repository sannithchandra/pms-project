export interface IProduct{
    Id:number;
    DateCreated:Date;
    Name:string;
    TransactionId:number;
    CreditDebit:string;
}
export class Product{
    public Id:number;
    public DateCreated:Date;
    public Name:string;
    public TransactionId:number;
    public CreditDebit:string;
}
export interface IProperty{
    id:number
    propertyName:string;
    propertyType:string;
    status:string;
    rentPerMonth:string;
    streetName:string;
    city:string; 
    state:string; 
    zipCode:string;
    description:string;
    maintenanceHistory:string;
    placesNearby:string;
}
export class Property{
    public id:number
    public propertyName:string;
    public propertyType:string;
    public status:string;
    public rentPerMonth:string;
    public streetName:string;
    public city:string; 
    public state:string; 
    public zipCode:string;
    public description:string;
    public maintenanceHistory:string;
    public placesNearby:string;
}
