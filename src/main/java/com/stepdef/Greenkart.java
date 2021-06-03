package com.stepdef;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import AutomationBdd.autod.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import pageobj.Checkout;
import pageobj.HomePage;

@RunWith(Cucumber.class)
public class Greenkart extends Base{
//	public  WebDriver driver;
	HomePage h;
	Checkout c;
	
	@Given("^user is on greenkart landing page$")
	public void user_is_on_greenkart_landing_page() throws Throwable {
		  driver=Base.getDriver();
	}

	@When("^user enters (.+) in search bar$")
	public void user_enters_in_search_bar(String arg1) throws Throwable {
	     h=new HomePage(driver);
	     h.getSearch().sendKeys(arg1);   
	}

	@And("^click on Search Button$")
	public void click_on_Search_Button() throws Throwable {
		h.buttonS().click();
   }
	
	@Then("^results for \"([^\"]*)\" is displayed on Screen$")
	public void results_for_is_displayed_on_Screen(String arg1) throws Throwable {
		Assert.assertTrue(h.vres().getText().contains(arg1));
    	 System.out.println("Searched product successfully displayed on screen" +arg1);
		 driver=Base.teardown();
		 Thread.sleep(1000);
	}
	
	   @And("^add products added to cart$")
	    public void add_products_added_to_cart() throws Throwable {
	      h.increa().click();
	      h.addp().click();
     }

	    @And("^user proceed to checkout page$")
	    public void user_proceed_to_checkout_page() throws Throwable {
	    	c=new Checkout(driver);
	    	c.carticon().click();
	    	c.proceedtocart().click();
	    	Thread.sleep(1000);
     
	    }
	        
	    @Then("^verify added item (.+) displayed on checkout page$")
	    public void verify_added_item_displayed_on_checkout_page(String name) throws Throwable {
	    	Assert.assertTrue(c.namev().getText().contains(name));
	    	System.out.println("Verified added Item Successfully" +name);
//	    	Assert.assertTrue(driver.findElement(By.xpath("//p[@class='product-name']")).getText().contains(name));
	    	Thread.sleep(10000);
	    	driver=Base.teardown();
	    }
	    
	  
/*	    @Then("^verify added item \"([^\"]*)\" displayed on checkout page$")
	    public void verify_added_item_something_displayed_on_checkout_page(String strArg1) throws Throwable {
	    	Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
	    	Thread.sleep(10000);
	    	driver=Base.teardown();
	    } */ 
	    
  }