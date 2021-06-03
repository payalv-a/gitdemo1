package com.stepdef;

import cucumber.api.java.After;
import cucumber.api.java.Before;

// hooks used for multiple application.
public class Hooks {
	
	@Before("@Regtest")
	public void beforevalidation()
	{
	System.out.println("Regresion before Hook");	
	}

	/*	@After("@Smoketest")
	public void aftervalidation()
	{
		System.out.println("Regresion after Hook");
	}*/
}
