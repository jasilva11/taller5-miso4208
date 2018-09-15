Feature: Use routes

  Scenario: As a user I want to be able to open the routes section and see its stops
    Given I press "Rutas"
    Then I press "Rutas"
    Then I press "1"
    Then I press "CAN"
    Then I should see "B16"

  Scenario: As a user I want to use taximetro feature
    Given I press "Rutas"
    When I swipe left
    And I press "Taximetro"
    Then I enter "100" into input field number 1
    Then I should see "$8.900"
    When I press "Noct./Fest."
    Then I should see "$10.900"
    When I press "Terminal"
    Then I should see "$11.400"
    When I press "Aeropuerto"
    Then I should see "$15.500"

  Scenario: As a user I want to look up for a point to charge my cart
    Given I press "Rutas"
    When I press "Puntos de Recarga"    
    And I press image button number 2
    Then I enter "unila" into input field number 1
    Then I should see "Centro Comercial Unilago"