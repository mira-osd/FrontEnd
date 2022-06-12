describe('empty spec', () => {

  it('testing the opening of gallery and individual card', () => {
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/gallery')
    cy.get("a").each($el => {
      if ($el.prop('href').length > 0) {
            cy.visit("http://localhost:3000"+$el.attr('href'))         
            cy.go("back")
      }
    })
  })

  it('testing the form', () => {
    cy.visit('http://localhost:3000/contact')
    cy.get('#email').type('eemi@eemi.com')
    cy.get('#name_input').type('John Doe')
    cy.get('#message').type('test')
    cy.get('button').click({ multiple: true })
  })
})