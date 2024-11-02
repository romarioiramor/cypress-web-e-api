describe('Buscar usuario por ID', () => {
  const apiUrl = 'https://serverest.dev/usuarios';
  const idValido = 'ANBXXTFvACvaPsJi';
  const idInvalido = 'QueroFazerParteDaEquipe';

  const verificarUsuario = (response, userId) => {
    expect(response.status).to.eq(200);
    expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
    
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('nome'); 
    expect(response.body).to.have.property('email');
    expect(response.body).to.have.property('password');
    expect(response.body).to.have.property('administrador', 'true');  
    expect(response.body).to.have.property('_id', userId);
  };

  it('Devera buscar um usuario pelo ID', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/${idValido}`,
    }).then((response) => {
      verificarUsuario(response, idValido);
    });
  });

  it('Nao devera encontrar um usuario', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/${idInvalido}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Usuário não encontrado');
    });
  });
});