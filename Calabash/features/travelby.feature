Feature: Use travel by

  Scenario: As a user I want to be able to use the travel by section by selecting the stations from a list
    Given I press "Rutas"
    When I press "Viajar en Transmi, SITP o Taxi"
    Then I press "Troncales"
    Then I press "Troncales"
    Then I press "AutoNorte"
    Then I press "Calle 85"
    When I press "Eje Ambiental"
    Then I press "Las Aguas"
    Then I press "CAMBIAR"
    Then I press "6"
    Then I press "ACEPTAR"
    Then I should see "Recomendación 1"

  Scenario: As a user I want to be able to use the travel by section by selecting the stations on the map
    Given I press "Viajar en Transmi, SITP o Taxi"
    Then I press "Google maps"
    Then I press "Seleccionar"
    When I swipe left
    And I press "Seleccionar"
    Then I should see "No se encontraron rutas con los criterios específicados"

  Scenario: As a user I want to be able to use the travel by section by using search
    Given I press "Viajar en Transmi, SITP o Taxi"
    When I press "Punto de origen"
    Then I enter "Calle 12" into input field number 1
    Then I press "Calle 127"
    When I press "Punto de destino"
    Then I enter "Universidade" into input field number 1
    Then I press "Universidades"
    Then I press image button number 4
    Then I press "CAMBIAR"
    Then I press "6"
    Then I press "ACEPTAR"
    Then I should see "Recomendación 1"