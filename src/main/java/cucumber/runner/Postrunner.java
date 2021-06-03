package cucumber.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/main/java/com/featurefile"},
glue={"com.stepdef"},
monochrome=true, tags=("@Regtest,@Smoketest"),
snippets= SnippetType.CAMELCASE,
plugin= {"pretty","json:target/loginreport.json","html:target/reportlogin","junit:target/cukes.xml"})

public class Postrunner {

}
