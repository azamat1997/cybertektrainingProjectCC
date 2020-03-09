@COD-279
Feature: 

	
	@COD-278
	Scenario Outline: Verify Create Teacher Functionality
		            When User clicks on Teachers module
				    And User clicks on Add Teacher
				    And User enters "<First name>" in first name
				    And User enters "<Last name>" in last name
				    And User enters "<Email>" in email
				    And User enters "<Joining Date>" in joining date
				    And User enters "<Password>" in password
				    And User enters "<Subject>" in subject
				    And User enters "<Mobile number>" in mobile number
				    And User selects "<Gender>" in gender
				    And User selects "<Department>" in department
				    And User enters "<Birth Date>" in birth date
				    And User enters "<Salary>" in salary
				    And User selects "<Batch>" in batch
				    And User enters "<Section>" in section
				    And User enters "<Permanent Address>" in permanent address
				    And User clicks on Submit button
				    Then User should be able to see created teacher displayed in the UI
				    And Tester should be able to verify created teacher in the Database
					
					Examples:
						| First name | Last name | Email                           | Joining Date | Password | Subject  | Mobile number | Gender | Department | Birth Date | Salary | Batch | Section | Permanent Address |
						| Dwight     | Schrute   | dwightschrute@dundermifflin.com | 01/01/2000   | 6789     | Business | 8475555678    | Male   | English    | 08/15/1980 | 80000  | 12    | Paper   | Scranton, PA      |
			

	
	@COD-274
	Scenario Outline: Verify Update Teacher functionality
		When User click on threedots button on Christian teacher
		And User click on Edit button
		And User edit "<Firstname>" in first name 
		And User edit "<Lastname>" in last name
		And User edit "<Email>" in email 
		And User edit "<JoiningDate>" in joining date calendar
		And User edit "<Password>" in password 
		And User edit "<Subject>" in subject 
		And User edit "<MobileNumber>" in mobile number 
		And User edit "<Gender>" in gender
		And User edit "<Department>" in department dropdown
		And User edit "<BirthDate>" in birth date calendar
		And User edit "<Salary>" in salary 
		And User edit "<Batch>" in batch
		And User edit "<Section>" in section
		And User edit "<PresentAdress>" in present adress
		And User click Submit button
		Then User should see the edited profile displayed in the UI
		And Tester should be able to veryfy the edited Teacher in DataBase
		
		Examples:
		|Firstname|Lastname|Email       | JoiningDate| Password|Subject|MobileNumber|Gender|Department| BirthDate  | Salary|Batch|Section|PresentAdress|
		|Macarena |John    |mcjo@xxx.com| 01/01/2020 | 43212   |   HR  | 0987654321 |Female|Science   | 01/01/2001 | 125 000  |2    | Auto   | 2ndAvenue  |

		
		    	

	
	@COD-275
	Scenario Outline: Verify Delete Teacher Functionality
		When User clicks on Teachers module
		And User clicks on Add Teacher
		And User enters "<First name>" in first name
		And User enters "<Last name>" in last name
		And User enters "<Email>" in email
		And User enters "<Joining Date>" in joining date
		And User enters "<Password>" in password
		And User enters "<Subject>" in subject
		And User enters "<Mobile number>" in mobile number
		And User selects "<Gender>" in gender
		And User selects "<Department>" in department
		And User enters "<Birth Date>" in birth date
		And User enters "<Salary>" in salary
		And User selects "<Batch>" in batch
		And User enters "<Section>" in section
		And User enters "<Permanent Address>" in permanent address
		And User clicks on Submit button
		And User locates the Teacher
		And User clicks on drop down toggle
		And User clicks on delete option
		And User clicks on delete option from pop up
		And User should not see the deleted teacher in the UI
		And Tester should be able to verify deleted teacher in the Database



		Examples:
			| First name | Last name | Email                           | Joining Date | Password | Subject  | Mobile number | Gender | Department | Birth Date | Salary | Batch | Section | Permanent Address |
			| Dwight     | Schrute   | dwightschrute@dundermifflin.com | 01/01/2000   | 6789     | Business | 8475555678    | Male   | English    | 08/15/1980 | 80000  | 12    | Paper   | Scranton, PA      |







	@COD-277
	Scenario Outline: Verify Delete Student functionality 
		When User clicks on Student module
		And User clicks on Add Student
		And User enters first name
		And User enters last name
		And User enters email
		And User enters joining date
		And User enters password
		And User enters subject
		And User enters mobile number
		And User selects gender
		And User enters admission no
		And User enters birth Date
		And User enters major
		And User enters "<Batch>"  batch
		And User enters section
		And User enters permanent address
		And User enters company name
		And User enters title
		And User enters start date
		And User enters city
		And User enters street
		And User enters zipCode
		And User enters state
		And User should be able to click submit button
		And User should be able to see created Student displayed in the UI
		And Tester should be able verify created Student in Database
		And User should be able to go type name to search
		And User should be able to go to click search
		And User should be able to go created Student dropdown
		And User should be able to select delete to delete created Student
		And User should be able to confirm
		Then Tester should be able to verify deleted Student in Database;

		
		Examples:
			| First name | Last name | Email                | Joining Date   | Password   | Subject | Mobile number | Gender | Admission No | Birth Date     | Major | Batch | Section | Permanent Address | Company name | Title | Start Date     | City    | Street      |ZipCode| State |
			| Hello      | World     | helloworld@gmail.com | 01 / 01 / 2001 | helloworld | java    | 1111111111    | Male   | 111          | 01 / 01 / 1900 | java  | 11    | 1       | 100 chicago       | Cybertek     | IT    | 01 / 09 / 2018 | Chicago | Chicago ave |60601| IL    |

	
	@COD-276
	Scenario Outline: Verify update student functionality
		   When User clicks on student module
		   And User clicks on All Students
		   And User clicks on three dots of Chuck profile
		   And User clicks edit button in dropdown box
		   And User edits "<Email>" in email
		   And User edits "<Mobile number>"in mobile number
		   And User edits "<Birth Date>" in birth date
		   And User clicks submit button
		   Then User should be able to see edited student displayed in the UI
		   And Tester should be able to verify edited student in Database
		   
		Examples:
		  | Email              |  Mobile number | Birth Date |      
		  |Chuckienorris@.com  | 5015015015    | 03/01/1960| 
		
			

	
	@COD-273
	Scenario Outline: As a User I should able to create student
		    When User click on Students module
		    And User click on Add student
		    And User enter "<Firstname>" in first name 
		    And User enter "<Lastname>" in last name 
		    And User enter "<Email>" in email 
		    And User enter "<Joining Date>" in joining date 
		    And User enter "<Password>" in password 
		    And User enter "<Subject>" in subject
		    And User enter "<Mobile number>" in mobile number
		    And User enter "<Gender>" in gender
		    And User enter "<Admission No>" in admission No
		    And User enter "<Birth Date>" in birth date
		    And User enter "<Major>" in major
		    And User enter "<Batch>" in batch
		    And User enter "<Section>" in section
		    And User enter "<Present Address>" present address
		    And User enter "<Company Name>" compamy name
		    And User enter "<Title>" in title
		    And User enter "<Start Date>" start date
		    And User enter "<City>" in city
		    And User enter "<Street (123 N. California, Apt 1)>" in street
		    And User enter "<ZipCode>" in zipcode
		    And User enter "<State>" in state
		    Then User click to the Submit button
			Then User should be able to see created student displayed in the UI
			And Tester should be able to verify created student in the Database
		    
		   Examples:
		     | Firstname | Lastname | Email               |Joining Date|Password|Comfirm Password|Subject|Mobile number|Gender|Admission No|Birth Date|Major  |Batch|Section|Present Address   |Company Name|Title   |Start Date|City   |Street (123 N. California, Apt 1)|ZipCode|State|
		     | John      | Johnes   | johnjohnes@gmail.com| 03/10/2018 |12345   |12345           |tttt   |312312777    |male  |123         |12/12/1989|fighter|1    |2      |123 chicago street|Jonh inc    |fighter |02/02/2020|chicago|1223 chicago street              | 60659 |IL   |


	@COD-280
	Scenario Outline: Verifying Adding New Teacher Functionality

		When User clicks to Teacher Field

		And User clicks to Add Teacher field

		And User types "<First name>" in to first name field

		And User types "<Last name> " in to last name field

		And User types  "<Email address>" in to email field

		And User types "<Joining date>" in to join date field

		And User types "<Password>" in to password field

		And User types "<Subject>" in to subject field

		And User types "<Mobile number>" in to mobile number field

		And User selects "<Gender>" from Gender dropdown

		And User selects "<Department>" from Department dropdown

		And User types "<Birth Date>" in to Birth date field

		And User types "<Salary>" in to Salary field

		And User selects "<Batch>" in to batch field

		And User types "<Section>" in to section field

		And User types "<Permanent Address> " in to permanent address field

		And User clicks the submit button

		Then User should be able to verify that her name is displayed in the teacher list

		And Tester should be able to verify the new teacher's name is on the database



		Examples:

			|First name|Last name|Email address  |Joining date|Password|Subject|Mobile number|Gender|Department    |Birth Date|Salary  |Batch|Section|Permanent Address|
			|Grace	   |Kelly	 |gkell@gmail.com| 3/2/2008	  | 123456   |World Wars   | 123456778  |Female|Social Studies|2/3/1980  | 0 | 12	 | 3	 | 123 Main St IL  |


