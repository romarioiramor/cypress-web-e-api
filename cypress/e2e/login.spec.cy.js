import LoginPage from "../pages/LoginPage";

describe('Teste de login na plataforma usando massa de dados', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  const realizarLogin = (usuario) => {
    LoginPage.email(usuario.usuario);
    LoginPage.senha(usuario.senha);
    LoginPage.submit();
    LoginPage.assertLoginSuccesso();
    LoginPage.assertMensagem();
  };

  it('Deve fazer o login com sucesso com usuários diferentes', () => {
    cy.fixture('usuarios').then((usuarios) => {
      usuarios.forEach((usuario) => {
        realizarLogin(usuario);
        LoginPage.visit();
      });
    });
  });
});