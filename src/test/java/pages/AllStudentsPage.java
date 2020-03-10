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

    @FindBy(xpath = "(//div[@class='dropdown profile-action'])[1]")
    public WebElement threeDotsDropdown;

    @FindBy(xpath = "(//div/a[@class='dropdown-item'])[9]")
    public WebElement editButton;

    @FindBy(xpath = "(//h4/a)[1]")
    public WebElement firstStudentInList;

    @FindBy(xpath = "//label[.='Student ID']/../input")
    public WebElement studentIDinputSearch;

    @FindBy(xpath = "//a[@class='btn btn-success btn-block mt-4 mb-2']")
    public WebElement searchButton;



   public WebElement studentFirstNameLocator(String name){
        return Driver.getDriver().findElement(By.xpath("//a[.='"+ name + "']"));
    }
}
