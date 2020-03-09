package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pages.AddTeacherPage;
import pages.AllTeachersPage;
import pages.HomePage;
import pages.MyProfilePage;
import utilities.DBUtility;
import utilities.Driver;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class Adding_Teacher_StepDefs {
    HomePage homePage2 = new HomePage();
    AddTeacherPage addedTeacher = new AddTeacherPage();
    AllTeachersPage allTeachersNamePage = new AllTeachersPage();
    MyProfilePage myProfilePage = new MyProfilePage();
    WebDriver driver;



    @When("User clicks to Teacher Field")
    public void user_clicks_to_Teacher_Field() {
        homePage2.teachersModuleButton.click();

    }

    @When("User clicks to Add Teacher field")
    public void user_clicks_to_Add_Teacher_field() {
       homePage2.addTeacherButton.click();
    }

    @When("User types {string} in to first name field")
    public void user_types_in_to_first_name_field(String teacherName) {
        SeleniumUtils.pause(2);
        addedTeacher.firstNameInput.sendKeys(teacherName);
        TempStorage.addData("FirstName",teacherName);

    }

    @When("User types {string} in to last name field")
    public void user_types_in_to_last_name_field(String teacherLastName) {
    SeleniumUtils.pause(2);
    addedTeacher.lastNameInput.sendKeys(teacherLastName);

    }

    @When("User types  {string} in to email field")
    public void user_types_in_to_email_field(String teacherEmail) {
        SeleniumUtils.pause(2);
        addedTeacher.emailInput.sendKeys(teacherEmail);

    }

    @When("User types {string} in to join date field")
    public void user_types_in_to_join_date_field(String joiningDate) {
        SeleniumUtils.pause(2);
        addedTeacher.joiningDateInput.sendKeys(joiningDate);

    }

    @When("User types {string} in to password field")
    public void user_types_in_to_password_field(String teacherPass) {
        SeleniumUtils.pause(2);
        addedTeacher.passwordInput.sendKeys(teacherPass);

    }

    @When("User types {string} in to subject field")
    public void user_types_in_to_subject_field(String teacherSubject) {
        SeleniumUtils.pause(2);
        addedTeacher.subjectInput.sendKeys(teacherSubject);

    }

    @When("User types {string} in to mobile number field")
    public void user_types_in_to_mobile_number_field(String teacherMobileNumber) {
        SeleniumUtils.pause(2);
        addedTeacher.mobileNumberInput.sendKeys(teacherMobileNumber);

    }

    @When("User selects {string} from Gender dropdown")
    public void user_selects_from_Gender_dropdown(String teacherGender) {
        SeleniumUtils.pause(2);
        addedTeacher.genderInput.sendKeys(teacherGender);

    }

    @When("User selects {string} from Department dropdown")
    public void user_selects_from_Department_dropdown(String teacherDepartment) {
        SeleniumUtils.pause(2);
        addedTeacher.departmentInput.sendKeys(teacherDepartment);

    }

    @When("User types {string} in to Birth date field")
    public void user_types_in_to_Birth_date_field(String teacherBirthDate) {
        SeleniumUtils.pause(2);
        addedTeacher.birthDateInput.sendKeys(teacherBirthDate);

    }

    @When("User types {string} in to Salary field")
    public void user_types_in_to_Salary_field(String teacherSalary) {
        SeleniumUtils.pause(2);
        addedTeacher.salaryInput.sendKeys(Keys.DELETE,teacherSalary);
        //addedTeacher.salaryInput.sendKeys(teacherSalary);

    }

    @When("User selects {string} in to batch field")
    public void user_selects_in_to_batch_field(String teacherBatch) {
        SeleniumUtils.pause(2);
        addedTeacher.batchInput.sendKeys(teacherBatch);

    }

    @When("User types {string} in to section field")
    public void user_types_in_to_section_field(String teacherSection) {
        SeleniumUtils.pause(2);
        addedTeacher.sectionInput.sendKeys(teacherSection);


    }

    @When("User types {string} in to permanent address field")
    public void user_types_in_to_permanent_address_field(String teacherAddress) {
        SeleniumUtils.pause(2);
        addedTeacher.permanentAddressInput.sendKeys(teacherAddress);

    }

    @When("User clicks the submit button")
    public void user_clicks_the_submit_button() {
    SeleniumUtils.pause(2);
    addedTeacher.submitButton.sendKeys(Keys.ENTER);
    SeleniumUtils.pause(3);
    }
    @Then("User should be able to verify that her name is displayed in the teacher list")
    public void user_should_be_able_to_verify_that_her_name_is_displayed_in_the_teacher_list() {
        for(WebElement lists :allTeachersNamePage.allTeachersList){
            Assert.assertTrue("Grace is not in the list",lists.getText().contains("Grace"));
            SeleniumUtils.pause(3);
        }

        allTeachersNamePage.teacherNameArea.sendKeys("Grace"+Keys.ENTER);
        SeleniumUtils.pause(3);
        allTeachersNamePage.searchButton.click();
        SeleniumUtils.pause(3);
        String actualTeacherName = allTeachersNamePage.newName.getText();
        String expected = "Grace";
        Assert.assertTrue(actualTeacherName.contains(expected));
        SeleniumUtils.pause(2);
        allTeachersNamePage.gracesArea.click();
        SeleniumUtils.pause(2);



    }


    @Then("Tester should be able to verify the new teacher's name is on the database")
    public void tester_should_be_able_to_verify_the_new_teacher_s_name_is_on_the_database() {
        String teacherID = myProfilePage.teacherId.getText();
        System.out.println(teacherID);


        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select FIRST_NAME from teacher where TEACHER_ID = teacherId");
            DBUtility.close();
            //String expected = "Grace";
            //String actual =

            for(Map<Object, Object> datas: data){
                System.out.println(datas.get("FIRST_NAME").toString());
                //Assert.assertTrue(datas.get("FIRST_NAME").toString().equalsIgnoreCase("GRACE"));

                }

        }catch (SQLException e){
            e.printStackTrace();
        }

    }


}
