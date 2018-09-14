Feature: Use routes

  Scenario: As a user I want to be able to open the routes section and see its stops
    Given I press "Rutas"
    Then I press "Rutas"
    Then I press "1"
    Then I press "CAN"
    Then I should see "B16"