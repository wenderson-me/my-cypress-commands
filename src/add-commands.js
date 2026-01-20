import * as navigationCommands from './commands/navigation'
import * as formCommands from './commands/form'
import * as assertionCommands from './commands/assertions'

Cypress.Commands.add('visitAndWait', navigationCommands.visitAndWait)
Cypress.Commands.add('clickLinkByText', navigationCommands.clickLinkByText)
Cypress.Commands.add('closeJuiceShopPopups', navigationCommands.closeJuiceShopPopups)

Cypress.Commands.add('fillByLabel', formCommands.fillByLabel)
Cypress.Commands.add('submitForm', formCommands.submitForm)

Cypress.Commands.add('shouldContainText', assertionCommands.shouldContainText)
Cypress.Commands.add('shouldBeAtUrl', assertionCommands.shouldBeAtUrl)
Cypress.Commands.add('shouldShowNotification', assertionCommands.shouldShowNotification)