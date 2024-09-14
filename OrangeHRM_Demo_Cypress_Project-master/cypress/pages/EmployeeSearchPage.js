class EmployeeSearchPage {

  searchById(){
    cy.fixture("employeeData.json").then((employee) =>{
    cy.get("label").contains("Employee Id").parent("div").siblings("div").find('input').type(employee.employeeID);
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('have.text', employee.employeeID);
    })
  }  
  
  clickDir() {
      cy.get("span").contains("Directory").click();
  }

  searchByUsername(){
      cy.fixture("employeeData.json").then((employee) =>{
      cy.get('input[placeholder="Type for hints..."]').type(employee.firstName);
      cy.get('.oxd-autocomplete-option > span').click();
      })
  } 


    clickSubmitBtn() {
        cy.get('button[type="submit"]').click();
    }
}
export default EmployeeSearchPage;