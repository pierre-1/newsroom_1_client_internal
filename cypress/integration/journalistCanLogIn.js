describe("Journalist can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/**",
      response: "fixture:journalist_login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:journalist_login.json"
    });
    cy.visit("/")
  });

  it("Sucessfully", () => {
    cy.get("#main-header").within(() => {
      cy.get("#login").click();
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com");
      cy.get("#password").type("password");
      cy.get("#login-button")
        .contains("Login")
        .click();
    });
    cy.wait(500)
    cy.get("p#message").should("contain", "Welcome journalist@mail.com");
  });
});

describe("User can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false
      }
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:user_login.json"
    });
    cy.visit("/")
  });

  it("With invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wrong");
      cy.get("#login-button")
      .contains("Login")
      .click();
    });
    cy.get("p#message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );
  });
});