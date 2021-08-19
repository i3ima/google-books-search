
describe('Basic flow', () => {
    it('should search correctly', () => {
        cy.visit('/');
        cy.location('pathname').should('eq', '/');

        // Find search input and type in it
        cy.get('#name').type('TypeScript')
        // Find category select and change it to computers
        cy.contains('Category').next().select('Computers', { timeout: 1000 }).should('have.attr', 'name')
        // Find search button and click it
        cy.get('button').click()
        // Select first card
        cy.get('.grid').children().first().click()
        // Check if there is an image present
        cy.get('#thumbnail').should("have.attr", 'src')
        // Exit modal
        cy.get('#modal').find('button').click()
        // Scroll to bottom
        cy.scrollTo('bottom')
        // Load more
        cy.get("button").last().click()
        // At this exact moment grid should have 60 elements
        cy.get('.grid').children().should('have.length.at.least', 60)
    });
});