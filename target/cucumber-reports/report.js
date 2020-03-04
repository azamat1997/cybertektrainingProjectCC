$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/studentTeacher.feature");
formatter.feature({
  "name": "Student and Teacher creation/editing/deletion Verification",
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
});