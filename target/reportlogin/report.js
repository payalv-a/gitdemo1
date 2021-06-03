$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logdata.feature");
formatter.feature({
  "line": 1,
  "name": "Login application with data",
  "description": "",
  "id": "login-application-with-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 288100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "login to account",
  "description": "",
  "id": "login-application-with-data;login-to-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters following userid and password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "abc",
        "A123"
      ],
      "line": 8
    },
    {
      "cells": [
        "xyz",
        "X123"
      ],
      "line": 9
    },
    {
      "cells": [
        "stz",
        "S123"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login with username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "logindatastepdef.user_is_on_Home_page()"
});
formatter.result({
  "duration": 154969000,
  "status": "passed"
});
formatter.match({
  "location": "logindatastepdef.user_enters_following_userid_and_password(DataTable)"
});
formatter.result({
  "duration": 822000,
  "status": "passed"
});
formatter.match({
  "location": "logindatastepdef.user_should_be_able_to_login_with_username_and_password()"
});
formatter.result({
  "duration": 51400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login to application",
  "description": "\r\n//Background: Repeative Steps\r\n//Given user is on Home page\r\n//And user enters userid and password",
  "id": "login-to-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "login to account",
  "description": "",
  "id": "login-to-application;login-to-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters userid \"pooja\" and password \"A123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user navigates to first page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdef.Home_page()"
});
formatter.result({
  "duration": 127100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pooja",
      "offset": 20
    },
    {
      "val": "A123",
      "offset": 41
    }
  ],
  "location": "loginstepdef.user_enters_userid_and_password(String,String)"
});
formatter.result({
  "duration": 1968300,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.click_SubmitButton()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.first_page()"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Open New tab",
  "description": "",
  "id": "login-to-application;open-new-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user enters userid and password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click On Privacy Button as \"Privacy\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user should be navigate to Privacy Details page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdef.Home_page()"
});
formatter.result({
  "duration": 92500,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.userid_password()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 33
    }
  ],
  "location": "loginstepdef.user_click_on_privacy_button(String)"
});
formatter.result({
  "duration": 86300,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.privacy_page()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "sign up",
  "description": "",
  "id": "login-to-application;sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "click on \"Signup Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "signup form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user should be entre following madatory details to create account",
  "rows": [
    {
      "cells": [
        "Priya",
        "P2345",
        "india",
        "7654389"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdef.Home_page()"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signup Link",
      "offset": 10
    }
  ],
  "location": "loginstepdef.clickOn(String)"
});
formatter.result({
  "duration": 88700,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.signupFormIsDisplayed()"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.userShouldBeEntreFollowingMadatoryDetailsToCreateAccount(DataTable)"
});
formatter.result({
  "duration": 188900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "login to account",
  "description": "",
  "id": "login-to-application;login-to-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user login with userid \u003cUserid\u003e and password \u003cPwd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user navigates to first page",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "login-to-application;login-to-account;",
  "rows": [
    {
      "cells": [
        "Userid",
        "Pwd"
      ],
      "line": 43,
      "id": "login-to-application;login-to-account;;1"
    },
    {
      "cells": [
        "Apurve",
        "Ap123"
      ],
      "line": 44,
      "id": "login-to-application;login-to-account;;2"
    },
    {
      "cells": [
        "Kshitija",
        "KS345"
      ],
      "line": 45,
      "id": "login-to-application;login-to-account;;3"
    },
    {
      "cells": [
        "Komal",
        "K0987V"
      ],
      "line": 46,
      "id": "login-to-application;login-to-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "login to account",
  "description": "",
  "id": "login-to-application;login-to-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user login with userid Apurve and password Ap123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user navigates to first page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdef.Home_page()"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apurve",
      "offset": 23
    },
    {
      "val": "Ap123",
      "offset": 43
    }
  ],
  "location": "loginstepdef.user_login_with_userid1_and_password1(String,String)"
});
formatter.result({
  "duration": 125500,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.click_SubmitButton()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.first_page()"
});
formatter.result({
  "duration": 63700,
  "status": "passed"
});
formatter.before({
  "duration": 74400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "login to account",
  "description": "",
  "id": "login-to-application;login-to-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user login with userid Kshitija and password KS345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user navigates to first page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdef.Home_page()"
});
formatter.result({
  "duration": 115300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kshitija",
      "offset": 23
    },
    {
      "val": "KS345",
      "offset": 45
    }
  ],
  "location": "loginstepdef.user_login_with_userid1_and_password1(String,String)"
});
formatter.result({
  "duration": 126700,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.click_SubmitButton()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.first_page()"
});
formatter.result({
  "duration": 37700,
  "status": "passed"
});
formatter.before({
  "duration": 71300,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "login to account",
  "description": "",
  "id": "login-to-application;login-to-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user login with userid Komal and password K0987V",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user navigates to first page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdef.Home_page()"
});
formatter.result({
  "duration": 65400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Komal",
      "offset": 23
    },
    {
      "val": "K0987V",
      "offset": 42
    }
  ],
  "location": "loginstepdef.user_login_with_userid1_and_password1(String,String)"
});
formatter.result({
  "duration": 84700,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.click_SubmitButton()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdef.first_page()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
});