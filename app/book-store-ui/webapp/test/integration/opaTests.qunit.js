sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bookstoreui/test/integration/FirstJourney',
		'bookstoreui/test/integration/pages/BooksList',
		'bookstoreui/test/integration/pages/BooksObjectPage',
		'bookstoreui/test/integration/pages/AuthorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, AuthorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bookstoreui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheAuthorsObjectPage: AuthorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);