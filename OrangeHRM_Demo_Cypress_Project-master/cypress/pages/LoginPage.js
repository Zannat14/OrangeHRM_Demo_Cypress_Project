class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
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
  
  export default LoginPage;