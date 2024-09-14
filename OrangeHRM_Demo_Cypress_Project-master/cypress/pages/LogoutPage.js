class LogoutPage {
    logOutButton() {
        cy.get(".oxd-userdropdown-name").click();
        cy.get('a[href="/web/index.php/auth/logout"]').click();
      }
  
    inputUsername(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    inputPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click();
    }
  
    validateDashboard() {
      cy.get('h6').should('have.text', 'Dashboard');
    }
  }
  
  export default LogoutPage;