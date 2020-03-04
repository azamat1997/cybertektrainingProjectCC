package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class HomePage {

    public HomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//span[.=' Teachers']")
    public WebElement teachersModuleButton;

    @FindBy(xpath = "//a[.='All Teacher']")
    public WebElement allTeacherButton;

    @FindBy(xpath = "//a[.='Add Teacher']")
    public WebElement addTeacherButton;
}
