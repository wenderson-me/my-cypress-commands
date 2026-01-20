# Cypress Commands

biblioteca de comandos do Cypress para facilitar a automação de testes E2E.

## Instalação

```bash
npm install --save-dev my-cypress-commands
```

## Uso

Importe os comandos no arquivo `cypress/support/e2e.js`:

```javascript
import '../../src/add-commands'
```

## Comandos Disponíveis

### Navegação
- `cy.visitAndWait(url, options)` - Visita uma página e aguarda o body estar visível
- `cy.clickLinkByText(text, options)` - Clica em um link pelo texto
- `cy.closeJuiceShopPopups()` - Fecha pop-ups iniciais do OWASP Juice Shop

### Formulários
- `cy.fillByLabel(labelText, value, options)` - Preenche um campo baseado no texto do label
- `cy.submitForm(formSelector)` - Submete um formulário

### Assertions
- `cy.shouldContainText(selector, text)` - Verifica se um elemento contém texto específico
- `cy.shouldBeAtUrl(url)` - Verifica se a URL atual inclui o texto especificado
- `cy.shouldShowNotification(message, type)` - Verifica se uma notificação está sendo exibida

## Exemplo

```javascript
describe('Teste com comandos customizados', () => {
  beforeEach(() => {
    cy.visitAndWait('https://juice-shop.herokuapp.com')
    cy.closeJuiceShopPopups() // Fechar pop-ups iniciais
  })

  it('deve fazer login', () => {
    cy.get('#navbarAccount').click()
    cy.clickLinkByText('Login')
    cy.fillByLabel('Email', 'user@example.com')
    cy.fillByLabel('Password', '123456')
    cy.get('#loginButton').click()
    cy.shouldBeAtUrl('/')
  })
})
```

## Licença

MIT
