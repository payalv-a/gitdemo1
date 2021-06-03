Feature: login to application

//Background: Repeative Steps
//Given user is on Home page
//And user enters userid and password

@Smoketest
Scenario: login to account
Given user is on Home page
And user enters userid "pooja" and password "A123"
When click on Submit Button
Then user navigates to first page

Scenario: Open New Page
Given user is on Home page
And user enters userid "sonalika" and password "S123"
When user click On Profile Button
Then user should be navigate to Profile Details page

@Regtest
Scenario: Open New tab 
Given user is on Home page
And user enters userid and password
When user click On Privacy Button as "Privacy"
Then user should be navigate to Privacy Details page

@Smoketest
Scenario: sign up
Given user is on Home page
When click on "Signup Link"
And signup form is displayed
Then user should be entre following madatory details to create account
|Priya|P2345|india|7654389|

@Regtest
Scenario Outline: login to account
Given user is on Home page
And user login with userid <Userid> and password <Pwd>
When click on Submit Button
Then user navigates to first page

Examples:
|Userid  | Pwd  |
|Apurve  |Ap123 |
|Kshitija|KS345 |
|Komal   |K0987V|

