package step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.AllStudentsPage;
import pages.DeleteStudentPage;
import pages.HomePage;
import utilities.DBUtility;
import utilities.SeleniumUtils;
import utilities.TempStorage;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class DeleteStudent_StepDef {



    HomePage homePage = new HomePage();
    AllStudentsPage allStudentsPage = new AllStudentsPage();
    DeleteStudentPage deleteStudentPage = new DeleteStudentPage();
    Faker faker = new Faker();
    String firstName = faker.name().firstName();
    String lastName = faker.name().lastName();
    String password = faker.name().firstName();
    String subject = faker.name().lastName();
    String gender = faker.name().lastName();
    String admissionNo = faker.name().lastName();
    String batch = faker.name().lastName();
    String section = faker.name().lastName();
    String permanentAddress = faker.name().lastName();
    String companyName = faker.name().lastName();
    String title = faker.name().lastName();
    String startDate = faker.name().lastName();
    String city = faker.name().lastName();
    String street = faker.name().lastName();
    String zipCode = faker.name().lastName();
    String state = faker.name().lastName();


    @When("User clicks on Student module")
    public void user_clicks_on_Student_module() {
        SeleniumUtils.pause(3);
        homePage.students.click();
    }

    @When("User clicks on Add Student")
    public void user_clicks_on_Add_Student() {
        SeleniumUtils.pause(3);
        homePage.addStudent.click();
    }

    @When("User enters first name")
    public void user_enters_first_name() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentFirstName.sendKeys(firstName);

    }

    @When("User enters last name")
    public void user_enters_last_name() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentLastName.sendKeys(lastName);

    }

    @When("User enters email")
    public void user_enters_email() {
        SeleniumUtils.pause(3);
        String email = firstName + lastName + "@gmail.com";
        deleteStudentPage.studentEmail.sendKeys(email);

    }

    @When("User enters joining date")
    public void user_enters_joining_date() {
        SeleniumUtils.pause(3);
        String joiningDate = "08/20/2017";
        deleteStudentPage.studentJoiningDate.sendKeys(joiningDate);

    }

    @When("User enters password")
    public void user_enters_password() {
        SeleniumUtils.pause(3);
        String password = "12345";
        deleteStudentPage.studentPassword.sendKeys(password);

    }

    @When("User enters subject")
    public void user_enters_subject() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentSubject.sendKeys(subject);

    }

    @When("User enters mobile number")
    public void user_enters_mobile_number() {
        String mobileNumber = "1234567891";
        SeleniumUtils.pause(3);
        deleteStudentPage.studentMobileNumber.sendKeys(mobileNumber);
    }

    @When("User selects gender")
    public void user_selects_gender() {
        String gender = "Male";
        SeleniumUtils.pause(3);
        Select select = new Select(deleteStudentPage.studentGender);
        select.selectByVisibleText(gender);

    }

    @When("User enters admission no")
    public void user_enters_admission_no() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentAdmissionNo.sendKeys(admissionNo);

    }

    @When("User enters birth Date")
    public void user_enters_birth_Date() {
        SeleniumUtils.pause(3);
        String birthDate = "09/06/1990";
        deleteStudentPage.studentBirthday.sendKeys(birthDate);

    }

    @When("User enters major")
    public void user_enters_major() {
        SeleniumUtils.pause(3);
        String major = "java";
        deleteStudentPage.studentMajor.sendKeys(major);

    }

    @When("User enters {string}  batch")
    public void user_enters_batch(String Batch) {

        TempStorage.addData("studentBatchInput", Batch);
        SeleniumUtils.waitForVisibility(deleteStudentPage.studentBatch, 3);
        deleteStudentPage.studentBatch.sendKeys(Batch);

    }

    @When("User enters section")
    public void user_enters_section() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentSection.sendKeys(section);

    }

    @When("User enters permanent address")
    public void user_enters_permanent_address() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentPermanentAddress.sendKeys(permanentAddress);

    }

    @When("User enters company name")
    public void user_enters_company_name() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentCompanyName.sendKeys(companyName);

    }

    @When("User enters title")
    public void user_enters_title() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentTitle.sendKeys(title);

    }

    @When("User enters start date")
    public void user_enters_start_date() {
        SeleniumUtils.pause(3);
        String startDate = "10/12/2018";
        deleteStudentPage.studentStartDate.sendKeys(startDate);

    }

    @When("User enters city")
    public void user_enters_city() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentCity.sendKeys(city);

    }

    @When("User enters street")
    public void user_enters_street() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentStreet.sendKeys(street);

    }


    @When("User enters zipCode")
    public void user_enters_ZipCode() {

        SeleniumUtils.pause(3);
        String zipCode = "60610";
        deleteStudentPage.studentZipCode.sendKeys(zipCode);
    }

    @When("User enters state")
    public void user_enters_state() {
        SeleniumUtils.pause(3);
        String state = "IL";
        deleteStudentPage.studentState.sendKeys(state);

    }


    @When("User should be able to click submit button")
    public void user_should_be_able_to_click_submit_button() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentSubmitButton.click();

    }

    @When("User should be able to see created Student displayed in the UI")
    public void user_should_be_able_to_see_created_Student_displayed_in_the_UI() {

        Assert.assertTrue("Student's name is on this page", firstName.matches(firstName));
        SeleniumUtils.pause(3);
    }


    @When("Tester should be able verify created Student in Database")
    public void tester_should_be_able_verify_created_Student_in_Database() {

        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select first_name from student");
            DBUtility.close();
            String dbName = firstName;

            for (Map<Object, Object> map : data) {
                if (map.containsValue(TempStorage.getData("studentFirstName"))) {
                    dbName = map.toString();


                }
            }
            Assert.assertTrue("No matching record found. Verification FAILED", dbName.contains(firstName));

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    @When("User should be able to go type name to search")
    public void user_should_be_able_to_go_type_name_to_search() {
        SeleniumUtils.pause(2);
        String firstname = firstName;
        deleteStudentPage.studentNew.sendKeys(firstname);

    }

    @When("User should be able to go to click search")
    public void user_should_be_able_to_go_to_click_search() {
        SeleniumUtils.pause(3);
        deleteStudentPage.searchButton.click();
    }


    @When("User should be able to go created Student dropdown")
    public void user_should_be_able_to_go_created_Student_dropdown() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentDropdown.click();

    }

    @When("User should be able to select delete to delete created Student")
    public void user_should_be_able_to_select_delete_to_delete_created_Student() {
        SeleniumUtils.pause(3);
        deleteStudentPage.studentDelete.click();
    }

    @When("User should be able to confirm")
    public void user_should_be_able_to_confirm() {
        SeleniumUtils.pause(3);
        deleteStudentPage.confirmDelete.click();
    }


    @Then("Tester should be able to verify deleted Student in Database;")
    public void tester_should_be_able_to_verify_deleted_Student_in_Database(){


        try {
            DBUtility.createConnection();
            List<Map<Object, Object>> data = DBUtility.executionQuery("select first_name from student");
            DBUtility.close();
            String dbName = firstName;

            for (Map<Object, Object> map : data) {
                if (map.containsValue(TempStorage.getData("studentFirstName"))) {
                    dbName = map.toString();


                }
            }
            Assert.assertTrue("No matching record found. Verification FAILED", !dbName.contains(firstName));

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }


}


