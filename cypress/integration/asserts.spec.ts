/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true
    expect(a).to.be.true
    expect(b).to.be.null
    expect(a).not.to.be.null
    expect(c).to.be.undefined
})

it('Object equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.eq(obj)

    // Verifica as propriedades do objeto
    expect(obj).to.be.deep.eq({
        a: 1, b: 2
    })

    // semelhante ao deep.equal
    expect(obj).eql({
        a: 1, b: 2
    })

    // se o objeto inclui o atributo
    expect(obj).include({
        a: 1
    })

    // Verifica se tem a propriedade 2
    expect(obj).to.have.property('b', 2)

    expect(obj).to.not.be.empty

    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1, 2, 3]

    expect(arr).to.have.members([1, 2, 3])

    // Verifica se inclui membros
    expect(arr).to.include.members([1, 3])

    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'string'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')

    // Verificação implícita de tipos
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/)
    expect(str).to.match(/teste$/)

    // Tamanho de 15 caracteres
    expect(str).to.match(/.{15}/)

    // Somente palavras
    expect(str).to.match(/|w+/)

    // Sem números
    expect(str).to.match(/|D+/)
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.be.above(5)
})