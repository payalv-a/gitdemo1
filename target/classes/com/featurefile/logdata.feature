Feature: Login application with data

@Regtest
  Scenario: login to account
    Given User is on Home page
    When User enters following userid and password
      | Username | Password |
      | abc      | A123     |
      | xyz      | X123     |
      | stz      | S123     |
    Then User should be able to login with username and password
