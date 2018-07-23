function RegistrationFactory(stored) {
  //declaring my map
  var regList = stored || {};

  var validTags = ['CA', 'CY', 'CJ', 'CF'];

  //function to add valid variable to my map
  function addRegistration(registNo) {

    let tag = registNo.substring(0, 2).trim().toUpperCase().replace(' ', '');
    if (registNo != '' && validTags.includes(tag)) {
      registNo = registNo.toUpperCase();
      //creating a nested if statement to add  the undefined
      if (regList[registNo] === undefined) {
        regList[registNo] = 0;
      }

      return registNo;
    }
    return false;
  }

  //returning my map
  function getMap() {
    return regList;
  }
  // creating an array to push string of the entered tags only
  function filterBy(tag) {
    let filtered = [];
    let registrations = Object.keys(regList);
    if (tag === "ALL") {
      return registrations;
    }
    //looping on my strings after they converted
    for (var i = 0; i < registrations.length; i++) {

      if (registrations[i].startsWith(tag)) {
        filtered.push(registrations[i]);
      }

    }
    return filtered;
  }


  return {
    addRegistration,
    getMap,
    filterBy


  }

}
