package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.AddTeacherPage;
import pages.AllTeachersPage;
import pages.EditTeacherPage;
import pages.HomePage;
import utilities.DBUtility;
import utilities.Driver;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class EditTeacher_StepDefs {

    HomePage homePage = new HomePage();
    EditTeacherPage editTeacherPage = new EditTeacherPage();
    AllTeachersPage allTeachersPage = new AllTeachersPage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();
    static String oldFirstName;

    @When("User click on threedots button on Christian teacher")
    public void user_click_on_threedots_button_on_Christian_teacher() {
        homePage.teachersModuleButton.click();
        homePage.allTeacherButton.click();
        SeleniumUtils.pause(3);
        editTeacherPage.listButton.click();
        SeleniumUtils.pause(3);
        editTeacherPage.teacher_ID_search.sendKeys("546");
        SeleniumUtils.pause(3);
        editTeacherPage.searchButton.click();
        SeleniumUtils.pause(3);
    }

    @When("User click on Edit button")
    public void userClickOnEditButton() {
        editTeacherPage.editbutton.click();
        SeleniumUtils.pause(2);

        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select FIRST_NAME from teacher");
            //select count(*) where firstname = Chr;
            // assert == 0
            //
            System.out.println(data);
            DBUtility.close();


            for (Map<Object, Object> map : data) {
                if (String.valueOf(map.get("FIRST_NAME")).contains("Chr")) {
                    oldFirstName = (String) map.get("FIRST_NAME");
                    System.out.println(map.get("FIRST_NAME"));
                }
            }
            Assert.assertTrue("Name is not Chr. FAILED", oldFirstName.contains("Chr"));

        } catch (SQLException e) {
            e.printStackTrace();
        }

//        System.out.println(TempStorage.getData("firstName"));
    }

    @When("User edit {string} in first name")
    public void user_edit_in_first_name(String FirstnameValue) {
        SeleniumUtils.pause(2);
        // ChrChen id546
        editTeacherPage.inputFirstname.clear();
        editTeacherPage.inputFirstname.sendKeys(FirstnameValue);

        SeleniumUtils.pause(2);
        TempStorage.addData("teacher_FirstName", FirstnameValue);
        SeleniumUtils.pause(2);
        String updatedTeacherName = Driver.getDriver().findElement(By.xpath("(//input[@type='text'])[1]")).getText();
        System.out.println(updatedTeacherName);
    }

    @When("User edit {string} in last name")
    public void user_edit_in_last_name(String LastnameValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.inputLastname.clear();
        editTeacherPage.inputLastname.sendKeys(LastnameValue);
    }

    @When("User edit {string} in email")
    public void user_edit_in_email(String EmailValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.inputEmail.clear();
        editTeacherPage.inputEmail.sendKeys(EmailValue);
    }

    @When("User edit {string} in joining date calendar")
    public void user_edit_in_joining_date_calendar(String CalendarValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.inputJoiningdate.sendKeys(CalendarValue);
    }

    @When("User edit {string} in password")
    public void user_edit_in_password(String passwordValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.inputFirstname.clear();
        SeleniumUtils.pause(2);
        editTeacherPage.inputPassword.sendKeys(passwordValue);
    }

    @When("User edit {string} in subject")
    public void user_edit_in_subject(String subjectValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.subjectTextBox.clear();
        SeleniumUtils.pause(2);
        editTeacherPage.subjectTextBox.sendKeys(subjectValue);
    }

    @When("User edit {string} in mobile number")
    public void user_edit_in_mobile_number(String mobileNumberValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.mobileNumberBox.clear();
        SeleniumUtils.pause(2);
        editTeacherPage.mobileNumberBox.sendKeys(mobileNumberValue);
    }

    @When("User edit {string} in gender")
    public void user_edit_in_gender(String genderValue) {
        SeleniumUtils.waitForVisibility(editTeacherPage.birthDateInput, 5);
        Select select = new Select(editTeacherPage.genderInput);
        select.selectByVisibleText(genderValue);
    }

    @When("User edit {string} in department dropdown")
    public void user_edit_in_department_dropdown(String departmentDropdown) {
        SeleniumUtils.waitForVisibility(editTeacherPage.birthDateInput, 5);
        Select select = new Select(editTeacherPage.departmentInput);
        select.selectByVisibleText(departmentDropdown);
    }

    @When("User edit {string} in birth date calendar")
    public void user_edit_in_birth_date_calendar(String birthDateValue) {
        SeleniumUtils.waitForVisibility(editTeacherPage.birthDateInput, 5);
        editTeacherPage.birthDateInput.sendKeys(birthDateValue);
    }

    @When("User edit {string} in salary")
    public void user_edit_in_salary(String salaryValue) {
        SeleniumUtils.pause(3);
        editTeacherPage.salary.clear();
        editTeacherPage.salary.sendKeys(salaryValue);
    }

    @When("User edit {string} in batch")
    public void user_edit_in_batch(String batchValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.batchInput.sendKeys(batchValue);
    }

    @When("User edit {string} in section")
    public void user_edit_in_section(String sectionValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.sectionInput.clear();
        editTeacherPage.sectionInput.sendKeys(sectionValue);
    }

    @When("User edit {string} in present adress")
    public void user_edit_in_present_adress(String adressValue) {
        SeleniumUtils.pause(2);
        editTeacherPage.permanentAddressInput.clear();
        SeleniumUtils.pause(2);
        editTeacherPage.permanentAddressInput.sendKeys(adressValue);
    }

    @When("User click Submit button")
    public void user_click_Submit_button() {
        editTeacherPage.submitButton.click();
        SeleniumUtils.pause(5);
    }

    @Then("User should see the edited profile displayed in the UI")
    public void user_should_see_the_edited_profile_displayed_in_the_UI() {
        //   Assert.assertTrue("Teacher's name is not found on this page", allTeachersPage.teacherFirstNameLocator(TempStorage.getData("teacher_FirstName")).isDisplayed());
    }

    @Then("Tester should be able to veryfy the edited Teacher in DataBase")
    public void tester_should_be_able_to_veryfy_the_edited_Teacher_in_DataBase() {


        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select first_name from teacher");
            DBUtility.close();
            String nameDBVerification = "";

            int countNew = 0;
            int countOld = 0;
            for (Map<Object, Object> map : data) {
                if (map.get("FIRST_NAME").equals(TempStorage.getData("teacher_FirstName"))) {
                    countNew++;
                }
                if(map.get("FIRST_NAME").equals(oldFirstName)){
                    countOld++;
                }
            }
            //Assert.assertTrue("No update found. Verification FAILED", nameDBVerification.contains(TempStorage.getData("teacher_FirstName")));

            Assert.assertEquals(countOld, 0);
            Assert.assertEquals(countNew, 1);
        } catch (SQLException e) {
            e.printStackTrace();
        }
//        Assert.assertFalse("Teacher_First_name is updated ! TEST PASSED",
//                !TempStorage.getData("firstName").equalsIgnoreCase(TempStorage.getData("teacher_FirstName")));

    }

}


//|Cocolero |Coco    |coco@aaa.com| 22/12/2020 | 44444   |   PP  | 5555555555 |Male  |English   | 11/11/2002 | 33000 |5    | Java   | 8thAvenue  |