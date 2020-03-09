package step_definitions;

import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.AllTeachersPage;
import pages.DeleteTeacherPage;
import utilities.DBUtility;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class DeleteTeacher_StepDefs {

    AllTeachersPage allTeachersPage = new AllTeachersPage();
    DeleteTeacherPage deleteTeacherPage = new DeleteTeacherPage();

    @When("User locates the Teacher")
    public void user_locates_the_Teacher() {
        Assert.assertTrue("Teacher's name is not found on this page", allTeachersPage.teacherFirstNameLocator(TempStorage.getData("teacherFirstName")).isDisplayed());
    }

    @When("User clicks on drop down toggle")
    public void user_clicks_on_drop_down_toggle() {
        SeleniumUtils.pause(3);
        deleteTeacherPage.locatedTeacherDropDown(TempStorage.getData("teacherFirstName")).click();
    }

    @When("User clicks on delete option")
    public void user_clicks_on_delete_option() {
        SeleniumUtils.pause(2);
        deleteTeacherPage.deleteButtonDropDown(TempStorage.getData("teacherFirstName")).click();
    }

    @When("User clicks on delete option from pop up")
    public void user_clicks_on_delete_option_from_pop_up() {
        SeleniumUtils.pause(3);
        deleteTeacherPage.deleteButtonPopUp.click();
    }

    @When("User should not see the deleted teacher in the UI")
    public void user_should_not_see_the_deleted_teacher_in_the_UI() {
        Assert.assertTrue("Teacher's name is found on this page, FAILED", !allTeachersPage.teacherFirstNameLocator(TempStorage.getData("teacherFirstName")).isDisplayed());

    }

    @When("Tester should be able to verify deleted teacher in the Database")
    public void tester_should_be_able_to_verify_deleted_teacher_in_the_Database() {

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
            Assert.assertTrue("Match found. Verification FAILED", !nameDBVerification.contains(TempStorage.getData("teacherFirstName")));

        }catch (SQLException e){
            e.printStackTrace();
        }

    }

}
