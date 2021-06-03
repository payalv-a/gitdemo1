Feature: access greenkart application

Scenario: login to account
Given user is on greenkart landing page
When user enters Brocolli in search bar
And click on Search Button
Then results for "Brocolli" is displayed on Screen


#Scenario Outline: Selected product move to checkout 
#Given user is on greenkart landing page
#When user enters <Name> in search bar
#And click on Search Button
##Then results for <Name> is displayed on Screen
#And add products added to cart
#And user proceed to checkout page
#Then verify added item <Name> displayed on checkout page
#
#Examples:
#|Name       |
#|Cauliflower|
#|Mushroom   |


