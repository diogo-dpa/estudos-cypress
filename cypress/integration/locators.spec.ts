/// <reference types="cypress" />

describe('Work with Locators', () => {

    // Executa somente 1 vez -> before
    // Executa somente toda vez para todo teste -> beforeEach
    // Será feito para todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Using Jquery selectors', () => {
        // cy.get(':nth:child(1) > :nth-child(3) > [type="button"]')
        // cy.get("table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > [value='Clique Aqui']")
        cy.get("[onclick*='Francisco']")
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input")
    })

    it('Using xpath', () => {
        cy.xpath('//input')
    })
})