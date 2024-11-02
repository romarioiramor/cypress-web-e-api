class ListarUsuariosPage {


    botaoListar() {
        cy.get('[data-testid="listarUsuarios"]').click();
    }

    assertPaginaListagemUsuariosSuccess() {
        cy.url().should('eq', 'https://front.serverest.dev/admin/listarusuarios');
    }

    assertListagemSucesso() {
        cy.contains('Lista dos usuários').should('be.visible');
    }
}

export default new ListarUsuariosPage();