const el = require('./elements').ELEMENTS
class Login{
    acessarLogin(){
        cy.visit('login');
    }
    
    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPasswaord).type(Cypress.config().user.password) //pega dados do arquivo de configuração.
    }
    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
    }
    
       

}

export default new Login();