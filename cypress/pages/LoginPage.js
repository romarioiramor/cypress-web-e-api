class LoginPage {
    visit() {
      cy.visit('https://front.serverest.dev/login'); 
    }
  
    email(email) {
      cy.get('[data-testid="email"]').type(email);
    }
  
    senha(senha) {
      cy.get('[data-testid="senha"]').type(senha);
    }
  
    submit() {
      cy.get('[data-testid="entrar"]').click();
    }
  
    assertLoginSuccess() {
      cy.url().should('eq', 'https://front.serverest.dev/admin/home');
    }

    assertMensagem() {
      cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible');
    }
  }
  
  export default new LoginPage();