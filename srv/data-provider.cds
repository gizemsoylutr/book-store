using { my.bookstore as my } from '../db/data-models';

service BookStore {
    entity Books as projection on my.Books;
    entity Authors as projection on my.Authors;
}