describe('CatContainer', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/cats')
  })

  it('should render next cat', () => {
    cy.visit('http://localhost:3000/cats')
    cy.wait(2000);
    cy.get('#next').click();  
  })

  
})

