Feature: Login to application

    Scenario: Valid login
        Given I open login page
        When I submit username
        When I submit password
        Then I should see the product with name "Sauce Labs Backpack"
# Then I should close test