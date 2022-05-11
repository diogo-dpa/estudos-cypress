/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('should visit a page and assert title', () => {

        // endereço da página que quer visitar
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        // Igualdade
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        
        // Escrita mais descritiva
        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')

        let syncTitle

        // uso de função assincrona
        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })


        // O then, no caso, é para esperar a busca pelo elemento e após isso fazer o 
        // que precisar dentro do then
        cy.get('[data-cy=dataSobrenome]').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })
    
    it('should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')


    })
})