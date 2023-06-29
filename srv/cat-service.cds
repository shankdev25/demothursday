using trainer as db from '../db/data-model';

@path: 'trainingsrv'
service CatalogService {
    entity trainers as projection on db.training;
}
