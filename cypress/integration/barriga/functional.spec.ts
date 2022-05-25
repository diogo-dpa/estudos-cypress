/// <reference types="cypress" />

describe('Show test at s functional level', () => {

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login();
    })

    it('Should create an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta de teste')
        cy.get('.btn').click()

        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
    })
})