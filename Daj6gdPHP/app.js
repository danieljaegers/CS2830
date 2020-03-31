$("select").on("change", function(e) {
  $("#formContainer form").hide();
  $("#" + this.value).show();
});

// https://www.w3schools.com/jsref/met_form_reset.asp
function clearForm(param) {
  param.parentElement.reset();
}
