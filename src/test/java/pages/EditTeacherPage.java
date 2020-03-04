package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.logging.XMLFormatter;

public class EditTeacherPage {

    public EditTeacherPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement inputFirstname;

    @FindBy(xpath = "(//input[@config='[object Object]'])[1]")
    public WebElement inputLastname;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement inputEmail;

    @FindBy(xpath = "(//input[@class='form-control'])[2]")
    public WebElement inputJoiningdate;

    @FindBy(xpath = "(//div/input[@type='password'])[1]")
    public WebElement inputPassword;



}
