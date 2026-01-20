describe('Testa comandos customizados', () => {
  const baseUrl = Cypress.config().baseUrl

  beforeEach(() => {
    cy.visitAndWait(baseUrl)
    cy.closeJuiceShopPopups()
  })

  it('deve usar visitAndWait', () => {
    cy.visitAndWait(baseUrl)
    cy.closeJuiceShopPopups()
    cy.get('.navbar-toolbar').should('be.visible')
    cy.shouldContainText('.navbar-toolbar', 'OWASP Juice Shop')
  })

  it('deve preencher formulário de login', () => {
    cy.get('#navbarAccount').click()
    cy.clickLinkByText('Login')
    cy.fillByLabel('Email', 'test@example.com')
    cy.fillByLabel('Password', '123456')
    cy.get('#loginButton').click()
    cy.shouldBeAtUrl('/')
  })

  it('deve navegar entre páginas', () => {
    cy.clickLinkByText('About Us')
    cy.shouldBeAtUrl('#/about')

    cy.get('.navbar-toolbar').click()
    cy.shouldBeAtUrl('#/')
  })

  it('deve testar pesquisa de produtos', () => {
    // Usar o campo de pesquisa
    cy.get('.mat-input-element[placeholder*="Search"]').type('apple{enter}')

    // Verificar se produtos aparecem
    cy.get('mat-card').should('be.visible')
  })

  it('deve interagir com carrinho', () => {
    // Adicionar produto ao carrinho
    cy.get('mat-card button[aria-label="Add to Basket"]').first().click()

    // Verificar notificação
    cy.get('simple-snack-bar').should('be.visible')

    // Ir para carrinho
    cy.get('mat-icon[class*="fa-cart"]').click()
    cy.shouldBeAtUrl('#/basket')
  })
})
