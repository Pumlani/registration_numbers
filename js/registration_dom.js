
var inputReg = document.querySelector('.registrType');
 var filterElem = document.querySelector(".town-dropdown");
 var addBtnElem = document.querySelector('.add-btn');
 var alert = document.querySelector('.alert');
 var displayElem = document.querySelector(".display-area");

var storage = localStorage.getItem("plates") ? JSON.parse(localStorage.getItem("plates")) : {};
var regObj = RegistrationFactory(storage);


function showAlert(msg, class_name) {
  alert.classList.remove("alert-success");
  alert.classList.remove("alert-danger");

  alert.style.display = "block";
  alert.classList.add(class_name);
  alert.innerHTML = msg;
}

function createReg(num){
  let li = document.createElement("li");
  li.textContent = num;
  li.className = "regNum";
  displayElem.appendChild(li);

}



addBtnElem.addEventListener('click', function() {
  var regNo = regObj.addRegistration(inputReg.value);

  if (regNo){
    createReg(regNo);
    localStorage.setItem("plates", JSON.stringify(regObj.getMap()));
    showAlert("Registration number added successfully", "alert-success");
    return;
  }
  showAlert("Invalid registration number", "alert-danger");
});


document.addEventListener('DOMContentLoaded', function(){
  let regList = Object.keys(regObj.getMap());

  for(var i=0; i<regList.length;i++){
    createReg(regList[i]);
  }
})
