import CadastroUsuarioPage from "../pages/CadastroUsuarioPage";

describe('Criar novo cadastro', () => {
  const gerarEmailAleatorio = () => {
    const aleatorio = Math.floor(Math.random() * 10000) + 1;
    return `romario${aleatorio}@gmail.com`;
  };

  beforeEach(() => {
    CadastroUsuarioPage.visit();
  });

  it('Deve fazer um cadastro na aplicação', () => {
    const email = gerarEmailAleatorio();

    CadastroUsuarioPage.cadastrar();
    CadastroUsuarioPage.informarNome('Medeiros');
    CadastroUsuarioPage.informarEmail(email);
    CadastroUsuarioPage.informarSenha('queroFazerParteDoTime');
    CadastroUsuarioPage.selecionarOpcaoAdministrador();
    CadastroUsuarioPage.cadastrar();
    CadastroUsuarioPage.assertCadastroSucesso();
  });
});