export function shouldContainText(selector, text) {
  cy.get(selector).should('contain.text', text)
}

export function shouldBeAtUrl(url) {
  cy.url().should('include', url)
}

export function shouldShowNotification(message, type = 'success') {
  cy.get(`[data-notification-type="${type}"]`)
    .should('be.visible')
    .and('contain.text', message)
}
