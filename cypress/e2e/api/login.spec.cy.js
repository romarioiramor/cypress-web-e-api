describe('Login API', () => {
  const apiUrl = 'https://serverest.dev/login/';
  
  const verificarRespostaLoginValido = (response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('authorization');
    expect(response.body).to.have.property('message', 'Login realizado com sucesso');
    expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
  };

  const verificarRespostaLoginInvalido = (response) => {
    expect(response.status).to.eq(400);
    expect(response.body).to.have.property('email', 'email é obrigatório');
    expect(response.body).to.have.property('username', 'username não é permitido');
    expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
  };

  it('Deve fazer login com uma credencial válida', () => {
    cy.fixture('usuarios').then((usuarios) => {
      const { usuario, senha } = usuarios[0];

      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: usuario,
          password: senha,
        },
      }).then(verificarRespostaLoginValido);
    });
  });

  it('Não deve permitir login com credenciais inválidas', () => {
    const invalidUser = { usuario: 'invalido', senha: 'invalida' };

    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: invalidUser.usuario,
        password: invalidUser.senha,
      },
      failOnStatusCode: false,
    }).then(verificarRespostaLoginInvalido);
  });
});