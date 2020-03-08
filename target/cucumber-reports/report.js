$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/studentTeacher.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@COD-279"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Update Teacher functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-274"
    }
  ]
});
formatter.step({
  "name": "User click on threedots button on Christian teacher",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Edit button",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cFirstname\u003e\" in first name",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cLastname\u003e\" in last name",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cEmail\u003e\" in email",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cJoiningDate\u003e\" in joining date calendar",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cPassword\u003e\" in password",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cSubject\u003e\" in subject",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cMobileNumber\u003e\" in mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cGender\u003e\" in gender",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cDepartment\u003e\" in department dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cBirthDate\u003e\" in birth date calendar",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cSalary\u003e\" in salary",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cBatch\u003e\" in batch",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cSection\u003e\" in section",
  "keyword": "And "
});
formatter.step({
  "name": "User edit \"\u003cPresentAdress\u003e\" in present adress",
  "keyword": "And "
});
formatter.step({
  "name": "User click Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see the edited profile displayed in the UI",
  "keyword": "Then "
});
formatter.step({
  "name": "Tester should be able to veryfy the edited Teacher in DataBase",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "JoiningDate",
        "Password",
        "Subject",
        "MobileNumber",
        "Gender",
        "Department",
        "BirthDate",
        "Salary",
        "Batch",
        "Section",
        "PresentAdress"
      ]
    },
    {
      "cells": [
        "Macarena",
        "John",
        "mcjo@xxx.com",
        "01/01/2020",
        "22",
        "HR",
        "0987654321",
        "Female",
        "Science",
        "01/01/2001",
        "125000",
        "2",
        "Auto",
        "2ndAvenue"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Update Teacher functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-274"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on threedots button on Christian teacher",
  "keyword": "When "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_click_on_threedots_button_on_Christian_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.userClickOnEditButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"Macarena\" in first name",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"John\" in last name",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"mcjo@xxx.com\" in email",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"01/01/2020\" in joining date calendar",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_joining_date_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"22\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"HR\" in subject",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"0987654321\" in mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"Female\" in gender",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"Science\" in department dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_department_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"01/01/2001\" in birth date calendar",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_birth_date_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"125000\" in salary",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"2\" in batch",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_batch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"Auto\" in section",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_section(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edit \"2ndAvenue\" in present adress",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_present_adress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_click_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the edited profile displayed in the UI",
  "keyword": "Then "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_should_see_the_edited_profile_displayed_in_the_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester should be able to veryfy the edited Teacher in DataBase",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.tester_should_be_able_to_veryfy_the_edited_Teacher_in_DataBase()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});