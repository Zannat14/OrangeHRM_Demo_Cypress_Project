import EmployeeFormPage from '../pages/EmployeeFormPage';
import EmployeeUpdatePage from '../pages/EmployeeUpdatePage.js';
import EmployeeSearchPage from '../pages/EmployeeSearchPage.js';
import LoginPage from '../pages/LoginPage.js';
import NewEmployee from '../pages/NewEmployee.js';
import LogoutPage from '../pages/LogoutPage.js';

describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();
  const employeeForm = new EmployeeFormPage();
  const employeeUpdate = new EmployeeUpdatePage();
  const employeeSearch = new EmployeeSearchPage();
  const loginWithNewId = new NewEmployee();
  const logoutPage = new LogoutPage();

  beforeEach(() => {
    loginPage.visit();
});

  it('should login successfully and display the dashboard', () => {

    //Login with username and password
    loginPage.inputUsername('Admin'); 
    loginPage.inputPassword('admin123');
    loginPage.clickLogin();
    loginPage.validateDashboard();

 
    //Create an employee
    employeeForm.clickPim();
    employeeForm.clickAdd();
    employeeForm.createEmployeeProfile();
    employeeForm.validateMessage();
    // employeeForm.validateEmployeeDashboard();


    //Update the employee profile and search with employee ID
    employeeUpdate.updateLicenseDate('2025-12-01');
    employeeUpdate.clickSubmitBtn();
    employeeUpdate.clickOnList();
    cy.wait(5000);
    employeeSearch.searchById();


    //Click on directory and search with employee username
    employeeSearch.clickDir();
    cy.wait(5000);
    employeeSearch.searchByUsername();
    cy.wait(2000);
    employeeSearch.clickSubmitBtn();

    
    //Log out of the page and login with created user
    logoutPage.logOutButton();
    loginWithNewId.loginwithNewUsername();
    loginWithNewId.assertNewUser();

    //Update info from profile
    employeeUpdate.clickOnInfo();
    employeeUpdate.selectGender();
    employeeUpdate.selectBloodGroup();
    employeeUpdate.clickSubmitBtn();
    cy.get('.oxd-text--toast-message').should("have.text", "Successfully Saved")

    //Logout from the page
    logoutPage.logOutButton();
    cy.waitAndVerfiy("h5")

  });

});