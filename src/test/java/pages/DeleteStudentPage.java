package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;



public class DeleteStudentPage {


    public DeleteStudentPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath="//*[@id=\"app\"]/div/div/div/div[2]/div/div[1]/form/div[1]/input")
    public WebElement studentFirstName;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[2]/form/div[1]/input")
    public WebElement studentLastName;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[1]/form/div[2]/input")
    public WebElement studentEmail;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[2]/form/div[2]/input")
    public WebElement studentJoiningDate;

    @FindBy(xpath="//*[@id=\"app\"]/div/div/div/div[2]/div/div[1]/form/div[3]/input")
    public WebElement studentPassword;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[1]/form/div[4]/input")
    public WebElement studentSubject;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[2]/form/div[4]/input")
    public WebElement studentMobileNumber;

    @FindBy(xpath = "//label[.='Gender']/preceding-sibling::select")
    public WebElement studentGender;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[2]/form/div[5]/input")
    public WebElement studentAdmissionNo;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[1]/form/div[6]/input")
    public WebElement studentBirthday;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[2]/form/div[6]/input")
    public WebElement studentMajor;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[1]/form/div[7]/select")
    public WebElement studentBatch;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[2]/form/div[7]/input")
    public WebElement studentSection;

    @FindBy(xpath = "//*[@id=\"message\"]")
    public WebElement studentPermanentAddress;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[1]/form/div[1]/input")
    public WebElement studentCompanyName;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[2]/form/div[1]/input")
    public WebElement studentTitle;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[1]/form/div[2]/input")
    public  WebElement studentStartDate;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[2]/form/div[2]/input")
    public WebElement studentCity;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[1]/form/div[3]/input")
    public WebElement studentStreet;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[2]/form/div[3]/input")
    public WebElement studentZipCode;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[4]/div/div[1]/form/div[4]/input")
    public WebElement studentState;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div/div/div[2]/div/div[5]/form/div/button[1]")
    public WebElement studentSubmitButton;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div[3]/div/div[1]/div[2]/div/input")
    public WebElement studentNew;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div[3]/div/div[1]/div[4]/a")
    public WebElement searchButton;



    @FindBy(xpath = "//*[@id=\"app\"]/div/div[3]/div/div[2]/div/div/div[2]/a")
    public  WebElement studentDropdown;

    @FindBy(xpath = "//*[@id=\"app\"]/div/div[3]/div/div[2]/div/div/div[2]/div/a[2]")
    public WebElement studentDelete;

    @FindBy(xpath = "//*[@id=\"delete_employee\"]/div/div/form/div/div/button")
    public WebElement confirmDelete;




}




