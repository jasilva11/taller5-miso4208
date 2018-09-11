//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });

  Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });

  When('I fill a right email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('ja.silva11@uniandes.edu.co');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('12345678')
  });

  Then('I am logged in', () => {
    var count = browser.elements('.aviso.alert.alert-danger').value.length;
    expect(count).to.equal(0);
  });

  When(/^I fill the sign up form with (.*) and (.*)$/ , (email, password) => {
    var cajaSignUp = browser.element('.cajaSignUp');

    var mailInput = cajaSignUp.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaSignUp.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });

  When('I enter my name lastname and select my program', () => {
    var cajaSignUp = browser.element('.cajaSignUp');

    var mailInput = cajaSignUp.element('input[name="nombre"]');
    mailInput.click();
    mailInput.keys('Jose');

    var passwordInput = cajaSignUp.element('input[name="apellido"]');
    passwordInput.click();
    passwordInput.keys('Silva');

    var programSelect = cajaSignUp.element('select[name="idPrograma"]');
    programSelect.selectByValue('12');
  });

  When('I accept terms and conditions', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('input[name="acepta"]').click()
  });

  When('I try to signup', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click()
  });

  Then('I expect to see error in modal', () => {
    browser.waitForVisible('.sweet-alert ', 5000);
    var modal = browser.element('.sweet-alert ');
    var alertText = modal.element('h2').getText();
    expect(alertText).to.include('Ocurrió un error');
  });
});