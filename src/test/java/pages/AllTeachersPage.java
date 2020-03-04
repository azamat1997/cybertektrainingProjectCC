package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;
import utilities.TempStorage;

public class AllTeachersPage {
    public AllTeachersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[.=' Add Teacher']")
    public WebElement addTeacherButton;

    public WebElement teacherFirstNameLocator(String name){
        return Driver.getDriver().findElement(By.xpath("//a[.='"+ name + "']"));
    }
}

