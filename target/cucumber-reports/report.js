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
  "name": "User types \"\u003cJoining date \u003e\" in to join date field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003c Password\u003e\" in to password field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003cSubject\u003e\" in to subject field",
  "keyword": "And "
});
formatter.step({
  "name": "User types \"\u003c Mobile number \u003e\" in to mobile number field",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cGender \u003e\" from Gender dropdown",
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
  "name": "User types \"\u003c Salary \u003e\" in to Salary field",
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
  "name": "User types \"\u003cAddress\u003e \" in to permanent address field",
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
        "3/2/2020",
        "12345",
        "Wars",
        "123456778",
        "Female",
        "Social Studies",
        "2/3/1980",
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
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to Teacher Field",
  "keyword": "When "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_clicks_to_Teacher_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to Add Teacher field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_clicks_to_Add_Teacher_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"Grace\" in to first name field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_first_name_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"Kelly \" in to last name field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_last_name_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types  \"gkell@gmail.com\" in to email field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"\u003cJoining date \u003e\" in to join date field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_join_date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"\u003c Password\u003e\" in to password field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"Wars\" in to subject field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_subject_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"\u003c Mobile number \u003e\" in to mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_mobile_number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"\u003cGender \u003e\" from Gender dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_selects_from_Gender_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Social Studies\" from Department dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_selects_from_Department_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"2/3/1980\" in to Birth date field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_Birth_date_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"\u003c Salary \u003e\" in to Salary field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_Salary_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"12\" in to batch field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_selects_in_to_batch_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"3\" in to section field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_section_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User types \"\u003cAddress\u003e \" in to permanent address field",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_types_in_to_permanent_address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to verify that her name is displayed in the teacher list",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Tester should be able to verify the new teacher\u0027s name is on the database",
  "keyword": "And "
});
formatter.match({
  "location": "Adding_Teacher_StepDefs.tester_should_be_able_to_verify_the_new_teacher_s_name_is_on_the_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});