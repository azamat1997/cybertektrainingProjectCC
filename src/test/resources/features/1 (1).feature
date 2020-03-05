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
						|First name|Last name|Email|Joining Date|Password|Subject|Mobile number|Gender|Department|Birth Date|Salary|Batch|Section|Permanent Address|
				    |Dwight|Schrute|dwightschrute@dundermifflin.com| 01/01/2000 | 6789 |Business| 8475555678 |Male|English| 08/15/1980 | 80000 | 12 |Paper|Scranton, PA|
			

	
	@COD-274
	Scenario Outline: Verify Update Teacher functionality
		When User click on 3dots button on Christian teacher
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
		|Macarena |John    |mcjo@xxx.com| 01/01/2020 | 43212   |   HR  | 0987654321 |Female|Science   | 01/01/2001 | 5000  |2    | Auto   | 2ndAvenue  |
		|Cocolero |Coco    |coco@aaa.com| 22/12/2020 | 44444   |   PP  | 5555555555 |Male  |English   | 11/11/2002 | 33000 |5    | Java   | 8thAvenue  |
		
		    	

	
	@COD-275
	Scenario: Verify Delete Teacher Functionality
		
		    When User clicks on drop down toggle
		    And User click on delete option
		    Then User sees Delete Employee pop up
		    And User clicks on delete option
		    Then User should not see the deleted teacher in the UI
		    And Tester should not see the deleted teacher in the Database
		    
			

	
	@COD-277
	Scenario Outline: Verify Delete Student functionality 
		When User clicks on Student module
		And User clicks on Add Student
		And User enters "<First name>" first name
		And User enters "<Last name>" last name
		And User enters "<Email>" email
		And User enters "<Joining Date>" joining date
		And User enters "<Password>" password
		And User enters "<Subject>" subject
		And User enters "<Mobile number>" mobile number
		And User selects "<Gender>" gender
		And User enters "<Admission No>" admission no
		And User enters "<Birth Date>" birth date
		And User enters "<Major>" major
		And User enters "<Batch>" batch
		And User enters "<Section>" section
		And User enters "<Permanent Address>" permanent address
		And User enters "<Company name>" company name
		And User enters "<Title>" title
		And User enters "<Start date>" start date
		And User enters "<City>" city
		And User enters "<Street>" street
		And User enters "<Zipcode>" zipcode
		And User enters "<State>" state
		Then User should be able to "<submit>" it.
		
		
		Examples:
		|First name|Last name|Email|Joining date|Password|Subject|Mobile number|Gender|Admission No|Birth date|Major|Batch|Section|Permanent address|
		|Hello|World|helloworld@gmail.com| 01 / 01 / 2001 |helloworld|java|( 111 ) 111 - 1111 | M | 111 |  01 / 01 / 1900 |java | 1 | 1 | 100 chicago|	

	
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
			|Grace	   |Kelly	 |gkell@gmail.com| 3/2/2020	  | 123456   |World Wars   | 123456778  |Female|Social Studies|2/3/1980  | 120000 | 12	 | 3	 | 123 Main St IL  |


