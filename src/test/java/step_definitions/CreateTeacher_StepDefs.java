package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.AddTeacherPage;
import pages.AllTeachersPage;
import pages.HomePage;
import utilities.DBUtility;
import utilities.Driver;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class CreateTeacher_StepDefs {
    HomePage homePage = new HomePage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();
    AllTeachersPage allTeachersPage = new AllTeachersPage();


    @When("User clicks on Teachers module")
    public void user_clicks_on_Teachers_module() {
       homePage.teachersModuleButton.click();
    }

    @When("User clicks on Add Teacher")
    public void user_clicks_on_Add_Teacher() {
        homePage.addTeacherButton.click();
    }

    @When("User enters {string} in first name")
    public void user_enters_in_first_name(String firstNameValue) {
        TempStorage.addData("teacherFirstName", firstNameValue);
        SeleniumUtils.pause(1);
        addTeacherPage.firstNameInput.sendKeys(firstNameValue);
    }

    @When("User enters {string} in last name")
    public void user_enters_in_last_name(String lastNameValue) {
        SeleniumUtils.pause(1);
        addTeacherPage.lastNameInput.sendKeys(lastNameValue);
    }

    @When("User enters {string} in email")
    public void user_enters_in_email(String emailValue) {
        SeleniumUtils.pause(1);
        addTeacherPage.emailInput.sendKeys(emailValue);
    }

    @When("User enters {string} in joining date")
    public void user_enters_in_joining_date(String joiningDateValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.joiningDateInput, 5);
        addTeacherPage.joiningDateInput.sendKeys(joiningDateValue);
    }

    @When("User enters {string} in password")
    public void user_enters_in_password(String passwordValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.passwordInput, 5);
        addTeacherPage.passwordInput.sendKeys(passwordValue);
    }

    @When("User enters {string} in subject")
    public void user_enters_in_subject(String subjectValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.subjectInput, 5);
        addTeacherPage.subjectInput.sendKeys(subjectValue);
    }

    @When("User enters {string} in mobile number")
    public void user_enters_in_mobile_number(String mobileNumberValue) {
        SeleniumUtils.pause(2);
        addTeacherPage.mobileNumberInput.sendKeys(mobileNumberValue);

    }

    @When("User selects {string} in gender")
    public void user_selects_in_gender(String genderValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.genderInput, 5);
        Select select = new Select(addTeacherPage.genderInput);
        select.selectByVisibleText(genderValue);
    }

    @When("User selects {string} in department")
    public void user_selects_in_department(String departmentValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.departmentInput, 5);
        Select select = new Select(addTeacherPage.departmentInput);
        select.selectByVisibleText(departmentValue);
    }

    @When("User enters {string} in birth date")
    public void user_enters_in_birth_date(String birthDateValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.birthDateInput, 5);
        addTeacherPage.birthDateInput.sendKeys(birthDateValue);
    }

    @When("User enters {string} in salary")
    public void user_enters_in_salary(String salaryValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.salaryInput, 5);
        addTeacherPage.salaryInput.sendKeys(Keys.chord(Keys.CONTROL,"a", Keys.DELETE));
        addTeacherPage.salaryInput.sendKeys(salaryValue);
    }

    @When("User selects {string} in batch")
    public void user_selects_in_batch(String batchValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.batchInput, 5);
        Select select = new Select(addTeacherPage.batchInput);
        select.selectByVisibleText(batchValue);
    }

    @When("User enters {string} in section")
    public void user_enters_in_section(String sectionValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.sectionInput, 5);
        addTeacherPage.sectionInput.sendKeys(sectionValue);
    }

    @When("User enters {string} in permanent address")
    public void user_enters_in_permanent_address(String permanentAddressValue) {
        SeleniumUtils.waitForVisibility(addTeacherPage.permanentAddressInput, 5);
        addTeacherPage.permanentAddressInput.sendKeys(permanentAddressValue);

    }

    @When("User clicks on Submit button")
    public void user_clicks_on_Submit_button() {

        addTeacherPage.submitButton.click();

    }

    @Then("User should be able to see created teacher displayed in the UI")
    public void user_should_be_able_to_see_created_teacher_displayed_in_the_UI() {
       Assert.assertTrue("Teacher's name is not found on this page", allTeachersPage.teacherFirstNameLocator(TempStorage.getData("teacherFirstName")).isDisplayed());
    }

    @Then("Tester should be able to verify created teacher in the Database")
    public void tester_should_be_able_to_verify_created_teacher_in_the_Database() {

        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select first_name from teacher");
            DBUtility.close();
            String nameDBVerification = "";

            for(Map<Object, Object> map: data){
                if(map.containsValue(TempStorage.getData("teacherFirstName"))){
                    nameDBVerification = map.toString();
                }
            }
            Assert.assertTrue("No match found. Verification FAILED", nameDBVerification.contains(TempStorage.getData("teacherFirstName")));

        }catch (SQLException e){
            e.printStackTrace();
        }



    }
 }
