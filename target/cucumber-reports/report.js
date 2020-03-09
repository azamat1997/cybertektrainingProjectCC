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
  "name": "User enters first name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters email",
  "keyword": "And "
});
formatter.step({
  "name": "User enters joining date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "name": "User enters subject",
  "keyword": "And "
});
formatter.step({
  "name": "User enters mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "User selects gender",
  "keyword": "And "
});
formatter.step({
  "name": "User enters admission no",
  "keyword": "And "
});
formatter.step({
  "name": "User enters birth Date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters major",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cBatch\u003e\"  batch",
  "keyword": "And "
});
formatter.step({
  "name": "User enters section",
  "keyword": "And "
});
formatter.step({
  "name": "User enters permanent address",
  "keyword": "And "
});
formatter.step({
  "name": "User enters company name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters title",
  "keyword": "And "
});
formatter.step({
  "name": "User enters start date",
  "keyword": "And "
});
formatter.step({
  "name": "User enters city",
  "keyword": "And "
});
formatter.step({
  "name": "User enters street",
  "keyword": "And "
});
formatter.step({
  "name": "User enters zipCode",
  "keyword": "And "
});
formatter.step({
  "name": "User enters state",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to click submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see created Student displayed in the UI",
  "keyword": "And "
});
formatter.step({
  "name": "Tester should be able verify created Student in Database",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to go type name to search",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to go to click search",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to go created Student dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to select delete to delete created Student",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to confirm",
  "keyword": "And "
});
formatter.step({
  "name": "Tester should be able to verify deleted Student in Database;",
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
        "Joining Date",
        "Password",
        "Subject",
        "Mobile number",
        "Gender",
        "Admission No",
        "Birth Date",
        "Major",
        "Batch",
        "Section",
        "Permanent Address",
        "Company name",
        "Title",
        "Start Date",
        "City",
        "Street",
        "ZipCode",
        "State"
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
        "1111111111",
        "Male",
        "111",
        "01 / 01 / 1900",
        "java",
        "11",
        "1",
        "100 chicago",
        "Cybertek",
        "IT",
        "01 / 09 / 2018",
        "Chicago",
        "Chicago ave",
        "60601",
        "IL"
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
formatter.match({
  "location": "DeleteStudent_StepDef.user_clicks_on_Student_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Student",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_clicks_on_Add_Student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters last name",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters joining date",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_joining_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters subject",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_subject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_mobile_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects gender",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_selects_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters admission no",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_admission_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters birth Date",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_birth_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters major",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_major()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11\"  batch",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_batch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters section",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters permanent address",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_permanent_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters company name",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_company_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters title",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters start date",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_start_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters city",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters street",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_street()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters zipCode",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_ZipCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters state",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_enters_state()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see created Student displayed in the UI",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_see_created_Student_displayed_in_the_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester should be able verify created Student in Database",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.tester_should_be_able_verify_created_Student_in_Database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to go type name to search",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_go_type_name_to_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to go to click search",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_go_to_click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to go created Student dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_go_created_Student_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to select delete to delete created Student",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_select_delete_to_delete_created_Student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to confirm",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_StepDef.user_should_be_able_to_confirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester should be able to verify deleted Student in Database;",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteStudent_StepDef.tester_should_be_able_to_verify_deleted_Student_in_Database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});