/// <reference types="cypress" />
import articles from '../support/pages/articles'
import Routes from '../support/routes'

beforeEach(() =>{
    
    //Preparacao
    cy.backgroundLogin()
    articles.acessarFormularioDeNovaPublicacao()
});

context('Publicaçãos', () => {
    it('criar uma nova publicação', () => {
        //Ação
        articles.preencherFormulario()
        articles.submeterPublicacao()
        //Verificacao
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
        
     });
});