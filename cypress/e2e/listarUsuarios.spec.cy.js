import LoginPage from "../pages/LoginPage";
import ListarUsuariosPage from "../pages/ListarUsuariosPage";

describe('Listar os usuários cadastrados', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  const realizarLogin = (usuario, senha) => {
    LoginPage.email(usuario);
    LoginPage.senha(senha);
    LoginPage.submit();
    LoginPage.assertLoginSuccess();
  };

  it('Deve fazer o login e listar os usuários cadastrados', () => {
    cy.fixture('usuarios').then((usuarios) => {
      const { usuario, senha } = usuarios[0];

      realizarLogin(usuario, senha);

      ListarUsuariosPage.botaoListar();
      ListarUsuariosPage.assertListagemSucesso();
      ListarUsuariosPage.assertPaginaListagemUsuariosSuccess();
    });
  });
});