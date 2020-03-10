package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.AllStudentsPage;
import pages.EditStudentPage;
import pages.HomePage;
import pages.StudentProfilePage;
import utilities.Driver;
import utilities.SeleniumUtils;

public class EditStudent_StepDefs {
    HomePage homePage = new HomePage();
    AllStudentsPage allStudentsPage = new AllStudentsPage();
    EditStudentPage editStudentPage = new EditStudentPage();
    StudentProfilePage studentProfilePage = new StudentProfilePage();
    String editingStudentID;
    String expectedStudentEmail;

    @When("User clicks on All Students")
    public void user_clicks_on_All_Students() {
        SeleniumUtils.waitForVisibility(homePage.allStudentsButton,5);
        homePage.allStudentsButton.click();
    }

    @When("User clicks on three dots of Chuck profile")
    public void user_clicks_on_three_dots_of_Chuck_profile() {
        // go to student profile
        allStudentsPage.firstStudentInList.click();
        // save editing student ID
        SeleniumUtils.waitForVisibility(studentProfilePage.studentID,5);
        editingStudentID = studentProfilePage.studentID.getText().trim();
        // return back to all students page
        Driver.getDriver().navigate().back();
        // clicking on three dots of first student in the list
        SeleniumUtils.waitForVisibility(allStudentsPage.threeDotsDropdown,5);
        allStudentsPage.threeDotsDropdown.click();
    }

    @When("User clicks edit button in dropdown box")
    public void user_clicks_edit_button_in_dropdown_box() {
        SeleniumUtils.waitForVisibility(allStudentsPage.editButton,5);
        allStudentsPage.editButton.click();
    }

    @When("User edits {string} in email")
    public void user_edits_in_email(String string) {
        expectedStudentEmail = string;
        SeleniumUtils.waitForVisibility(editStudentPage.inputEmail,5);
        editStudentPage.inputEmail.clear();
        editStudentPage.inputEmail.sendKeys(string);
    }

    @When("User edits {string}in mobile number")
    public void user_edits_in_mobile_number(String string) {
        editStudentPage.mobileNumberBox.clear();
        editStudentPage.mobileNumberBox.sendKeys(string);
    }

    @When("User edits {string} in birth date")
    public void user_edits_in_birth_date(String string) {
        editStudentPage.birthDateInput.clear();
        editStudentPage.birthDateInput.sendKeys(string);
    }

    @When("User clicks submit button")
    public void user_clicks_submit_button() {
        editStudentPage.submitButton.click();
    }

    @Then("User should be able to see edited student displayed in the UI")
    public void user_should_be_able_to_see_edited_student_displayed_in_the_UI() {
        SeleniumUtils.waitForVisibility(allStudentsPage.studentIDinputSearch,5);
        allStudentsPage.studentIDinputSearch.sendKeys(editingStudentID);
        allStudentsPage.searchButton.click();
        allStudentsPage.firstStudentInList.click();

        String actualStudentEmail = studentProfilePage.studentEmail.getText().trim();

        Assert.assertEquals("Emails not matching!! ", expectedStudentEmail, actualStudentEmail);
    }

    @Then("Tester should be able to verify edited student in Database")
    public void tester_should_be_able_to_verify_edited_student_in_Database() {

    }

}
