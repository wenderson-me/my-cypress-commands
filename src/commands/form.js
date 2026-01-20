export function fillByLabel(labelText, value, options = {}) {
  cy.contains('label', labelText)
    .invoke('attr', 'for')
    .then(id => {
      if (id) {
        cy.get(`#${id}`).type(value, options)
      } else {
        cy.contains('label', labelText).parent().find('input, textarea, select').type(value, options)
      }
    })
}

export function submitForm(formSelector = 'form') {
  cy.get(formSelector).submit()
}
