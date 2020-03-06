package step_definitions;

import cucumber.api.java.bs.A;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.AddStudentPage;
import pages.AllStudentsPage;
import pages.HomePage;
import utilities.DBUtility;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class CreateStudent_StepDefs {
    HomePage homePage = new HomePage();
    AddStudentPage addStudentPage = new AddStudentPage();
    AllStudentsPage allStudentsPage = new AllStudentsPage();


    @When("User click on Students module")
    public void user_click_on_Students_module() {
        homePage.students.click();
    }

    @When("User click on Add student")
    public void user_click_on_Add_student() {
        homePage.addStudent.click();
    }


    @When("User enter {string} in first name")
    public void user_enter_in_first_name(String firstNameValue) {
        TempStorage.addData("studentFirstName", firstNameValue);
        SeleniumUtils.pause(1);
        addStudentPage.studentFirstName.sendKeys(firstNameValue);
    }

    @When("User enter {string} in last name")
    public void user_enter_in_last_name(String lastNameValue) {
        TempStorage.addData("studentLastName", lastNameValue);
        SeleniumUtils.pause(1);
        addStudentPage.studentLastName.sendKeys(lastNameValue);

}

    @When("User enter {string} in email")
    public void user_enter_in_email(String emailValue) {
        TempStorage.addData("studentEmail", emailValue);
        SeleniumUtils.pause(1);
        addStudentPage.studentEmail.sendKeys(emailValue);


    }

    @When("User enter {string} in joining date")
    public void user_enter_in_joining_date(String joiningDateValue) {
        TempStorage.addData("studentJoiningDate", joiningDateValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentJoiningDate, 5);
        addStudentPage.studentJoiningDate.sendKeys(joiningDateValue);
    }

    @When("User enter {string} in password")
    public void user_enter_in_password(String passwordValue) {
        TempStorage.addData("studentPasswordInput", passwordValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentPasswordInput,5);
        addStudentPage.studentPasswordInput.sendKeys(passwordValue);
    }

   @When("User enter {string} in subject")
    public void user_enter_in_subject(String subjectValue) {
        TempStorage.addData("studentSubjectInput", subjectValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentSubjectInput,5);
        addStudentPage.studentSubjectInput.sendKeys(subjectValue);
    }

    @When("User enter {string} in mobile number")
    public void user_enter_in_mobile_number(String mobileNumberValue) {
        TempStorage.addData("studentMobileNumberInput", mobileNumberValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentMobileNumberInput, 5);
        addStudentPage.studentMobileNumberInput.sendKeys(mobileNumberValue);
    }

    @When("User enter {string} in gender")
    public void user_enter_in_gender(String genderValue) {
        TempStorage.addData("studentGenderInput", genderValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentGenderInput,5);
        Select select = new Select(addStudentPage.studentGenderInput);
        select.selectByVisibleText("Female");
    }

    @When("User enter {string} in admission No")
    public void user_enter_in_admission_No(String admissionValue) {
        TempStorage.addData("studentAdmissionInput", admissionValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentAdmissionInput,5);
        addStudentPage.studentAdmissionInput.sendKeys(admissionValue);

    }

    @When("User enter {string} in birth date")
    public void user_enter_in_birth_date(String birthDateValue) {
        TempStorage.addData("studentBirthDateInput", birthDateValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentBirthDateInput,5);
        addStudentPage.studentBirthDateInput.sendKeys(birthDateValue);

    }

    @When("User enter {string} in major")
    public void user_enter_in_major(String majorValue) {
        TempStorage.addData("studentMajorInput", majorValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentMajorInput,5);
        addStudentPage.studentMajorInput.sendKeys(majorValue);

    }

    @When("User enter {string} in batch")
    public void user_enter_in_batch(String batchValue) {
        TempStorage.addData("studentBatchInput", batchValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentBatchInput, 5);
        addStudentPage.studentBatchInput.sendKeys(batchValue);

    }

    @When("User enter {string} in section")
    public void user_enter_in_section(String sectionValue) {
        TempStorage.addData("studentSectionInput", sectionValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentSectionInput,5);
        addStudentPage.studentSectionInput.sendKeys(sectionValue);

    }

    @When("User enter {string} present address")
    public void user_enter_present_address(String permanentAddressValue) {
        TempStorage.addData("studentPermanentAddressInput", permanentAddressValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentPermanentAddressInput, 5);
        addStudentPage.studentPermanentAddressInput.sendKeys(permanentAddressValue);

    }

    @When("User enter {string} compamy name")
    public void user_enter_compamy_name(String companyValue) {
        TempStorage.addData("studentCompany", companyValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentCompany,5);
        addStudentPage.studentCompany.sendKeys(companyValue);

    }

    @When("User enter {string} in title")
    public void user_enter_in_title(String titleValue) {
        TempStorage.addData("studentTitle", titleValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentTitle, 5);
        addStudentPage.studentTitle.sendKeys(titleValue);

    }

    @When("User enter {string} start date")
    public void user_enter_start_date(String startDateValue) {
        TempStorage.addData("studentStartDate", startDateValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentStartDate,5);
        addStudentPage.studentStartDate.sendKeys(startDateValue);

    }

    @When("User enter {string} in city")
    public void user_enter_in_city(String cityValue) {
        TempStorage.addData("studentCity", cityValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentCity,5);
        addStudentPage.studentCity.sendKeys(cityValue);

    }

    @When("User enter {string} in street")
    public void user_enter_in_street(String streetValue) {
        TempStorage.addData("studentStreet", streetValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentStreet, 5);
        addStudentPage.studentStreet.sendKeys(streetValue);

    }

    @When("User enter {string} in zipcode")
    public void user_enter_in_zipcode(String zipcodValue) {
        TempStorage.addData("studentZipCod", zipcodValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentZipCod, 5);
        addStudentPage.studentZipCod.sendKeys(zipcodValue);

    }

    @When("User enter {string} in state")
    public void user_enter_in_state(String stateValue) {
        TempStorage.addData("studentState", stateValue);
        SeleniumUtils.waitForVisibility(addStudentPage.studentState, 5);
        addStudentPage.studentState.sendKeys(stateValue);

    }
    @Then("User click to the Submit button")
    public void user_click_to_the_Submit_button() {

        addStudentPage.studentSubmitButton.click();
    }

    @Then("User should be able to see created student displayed in the UI")
    public void user_should_be_able_to_see_created_student_displayed_in_the_UI() {
        Assert.assertTrue("Student's name is not found on this page", allStudentsPage.studentFirstNameLocator(TempStorage.getData("studentFirstName")).isDisplayed());
    }

    @Then("Tester should be able to verify created student in the Database")
    public void tester_should_be_able_to_verify_created_student_in_the_Database() {

        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select first_name from student");
            DBUtility.close();
            String nameDBVerification = "";

            for(Map<Object, Object> map: data){
                if(map.containsValue(TempStorage.getData("studentFirstName"))){
                    nameDBVerification = map.toString();


                }
            }
            Assert.assertTrue("No matching record found. Verification FAILED", nameDBVerification.contains(TempStorage.getData("studentFirstName")));

        }catch (SQLException e){
            e.printStackTrace();
        }

    }

}
