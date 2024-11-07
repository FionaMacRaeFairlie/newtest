describe("template spec", () => {
  it("passes", () => {
    cy.visit('${Cypress.env("baseUrl")}');
  });
});
const startupFunction = () => {
  cy.visit('${Cypress.env("baseUrl")}');
};

describe("Tasks tests", () => {
  beforeEach(() => {
    startupFunction();
    cy.wait(5000);
  });

  describe("Tasks tests", () => {
    // Add task

    it("can add a new task", () => {
      cy.get(".TodoForm-button").click();
      cy.wait(1000);

      cy.get(".TodoForm-input").type("Cypress Task 1");

      cy.get(".TodoForm").then(() => {
        cy.get(".TodoForm-button").click();
        cy.wait(1000);
        cy.get(".TodoItem-text").each(($el) => {
          return cy.contains("Cypress Task 1");
        });
      });
    }); 

    // Delete task
    it("can delete a task", () => {
      cy.get(".TodoItem").then(() => {
        cy.get(".TodoItem-delete").first().click();

        cy.wait(1000);

        cy.get(".TodoItem")
          .each(($el) => {
            return $el;
          })
          .then(($el) => expect($el).to.have.length(2));
      });
    });

    
  });
});
