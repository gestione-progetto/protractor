describe('weather homepage tables', function() {
    browser.ignoreSynchronization = true;

    it('Should have the title equal to "Sardegna - Weather station"', function() {
        browser.get('http://localhost/~antonio/gestione-progetto/php-sqlite/');
        expect(browser.getTitle()).toEqual('Sardegna - Weather station');
    });

    it('Should have one tables', function () {
        var completedAmount = element.all(by.css('.table'));
        expect(completedAmount.count()).toEqual(1);
    });

    it('Should login into weather station', function () {
        browser.get('http://localhost/~antonio/gestione-progetto/php-sqlite/');

        var password = element(by.id('password'));
        var form = element(by.id('button'));

        // code for cracking password
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 , 14, 15, 16].forEach(function (number) {
            password.clear();
            password.sendKeys('antonio' + number);
            form.click().then(function () {
                var completedLogin = element.all(by.id('login-message'));
                completedLogin.getText().then(function (value) {
                    console.log(value[0], 'antonio' + number);
                });
                expect(true).toEqual(true);
            });
        });
        expect(true).toEqual(true);

        form.click().then(function () {
            var completedLogin = element.all(by.id('login-message'));
            completedLogin.getText().then(function (value) {
                expect(value[0]).toEqual('Login succesful');
            });

        });
    });

    it('should change the colour', function () {
        var inputRange = element.all(by.name('temperature-low'));

        inputRange.click();
        inputRange.sendKeys('1');
        // inputRange.click();
        waits(1500);
    });
});
