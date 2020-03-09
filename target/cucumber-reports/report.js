$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/studentTeacher.feature");
formatter.feature({
  "name": "Editing Functionality for Teacher or student",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@type\u003d\u0027text\u0027])[1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:83b8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/wc/49yvv7391gb...}, goog:chromeOptions: {debuggerAddress: localhost:49434}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6d73c8f5a7f966f8c7943ae842af2e69\n*** Element info: {Using\u003dxpath, value\u003d(//input[@type\u003d\u0027text\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\n\tat step_definitions.EditTeacher_StepDefs.user_edit_in_first_name(EditTeacher_StepDefs.java:53)\n\tat ✽.User edit \"Macarena\" in first name(src/test/resources/features/studentTeacher.feature:37)\n",
  "status": "failed"
});
formatter.step({
  "name": "User edit \"John\" in last name",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"mcjo@xxx.com\" in email",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"01/01/2020\" in joining date calendar",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_joining_date_calendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"43212\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"HR\" in subject",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_subject(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"0987654321\" in mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_mobile_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"Female\" in gender",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"Science\" in department dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_department_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"01/01/2001\" in birth date calendar",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_birth_date_calendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"125 000\" in salary",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"2\" in batch",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_batch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"Auto\" in section",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User edit \"2ndAvenue\" in present adress",
  "keyword": "And "
});
formatter.match({
  "location": "EditTeacher_StepDefs.user_edit_in_present_adress(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Delete Teacher Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@COD-275"
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
  "name": "User locates the Teacher",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on drop down toggle",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on delete option",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on delete option from pop up",
  "keyword": "And "
});
formatter.step({
  "name": "User should not see the deleted teacher in the UI",
  "keyword": "And "
});
formatter.step({
  "name": "Tester should be able to verify deleted teacher in the Database",
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
  "name": "Verify Delete Teacher Functionality",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "User locates the Teacher",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_StepDefs.user_locates_the_Teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on drop down toggle",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_StepDefs.user_clicks_on_drop_down_toggle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on delete option",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_StepDefs.user_clicks_on_delete_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:83b8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/wc/49yvv7391gb...}, goog:chromeOptions: {debuggerAddress: localhost:49434}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6d73c8f5a7f966f8c7943ae842af2e69\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat step_definitions.DeleteTeacher_StepDefs.user_clicks_on_delete_option(DeleteTeacher_StepDefs.java:34)\n\tat ✽.User clicks on delete option(src/test/resources/features/studentTeacher.feature:84)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on delete option from pop up",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_StepDefs.user_clicks_on_delete_option_from_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should not see the deleted teacher in the UI",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_StepDefs.user_should_not_see_the_deleted_teacher_in_the_UI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tester should be able to verify deleted teacher in the Database",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteTeacher_StepDefs.tester_should_be_able_to_verify_deleted_teacher_in_the_Database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
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
  "error_message": "java.lang.AssertionError: No matching record found. Verification FAILED\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat step_definitions.DeleteStudent_StepDef.tester_should_be_able_to_verify_deleted_Student_in_Database(DeleteStudent_StepDef.java:308)\n\tat ✽.Tester should be able to verify deleted Student in Database;(src/test/resources/features/studentTeacher.feature:134)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
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