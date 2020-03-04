package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "json:target/cucumber-reports/Cucumber.json",
                "junit:target/cucumber-reports/Cucumber.xml",
                "html:target/cucumber-reports"},
        features = "src/test/resources/features/",
        glue = "step_definitions",
        dryRun = true,
        tags = "@COD-274"   // we can pass more than one tag, ex: tags = "@smokeTest, @regressionTest"
)


public class CukesRunner {

}
