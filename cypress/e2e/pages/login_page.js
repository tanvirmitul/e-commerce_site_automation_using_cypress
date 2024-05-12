export class LoginPage{
    link_sign_in="(//a[normalize-space()='Sign In'])[1]";
    txt_email = "//input[@id='email']";
    txt_password = "(//input[@id='pass'])[1]";
    btn_signin = "(//span[contains(text(),'Sign In')])[1]";

    doLogin(email,password){
        cy.xpath(this.link_sign_in).click()
        cy.xpath(this.txt_email).type(email)
        cy.xpath(this.txt_password).type(password)
        cy.xpath(this.btn_signin).click()
    }
}