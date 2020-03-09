package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class MyProfilePage {
    public MyProfilePage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//*[@id=\"app\"]/div[2]/div/div[1]/div/ul/li[1]/span[2]/a")
    public WebElement teacherId;
}
