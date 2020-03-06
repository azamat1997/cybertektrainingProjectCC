package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AddTeacherPage {

    public AddTeacherPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement firstNameInput;

    @FindBy(xpath = "(//input[@type='text'])[5]")
    public WebElement lastNameInput;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement emailInput;

    @FindBy(xpath = "(//input[@type='text'])[6]")
    public WebElement joiningDateInput;

    @FindBy(xpath = "(//input[@type='password'])[1]")
    public WebElement passwordInput;

    @FindBy(xpath = "(//input[@type='text'])[3]")
    public WebElement subjectInput;

    @FindBy(xpath = "//input[@type='number']")
    public WebElement mobileNumberInput;

    @FindBy(xpath = "(//select)[1]")
    public WebElement genderInput;

    @FindBy(xpath = "(//select)[3]")
    public WebElement departmentInput;

    @FindBy(xpath = "(//input[@type='text'])[4]")
    public WebElement birthDateInput;

    @FindBy(xpath = "(//input[@type='text'])[7]")
    public WebElement salaryInput;

    @FindBy(xpath = "(//select)[2]")
    public WebElement batchInput;

    @FindBy(xpath = "(//input[@type='text'])[8]")
    public WebElement sectionInput;

    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement permanentAddressInput;

    @FindBy(xpath = "//button[@class=\"btn btn-primary mr-2\"]")
    public WebElement submitButton;
}
