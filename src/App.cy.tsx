import App from './App'
import { describe, it, cy } from 'local-cypress'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})