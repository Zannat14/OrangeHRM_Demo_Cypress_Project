import {faker} from '@faker-js/faker'
const generatePassword = require('generate-password');

class EmployeeFormPage {
  
    clickPim() {
      cy.get("span").contains("PIM").click();
    }
  
    clickAdd() {
      cy.get('button[type="button"]').contains("Add").click();
    }
  
    get firstNameInput() {
      return cy.get('input[name="firstName"]');
    }

    get middleNameInput() {
      return cy.get('input[name="middleName"]');
    }
  
    get lastNameInput() {
      return cy.get('input[name="lastName"]');
    }

    get clickToggleBtn() {
      return cy.get('input[type="checkbox"]');
    }

    usrName(firstName, lastName) {
      const userName = `${firstName} ${lastName}`;
      cy.get("label").contains("Username").parent("div").siblings("div").find('input').type(userName);
    }

    employeeID(employeeID){
      cy.get("label").contains("Employee Id").parent("div").siblings("div").find('input').clear().type(employeeID);

    }

    passwordField(password){
      cy.get("label").contains("Password").parent("div").siblings("div").find('input').type(password);
    }

    confirmPasswordField(password){
      cy.get("label").contains("Confirm Password").parent("div").siblings("div").find('input').type(password);
    }

    get clickSubmitBtn() {
      return cy.get('button[type="submit"]');
    }

    createEmployeeProfile() {
      const employee = this.generateData();
      // const userName = this.usrName(employee.firstName, employee.lastName);
      
      this.firstNameInput.type(employee.firstName);
      this.middleNameInput.type(employee.middleName);
      this.lastNameInput.type(employee.lastName);
      this.employeeID(employee.employeeID)
      this.clickToggleBtn.click( {force: true} );

      this.usrName(employee.firstName, employee.lastName);
      this.passwordField(employee.password);
      this.confirmPasswordField(employee.password);
      this.clickSubmitBtn.click();

      cy.writeFile(`cypress/fixtures/employeeData.json`,{
        employeeID: employee.employeeID,
        firstName: employee.firstName,
        userName: `${employee.firstName} ${employee.lastName}`,
        password: employee.password
      });
  }

    generateData() {
      return{
        firstName: faker.name.firstName(),
        middleName: faker.name.middleName(),
        lastName: faker.name.lastName(),
        employeeID: faker.string.uuid().slice(0,9),
        password: generatePassword.generate({
          length: 12,
          numbers: true,
          uppercase: true,
          lowercase: true,
          symbols: true
        })
      };
    }

    validateMessage() {
      cy.get('.oxd-text--toast-message').should("have.text", "Successfully Saved");
    }
  }
  
  export default EmployeeFormPage;