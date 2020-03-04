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
  "name": "User click on 3dots button on Christian teacher",
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
        "5000",
        "2",
        "Auto",
        "2ndAvenue"
      ]
    },
    {
      "cells": [
        "Cocolero",
        "Coco",
        "coco@aaa.com",
        "22/12/2020",
        "44444",
        "PP",
        "5555555555",
        "Male",
        "English",
        "11/11/2002",
        "33000",
        "5",
        "Java",
        "8thAvenue"
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
  "status": "skipped"
});
formatter.step({
  "name": "User click on 3dots button on Christian teacher",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_click_on_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"Macarena\" in first name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"John\" in last name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"mcjo@xxx.com\" in email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"01/01/2020\" in joining date calendar",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"43212\" in password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"HR\" in subject",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"0987654321\" in mobile number",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"Female\" in gender",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"Science\" in department dropdown",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"01/01/2001\" in birth date calendar",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"5000\" in salary",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"2\" in batch",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"Auto\" in section",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"2ndAvenue\" in present adress",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_click_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the edited profile displayed in the UI",
  "keyword": "Then "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_should_see_the_edited_profile_displayed_in_the_UI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tester should be able to veryfy the edited Teacher in DataBase",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.tester_should_be_able_to_veryfy_the_edited_Teacher_in_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "User click on 3dots button on Christian teacher",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_click_on_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"Cocolero\" in first name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"Coco\" in last name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"coco@aaa.com\" in email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"22/12/2020\" in joining date calendar",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"44444\" in password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"PP\" in subject",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"5555555555\" in mobile number",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"Male\" in gender",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"English\" in department dropdown",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"11/11/2002\" in birth date calendar",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"33000\" in salary",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"5\" in batch",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"Java\" in section",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User edit \"8thAvenue\" in present adress",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_click_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the edited profile displayed in the UI",
  "keyword": "Then "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_should_see_the_edited_profile_displayed_in_the_UI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tester should be able to veryfy the edited Teacher in DataBase",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.tester_should_be_able_to_veryfy_the_edited_Teacher_in_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});