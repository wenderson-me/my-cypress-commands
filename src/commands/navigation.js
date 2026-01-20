export function visitAndWait(url, options = {}) {
  const { timeout = 10000 } = options

  cy.visit(url)
  cy.get('body', { timeout }).should('be.visible')
}

export function clickLinkByText(text, options = {}) {
  cy.contains('a', text, options).click()
}

export function closeJuiceShopPopups() {
  cy.get('body').then(($body) => {
    if ($body.find('mat-dialog-container').length > 0) {
      // eslint-disable-next-line cypress/no-force
      cy.get('mat-dialog-container button[aria-label="Close Welcome Banner"]').click({ force: true })
    }
  })

  cy.get('body').then(($body) => {
    if ($body.find('.cc-window').length > 0) {
      // eslint-disable-next-line cypress/no-force
      cy.get('.cc-dismiss').click({ force: true })
    }
  })

  cy.get('body').then(($body) => {
    if ($body.find('button[mat-dialog-close], button[aria-label*="close"], button[aria-label*="Close"]').length > 0) {
      // eslint-disable-next-line cypress/no-force
      cy.get('button[mat-dialog-close], button[aria-label*="close"], button[aria-label*="Close"]').first().click({ force: true })
    }
  })

  // Aguardar que os modais sejam fechados - necessário para estabilizar
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(500)
}
