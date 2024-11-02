class CadastroUsuarioPage {
    visit() {
      cy.visit('https://front.serverest.dev/login'); 
    }
  
    cadastrar() {
        cy.get('[data-testid="cadastrar"]').click();
    }
  
    informarNome(informarNome) {
        cy.get('[data-testid="nome"]').type(informarNome);
    }
  
    informarEmail(informarEmail) {
        cy.get('[data-testid="email"]').type(informarEmail);
    }

    informarSenha(informarSenha) {
        cy.get('[data-testid="password"]').type(informarSenha);
    }

    selecionarOpcaoAdministrador() {
        cy.get('[data-testid="checkbox"]').click();
    }

    botaoCadastrar() {
        cy.get('[data-testid="cadastrar"]').click();
    }
  
    assertCadastroSucesso() {
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }
  }
  
  export default new CadastroUsuarioPage();