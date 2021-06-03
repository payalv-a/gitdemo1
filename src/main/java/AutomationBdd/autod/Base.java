package AutomationBdd.autod;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	public static Properties properties;
	
@Before	
	public static WebDriver getDriver() throws IOException
	{
	   properties=new Properties();
	   FileInputStream fis=new FileInputStream("D:\\Users\\pvijaykar\\eclipse-workspace\\autod\\src\\test\\java\\AutomationBdd\\autod\\global.properties");
	   properties.load(fis);
	  
	   
		System.setProperty("webdriver.chrome.driver","D:\\softwares\\chromedriver.exe");
	    driver=new ChromeDriver();
	  
	    driver.get(properties.getProperty("url"));
	    
	        driver.manage().window().maximize();
	  		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	  		driver.manage().deleteAllCookies();
	    
        return driver;
      }

@After
    public static WebDriver teardown()
   {
	  driver.close();
	  return driver;
   }

}
