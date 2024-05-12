export class Utils{

    getRandomNum(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    writeJson(data,path){
        cy.writeFile(path,data)
    }

    scrollUp(){
        cy.window().scrollTo('top');
    }

      scrollToBottom(){
        cy.window().scrollTo('bottom');
    }
    scrollDown(num){
        cy.scrollTo(0, num);

    }
    wait(secs){
        cy.wait(secs*1000)
    }
   
    waitForElementIsVisible(element){
        cy.xpath(element, { timeout: 10000 }).should('be.visible');

    }

}
