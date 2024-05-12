import { utils } from "mocha"
import { Utils } from "../utils/utils"

export class BuyProduct{
    txt_search= "//input[@id='search']"
    title_product= "//a[normalize-space()='Push It Messenger Bag']"
    txt_quantity= "//input[@id='qty']"
    btn_add_to_cart= "//span[normalize-space()='Add to Cart']"
    btn_counter_number= "//span[@class='counter-number']"
    btn_proceed_to_checkout= "//button[@title='Proceed to Checkout']"
    txt_address_company= "//input[@name='company']"
    txt_street_address= "//input[@name='street[0]']"
    txt_city_address= "//input[@name='city']"
    dropdown_region= "//select[@name='region_id']"
    txt_zip_code= "//input[@name='postcode']"
    txt_state= "//input[@name='region']"
    dropdown_country= "(//div//select[@class='select'])[2]"
    country_bd= "//select//option[@value='BD']"
    txt_phone_number= "//input[@name='telephone']"
    btn_next= "//button[contains(.,'Next')]"
    btn_place_order= "//button[@title='Place Order']"
    shipping_address= "//div[normalize-space()='Shipping Address']"
   

    searchProduct(product_name,quantity){
        const utils= new Utils();
        cy.xpath(this.txt_search).type(product_name).type('{enter}')
        cy.xpath(this.title_product).click()
        utils.scrollDown(200)
        cy.xpath(this.txt_quantity).clear()
        cy.xpath(this.txt_quantity).type(quantity)
        utils.wait(2)
    }
    
    proceedToCheckOut(){
        const utils= new Utils();
        utils.waitForElementIsVisible(this.btn_add_to_cart);
        cy.xpath(this.btn_add_to_cart).click();
        utils.scrollUp()
        utils.waitForElementIsVisible(this.btn_counter_number)
        cy.xpath(this.btn_counter_number).click()
        utils.wait(1)
        cy.xpath(this.btn_proceed_to_checkout).click()
    }

    writeShippingAddress(company_address,street_address,city,state,zip_code,phone_number){
        const utils= new Utils();
        utils.waitForElementIsVisible(this.shipping_address)
        cy.xpath(this.txt_address_company).type(company_address)
        cy.xpath(this.txt_street_address).type(street_address)
        cy.xpath(this.txt_city_address).type(city)
        cy.xpath(this.dropdown_country).select('Bangladesh')
        cy.xpath(this.txt_state).type(state)
        cy.xpath(this.txt_zip_code).type(zip_code)
        cy.xpath(this.txt_phone_number).type(phone_number)
        utils.wait(1)
        cy.xpath(this.btn_next).click()
    }

    placeOrder(){
        const utils= new Utils();
        utils.waitForElementIsVisible(this.btn_place_order)
        cy.xpath(this.btn_place_order).click()
    }
}