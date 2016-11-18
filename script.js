var isFormVisible = false;

function showForm() {
  var form = document.getElementById("form");
  form.style.display = "block";
  isFormVisible = true;
}

function hideForm() {
  var form = document.getElementById("form");
  form.style.display = "none";
  isFormVisible = false;
}

function changeFormVisible() {
  if (isFormVisible)
    hideForm();
  else
    showForm();
}