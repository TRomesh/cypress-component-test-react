import React from 'react'
import { describe, it, cy } from 'local-cypress'
import LoginForm from "../../src/components/LoginForm"

describe('LoginFormComponent.cy.tsx', () => {
  it('should render input fields for LoginFrom!', () => {
    cy.mount(<LoginForm />);
    cy.get("[data-test='username']").should("have.attr", "placeholder", "Username")
    cy.get("[data-test='password']").should("have.attr", "placeholder", "Password")
    cy.get("[data-test='submit']").should("have.attr", "type", "submit")
    cy.get("[data-test='message']").should('not.exist'); // initially the message should not be rendered!
  })

  it('should render welcome message when form submitted!', () => {
    cy.mount(<LoginForm />);
    cy.get("[data-test='username']").type('testuser');
    cy.get("[data-test='password']").type('testpassword');
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Welcome testuser!')
  });
})