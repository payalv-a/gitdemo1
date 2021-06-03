package pageobj;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {
	
public  WebDriver driver;
	
	public HomePage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	By search=By.xpath("//input[@type='search']");
	By sbutton=By.xpath("//button[@class='search-button']");
	By increament=By.xpath("//a[@class='increment']");
	By proadd=By.xpath("//button [text()='ADD TO CART']");	
	By vegres=By.cssSelector("h4.product-name");
	
	public WebElement getSearch()
	{
		return driver.findElement(search);
	}
    
	public WebElement buttonS()
	{
		return driver.findElement(sbutton);
	}
	
	public  WebElement increa()
	{
		return driver.findElement(increament);
		
	}
	
	public  WebElement addp()
	{
		return driver.findElement(proadd);
		
	}
	
	public  WebElement vres()
	{
		return driver.findElement(vegres);
		
	}


}
