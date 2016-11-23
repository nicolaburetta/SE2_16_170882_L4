var formVisible = document.getElementById("form2").style.display == 'none' ? false : true;

function showHideForm() {
  var form = document.getElementById('form2');
  if (formVisible) {
    form.style.display = 'none';
    formVisible = false;
  } else {
    form.style.display = 'block';
    formVisible = true;
  }
}

function checkFields() {
  var name = document.getElementById('empName').value;
  var surname = document.getElementById('empSurname').value;
  var level = document.getElementById('empLevel').value;
  var salary = document.getElementById('empSalary').value;
  
  if (name == '' || surname == '' || level == '' || salary == '') {
    alert('Sono richiesti tutti i campi.\nSe il campo id viene lasciato vuoto, verrà assegnato il primo disponibile.');
    return false;
  }
  
  return true;
}