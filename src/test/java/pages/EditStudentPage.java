package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EditStudentPage {
    public EditStudentPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement inputEmail;

    @FindBy(xpath = "//input[@type='number']")
    public WebElement mobileNumberBox;

    @FindBy(xpath = "(//input[@type='text'])[4]")
    public WebElement birthDateInput;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement submitButton;

}
