Feature: Sign up in losestudiantes
    As an user I want to sign up in losestudiantes website in order to rate teachers

Scenario: Sign up failed with wrong inputs
    Given I go to losestudiantes home screen
    When I open the login screen
    And I enter my name lastname and select my program
    And I fill the sign up form with <email> and <password>
    And I accept terms and conditions
    And I try to signup
    Then I expect to see <error>

    Examples:
      | email                        | password | error                      |
      |                              | 12345678 | Ingresa tu correo          |
      | miso@gmail.com               |          | Ingresa una contraseña     |
      | correo                       | 12345678 | Ingresa un correo valido   |
      | miso@gmail.com               | 1234     | La contraseña debe ser     | 

Scenario: Sign up failed terms and condition
    Given I go to losestudiantes home screen
    When I open the login screen
    And I enter my name lastname and select my program
    And I fill the sign up form with miso@gmail.com and 12345678
    And I try to signup
    Then I expect to see Debes aceptar

Scenario: Sign up failed existing account
    Given I go to losestudiantes home screen
    When I open the login screen
    And I enter my name lastname and select my program
    And I fill the sign up form with ja.silva11@uniandes.edu.co and 12345678
    And I accept terms and conditions
    And I try to signup
    Then I expect to see error in modal