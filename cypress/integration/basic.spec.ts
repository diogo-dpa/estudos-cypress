/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {

        // endereço da página que quer visitar
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        // Igualdade
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        
        // Escrita mais descritiva
        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
    })
    
    it('should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')


    })
})