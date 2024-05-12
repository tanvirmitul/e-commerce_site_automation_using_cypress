import 'cypress-xpath';
export class Signup{
 
    link_create_an_account= "(//a[text()='Create an Account'])[1]"
    txt_first_name ="//input[@id='firstname']";
    txt_last_name = "//input[@id='lastname']";
    txt_email = "//input[@id='email_address']";
    txt_password = "//input[@id='password']";
    txt_confirm_password ="//input[@id='password-confirmation']";
    btn_create_an_account="(//span[contains(.,'Create an Account')])[1]"
    menu_btn="(//button[@class='action switch'])[1]"
    btn_signout="(//a[contains(.,'Sign Out')])[1]"
    btn_men="//span[contains(text(),'Men')]"

  doSignup(firstname,lastname,email,password,confirm_password) {
    cy.xpath(this.txt_first_name).type(firstname);
    cy.xpath(this.txt_last_name).type(lastname);
    cy.xpath(this.txt_email).type(email);
    cy.xpath(this.txt_password).type(password);
    cy.xpath(this.txt_confirm_password).type(confirm_password);
    cy.xpath(this.btn_create_an_account).click();
   }
   
   visitSignup(){
    cy.xpath(this.link_create_an_account).click();
   }
 
}