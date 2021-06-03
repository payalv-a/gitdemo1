package com.stepdef;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class logindatastepdef {
	
	@Given("^User is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
	   System.out.println("Displayed Home Page");
	}

	@When("^User enters following userid and password$")
	public void user_enters_following_userid_and_password(DataTable table) throws Throwable {
	    List<List<String>> data=table.raw();
	    for(List<String> str:data) {
	    	for(String str1:str) {
	    		System.out.println("Data :    "+str1);
	    	}
	    }
	}

	@Then("^User should be able to login with username and password$")
	public void user_should_be_able_to_login_with_username_and_password() throws Throwable {
	   System.out.println("Displayed First Page");
	}
}
