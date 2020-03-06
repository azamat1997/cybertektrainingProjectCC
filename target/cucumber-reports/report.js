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
});