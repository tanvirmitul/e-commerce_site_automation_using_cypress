import { Signup } from "../pages/signup_page";
import { Utils } from "../utils/utils";
import { LoginPage } from "../pages/login_page";
import { constants } from "../constants/constants";
import { BuyProduct } from "../pages/buy_product";

describe('Verify Signup page', () => {
  let utils;
  let signupObj;
  let loginObj;
  let buyProductObj

  beforeEach(function() {
    signupObj = new Signup();
    loginObj = new LoginPage();
    buyProductObj = new BuyProduct();
    utils= new Utils();
    cy.visit(constants.base_url);
 })

  it('Verify user will successfully signup with valid credentials', () => {
    const randomNumber = utils.getRandomNum(1, 1000);
    const firstname = constants.firstName;
    const lastname = constants.lastName;
    const email = constants.email + randomNumber + "@mailto.plus";
    const password = constants.password;
    const confirm_password = constants.confirm_password;
    const json_file_path="cypress/fixtures/data.json"
    console.log(email,password)

    signupObj.visitSignup();
    signupObj.doSignup(firstname, lastname, email, password, confirm_password);

    const data = {
        user_email: email,
        user_password: password
    };

    utils.writeJson(data,json_file_path)
  });

  it('Verify user can successfully buy product with valid credentials',()=>{
    buyProductObj= new BuyProduct();
    const json_file_path="cypress/fixtures/data.json";

    cy.readFile(json_file_path).then((data)=>{
      const email=data.user_email;
      const password=data.user_password;
      loginObj.doLogin(email,password);
    })

    buyProductObj.searchProduct(constants.product_name,constants.quantity);
    buyProductObj.proceedToCheckOut();
    utils.wait(6);
    buyProductObj.writeShippingAddress(constants.company,constants.street_address,constants.city,constants.state,constants.zip_code,constants.phone_number);
    buyProductObj.placeOrder();   
  });
    
    });
  
    
 
