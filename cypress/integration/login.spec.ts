/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('forgot page', () => {
    cy.get('#forgot a').click();
    cy.url().should('include', '/forgot');
    cy.url().should('eq', 'http://localhost:4200/forgot');
  });

  it('Login page', () => {
    cy.get('#logo img').click();
    cy.url().should('include', '/login');
    cy.url().should('eq', 'http://localhost:4200/login');
  });

  it('Login button action', () => {
    cy.get('#login').click();
    cy.wait(1000);
    cy.get('#errorText').contains('Please give valid data');
  });

  it('Login button action', () => {
    cy.get('#login').click();
    cy.wait(1000);
    cy.get('#errorText').contains('Please give valid data');
  });
});
