/// <reference types="cypress" />

describe('Helpers', () => {
    it('Wrap', () => {
        const obj = {
            nome: 'User',
            idade: 20
        }

        expect(obj).to.have.property('nome')

        // serve para encapsular o objeto
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // // Escrevendo no elemento sem then
        // cy.get('#formNome').type('')

        // // escrevendo no elemento com then
        // cy.get('#formNome').then($el => {
        //     // como não temos um objeto cypress, temos que encapsulalo
        //     cy.wrap($el).type('funcionou')
        // })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
        
        // Não está com o cypress encapsulado
        // promise.then(num => console.log(num))

        cy.wrap(promise).then(num => console.log(num))

        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))

        // Pode encapsular o numero sem problemas
        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
    })

    it('Its', () => {
        const obj = {
            nome: 'user',
            idade: 20
        }
        
        cy.wrap(obj).should('have.property', 'nome', 'user')
        
        // O Its serve para pegar somente 1 propriedade
        cy.wrap(obj).its('nome').should('be.equal', 'user')

        const outroObj = {
            nome: 'user',
            idade: 20,
            endereco: {
                rua: 'teste'
            }
        }


        // Acessando objeto dentro de objeto
        cy.wrap(outroObj).its('endereco').should('have.property', 'rua')
        cy.wrap(outroObj).its('endereco').its('rua').should('contain', 'teste')
        cy.wrap(outroObj).its('endereco.rua').should('contain', 'teste')


        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        // O Invoke invoca uma função 
        cy.wrap({
            fn: getValue
        }).invoke('fn').should('be.equal', 1)


        // Pode-se passar os parâmetros da função pelo invoke
        cy.wrap({
            fn: soma
        }).invoke('fn', 2, 5).should('be.equal', 7)


        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')

        // Utiliza a janela da aplicação
        cy.window().invoke('alert', 'Dá pra ver?')

        cy.get('#resultado')
        // Insere html na pagina
            .invoke('html', '<input type="button" value="hackeado" />')
    })
})