package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class StudentProfilePage {
    public StudentProfilePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//span[.='Student ID:']/../span/a")
    public WebElement studentID;

    @FindBy(xpath = "//span[.='Email:']/../span/a")
    public WebElement studentEmail;


}
