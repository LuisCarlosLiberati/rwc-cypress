/// <reference types="cypress" />
const faker = require('faker')
const el = require('./elements').ELEMENTS

import Routes from '../../routes';

class Articles{
    acessarFormularioDeNovaPublicacao(){
        cy.get(el.linkNovaPublicacao).click();

    }

    preencherFormulario(){
        //Ação
        //preencher o formulario
        cy.get(el.inputTitle).type('Agilizei title');
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('cypress');
    }
    
    submeterPublicacao(){
     
      
        cy.get(el.buttonSubmit).click();

    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
      
        //template string
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse)=>{
            expect(postArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle)=>{
            expect(getArticlesTitle.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments)=>{
            expect(getArticlesTitleComments.status).to.eq(200)
        })
    }
}
export default new Articles();