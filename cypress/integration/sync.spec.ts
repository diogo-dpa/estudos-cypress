/// <reference types="cypress" />

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar o elemento estar disponível', () => {

        // Garantir que não existe
        cy.get('#novoCampo').should('not.exist')
        
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')


        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {

        cy.get('#buttonDelay').click()

        // Tomar cuidado com o encademento durante as assertivas
        cy.get('#novoCampo')
            // .should('not.exist')
            .should('exist')
            .type('funciona')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()

        // Limitou o escopo para a proxima busca
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')


        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()

        // cy.get('#novoCampo', { 
        //     timeout: 1000 // 1 seg
        //  }).should('exist')

        // cy.get('#buttonListDOM').click()
        
        // // Pára por 5 seg
        // cy.wait(5000);
        // cy.get('#lista li span')
        // cy.get('#buttonListDOM').click()
        
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { timeout: 30000 })
            .should('have.length', 2)
    })

    it.only('Should vs Then', () => {

        // o then aguarda a busca ser executada para dar prosseguimento
        // should já faz tentativas. Fica sendo executado ao longo da espera

        // then pode retornar algo diferente do que recebeu
        // should retorna o elemento que recebeu
        cy.get('#buttonListDOM').then($el => {
                // $el é elemento HTML
                expect($el).to.have.length(1)
                return 2
            })
            .and('eq', 2)
            .and('not.have.id', 'buttonListDOM')
            
            cy.get('#buttonListDOM').should($el => {
                // $el é elemento HTML
                expect($el).to.have.length(1)
                return 2
            })
            .and('not.eq', 2)
            .and('have.id', 'buttonListDOM')

        // Para novas buscas dentro do bloco, denixe dentro de um bloco then
            // para não ficar repetindo as chamadas
        cy.get('#buttonListDOM').should($el => {
                // $el é elemento HTML
                expect($el).to.have.length(1)
                // cy.get('#buttonList') // a chamada
            })
    })
})