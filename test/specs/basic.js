describe('Main Page', () => {
    it('should Title main page is present and correct text', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor = "//span[@id ='site-name']";
        const text = $(titleProgressMonitor).getText();
        expect(text).toEqual('Progress Monitor')
    });

    it('should Title main page isclicable', function () {
        const titleProgressMonitor = $("//span[@id='site-name']");
        const result = titleProgressMonitor.isClickable();
        expect(result).toEqual(true);
    })
    it('should verify text of login button', function () {
        const loginBtn = $("//a[@qa='login-link']");
        const textOfLoginBtn = loginBtn.getText();
        expect(textOfLoginBtn).toEqual('Login');
    })
    it('should verify login button isclickable', function () {
        const loginButton = $("//a[@qa = 'login-link']");
        const res = loginButton.isClickable();
        expect(res).toEqual(true);

    })
})


