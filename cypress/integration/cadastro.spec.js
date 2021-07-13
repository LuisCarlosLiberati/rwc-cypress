/// <reference types="cypress" />
const faker = require('faker')

context('Example Cypress TodoMVC test', () => {

  it('cadastrar um novo usuario',  ()=> {
    cy.visit('register');
 
    //input[ng-model*=username]
    //input[ng-model*=email]
    //input[type=password]
    //button.btn-primary
    cy.get('input[ng-model*=username]').type(faker.name.firstName() + faker.name.lastName())
    cy.get('input[ng-model*=email]').type(faker.internet.email())
    cy.get('input[type=password]').type(123456789);
    cy.get('button.btn-primary').click();

  });
});
