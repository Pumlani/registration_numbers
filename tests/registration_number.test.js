describe('The greetings function Tests', function() {

  it('should return false if registration is empty.', function() {
    var registrationObj = RegistrationFactory();
    assert.deepEqual(registrationObj.addRegistration(""), false)
  });
  it('should return true if registration is valid. ', function() {
    var registrationObj = RegistrationFactory();
    var registNo = "CA 1827"
    assert.deepEqual(registrationObj.addRegistration(registNo), true)
  });


});
