package cucumber.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/main/java/com/featurefile/logdata.feature"},
glue={"com.stepdef"},
//dryRun=true,
monochrome=true
)

public class logdrunner {

}
