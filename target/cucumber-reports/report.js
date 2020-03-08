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
  "name": "Verify Create Teacher Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-278"
    }
  ]
});
formatter.step({
  "name": "User clicks on Teachers module",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Add Teacher",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cFirst name\u003e\" in first name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cLast name\u003e\" in last name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cEmail\u003e\" in email",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cJoining Date\u003e\" in joining date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPassword\u003e\" in password",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cSubject\u003e\" in subject",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cMobile number\u003e\" in mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cGender\u003e\" in gender",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cDepartment\u003e\" in department",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cBirth Date\u003e\" in birth date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cSalary\u003e\" in salary",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cBatch\u003e\" in batch",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cSection\u003e\" in section",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPermanent Address\u003e\" in permanent address",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see created teacher displayed in the UI",
  "keyword": "Then "
});
formatter.step({
  "name": "Tester should be able to verify created teacher in the Database",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First name",
        "Last name",
        "Email",
        "Joining Date",
        "Password",
        "Subject",
        "Mobile number",
        "Gender",
        "Department",
        "Birth Date",
        "Salary",
        "Batch",
        "Section",
        "Permanent Address"
      ]
    },
    {
      "cells": [
        "Dwight",
        "Schrute",
        "dwightschrute@dundermifflin.com",
        "01/01/2000",
        "6789",
        "Business",
        "8475555678",
        "Male",
        "English",
        "08/15/1980",
        "80000",
        "12",
        "Paper",
        "Scranton, PA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Create Teacher Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-278"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teachers module",
  "keyword": "When "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_clicks_on_Teachers_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Teacher",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_clicks_on_Add_Teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dwight\" in first name",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Schrute\" in last name",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"dwightschrute@dundermifflin.com\" in email",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"01/01/2000\" in joining date",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_joining_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"6789\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Business\" in subject",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"8475555678\" in mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Male\" in gender",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_selects_in_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"English\" in department",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_selects_in_department(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"08/15/1980\" in birth date",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_birth_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"80000\" in salary",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"12\" in batch",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_selects_in_batch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Paper\" in section",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_section(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Scranton, PA\" in permanent address",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_enters_in_permanent_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see created teacher displayed in the UI",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.user_should_be_able_to_see_created_teacher_displayed_in_the_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester should be able to verify created teacher in the Database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTeacher_StepDefs.tester_should_be_able_to_verify_created_teacher_in_the_Database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
        "43212",
        "HR",
        "0987654321",
        "Female",
        "Science",
        "01/01/2001",
        "125 000",
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
  "name": "User edit \"43212\" in password",
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
  "name": "User edit \"125 000\" in salary",
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
formatter.scenario({
  "name": "Verify Delete Teacher Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-275"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on drop down toggle",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on delete option",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User sees Delete Employee pop up",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on delete option",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should not see the deleted teacher in the UI",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Tester should not see the deleted teacher in the Database",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Delete Student functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-277"
    }
  ]
});
formatter.step({
  "name": "User clicks on Student module",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Add Student",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cFirst name\u003e\" first name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cLast name\u003e\" last name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cEmail\u003e\" email",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cJoining Date\u003e\" joining date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cSubject\u003e\" subject",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cMobile number\u003e\" mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cGender\u003e\" gender",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cAdmission No\u003e\" admission no",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cBirth Date\u003e\" birth date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cMajor\u003e\" major",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cBatch\u003e\" batch",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cSection\u003e\" section",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPermanent Address\u003e\" permanent address",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cCompany name\u003e\" company name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cTitle\u003e\" title",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cStart date\u003e\" start date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cCity\u003e\" city",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cStreet\u003e\" street",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cZipcode\u003e\" zipcode",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cState\u003e\" state",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to \"\u003csubmit\u003e\" it.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First name",
        "Last name",
        "Email",
        "Joining date",
        "Password",
        "Subject",
        "Mobile number",
        "Gender",
        "Admission No",
        "Birth date",
        "Major",
        "Batch",
        "Section",
        "Permanent address"
      ]
    },
    {
      "cells": [
        "Hello",
        "World",
        "helloworld@gmail.com",
        "01 / 01 / 2001",
        "helloworld",
        "java",
        "( 111 ) 111 - 1111",
        "M",
        "111",
        "01 / 01 / 1900",
        "java",
        "1",
        "1",
        "100 chicago"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Delete Student functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-277"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Student module",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Add Student",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"Hello\" first name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"World\" last name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"helloworld@gmail.com\" email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cJoining Date\u003e\" joining date",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"helloworld\" password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"java\" subject",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"( 111 ) 111 - 1111\" mobile number",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User selects \"M\" gender",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"111\" admission no",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cBirth Date\u003e\" birth date",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"java\" major",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"1\" batch",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"1\" section",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cPermanent Address\u003e\" permanent address",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cCompany name\u003e\" company name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cTitle\u003e\" title",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cStart date\u003e\" start date",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cCity\u003e\" city",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cStreet\u003e\" street",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cZipcode\u003e\" zipcode",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"\u003cState\u003e\" state",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to \"\u003csubmit\u003e\" it.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify update student functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-276"
    }
  ]
});
formatter.step({
  "name": "User clicks on student module",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on All Students",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on three dots of Chuck profile",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks edit button in dropdown box",
  "keyword": "And "
});
formatter.step({
  "name": "User edits \"\u003cEmail\u003e\" in email",
  "keyword": "And "
});
formatter.step({
  "name": "User edits \"\u003cMobile number\u003e\"in mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "User edits \"\u003cBirth Date\u003e\" in birth date",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see edited student displayed in the UI",
  "keyword": "Then "
});
formatter.step({
  "name": "Tester should be able to verify edited student in Database",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Mobile number",
        "Birth Date"
      ]
    },
    {
      "cells": [
        "Chuckienorris@.com",
        "5015015015",
        "03/01/1960"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify update student functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-276"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on student module",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on All Students",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on three dots of Chuck profile",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks edit button in dropdown box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edits \"Chuckienorris@.com\" in email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edits \"5015015015\"in mobile number",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edits \"03/01/1960\" in birth date",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see edited student displayed in the UI",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Tester should be able to verify edited student in Database",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a User I should able to create student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-273"
    }
  ]
});
formatter.step({
  "name": "User click on Students module",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Add student",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cFirstname\u003e\" in first name",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cLastname\u003e\" in last name",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cEmail\u003e\" in email",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cJoining Date\u003e\" in joining date",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cPassword\u003e\" in password",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cSubject\u003e\" in subject",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cMobile number\u003e\" in mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cGender\u003e\" in gender",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cAdmission No\u003e\" in admission No",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cBirth Date\u003e\" in birth date",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cMajor\u003e\" in major",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cBatch\u003e\" in batch",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cSection\u003e\" in section",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cPresent Address\u003e\" present address",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cCompany Name\u003e\" compamy name",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cTitle\u003e\" in title",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cStart Date\u003e\" start date",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cCity\u003e\" in city",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cStreet (123 N. California, Apt 1)\u003e\" in street",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cZipCode\u003e\" in zipcode",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cState\u003e\" in state",
  "keyword": "And "
});
formatter.step({
  "name": "User click to the Submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be able to see created student displayed in the UI",
  "keyword": "Then "
});
formatter.step({
  "name": "Tester should be able to verify created student in the Database",
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
        "Joining Date",
        "Password",
        "Comfirm Password",
        "Subject",
        "Mobile number",
        "Gender",
        "Admission No",
        "Birth Date",
        "Major",
        "Batch",
        "Section",
        "Present Address",
        "Company Name",
        "Title",
        "Start Date",
        "City",
        "Street (123 N. California, Apt 1)",
        "ZipCode",
        "State"
      ]
    },
    {
      "cells": [
        "John",
        "Johnes",
        "johnjohnes@gmail.com",
        "03/10/2018",
        "12345",
        "12345",
        "tttt",
        "312312777",
        "male",
        "123",
        "12/12/1989",
        "fighter",
        "1",
        "2",
        "123 chicago street",
        "Jonh inc",
        "fighter",
        "02/02/2020",
        "chicago",
        "1223 chicago street",
        "60659",
        "IL"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a User I should able to create student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-273"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on Students module",
  "keyword": "When "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_click_on_Students_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Add student",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_click_on_Add_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"John\" in first name",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Johnes\" in last name",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"johnjohnes@gmail.com\" in email",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"03/10/2018\" in joining date",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_joining_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"12345\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"tttt\" in subject",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"312312777\" in mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"male\" in gender",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"123\" in admission No",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_admission_No(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"12/12/1989\" in birth date",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_birth_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"fighter\" in major",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_major(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"1\" in batch",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_batch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"2\" in section",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_section(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"123 chicago street\" present address",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_present_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Jonh inc\" compamy name",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_compamy_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"fighter\" in title",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"02/02/2020\" start date",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"chicago\" in city",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"1223 chicago street\" in street",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"60659\" in zipcode",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"IL\" in state",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_enter_in_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click to the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_click_to_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see created student displayed in the UI",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateStudent_StepDefs.user_should_be_able_to_see_created_student_displayed_in_the_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester should be able to verify created student in the Database",
  "keyword": "And "
});
formatter.match({
  "location": "CreateStudent_StepDefs.tester_should_be_able_to_verify_created_student_in_the_Database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adding New Teacher Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-280"
    }
  ]
});
formatter.step({
  "name": "User clicks to Teacher Field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks to Add Teacher field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cFirst name\u003e\" in to first name field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cLast name\u003e \" in to last name field",
  "keyword": "And "
});
formatter.step({
  "name": "User types  \"\u003cEmail address\u003e\" in to email field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cJoining date\u003e\" in to join date field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cPassword\u003e\" in to password field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cSubject\u003e\" in to subject field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cMobile number\u003e\" in to mobile number field",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cGender\u003e\" from Gender dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cDepartment\u003e\" from Department dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cBirth Date\u003e\" in to Birth date field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cSalary\u003e\" in to Salary field",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cBatch\u003e\" in to batch field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cSection\u003e\" in to section field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cPermanent Address\u003e \" in to permanent address field",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to verify that her name is displayed in the teacher list",
  "keyword": "Then "
});
formatter.step({
  "name": "Tester should be able to verify the new teacher\u0027s name is on the database",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First name",
        "Last name",
        "Email address",
        "Joining date",
        "Password",
        "Subject",
        "Mobile number",
        "Gender",
        "Department",
        "Birth Date",
        "Salary",
        "Batch",
        "Section",
        "Permanent Address"
      ]
    },
    {
      "cells": [
        "Grace",
        "Kelly",
        "gkell@gmail.com",
        "3/2/2008",
        "123456",
        "World Wars",
        "123456778",
        "Female",
        "Social Studies",
        "2/3/1980",
        "0",
        "12",
        "3",
        "123 Main St IL"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adding New Teacher Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-279"
    },
    {
      "name": "@COD-280"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to Teacher Field",
  "keyword": "When "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_clicks_to_Teacher_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to Add Teacher field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_clicks_to_Add_Teacher_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"Grace\" in to first name field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_first_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"Kelly \" in to last name field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_last_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types  \"gkell@gmail.com\" in to email field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"3/2/2008\" in to join date field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_join_date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"123456\" in to password field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"World Wars\" in to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"123456778\" in to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Female\" from Gender dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_selects_from_Gender_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Social Studies\" from Department dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_selects_from_Department_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"2/3/1980\" in to Birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_Birth_date_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"0\" in to Salary field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_Salary_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"12\" in to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_selects_in_to_batch_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"3\" in to section field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_section_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types \"123 Main St IL \" in to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_permanent_address_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to verify that her name is displayed in the teacher list",
  "keyword": "Then "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_should_be_able_to_verify_that_her_name_is_displayed_in_the_teacher_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester should be able to verify the new teacher\u0027s name is on the database",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.tester_should_be_able_to_verify_the_new_teacher_s_name_is_on_the_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});