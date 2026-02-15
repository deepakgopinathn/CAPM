namespace anubhav.db;

entity tourist {
    key location : String(64);
    country : String(64);
    category : String(64);
    visitors : Integer64;
    rating : Decimal(5, 2);
    revenue : Integer64;
    accomodation : String(4);   
}