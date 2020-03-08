package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.logging.XMLFormatter;

public class EditTeacherPage {

    public EditTeacherPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//i[@class='fa fa-pencil'])")
    public WebElement editbutton;
    @FindBy(xpath = "(//a[@class='dropdown-item'])[9]")
    public WebElement threeDotsDropdown;

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement inputFirstname;

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement teacher_ID_search;

    @FindBy(xpath = "(//a[@class='btn btn-success btn-block mt-4 mb-2'])")
    public WebElement searchButton;

    @FindBy(xpath = "(//i[@class='fa fa-bars'])[2]")
    public WebElement listButton;

    @FindBy(xpath = "(//input[@config='[object Object]'])[1]")
    public WebElement inputLastname;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement inputEmail;

    @FindBy(xpath = "(//input[@class='form-control'])[2]")
    public WebElement inputJoiningdate;

    @FindBy(xpath = "(//div/input[@type='password'])[1]")
    public WebElement inputPassword;

    @FindBy(xpath = "(//input[@type='text'])[3]")
    public WebElement subjectTextBox;

    @FindBy(xpath = "//input[@type='number']")
    public WebElement mobileNumberBox;

    @FindBy(xpath = "(//select)[1]")
    public WebElement genderInput;

    @FindBy(xpath = "(//select)[2]")
    public WebElement departmentInput;

    @FindBy(xpath = "(//input[@type='text'])[4]")
    public WebElement birthDateInput;

//    @FindBy(xpath = "(//div[@class = 'form-group custom-mt-form-group'])[13]")
//    public WebElement salaryInput;

    @FindBy(xpath = "(//input[@type='text'])[8]")
    public WebElement salary;

    @FindBy(xpath = "(//input[@type='text'])[5]")
    public WebElement batchInput;

    @FindBy(xpath = "(//input[@type='text'])[9]")
    public WebElement sectionInput;

    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement permanentAddressInput;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement submitButton;

}

