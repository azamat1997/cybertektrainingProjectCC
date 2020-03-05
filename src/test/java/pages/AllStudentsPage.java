package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AllStudentsPage {
    public AllStudentsPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[.='Add Student']")
    public WebElement addStudentButton;

    public WebElement studentFirstNameLocator(String name){
        return Driver.getDriver().findElement(By.xpath("//a[.='"+ name + "']"));
    }
}
