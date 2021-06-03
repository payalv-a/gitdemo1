package com.stepdef;

import java.util.List;

import com.transform.TransformData;

import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginstepdef {
	
	
	@Given("^user is on Home page$")
	public void Home_page() throws Throwable {
	System.out.println("Displayed Home Page");
	
}
	
	@And("^user enters userid and password$")
	public void userid_password() throws Throwable {
		System.out.println("Enter UserId & Password");
	}
	
	 @And("^user enters userid \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_enters_userid_and_password(String strArg1, String strArg2) throws Throwable {
	        System.out.println(strArg1);
	        System.out.println(strArg2);
	 }

	@When("click on Submit Button$")
	public void click_SubmitButton() throws Throwable {
	 System.out.println("Click on Submit Button");
	}

    @Then("^user navigates to first page$")
    public void first_page() throws Throwable {
    	System.out.println("Displayed First Page");    	
    }
   
	@When("^user click On Profile Button$")
	public void click_ProfileButton() throws Throwable {
	System.out.println("Select Profile Tab");
	}

    @Then("^user should be navigate to Profile Details page$")
    public void profile_page() throws Throwable  {
    	System.out.println("Profile Page Displayed");
    }
    
    @When("^user click On Privacy Button as \"([^\"]*)\"$")
    public void user_click_on_privacy_button(@Transform(TransformData.class)String strArg1) throws Throwable {
    	System.out.println(strArg1);
	}

    @Then("^user should be navigate to Privacy Details page$")
    public void privacy_page() throws Throwable  {
    	System.out.println("Privacy Page Displayed");
    }
    
    @When("^click on \"([^\"]*)\"$")
    public void clickOn(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @And("^signup form is displayed$")
    public void signupFormIsDisplayed() throws Throwable {
        System.out.println("Account creation form is displayed");
    }

    @Then("^user should be entre following madatory details to create account$")
    public void userShouldBeEntreFollowingMadatoryDetailsToCreateAccount(DataTable table) throws Throwable {
       List<List<String>> obj=table.raw();
       System.out.println(obj.get(0).get(0));
       System.out.println(obj.get(0).get(1));
       System.out.println(obj.get(0).get(2));
       System.out.println(obj.get(0).get(3));
    }
    
    @And("^user login with userid (.+) and password (.+)$")
    public void user_login_with_userid1_and_password1(String userid, String pwd) throws Throwable {
        System.out.println("Login Id : "+userid);
        System.out.println("Login Password : "+pwd);
    }

}
