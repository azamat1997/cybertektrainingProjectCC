package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AddStudentPage {
    public AddStudentPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement studentFirstName;

    @FindBy(xpath = "(//input[@type='text'])[5]")
    public WebElement studentLastName;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement studentEmail;

    @FindBy(xpath = "(//input[@type='text'])[6]")
    public WebElement studentJoiningDate;

    @FindBy(xpath = "(//input[@type='password'])[1]")
    public WebElement studentPasswordInput;

    @FindBy(xpath = "(//input[@type='text'])[3]")
    public WebElement studentSubjectInput;

    @FindBy(xpath = "//input[@type='number']")
    public WebElement studentMobileNumberInput;

    @FindBy(xpath = "//label[.='Gender']/../select")
    public WebElement studentGenderInput;

    @FindBy(xpath = "(//input[@type='text'])[7]")
    public WebElement studentAdmissionInput;

    @FindBy(xpath = "(//input[@type='text'])[4]")
    public WebElement studentBirthDateInput;


    @FindBy(xpath = "(//input[@type='text'])[8]")
    public WebElement studentMajorInput;

    @FindBy(xpath = "(//select)[2]")
    public WebElement studentBatchInput;

    @FindBy(xpath = "(//input[@type='text'])[8]")
    public WebElement studentSectionInput;

    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement studentPermanentAddressInput;

    @FindBy(xpath = "(//input[@type='text'])[10]")
    public WebElement studentCompany;

    @FindBy(xpath = "(//input[@type='text'])[14]")
    public WebElement studentTitle;

    @FindBy(xpath = "(//input[@type='text'])[11]")
    public WebElement studentStartDate;

    @FindBy(xpath = "(//input[@type='text'])[15]")
    public WebElement studentCity;

    @FindBy(xpath = "(//input[@type='text'])[12]")
    public WebElement studentStreet;

    @FindBy(xpath = "(//input[@type='number'])[2]")
    public WebElement studentZipCod;

    @FindBy(xpath = "(//input[@type='text'])[13]")
    public WebElement studentState;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement studentSubmitButton;

}
