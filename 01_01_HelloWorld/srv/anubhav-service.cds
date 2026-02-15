using { anubhav.db } from '../db/datamodel';

service anubhavservice {
    entity TouristSet as projection on db.tourist;
}
