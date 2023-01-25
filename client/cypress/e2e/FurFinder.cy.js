describe('CatContainer', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/cats')
  })

  it('should render next cat', () => {
    cy.visit('http://localhost:3000/cats')
    cy.wait(2000);
    cy.get('#next').click();  
  })

  it('should render last cat', () => {
    cy.visit('http://localhost:3000/cats')
    cy.wait(2000);
    cy.get('#prev').click();  
  })

  it('should login', () => {
    cy.visit('http://localhost:3000/login')
    cy.wait(2000);
    cy.get('#loginname').type('admin');  
    cy.get('#loginpass').type('admin'); 
    cy.get('#submitlogin').click(); 
    cy.location('pathname').should('eq', '/admin')
  })

  it('should show all requests', () => {
    cy.visit('http://localhost:3000/login')
    cy.wait(2000);
    cy.get('#loginname').type('admin');  
    cy.get('#loginpass').type('admin'); 
    cy.get('#submitlogin').click(); 
    // cy.visit('http://localhost:3000/admin')
    cy.wait(5000);
    cy.get('#selectreqs').select();
    cy.get('#allreqs').select(); 
  })
})

