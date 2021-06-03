package cucumber.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/main/java/com/featurefile/green.feature"},
glue={"com.stepdef"})


public class greenkartrunner {

}
