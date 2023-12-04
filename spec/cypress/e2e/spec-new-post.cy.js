describe('template spec', () => {
  


  it('passes', () => {
    cy.visit('http://localhost:5017')

    cy.contains('Log In').click();

    cy.get('#user_email').type('info@jsdhami.com.np'); // Replace with your email
    cy.get('#user_password').type('aaaaaa'); // Replace with your password
    cy.get('.sb').click();
    // Click on the login button (replace 'Submit' with the actual text or selector of your login submit button)
    cy.contains('Blogs').click();
    cy.contains('New blog').click();
    cy.get('#blog_title').type('My First Blog');
    cy.get('#blog_desc').type('This is my first blog');
    
    cy.get('#blog_author').type('Janu Singh Dhami');
    cy.contains('Create Blog').click();
    // cy.get('.btn').click();
    cy.contains('Blogs').click();
    // 
  })
})
