/// <reference types="cypress" />

it('An external test...', () => {

})

describe('Should group testes...', () => {
    
    describe.skip('should group more specific tests...', () => {
        it('A specific test...', () => {
            
        })
    })

    describe('should group more specific tests 2...', () => {
        it.skip('A specific test 2...', () => {

        })
    })

    it('An internal test...', () => {
    
    })
})
