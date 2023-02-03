
describe('useref testing', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#text").type("Hello World")
    cy.get("#button").click()
    cy.get("#disp").should("have.text", "Hello World")
  })
})