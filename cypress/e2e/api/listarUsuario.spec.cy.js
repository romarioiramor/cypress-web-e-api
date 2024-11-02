
describe('Login API', () => {
  const apiUrl = 'https://serverest.dev/usuarios';
  const userId = "ANBXXTFvACvaPsJi";

  const verificarUsuario = (response) => {
    expect(response.status).to.eq(200);
    expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('_id', userId);
    expect(response.body).to.have.property('nome');
    expect(response.body).to.have.property('email');
    expect(response.body).to.have.property('password');
    expect(response.body).to.have.property('administrador', 'true');
  };

  it('Devera listar usuario da API', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/${userId}`,
    }).then((response) => {
      verificarUsuario(response);
    });
  });
});