package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;
import utilities.TempStorage;

import java.util.List;

public class AllTeachersPage {
    public AllTeachersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[.=' Add Teacher']")
    public WebElement addTeacherButton;

    @FindBy(xpath = "(//input[@type=\"text\"])[2]")
    public WebElement teacherNameArea;

    @FindBy(xpath = "//a[@class=\"btn btn-success btn-block mt-4 mb-2\"]")
    public WebElement searchButton;

    @FindBy (linkText = "Grace")
    public WebElement newName;

    @FindBy(xpath = "//a[@class=\"avatar\"]")
    public WebElement gracesArea;
    @FindBy(xpath = "//*[@id=\"app\"]")
    public List<WebElement> allTeachersList;

    public WebElement teacherFirstNameLocator(String name){
        return Driver.getDriver().findElement(By.xpath("//a[.='"+ name + "']"));

    }
}

