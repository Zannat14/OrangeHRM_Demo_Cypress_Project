class EmployeeUpdatePage {
  
    clickPim() {
      cy.get("span").contains("PIM").click();
    }

    updateLicenseDate(date){
        cy.get("label").contains("License Expiry Date").parent("div").siblings("div").find('input').type(date);
    }

    clickSubmitBtn() {
        // cy.get('button[type="submit"]').contains("Save").click();
        cy.get("button[type='submit']").eq(1).click()
    }

    clickOnList() {
        cy.get("li").contains("Employee List").click();
    }

    clickOnInfo(){
        cy.get("span").contains("My Info").click();
    }

    selectGender(){
        cy.get('input[type="radio"]').check('1', { force: true });
    }

    selectBloodGroup(){
        cy.get("label").contains("Blood Type").parent().siblings("div").click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    }

}
export default EmployeeUpdatePage;