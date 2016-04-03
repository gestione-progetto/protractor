describe('weather homepage tables', function() {
    browser.ignoreSynchronization = true;


    it('should have the title equal to "Sardegna - Weather station"', function() {
        browser.get('http://localhost/~antonio/gestione-progetto/php-sqlite/');
        waits(5000);

        expect(browser.getTitle()).toEqual('Sardegna - Weather station');
    });

    it('should have two tables', function () {
        var completedAmount = element.all(by.css('.table'));
        expect(completedAmount.count()).toEqual(2);
    });

});

describe('weather homepage tables', function() {
    browser.ignoreSynchronization = true;


    it('should enter into twitter', function () {
        browser.get('http://localhost/~antonio/gestione-progetto/protractor/');

        waits(5000);

        var user = element(by.id('user'));

        user.sendKeys('antonio@gmail.com');
    });

});

