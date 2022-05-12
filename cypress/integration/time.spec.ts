/// <reference types="cypress" />

describe('Manipulating Time', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Going back to the past', () => {
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span')
        //     .should('contain', '12/05/2022')
            
        // Sobrescreve a data nativa
        const novaData = new Date(1995, 0, 1)
        cy.clock(novaData.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span')
            .should('contain', '01/01/1995')
    })

    it('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        
        cy.get('#resultado > span')
        .invoke('text')
        .should('gt', 1000000000000)
        
        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span')
        .invoke('text')
        .should('lte', 0)
        cy.wait(1000)

        // Vai alterar o tempo do clock
        cy.tick(5000)
        
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span')
        .invoke('text')
        .should('gte', 1000)


    })
})