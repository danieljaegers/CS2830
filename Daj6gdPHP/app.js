$(document).ready(function() {
  // Reset the select to the previously selected option when returning from the back button
  if ($("select").val() !== "") {
    $("#" + $("select").val()).show();
  }

  $("select").on("change", function(e) {
    if ($(this).val() !== "") {
      $("#" + $(this).val())
        .show()
        .siblings()
        .hide();
    }
  });
});

// https://www.w3schools.com/jsref/met_form_reset.asp
function clearForm(param) {
  param.parentElement.reset();
}
