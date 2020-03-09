package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DeleteTeacherPage {

    public DeleteTeacherPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    public WebElement locatedTeacherDropDown(String name) {
        return Driver.getDriver().findElement(By.xpath("//a[.='" + name + "']/../..//div[2]"));

    }

    public WebElement deleteButtonDropDown(String name) {
        return Driver.getDriver().findElement(By.xpath("//a[.='" + name + "']/../..//div[2]//a[2]//i"));

    }

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement deleteButtonPopUp;

}

