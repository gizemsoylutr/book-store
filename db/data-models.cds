namespace my.bookstore;



entity Books {
    key id     : Integer;
        name   : String(100);
        author : Association to many Authors
                     on author.book = $self
}

entity Authors {
    key id   : Integer;
        name : String(50);
        book : Association to Books;
}
