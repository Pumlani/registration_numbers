function RegistrationFactory(stored) {

  var regList = stored || {};
  var validTags = ['CA', 'CY', 'CJ', 'CF'];
//  var reg = '';
  function addRegistration(registNo) {
    // CA 3467
    let tag = registNo.substring(0, 2).trim();
    if (registNo != '' && validTags.includes(tag)) {

      if (regList[registNo] === undefined) {
        regList[registNo] = 0;
      }
      //reg = registNo;

      return registNo;
    }
    return false;
  }


  function getMap() {
    return regList;
  }


  return {
    addRegistration,
    getMap


  }

}
