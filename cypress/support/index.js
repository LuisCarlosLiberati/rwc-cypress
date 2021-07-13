// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import routes from "./routes"

Cypress.Commands.add('backgroundLogin', () => {
//processo de login em background
    //realizar a requisição do tipo post com login e email
       
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user:{
                email: 'luis@teste.com',
                password: '123456789'
            }
        }
    }).then((loginResponse) =>{
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token) // capturar o token que é recebido na requisição
       
        
    //usar o token recebido para salvar no localstorage
        cy.visit('editor', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
})

import Routes from './routes'
before(() => {
    routes.init()
})