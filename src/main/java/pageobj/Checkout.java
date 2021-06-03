package pageobj;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Checkout {
	
	public WebDriver driver;
	
	By cicon=By.xpath("//a[@class='cart-icon']");
	By protoch=By.xpath("//button[text()='PROCEED TO CHECKOUT']");
	By vname=By.xpath("//p[@class='product-name']");
	
	public Checkout(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public WebElement carticon()
	{
		return driver.findElement(cicon);
	}
	
	public WebElement proceedtocart()
	{
		return driver.findElement(protoch);
	}
	
	public WebElement namev()
	{
		return driver.findElement(vname);
	}
   
}
