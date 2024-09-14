import LoginPage from './LoginPage.js';

class NewEmployee {
    loginwithNewUsername(){
        const login = new LoginPage();
        cy.fixture("employeeData.json").then((employee) =>{
            
            login.inputUsername(employee.userName);
            login.inputPassword(employee.password);
            login.clickLogin();        
        })
    }
    
    assertNewUser(){
        cy.fixture("employeeData.json").then((employee) =>{
            cy.get('p.oxd-userdropdown-name').should("have.text", employee.userName); //assert the name
        })
    }
}
export default NewEmployee;