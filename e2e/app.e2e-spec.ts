
describe('KLM Checkin form validation spec suit', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should enable submit button', function () {   
    element(By.name('bookingcode')).sendKeys('BKG123');
    element(By.name('familyname')).sendKeys('rathore');
    expect(element(by.className('checkin-submit-btn')).isEnabled()).toBe(true);
  });

  it('should disable submit button with blank Booking code', function () {   
    element(By.name('bookingcode')).sendKeys('');
    element(By.name('familyname')).sendKeys('rathore');
    expect(element(by.className('checkin-submit-btn')).isEnabled()).toBe(false);
  });

    it('should disable submit button with blank family code', function () {   
    element(By.name('bookingcode')).sendKeys('BKG123');
    element(By.name('familyname')).sendKeys('');
    expect(element(by.className('checkin-submit-btn')).isEnabled()).toBe(false);
  });

   it('should disable submit button with both blank fields', function () {   
    element(By.name('bookingcode')).sendKeys('');
    element(By.name('familyname')).sendKeys('');
    expect(element(by.className('checkin-submit-btn')).isEnabled()).toBe(false);
  });


});


describe('KLM Checkin form validation error message spec suit', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should show error message for blank Booking code', function () {   
    element(By.name('bookingcode')).click();
    element(By.name('familyname')).click();
    element(By.name('familyname')).sendKeys('rathore');
    expect(element(by.name('bookingcodeerrormsg')).isPresent()).toBe(true);
  });

    it('should show error message for blank family name', function () {   
    element(By.name('bookingcode')).sendKeys('BKG123');
    element(By.name('familyname')).click();
    element(By.name('bookingcode')).click();
    expect(element(by.name('familynameerrormsg')).isPresent()).toBe(true);
  });



});





